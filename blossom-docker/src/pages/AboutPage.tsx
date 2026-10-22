import { motion } from "framer-motion"
import { Quote, Award, Sparkles, ShieldCheck, ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/BookingDialog"
import { Link } from "react-router-dom"

export function AboutPage() {
  const services = [
    {
      title: "Wedding Shoots",
      description: "Documenting timeless vows, quiet moments of intimacy, and grand celebrations with fine-art editorial elegance.",
      image: "/images/real/wedding-1.webp",
      badge: "Editorial Vows",
    },
    {
      title: "Mehendi & Sangeet",
      description: "Intricate henna artistry, high-octane dances, and vibrant cultural traditions preserved with cinematic warmth.",
      image: "/images/real/mehendi-1.webp",
      badge: "Vibrant Traditions",
    },
    {
      title: "Couple Shoots",
      description: "Celebrate your love and connection with romantic, cinematic portraits capturing authentic chemistry in golden light.",
      image: "/images/couple_bookings.jpeg",
      badge: "Romantic Connection",
    },
    {
      title: "Birthday Parties",
      description: "Celebrate milestone birthdays with candid laughter, joyful cake cutting, and spirited celebration portraits.",
      image: "/images/real/birthday-1.webp",
      badge: "Milestone Joy",
    },
    {
      title: "Housewarming Parties",
      description: "Commemorate your new home sanctuary with heartfelt family gatherings and traditional ceremonies.",
      image: "/images/real/housewarming-1.webp",
      badge: "New Beginnings",
    },
    {
      title: "Graduation & Events",
      description: "Commemorate academic excellence with proud cap & gown portraits and celebratory campus landmarks.",
      image: "/images/real/graduation-1.webp",
      badge: "Honor & Pride",
    },
  ]

  return (
    <div className="relative z-10 space-y-24 py-12 md:py-20">
      {/* 1. Atelier Manifesto / About Us */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1.5 text-xs font-semibold text-[#C84C6D] shadow-2xs backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Heart Behind Blossom Shoots</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#22181C] font-sans leading-tight">
            Crafting memories that freeze time and{" "}
            <span className="italic font-light text-[#C84C6D]">speak to the soul.</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-[#6E5D64] leading-relaxed font-normal">
            <p>
              Blossom Shoots began as a dream nurtured by our founder, <strong className="text-[#22181C] font-semibold">Mrs. Manisha Jha</strong>. What started as a personal passion quickly blossomed into a lifelong mission: to freeze time, preserve tender emotions, and craft stories through the lens.
            </p>
            <p>
              The name <span className="italic font-medium text-[#C84C6D]">“Blossom”</span> was inspired by a quiet photo walk through a blooming garden — a moment of realization that photography is not just about <em className="text-[#22181C]">seeing</em>, but about <em className="text-[#22181C]">feeling</em>. From that day, Blossom Shoots has grown into an atelier committed to capturing life’s most meaningful milestones with creativity, patience, and authentic heart.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Meet the Founder Section */}
      <section className="px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Founder Portrait Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-rose-200/80 bg-white/60 p-3.5 shadow-xl shadow-[#22181C]/5 backdrop-blur-md">
                  <div className="overflow-hidden rounded-[2rem] aspect-[3/4] bg-rose-50">
                    <img
                      src="/images/mrs-jha.webp"
                      alt="Mrs. Manisha Jha — Founder & Principal Artist"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-[#22181C] font-sans">
                      Mrs. Manisha Jha
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#C84C6D] font-semibold mt-0.5">
                      CEO, Founder & Principal Artist
                    </p>
                  </div>
                </div>

                <div className="absolute -top-3.5 -right-3.5 h-12 w-12 rounded-2xl bg-[#C84C6D] text-white flex items-center justify-center shadow-lg shadow-[#C84C6D]/20">
                  <Quote className="h-5 w-5" />
                </div>
              </div>
            </motion.div>

            {/* Right: Founder Story & Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C84C6D]">
                  Founder & Creative Director
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans">
                  “A photograph is a{" "}
                  <span className="italic font-light text-[#C84C6D]">memory you hold in your hands.”</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#6E5D64] leading-relaxed font-normal">
                <p>
                  Driven by her belief that photography is a timeless treasure, Manisha curates each session with immense care. From styling and set creation to lighting and posing, every detail is considered so clients feel calm and radiant.
                </p>
                <p>
                  Specializing in weddings, mehendi ceremonies, couples, and celebration milestones, her approach blends gentle candid moments with artistic composition, producing fine-art imagery designed to be cherished for generations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/70 border border-rose-100 flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#C84C6D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#22181C]">Thoughtful Direction</h4>
                    <p className="text-xs text-[#6E5D64] mt-0.5">
                      Expert guidance on lighting, posing, and wardrobe coordination.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-rose-100 flex items-start gap-3">
                  <Award className="h-5 w-5 text-[#C84C6D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#22181C]">Heirloom Standards</h4>
                    <p className="text-xs text-[#6E5D64] mt-0.5">
                      Archival print preservation and master color harmonization.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mentorship & Houston Center for Photography */}
      <section className="px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C84C6D]">
                  Mentorship & Continuing Education
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans">
                  Mentored at the prestigious{" "}
                  <span className="italic font-light text-[#C84C6D]">Houston Center for Photography.</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#6E5D64] leading-relaxed font-normal">
                <p>
                  Continuous growth and technical refinement are cornerstones of our atelier. Mrs. Manisha Jha had the distinct privilege of receiving one-on-one mentorship from renowned fine-art photographer and educator <strong className="text-[#22181C] font-semibold">David Scheinbaum</strong> at the <strong className="text-[#22181C] font-semibold">Houston Center for Photography (HCP)</strong>.
                </p>
                <p>
                  This immersive mentorship deepened her mastery of darkroom lighting sensibilities, intentional visual hierarchy, and the emotional resonance that distinguishes true fine-art portraiture from standard commercial imagery.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 text-xs text-[#C84C6D] font-medium flex items-center gap-3">
                <BookOpen className="h-5 w-5 shrink-0" />
                <span>Houston Center for Photography — Fostering fine-art excellence since 1981</span>
              </div>
            </motion.div>

            {/* Right Image: Mentorship Context */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="overflow-hidden rounded-[2.5rem] border border-rose-200/80 bg-white/60 p-3.5 shadow-xl shadow-[#22181C]/5 backdrop-blur-md">
                  <div className="overflow-hidden rounded-[2rem] aspect-[4/3] bg-rose-50">
                    <img
                      src="/images/with-professor.webp"
                      alt="David Scheinbaum & Manisha Jha — Mentorship at Houston Center for Photography"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-bold text-[#22181C]">David Scheinbaum & Manisha Jha</p>
                    <p className="text-xs uppercase tracking-widest text-[#C84C6D] font-semibold mt-0.5">
                      Mentorship at HCP
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Atelier Services Grid */}
      <section className="px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C84C6D]">
              Our Signature Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans">
              Specialized sessions across{" "}
              <span className="italic font-light text-[#C84C6D]">Houston & beyond.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E5D64] font-normal max-w-xl mx-auto">
              Each session is an intentional experience tailored with bespoke styling, patient guidance, and timeless fine-art delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-rose-100/80 bg-white/60 backdrop-blur-md p-3.5 shadow-xs hover:shadow-xl hover:border-[#C84C6D]/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-rose-50 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C84C6D] backdrop-blur-md shadow-2xs">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 text-left space-y-2">
                    <h3 className="text-lg font-bold text-[#22181C] font-sans group-hover:text-[#C84C6D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E5D64] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 text-left border-t border-rose-100/60 mt-3 flex items-center justify-between">
                  <BookingDialog
                    defaultSession={item.title}
                    trigger={
                      <button
                        type="button"
                        className="text-xs font-semibold text-[#C84C6D] hover:text-[#B33D5B] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Book Session</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    }
                  />
                  <Link to="/portfolio" className="text-[11px] text-[#6E5D64] hover:text-[#22181C] underline">
                    View Portfolio
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Invitation Banner */}
      <section className="px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 pt-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-rose-200 bg-gradient-to-r from-rose-50/80 via-white to-rose-50/80 p-8 sm:p-14 text-center space-y-6 shadow-sm">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C84C6D]">
            Begin Your Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans">
            Let’s preserve your milestone with{" "}
            <span className="italic font-light text-[#C84C6D]">authenticity & care.</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#6E5D64] font-normal leading-relaxed">
            Inquire today to discuss your vision, explore curated wardrobe styling, and secure your session on our calendar.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <BookingDialog
              trigger={
                <Button className="bg-[#C84C6D] hover:bg-[#B33D5B] text-white rounded-full px-8 h-12 text-sm font-semibold tracking-wide shadow-md shadow-[#C84C6D]/20 cursor-pointer">
                  Schedule Consultation
                </Button>
              }
            />
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-white hover:bg-rose-50 px-7 h-12 text-sm font-semibold text-[#22181C] shadow-2xs transition-colors"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
