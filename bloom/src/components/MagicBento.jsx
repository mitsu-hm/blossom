import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

const DEFAULT_SPOTLIGHT_RADIUS = 280;
const DEFAULT_GLOW_COLOR = '45, 90, 61';
const MOBILE_BREAKPOINT = 768;

export const defaultPhotographyCards = [
  {
    image: '/images/real/wedding-1.webp',
    title: 'Eternal Wedding Vows',
    description: 'Documentary wedding storytelling capturing sacred promises and joyous tears.',
    label: 'Wedding Shoots',
    category: 'wedding',
  },
  {
    image: '/images/real/mehendi-1.webp',
    title: 'Mehendi & Sangeet Revelry',
    description: 'Intricate henna artistry, vibrant rhythmic dances, and spontaneous celebrations.',
    label: 'Mehendi & Sangeet',
    category: 'mehendi',
  },
  {
    image: '/images/real/couple-1.webp',
    title: 'Golden Hour Devotion',
    description: 'Candid couple portraiture bathed in the gentle warmth of sunset light.',
    label: 'Couple Shoots',
    category: 'couples',
  },
  {
    image: '/images/real/birthday-1.webp',
    title: 'Milestone Birthday Joy',
    description: 'Spirited birthday celebrations, cake cutting, and unposed smiles for all generations.',
    label: 'Birthday Parties',
    category: 'birthday',
  },
  {
    image: '/images/real/housewarming-1.webp',
    title: 'Housewarming Griha Pravesh',
    description: 'Documenting your sacred beginnings, new home sanctuary, and warm family blessings.',
    label: 'Housewarming Parties',
    category: 'housewarming',
  },
  {
    image: '/images/real/corporate-1.webp',
    title: 'Executive Gala & Summit',
    description: 'Sophisticated corporate symposium storytelling, keynote captures, and networking.',
    label: 'Corporate Events',
    category: 'corporate',
  },
];

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const BentoCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = false,
  onClick
}) => {
  const cardRef = useRef(null);
  const magnetismAnimationRef = useRef(null);

  const handleMouseLeave = () => {
    if (enableTilt && cardRef.current) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.35,
        ease: 'power2.out'
      });
    }

    if (enableMagnetism && cardRef.current) {
      if (magnetismAnimationRef.current) {
        magnetismAnimationRef.current.kill();
      }
      magnetismAnimationRef.current = gsap.to(cardRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseMove = e => {
    if (!cardRef.current || disableAnimations) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    if (enableTilt) {
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      gsap.to(cardRef.current, {
        rotateX,
        rotateY,
        duration: 0.12,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    }

    if (enableMagnetism) {
      const magnetX = (x - centerX) * 0.04;
      const magnetY = (y - centerY) * 0.04;
      if (magnetismAnimationRef.current) {
        magnetismAnimationRef.current.kill();
      }
      magnetismAnimationRef.current = gsap.to(cardRef.current, {
        x: magnetX,
        y: magnetY,
        duration: 0.25,
        ease: 'power2.out'
      });
    }
  };

  const handleClick = e => {
    if (onClick) onClick(e);
    if (!clickEffect || disableAnimations || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const maxDistance = Math.max(
      Math.hypot(x, y),
      Math.hypot(x - rect.width, y),
      Math.hypot(x, y - rect.height),
      Math.hypot(x - rect.width, y - rect.height)
    );

    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      width: ${maxDistance * 2}px;
      height: ${maxDistance * 2}px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(${glowColor}, 0.25) 0%, rgba(${glowColor}, 0.08) 35%, transparent 70%);
      left: ${x - maxDistance}px;
      top: ${y - maxDistance}px;
      pointer-events: none;
      z-index: 1000;
    `;

    cardRef.current.appendChild(ripple);

    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 1 },
      {
        scale: 1,
        opacity: 0,
        duration: 0.65,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
      }
    );
  };

  useEffect(() => {
    return () => {
      if (magnetismAnimationRef.current) {
        magnetismAnimationRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      style={style}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current || !enabled || disableAnimations) return;

    const grid = gridRef.current;
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: ${spotlightRadius * 2}px;
      height: ${spotlightRadius * 2}px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(${glowColor}, 0.12) 0%, rgba(${glowColor}, 0.03) 40%, transparent 70%);
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: 10;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = e => {
      if (!spotlightRef.current) return;

      const rect = grid.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
      ) {
        spotlightRef.current.style.opacity = '1';
        spotlightRef.current.style.left = `${mouseX}px`;
        spotlightRef.current.style.top = `${mouseY}px`;
      } else {
        spotlightRef.current.style.opacity = '0';
      }

      const cards = grid.querySelectorAll('.magic-bento-card');
      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const distance = Math.hypot(mouseX - cardCenterX, mouseY - cardCenterY);

        if (distance < spotlightRadius) {
          const intensity = Math.max(0, 1 - distance / spotlightRadius);
          updateCardGlowProperties(card, mouseX, mouseY, intensity, spotlightRadius);
        } else {
          card.style.setProperty('--glow-intensity', '0');
        }
      });
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }
      const cards = grid.querySelectorAll('.magic-bento-card');
      cards.forEach(card => {
        card.style.setProperty('--glow-intensity', '0');
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    grid.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      grid.removeEventListener('mouseleave', handleMouseLeave);
      if (spotlightRef.current) {
        spotlightRef.current.remove();
      }
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid = ({ children, gridRef }) => {
  return (
    <div className="card-grid" ref={gridRef}>
      {children}
    </div>
  );
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const MagicBento = ({
  cards = defaultPhotographyCards,
  textAutoHide = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = false,
  onCardClick
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <div className="bento-section w-full">
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {cards.map((card, index) => {
          const baseClassName = `magic-bento-card cursor-pointer ${textAutoHide ? 'magic-bento-card--text-autohide' : ''} ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''}`;
          const cardProps = {
            className: baseClassName,
            onClick: () => onCardClick && onCardClick(card),
            style: {
              '--glow-color': glowColor
            }
          };

          return (
            <BentoCard
              key={card.title || index}
              {...cardProps}
              disableAnimations={shouldDisableAnimations}
              glowColor={glowColor}
              enableTilt={enableTilt}
              clickEffect={clickEffect}
              enableMagnetism={enableMagnetism}
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="magic-bento-card__bg-image"
                />
              )}
              <div className="magic-bento-card__header">
                <div className="magic-bento-card__label">{card.label}</div>
                <div className="magic-bento-card__action">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              <div className="magic-bento-card__content">
                <h3 className="magic-bento-card__title">{card.title}</h3>
                <p className="magic-bento-card__description">{card.description}</p>
              </div>
            </BentoCard>
          );
        })}
      </BentoCardGrid>
    </div>
  );
};

export default MagicBento;
