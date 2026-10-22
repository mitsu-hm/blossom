import { motion } from "framer-motion"
import { Sparkles, Music, Heart, Calendar, ArrowRight, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/BookingDialog"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export function MehendiSangeet() {
  const highlights = [
    {
      title: "Intricate Henna Artistry",
      desc: "Delicate macro captures of bridal mehendi details, palms, feet, and sentimental hidden motifs.",
      icon: Sparkles,
      tag: "Bridal Heirloom",
    },
    {
      title: "Sangeet Beats & Dances",
      desc: "High-octane stage choreographies, spontaneous dhol beats, and joyful dance floors frozen in dynamic light.",
      icon: Music,
      tag: "Live Festivities",
    },
    {
      title: "Haldi & Ritual Glow",
      desc: "Vibrant yellow marigolds, flower showers, and tender family blessings documented with cinematic warmth.",
      icon: Heart,
      tag: "Sacred Traditions",
    },
    {
      title: "Full Multi-Day Coverage",
      desc: "Tailored multi-event timelines so you can immerse fully in celebration while we preserve every fleeting smile.",
      icon: Calendar,
      tag: "Custom Timelines",
    },
  ]

  return (
    <section id="mehendi-sangeet" className="py-24 px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1 text-xs font-semibold text-[#C84C6D] shadow-2xs backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="tracking-wide">Vibrant Cultural Celebrations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans">
            Mehendi & Sangeet Ceremonies{" "}
            <span className="block italic font-light text-[#C84C6D] mt-1">
              Where joy dances in color & rhythm.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#6E5D64] font-normal leading-relaxed max-w-2xl mx-auto">
            From the quiet fragrance of freshly applied henna to the energetic crescendos of sangeet night dances, we document every tender tradition and exhilarating celebration with artistic finesse.
          </p>
        </div>

        {/* Feature Cards Grid with ReactBits SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex"
              >
                <SpotlightCard
                  spotlightColor="rgba(200, 76, 109, 0.16)"
                  className="w-full flex flex-col justify-between p-6 rounded-3xl border border-rose-100/80 shadow-xs hover:shadow-xl hover:border-[#C84C6D]/40 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#C84C6D] bg-[#FCE7EC] px-2.5 py-1 rounded-full">
                        {item.tag}
                      </span>
                      <div className="h-10 w-10 rounded-2xl bg-rose-50 text-[#C84C6D] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#22181C] font-sans pt-1">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6E5D64] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-rose-100/60 flex items-center text-xs font-semibold text-[#C84C6D] group-hover:translate-x-1 transition-transform">
                    <span>Fine Art Documented</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>

        {/* Real Celebration Photo Gallery Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {[
            { src: "/images/real/mehendi-1.webp", title: "Classical Stage Choreography", tag: "Live Dance" },
            { src: "/images/real/mehendi-2.webp", title: "Festive Attire & Silk Grace", tag: "Bridal Attire" },
            { src: "/images/real/mehendi-3.webp", title: "Sangeet Group Performance", tag: "Stage Rhythms" },
            { src: "/images/real/mehendi-4.webp", title: "Vibrant Cultural Traditions", tag: "Celebration" },
          ].map((photo, i) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-rose-200/80 bg-white/60 p-2.5 shadow-xs hover:shadow-xl hover:border-[#C84C6D]/40 transition-all text-left"
            >
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-rose-50 relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="rounded-full bg-white/90 backdrop-blur-md text-[#C84C6D] text-[10px] font-bold tracking-wider px-2.5 py-0.5 shadow-2xs">
                    {photo.tag}
                  </span>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#22181C] mt-2.5 px-1 truncate">
                {photo.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner with Direct Google Review & Booking */}
        <div className="relative overflow-hidden rounded-3xl border border-rose-200/80 bg-gradient-to-r from-rose-50/90 via-white/80 to-rose-50/90 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C84C6D]">
                <ShieldCheck className="h-4 w-4" />
                <span>Bespoke Multi-Event Coverage in Houston & Worldwide</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#22181C] font-sans">
                Planning your Mehendi, Haldi, or Sangeet Night?
              </h3>

              <p className="text-xs sm:text-sm text-[#6E5D64] max-w-xl leading-relaxed">
                We craft custom multi-day packages designed for South Asian wedding festivities, ensuring consistent color harmony, energetic candid moments, and timeless heirloom photo albums.
              </p>

              {/* Google Review Badge */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://g.page/r/CcKxanJ1lSZbEAI/review"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-rose-200 shadow-2xs hover:border-[#C84C6D] transition-colors group cursor-pointer"
                >
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#22181C]">5.0 on Google</span>
                  <span className="text-[10px] text-[#C84C6D] underline underline-offset-2 font-medium group-hover:text-[#B33D5B]">
                    Read & Leave Reviews →
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch lg:items-end">
              <BookingDialog
                defaultSession="Mehendi & Sangeet"
                trigger={
                  <Button className="bg-[#C84C6D] hover:bg-[#B33D5B] text-white rounded-full px-7 h-11 text-xs uppercase tracking-wider font-semibold shadow-md shadow-[#C84C6D]/20 gap-2 cursor-pointer w-full sm:w-auto">
                    <span>Inquire for Mehendi / Sangeet</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                }
              />

              <a
                href="https://wa.me/13469027572?text=Hello!%20I%20would%20love%20to%20inquire%20about%20booking%20coverage%20for%20our%20Mehendi%20and%20Sangeet%20ceremonies."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-white hover:bg-rose-50 text-[#22181C] px-6 h-11 text-xs font-semibold tracking-wide transition-colors shadow-2xs w-full sm:w-auto"
              >
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
