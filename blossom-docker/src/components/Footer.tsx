import { Link } from "react-router-dom"
import { Phone, Mail, MessageCircle, Heart, ArrowUp, MapPin, Star } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "@/components/ui/icons"

export function Footer() {
  const scrollToTop = () => {
    const globalLenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts?: Record<string, unknown>) => void } }).lenis
    if (globalLenis) {
      globalLenis.scrollTo(0, {
        duration: 1.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="w-full border-t border-rose-100/60 bg-white/70 backdrop-blur-xl pt-16 pb-12 px-4 sm:px-6 lg:px-10 text-[#22181C]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-rose-100/60">
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <Link to="/" className="flex items-center gap-3.5 group inline-flex">
              <img
                src="/images/logo.webp"
                alt="Blossom Shoots"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none"
                }}
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-[#22181C] font-sans">
                  Blossom Shoots
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#6E5D64] max-w-md leading-relaxed">
              Capturing moments, crafting memories. Dedicated to documenting weddings, mehendi and sangeet celebrations, couple intimacies, milestone birthdays, and family milestones with timeless elegance and natural light.
            </p>

            <div className="flex items-start gap-2 pt-1 text-xs text-[#6E5D64]">
              <MapPin className="h-4 w-4 text-[#C84C6D] shrink-0 mt-0.5" />
              <span>Woodfalls Lane, Richmond (Aliana), Texas 77407 · Worldwide Destination Commissions</span>
            </div>

            {/* Google Reviews Badge */}
            <div className="pt-2">
              <a
                href="https://g.page/r/CcKxanJ1lSZbEAI/review"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-rose-50/80 hover:bg-rose-100/70 border border-rose-200/80 px-3.5 py-1.5 rounded-full text-xs transition-colors group cursor-pointer"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-[#22181C] text-[11px]">5.0 on Google</span>
                <span className="text-[10px] text-[#C84C6D] underline font-medium">Read & Leave Reviews →</span>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#22181C]">
              Atelier
            </h5>
            <ul className="space-y-2 text-xs text-[#6E5D64]">
              <li><Link to="/portfolio" className="hover:text-[#C84C6D] transition-colors font-medium text-[#C84C6D]">Portfolio Gallery</Link></li>
              <li><Link to="/#mehendi-sangeet" className="hover:text-[#C84C6D] transition-colors">Mehendi & Sangeet</Link></li>
              <li><Link to="/about" className="hover:text-[#C84C6D] transition-colors">Our Story & Founder</Link></li>
              <li><Link to="/#collections" className="hover:text-[#C84C6D] transition-colors">Collections & Offerings</Link></li>
              <li><Link to="/#experience" className="hover:text-[#C84C6D] transition-colors">The Client Journey</Link></li>
              <li><Link to="/contact" className="hover:text-[#C84C6D] transition-colors">Contact Atelier</Link></li>
            </ul>
          </div>

          {/* Specialties (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#22181C]">
              Celebrations
            </h5>
            <ul className="space-y-2 text-xs text-[#6E5D64]">
              <li><Link to="/portfolio" className="hover:text-[#C84C6D] transition-colors">Wedding Shoots</Link></li>
              <li><Link to="/#mehendi-sangeet" className="hover:text-[#C84C6D] transition-colors">Mehendi & Sangeet</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#C84C6D] transition-colors">Couple Shoots</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#C84C6D] transition-colors">Birthday Parties</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#C84C6D] transition-colors">Housewarming Parties</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#C84C6D] transition-colors">Graduation & Events</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#C84C6D] transition-colors">Corporate Events</Link></li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#22181C]">
              Direct Inquiries
            </h5>
            <div className="space-y-2.5 text-xs text-[#6E5D64]">
              <a
                href="tel:+13469027572"
                className="flex items-center gap-2 hover:text-[#C84C6D] transition-colors font-medium"
              >
                <Phone className="h-4 w-4 text-[#C84C6D]" />
                <span>+1 346 9027572</span>
              </a>

              <a
                href="mailto:contact@blossomshoots.com"
                className="flex items-center gap-2 hover:text-[#C84C6D] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#C84C6D]" />
                <span>contact@blossomshoots.com</span>
              </a>

              <a
                href="https://wa.me/13469027572"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors font-medium text-emerald-700"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp (+1 346 9027572)</span>
              </a>

              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-block text-xs font-semibold text-[#C84C6D] underline underline-offset-4 hover:text-[#B33D5B]"
                >
                  Open Studio Contact Page →
                </Link>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/blossomshoots_?stkn=MWtuaThmMnhmZmQ3ag=="
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-full bg-white/80 border border-rose-200 flex items-center justify-center text-[#6E5D64] hover:text-[#C84C6D] hover:bg-rose-50 transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>

              <a
                href="https://www.facebook.com/share/p/19j3o5vycJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-full bg-white/80 border border-rose-200 flex items-center justify-center text-[#6E5D64] hover:text-[#C84C6D] hover:bg-rose-50 transition-colors shadow-2xs"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E5D64]">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Blossom Shoots. All rights reserved. Crafted with{" "}
            <Heart className="h-3 w-3 text-[#C84C6D] fill-[#C84C6D] inline" /> for fine-art storytelling.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#C84C6D] transition-colors p-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
