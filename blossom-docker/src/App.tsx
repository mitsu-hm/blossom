import { useState, useEffect } from "react"
import Lenis from "lenis"
import { AnimatePresence } from "framer-motion"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { LoadingScreen } from "@/components/LoadingScreen"
import Iridescence from "@/components/Iridescence"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HomePage } from "@/pages/HomePage"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"
import { PortfolioPage } from "@/pages/PortfolioPage"
import { TooltipProvider } from "@/components/ui/tooltip"
import { GoogleReviewBadge } from "@/components/GoogleReviewBadge"

function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "")
        const el = document.getElementById(id)
        const globalLenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts?: Record<string, unknown>) => void } }).lenis
        if (globalLenis && el) {
          globalLenis.scrollTo(el, { duration: 1.4 })
        } else if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }, 150)
    } else {
      const globalLenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts?: Record<string, unknown>) => void } }).lenis
      if (globalLenis) {
        globalLenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.4,
      touchMultiplier: 2,
      infinite: false,
    })

    ;(window as unknown as { lenis: Lenis }).lenis = lenis

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as unknown as { lenis?: Lenis }).lenis
    }
  }, [])

  return (
    <TooltipProvider delayDuration={200}>
      <BrowserRouter>
        <ScrollHandler />
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Fixed iridescent background — Sakura Pink petal tones */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FDF2F5] via-[#FCE7EC]/60 to-[#FDF2F5]">
          <Iridescence
            color={[1.0, 0.78, 0.86]}
            speed={0.25}
            amplitude={0.09}
            mouseReact={true}
          />
        </div>

        <div className={`relative z-10 min-h-screen flex flex-col pt-20 bg-[#FDF2F5]/50 text-[#22181C] font-sans antialiased selection:bg-[#FBD5DF] selection:text-[#7A1E3C] ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/story" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <GoogleReviewBadge />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  )
}
