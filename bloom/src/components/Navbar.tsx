import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, Menu, MessageCircle, Star, Sparkles } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/BookingDialog"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Mehendi & Sangeet", href: "/#mehendi-sangeet" },
  { label: "Collections", href: "/#collections" },
  { label: "Our Story", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "")
      if (location.pathname === "/") {
        e.preventDefault()
        const el = document.getElementById(id)
        const globalLenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts?: Record<string, unknown>) => void } }).lenis
        if (globalLenis && el) {
          globalLenis.scrollTo(el, { duration: 1.4 })
        } else {
          el?.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-rose-200/70 bg-[#FDF2F5]/90 backdrop-blur-xl transition-all shadow-xs overflow-hidden">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-2 lg:gap-3">
        {/* Brand Logo & Studio Wordmark — No wrapping or truncation */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/images/logo.webp"
            alt="Blossom Shoot Fine Arts"
            className="h-10 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none"
            }}
          />
          <div className="flex flex-col text-left shrink-0 whitespace-nowrap">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#22181C] font-sans leading-tight">
              Blossom Shoot Fine Arts
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C84C6D] font-semibold leading-tight mt-0.5">
              Bespoke Photography Atelier
            </span>
          </div>
        </Link>

        {/* Editorial Navigation Links */}
        <nav className="hidden xl:flex items-center gap-3 xl:gap-5 2xl:gap-7 min-w-0">
          {navLinks.map((link) => {
            const isExactActive = location.pathname === link.href
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 py-1 border-b-2 whitespace-nowrap ${
                  isExactActive
                    ? "text-[#C84C6D] border-[#C84C6D]"
                    : "text-[#6E5D64] border-transparent hover:text-[#C84C6D] hover:border-rose-300"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden xl:flex items-center gap-1.5 xl:gap-2 shrink-0">
          {/* Verified Google Review Badge with Tooltip */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://g.page/r/CcKxanJ1lSZbEAI/review"
                target="_blank"
                rel="noreferrer"
                className="hidden 2xl:flex items-center gap-1.5 bg-white/80 hover:bg-white border border-rose-200/80 px-3 py-1.5 rounded-full text-xs transition-colors group cursor-pointer shadow-2xs whitespace-nowrap"
              >
                <div className="flex text-amber-400">
                  <Star className="h-3 w-3 fill-amber-400" />
                </div>
                <span className="font-bold text-[#22181C] text-[11px]">5.0</span>
                <span className="text-[10px] text-[#C84C6D] font-medium">Google Reviews</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-[#22181C] text-white text-[11px] rounded-lg px-2.5 py-1">
              Verified 5.0 Star Reviews · Read or Leave a Review
            </TooltipContent>
          </Tooltip>

          {/* WhatsApp Inquiries with Tooltip */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://wa.me/13469027572"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-[#6E5D64] hover:text-[#25D366] transition-colors p-2 rounded-full hover:bg-rose-100/60"
                aria-label="WhatsApp Inquiry"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span className="hidden 2xl:inline text-[11px]">+1 346 9027572</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-[#22181C] text-white text-[11px] rounded-lg px-2.5 py-1">
              Chat directly on WhatsApp
            </TooltipContent>
          </Tooltip>

          {/* Social Icons with Tooltips */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.instagram.com/blossomshoots_?stkn=MWtuaThmMnhmZmQ3ag=="
                target="_blank"
                rel="noreferrer"
                className="text-[#6E5D64] hover:text-[#C84C6D] transition-colors p-2 rounded-full hover:bg-rose-100/60"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-[#22181C] text-white text-[11px] rounded-lg px-2.5 py-1">
              Follow on Instagram
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.facebook.com/share/p/19j3o5vycJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="text-[#6E5D64] hover:text-[#C84C6D] transition-colors p-2 rounded-full hover:bg-rose-100/60"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-[#22181C] text-white text-[11px] rounded-lg px-2.5 py-1">
              Connect on Facebook
            </TooltipContent>
          </Tooltip>

          {/* Primary Booking Trigger */}
          <BookingDialog
            trigger={
              <Button
                size="sm"
                className="bg-[#C84C6D] hover:bg-[#B33D5B] text-white rounded-full px-5 h-9 text-xs uppercase tracking-wider font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                Book Session
              </Button>
            }
          />
        </div>

        {/* Mobile Menu & Sheet Trigger */}
        <div className="flex items-center gap-2 xl:hidden shrink-0">
          <BookingDialog
            trigger={
              <Button
                size="sm"
                className="bg-[#C84C6D] hover:bg-[#B33D5B] text-white rounded-full text-xs font-semibold px-3 sm:hidden"
              >
                Book
              </Button>
            }
          />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="p-2 text-[#22181C] hover:text-[#C84C6D] transition-colors rounded-xl border border-rose-200 bg-white/80"
                aria-label="Toggle Navigation Drawer"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-[#FDF2F5]/98 backdrop-blur-2xl border-l border-rose-200 p-6 flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left pb-4 border-b border-rose-200/80">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/logo.webp"
                      alt="Blossom Shoot Fine Arts"
                      className="h-9 w-auto object-contain shrink-0"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none"
                      }}
                    />
                    <div className="whitespace-nowrap">
                      <SheetTitle className="text-base font-bold text-[#22181C]">
                        Blossom Shoot Fine Arts
                      </SheetTitle>
                      <p className="text-[10px] uppercase tracking-wider text-[#C84C6D] font-semibold">
                        Houston Atelier
                      </p>
                    </div>
                  </div>
                </SheetHeader>

                {/* Mobile Nav Links */}
                <div className="py-6 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={(e) => {
                        handleNavClick(link.href, e)
                        setMobileOpen(false)
                      }}
                      className="flex items-center justify-between text-base font-semibold text-[#22181C] hover:text-[#C84C6D] py-3 border-b border-rose-200/60 transition-colors"
                    >
                      <span>{link.label}</span>
                      <Sparkles className="h-3.5 w-3.5 text-[#C84C6D]/40" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Contact & Reviews */}
              <div className="space-y-4 pt-4 border-t border-rose-200/80">
                <a
                  href="https://g.page/r/CcKxanJ1lSZbEAI/review"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-white/80 border border-rose-200 p-3 rounded-2xl shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#22181C]">5.0 Verified</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#C84C6D]">Read Reviews →</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/13469027572"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 font-semibold text-xs py-2.5 rounded-xl transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+13469027572"
                    className="flex-1 flex items-center justify-center gap-2 bg-rose-100/70 text-[#C84C6D] hover:bg-rose-100 font-semibold text-xs py-2.5 rounded-xl transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Studio</span>
                  </a>
                </div>

                <div className="flex justify-center gap-4 py-1 text-[#6E5D64]">
                  <a
                    href="https://www.instagram.com/blossomshoots_?stkn=MWtuaThmMnhmZmQ3ag=="
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-rose-200 hover:text-[#C84C6D] bg-white/80"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/p/19j3o5vycJ/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-rose-200 hover:text-[#C84C6D] bg-white/80"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                </div>

                <BookingDialog
                  trigger={
                    <Button
                      onClick={() => setMobileOpen(false)}
                      className="w-full bg-[#C84C6D] hover:bg-[#B33D5B] text-white rounded-full py-3 text-sm font-semibold shadow-md cursor-pointer"
                    >
                      Book Atelier Session
                    </Button>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
