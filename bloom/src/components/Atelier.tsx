import { motion } from "framer-motion"
import { Quote, CheckCircle } from "lucide-react"

export function Atelier() {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait of Founder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Border Arch Frame */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-rose-200/80 bg-white/60 backdrop-blur-md p-3 shadow-xl shadow-[#22181C]/5">
                <div className="overflow-hidden rounded-[2rem] aspect-[3/4] bg-rose-50">
                  <img
                    src="/images/mrs-jha.webp"
                    alt="Mrs. Manisha Jha — Founder & Creative Director"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-[#22181C] font-sans">
                    Mrs. Manisha Jha
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-[#C84C6D] font-semibold mt-0.5">
                    CEO, Founder & Principal Artist
                  </p>
                </div>
              </div>

              {/* Decorative Quote Badge */}
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-[#C84C6D] text-white flex items-center justify-center shadow-lg shadow-[#C84C6D]/20">
                <Quote className="h-5 w-5" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Letter & Studio Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans leading-tight">
                Crafting timeless stories through{" "}
                <span className="italic font-light text-[#C84C6D]">the art of photography.</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#6E5D64] text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Welcome to Blossom Shoot Fine Arts. Photography has always been more than just a craft for me; it's a lifelong devotion. From the moment I picked up my first camera, I was captivated by the power it held to freeze moments in time, to tell stories without words, and to evoke emotions that words often fail to express.
              </p>
              <p>
                The vision for Blossom Shoot Fine Arts took shape during a quiet photo walk through a blooming garden. Surrounded by the delicate grace of nature, I realized that true beauty lies in the quiet, fleeting transitions of our lives.
              </p>
            </div>

            {/* Studio Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-rose-100/80">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-rose-100/80">
                <CheckCircle className="h-5 w-5 text-[#C84C6D] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-[#22181C]">Personalized Approach</h5>
                  <p className="text-xs text-[#6E5D64] mt-0.5">
                    We forge genuine connections with our families, bringing your vision to life through unhurried sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-rose-100/80">
                <CheckCircle className="h-5 w-5 text-[#C84C6D] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-[#22181C]">Archival Quality</h5>
                  <p className="text-xs text-[#6E5D64] mt-0.5">
                    Meticulously color-graded and retouched for timeless prints, albums, and digital heirloom galleries.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="italic text-[#6E5D64] text-sm font-light">
                "Every memory is precious, and it deserves to be preserved in stunning detail."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
