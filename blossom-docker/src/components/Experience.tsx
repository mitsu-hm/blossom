import { motion } from "framer-motion"
import { Camera, Palette, Image as ImageIcon, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    step: "01",
    title: "Consultation & Styling",
    icon: Palette,
    description:
      "We begin with an intentional conversation about your vision, color palettes, and curated wardrobe choices from our atelier collection.",
  },
  {
    step: "02",
    title: "The Unhurried Session",
    icon: Camera,
    description:
      "Whether in our calm boutique studio or outdoors in golden evening light, our sessions are gentle, unhurried, and genuinely relaxing.",
  },
  {
    step: "03",
    title: "Artistic Retouching",
    icon: Sparkles,
    description:
      "Every selected image undergoes bespoke, natural color harmonization and fine art retouching to preserve true skin tones and soft light.",
  },
  {
    step: "04",
    title: "Heirloom Reveal",
    icon: ImageIcon,
    description:
      "Receive your private online gallery with full-resolution digital downloads and optional museum-grade linen albums and archival prints.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 bg-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="outline" className="border-rose-200 text-[#C84C6D] text-[10px] uppercase tracking-[0.2em] font-semibold bg-rose-50/70 backdrop-blur-sm">
            The Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans">
            An experience crafted for{" "}
            <span className="italic font-light text-[#C84C6D]">serenity and joy.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D64] font-normal max-w-xl mx-auto">
            From your initial inquiry to the moment you open your heirloom prints, we take care of every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="text-left space-y-4 p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-rose-100/80 shadow-xs hover:shadow-xl hover:border-[#C84C6D]/40 transition-all duration-300 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="italic text-2xl font-light text-[#C84C6D]">
                    {item.step}
                  </span>
                  <div className="h-10 w-10 rounded-2xl bg-rose-50 text-[#C84C6D] flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-lg font-bold text-[#22181C] font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6E5D64] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
