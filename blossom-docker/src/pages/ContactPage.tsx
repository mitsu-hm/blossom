import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, Sparkles, Star } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"

export function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [session, setSession] = useState("Wedding Shoots")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello Blossom Shoots! My name is ${name}.\nEmail: ${email}\nPhone: ${phone}\nInterested in: ${session}\nMessage: ${message || "I'd love to learn more about scheduling a session."}`
    )
    window.open(`https://wa.me/13469027572?text=${text}`, "_blank")
    setSubmitted(true)
  }

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Session Inquiry: ${session} — Blossom Shoots`)
    const body = encodeURIComponent(
      `Hello Blossom Shoots,\n\nName: ${name || "Client"}\nPhone: ${phone}\nCollection: ${session}\n\nMessage:\n${message || "Looking forward to hearing from you!"}`
    )
    window.location.href = `mailto:contact@blossomshoots.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="relative z-10 space-y-20 py-12 md:py-20">
      {/* 1. Header Intro */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1.5 text-xs font-semibold text-[#C84C6D] shadow-2xs backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Connect with our Atelier</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#22181C] font-sans">
            Feel free to connect{" "}
            <span className="italic font-light text-[#C84C6D]">with our studio.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#6E5D64] font-normal leading-relaxed">
            Every celebration begins with an intentional conversation. Please fill out our inquiry form or connect directly through our studio channels below.
          </p>

          {/* Google Review Badge in Header */}
          <div className="pt-1 flex justify-center">
            <a
              href="https://g.page/r/CcKxanJ1lSZbEAI/review"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/80 hover:bg-white px-4 py-1.5 rounded-full border border-rose-200 text-xs font-semibold text-[#22181C] shadow-2xs hover:border-[#C84C6D] transition-colors"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <span>5.0 Star Rated on Google</span>
              <span className="text-[#C84C6D] underline">Review our studio →</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Three Main Contact Cards */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Location */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="p-8 rounded-3xl border border-rose-100/80 bg-white/50 backdrop-blur-md text-left space-y-4 shadow-xs hover:shadow-lg hover:border-[#C84C6D]/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#FCE7EC] text-[#C84C6D] flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#22181C] font-sans">Studio Location</h3>
                <p className="text-sm font-semibold text-[#C84C6D]">
                  Richmond, Aliana, Texas, USA - 77407
                </p>
                <p className="text-xs text-[#6E5D64] leading-relaxed pt-1">
                  Woodfalls Lane. Private sanitized boutique studio sessions & on-location destination shoots throughout Greater Houston.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Telephone / Direct Call */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="p-8 rounded-3xl border border-rose-100/80 bg-white/50 backdrop-blur-md text-left space-y-4 shadow-xs hover:shadow-lg hover:border-[#C84C6D]/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#FCE7EC] text-[#C84C6D] flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#22181C] font-sans">Direct Telephone</h3>
                <a
                  href="tel:+13469027572"
                  className="text-sm font-semibold text-[#C84C6D] hover:underline block"
                >
                  +1 346 9027572
                </a>
                <p className="text-xs text-[#6E5D64] leading-relaxed pt-1">
                  Available Monday through Saturday for consultation calls, wardrobe coordination, and celebration scheduling.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Studio Email */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="p-8 rounded-3xl border border-rose-100/80 bg-white/50 backdrop-blur-md text-left space-y-4 shadow-xs hover:shadow-lg hover:border-[#C84C6D]/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#FCE7EC] text-[#C84C6D] flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#22181C] font-sans">Electronic Mail</h3>
                <a
                  href="mailto:contact@blossomshoots.com"
                  className="text-sm font-semibold text-[#C84C6D] hover:underline block truncate"
                >
                  contact@blossomshoots.com
                </a>
                <p className="text-xs text-[#6E5D64] leading-relaxed pt-1">
                  Send detailed inquiries, gallery questions, or bespoke wedding itineraries. We respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Form & Social / Map Grid */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Interactive Send Us a Message Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 rounded-[2.5rem] border border-rose-100 bg-white/60 backdrop-blur-md p-6 sm:p-10 shadow-xl shadow-[#C84C6D]/5 text-left"
            >
              <div className="space-y-2 mb-8">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C84C6D]">
                  Direct Atelier Commission
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#22181C] font-sans">
                  Send us a message
                </h2>
                <p className="text-xs sm:text-sm text-[#6E5D64]">
                  Share your celebration details, anticipated date, and any special requests.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-[#FCE7EC] text-[#C84C6D] flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#22181C] font-sans">
                    Inquiry Window Opened
                  </h3>
                  <p className="text-sm text-[#6E5D64] max-w-md mx-auto">
                    Thank you! We have prepared your communication directly with Mrs. Manisha Jha and look forward to speaking with you.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full border-rose-200 bg-white px-6 text-xs font-semibold text-[#22181C] cursor-pointer"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#22181C]">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica Montgomery"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl border border-rose-200 bg-white text-sm outline-none focus:border-[#C84C6D] focus:ring-1 focus:ring-[#C84C6D] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#22181C]">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl border border-rose-200 bg-white text-sm outline-none focus:border-[#C84C6D] focus:ring-1 focus:ring-[#C84C6D] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#22181C]">Contact / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl border border-rose-200 bg-white text-sm outline-none focus:border-[#C84C6D] focus:ring-1 focus:ring-[#C84C6D] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#22181C]">Preferred Celebration / Event</label>
                      <select
                        value={session}
                        onChange={(e) => setSession(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl border border-rose-200 bg-white text-sm outline-none focus:border-[#C84C6D] focus:ring-1 focus:ring-[#C84C6D] transition-all cursor-pointer text-[#22181C]"
                      >
                        <option value="Wedding Shoots">Wedding Shoots</option>
                        <option value="Mehendi & Sangeet">Mehendi & Sangeet Ceremonies</option>
                        <option value="Couple Shoots">Couple Shoots</option>
                        <option value="Birthday Parties">Birthday Parties</option>
                        <option value="Housewarming Parties">Housewarming Parties</option>
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Graduation Photo Shoot and Events">Graduation Photo Shoot and Events</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#22181C]">Message / Query / Timing</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your celebration, anticipated dates, venue or special questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-rose-200 bg-white text-sm outline-none focus:border-[#C84C6D] focus:ring-1 focus:ring-[#C84C6D] transition-all resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="submit"
                      className="flex-1 bg-[#C84C6D] hover:bg-[#B33D5B] text-white rounded-xl h-12 font-semibold shadow-md shadow-[#C84C6D]/20 gap-2 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Commission Inquiry</span>
                    </Button>

                    <Button
                      type="button"
                      onClick={handleEmailDirect}
                      variant="outline"
                      className="border-rose-200 bg-white hover:bg-rose-50 text-[#22181C] rounded-xl h-12 font-medium px-5 cursor-pointer"
                    >
                      <Mail className="h-4 w-4 mr-1.5 text-[#C84C6D]" />
                      <span>Email Directly</span>
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right: Studio Overview, Google Maps & Socials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-5 space-y-6 text-left"
            >
              {/* Social Channels Card */}
              <div className="p-6 rounded-3xl border border-rose-100 bg-white/50 backdrop-blur-md space-y-4 shadow-xs">
                <h3 className="text-base font-bold text-[#22181C] font-sans">
                  Direct Messaging & Socials
                </h3>
                <p className="text-xs text-[#6E5D64] leading-relaxed">
                  Connect through our official community platforms for recent celebration highlights and preview stories.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://wa.me/13469027572"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold shadow-xs hover:brightness-105 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp (+1 346 9027572)</span>
                  </a>

                  <a
                    href="https://www.instagram.com/blossomshoots_?stkn=MWtuaThmMnhmZmQ3ag=="
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-full bg-white border border-rose-100 flex items-center justify-center text-[#6E5D64] hover:text-[#C84C6D] hover:bg-rose-50 transition-colors shadow-2xs"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>

                  <a
                    href="https://www.facebook.com/share/p/19j3o5vycJ/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-full bg-white border border-rose-100 flex items-center justify-center text-[#6E5D64] hover:text-[#C84C6D] hover:bg-rose-50 transition-colors shadow-2xs"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Google Reviews Card */}
              <div className="p-6 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-white to-rose-50/70 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#22181C]">5.0 on Google Reviews</span>
                </div>
                <p className="text-xs text-[#6E5D64]">
                  We are deeply grateful for our clients' loving reviews. Share your experience with our studio on Google.
                </p>
                <a
                  href="https://g.page/r/CcKxanJ1lSZbEAI/review"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-xs font-semibold text-[#C84C6D] hover:underline"
                >
                  Write or read reviews on Google →
                </a>
              </div>

              {/* Google Maps Card */}
              <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white/50 backdrop-blur-md p-3.5 shadow-xs space-y-3">
                <div className="overflow-hidden rounded-2xl h-56 w-full bg-rose-50 relative">
                  <iframe
                    title="Blossom Shoots Studio - Richmond Aliana TX 77407"
                    src="https://maps.google.com/maps?q=Woodfalls%20Lane,%20Richmond,%20TX%2077407&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-2 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#C84C6D] font-semibold">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Studio Consultation Hours</span>
                  </div>
                  <p className="text-xs text-[#6E5D64]">
                    Monday – Friday: 9:00 AM – 6:00 PM · Weekends by appointment for sunrise / golden-hour sessions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
