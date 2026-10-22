import { motion } from "framer-motion"
import { ArrowRight, Camera, Heart, ShieldCheck, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/BookingDialog"
import { BlurText } from "@/components/ui/blur-text"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Copy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Studio Badge — Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/70 px-4 py-1.5 text-xs font-medium text-[#C84C6D] shadow-2xs backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C84C6D] animate-pulse" />
              <span className="tracking-wider uppercase font-semibold text-[11px]">Blossom Shoots</span>
              <span className="h-1 w-1 rounded-full bg-[#C84C6D]/40" />
              <span className="text-[#6E5D64] font-normal">Houston, TX</span>
            </div>

            {/* Display H1 with ReactBits BlurText Entrance */}
            <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-[-0.04em] text-[#22181C] leading-[0.96] font-sans">
              <BlurText text="Welcome to" delay={0.06} />{" "}
              <span className="font-[var(--font-display)] italic font-medium tracking-[-0.025em] text-[#C84C6D]">
                <BlurText text="Blossom Shoots" delay={0.06} />
              </span>
            </h1>

            {/* Manifesto Body */}
            <p className="max-w-xl text-base sm:text-lg text-[#6E5D64] leading-relaxed font-normal">
              We understand the significance of your special moments. From the heartfelt vows exchanged at a wedding to the laughter shared during a family portrait session, every memory is precious, and it deserves to be preserved in stunning detail. As you navigate through our website, immerse yourself in the world of Blossom Shoots. Browse through our portfolio, where each image tells a unique story of love, joy, and connection. Whether it's the radiant glow of a bride on her wedding day or the innocence captured in a child's laughter, our photographs speak volumes, transcending time and space.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <BookingDialog
                trigger={
                  <Button
                    size="lg"
                    className="bg-[#C84C6D] hover:bg-[#B33D5B] text-white rounded-full px-8 h-12 text-sm font-semibold tracking-wide shadow-md shadow-[#C84C6D]/20 gap-2 cursor-pointer"
                  >
                    <span>Book Session</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                }
              />

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-rose-200/80 bg-white/70 hover:bg-rose-50/90 text-[#22181C] hover:text-[#C84C6D] rounded-full px-7 h-12 text-sm font-medium tracking-wide shadow-2xs backdrop-blur-sm cursor-pointer"
              >
                <Link to="/portfolio" className="flex items-center gap-1.5">
                  <span>Explore Portfolio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Editorial Image Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Editorial Image Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-rose-200/60 bg-white/50 p-2.5 shadow-xl shadow-[#22181C]/5 backdrop-blur-md">
                <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-rose-50">
                  <img
                    src="/images/real/hero-portrait.webp"
                    alt="Fine Art Portrait — Blossom Shoots"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Editorial Caption Bar */}
                <div className="p-3 text-left flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#C84C6D] font-semibold">
                      Fine Art Atelier
                    </p>
                    <p className="text-sm italic text-[#6E5D64]">
                      Celebrations & Fine Art
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-mono border border-rose-200 rounded-full px-2.5 py-0.5 text-[#C84C6D] bg-rose-50/60">
                    Houston & Worldwide
                  </span>
                </div>
              </div>

              {/* Floating Accent Card (Preview) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-rose-200/80 bg-white/85 p-3 shadow-lg shadow-[#22181C]/5 backdrop-blur-md max-w-xs"
              >
                <div className="h-14 w-14 overflow-hidden rounded-xl bg-rose-50 shrink-0">
                  <img
                    src="/images/real/hero-accent.webp"
                    alt="Celebration Moments — Blossom Shoots"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-bold text-[#22181C]">Authentic Joy & Tradition</p>
                  <p className="text-[11px] text-[#6E5D64] leading-tight mt-0.5">
                    Preserving cultural milestones and unforgettable celebrations.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators — below hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-rose-200/50 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#6E5D64] font-medium">
              <Camera className="h-3.5 w-3.5 text-[#C84C6D]" />
              <span>Atelier Studio</span>
            </div>
            <p className="text-sm font-semibold text-[#22181C] mt-0.5">Private & Tailored</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#6E5D64] font-medium">
              <Heart className="h-3.5 w-3.5 text-[#C84C6D]" />
              <span>Style Direction</span>
            </div>
            <p className="text-sm font-semibold text-[#22181C] mt-0.5">Wardrobe Styling</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#6E5D64] font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-[#C84C6D]" />
              <span>Heirloom Prints</span>
            </div>
            <p className="text-sm font-semibold text-[#22181C] mt-0.5">Archival Retouching</p>
          </div>

          <div>
            <a
              href="https://g.page/r/CcKxanJ1lSZbEAI/review"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="flex items-center gap-1.5 text-xs text-[#C84C6D] font-medium group-hover:underline">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
                <span>5.0 Google Reviews</span>
              </div>
              <p className="text-sm font-semibold text-[#22181C] mt-0.5 flex items-center gap-1">
                Verified Reviews <ArrowRight className="h-3 w-3 text-[#C84C6D] transition-transform group-hover:translate-x-0.5" />
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
