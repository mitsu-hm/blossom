import { motion } from "framer-motion"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  animateBy?: "words" | "letters"
}

export function BlurText({
  text,
  className = "",
  delay = 0.05,
  animateBy = "words",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("")

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {el}&nbsp;
        </motion.span>
      ))}
    </span>
  )
}
