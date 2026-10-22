import { motion } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#FAF5F6]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6B8C9]/35 blur-3xl"
        animate={{ scale: [0.85, 1.08, 0.92], opacity: [0.45, 0.75, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[18%] h-40 w-40 rounded-full bg-[#E98BA8]/20 blur-3xl"
        animate={{ x: [0, 36, -12, 0], y: [0, 24, 44, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[16%] h-52 w-52 rounded-full bg-[#F4C9D5]/60 blur-3xl"
        animate={{ x: [0, -28, 18, 0], y: [0, -22, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle background grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          className="absolute -inset-16 rounded-full border border-[#C84C6D]/15"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0.2, 0.65, 0.2], scale: [0.82, 1.12, 0.82] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -inset-8 rounded-full border border-[#C84C6D]/25"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: [0.25, 0.8, 0.25], scale: [0.88, 1.08, 0.88] }}
          transition={{ duration: 2.8, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Studio wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.05em] text-[#22181C] font-sans">
            Blossom{" "}
            <span className="font-[var(--font-display)] italic font-medium text-[#C84C6D]">
              Shoots
            </span>
          </h2>
        </motion.div>

        {/* Progress line */}
        <motion.div
          className="relative h-1.5 w-60 overflow-hidden rounded-full bg-[#FCE7EC]/90 shadow-sm shadow-[#C84C6D]/10"
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div
            className="relative h-full rounded-full bg-gradient-to-r from-[#C84C6D] via-[#E98BA8] to-[#C84C6D]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={onComplete}
          >
            <motion.span
              className="absolute inset-y-0 right-0 w-16 bg-white/70 blur-sm"
              animate={{ x: [-24, 24] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative -mt-3 h-8 w-8 rounded-full border-2 border-[#F6B8C9] border-t-[#C84C6D]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          aria-label="Loading"
          role="status"
        >
          <span className="absolute inset-2 rounded-full bg-[#C84C6D]/20" />
        </motion.div>
      </div>
    </motion.div>
  )
}
