import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

import './Iridescence.css';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  // Gentle cursor attraction
  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.4 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 6.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.3 * uSpeed;

  // Fluid coordination values for fine-art palette mapping
  float t1 = sin(d * 1.2 + a * 0.7) * 0.5 + 0.5;
  float t2 = cos(a * 1.1 - d * 0.6 + uv.x * 0.4) * 0.5 + 0.5;
  float t3 = sin(uv.y * 1.3 + d * 0.8) * 0.5 + 0.5;

  // Curated Fine-Art Sakura Pink Palette (soft blush, rose mist, sakura blossom, deep petal depth)
  vec3 cBase = vec3(0.992, 0.945, 0.957);       // Soft blush canvas (#FDF2F5)
  vec3 cLightMist = vec3(0.988, 0.906, 0.925);   // Rose mist petal (#FCE7EC)
  vec3 cPetal = vec3(0.965, 0.792, 0.839);       // Sakura blossom tone (#F6CAD6)
  vec3 cDeepRose = vec3(0.784, 0.298, 0.427);    // Cherry blossom depth (#C84C6D)
  vec3 cChampagne = vec3(1.0, 0.96, 0.95);       // Pearlescent warmth

  // Layer fluid wave transitions
  vec3 col = mix(cBase, cLightMist, t1);
  col = mix(col, cPetal, t2 * 0.7);

  // Subtle cherry blossom rose depth in wave troughs
  float roseFold = smoothstep(0.60, 0.95, t1 * t2 + t3 * 0.25);
  col = mix(col, cDeepRose, roseFold * 0.28);

  // Pearlescent champagne highlight
  col = mix(col, cChampagne, (1.0 - t2) * 0.4);

  // Multiply by tint color
  col *= uColor;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({ color = [1, 1, 1], speed = 0.3, amplitude = 0.08, mouseReact = true, ...rest }) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(0.965, 0.969, 0.958, 1);

    let program;

    function resize() {
      const scale = 1;
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener('resize', resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId;

    function update(t) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight;
      mousePos.current = { x, y };
      if (program && program.uniforms && program.uniforms.uMouse) {
        program.uniforms.uMouse.value[0] = x;
        program.uniforms.uMouse.value[1] = y;
      }
    }

    if (mouseReact) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (mouseReact) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      ctn.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return <div ref={ctnDom} className="iridescence-container" {...rest} />;
}
