import { motion } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF5F6]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtle background grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img
            src="/images/logo.webp"
            alt="Blossom Shoot Fine Arts"
            className="h-16 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none"
            }}
          />
        </motion.div>

        {/* Studio wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#22181C] font-sans">
            Blossom Shoot Fine Arts
          </h2>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C84C6D] font-semibold mt-1">
            Bespoke Photography Atelier
          </p>
        </motion.div>

        {/* Minimal progress line */}
        <motion.div className="w-52 h-1 bg-[#FCE7EC] overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-[#C84C6D] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={onComplete}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
