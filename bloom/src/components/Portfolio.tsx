import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"
import { BookingDialog } from "@/components/BookingDialog"
import MagicBento, { BentoCard } from "@/components/MagicBento"

const allPortfolioCards: BentoCard[] = [
  {
    image: "/images/real/wedding-1.webp",
    title: "Eternal Wedding Vows",
    description: "Cinematic, documentary wedding storytelling capturing sacred promises and joyful tears.",
    label: "Wedding Shoots",
    category: "wedding",
  },
  {
    image: "/images/real/mehendi-1.webp",
    title: "Mehendi & Sangeet Revelry",
    description: "Intricate henna artistry, vibrant rhythmic dances, and spontaneous family celebrations.",
    label: "Mehendi & Sangeet",
    category: "mehendi",
  },
  {
    image: "/images/couple_romance.jpeg",
    title: "Golden Hour Romance",
    description: "Candid couple portraiture bathed in the gentle warmth of sunset light.",
    label: "Couple Shoots",
    category: "couples",
  },
  {
    image: "/images/real/birthday-1.webp",
    title: "Milestone Birthday Joy",
    description: "Spirited birthday celebrations, cake cutting, and unposed smiles for all generations.",
    label: "Birthday Parties",
    category: "birthday",
  },
  {
    image: "/images/real/housewarming-1.webp",
    title: "Housewarming Griha Pravesh",
    description: "Documenting your sacred beginnings, new home sanctuary, and warm family blessings.",
    label: "Housewarming Parties",
    category: "housewarming",
  },
  {
    image: "/images/real/graduation-1.webp",
    title: "Graduation & Academic Milestones",
    description: "Honoring years of dedication with editorial campus cap & gown portraiture.",
    label: "Graduation & Events",
    category: "graduation",
  },
]

export function Portfolio() {
  const [selectedSessionForBooking, setSelectedSessionForBooking] = useState<string>("Wedding Shoots")
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const handleCardClick = (card: BentoCard) => {
    setSelectedSessionForBooking(card.label || "Wedding Shoots")
    setDialogOpen(true)
  }

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 bg-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1 text-xs font-semibold text-[#C84C6D] shadow-2xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Interactive Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans">
              Stories woven in{" "}
              <span className="italic font-light text-[#C84C6D]">light & emotion.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E5D64] font-normal">
              Every chapter is honored with intentional styling, quiet patience, and an interactive editorial touch.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white hover:bg-rose-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#C84C6D] transition-colors shadow-2xs self-start md:self-end"
          >
            <span>View Full Portfolio Route</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Magic Bento Portfolio Grid */}
        <div className="w-full">
          <MagicBento
            cards={allPortfolioCards}
            glowColor="200, 76, 109"
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            clickEffect={true}
            onCardClick={handleCardClick}
          />
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl border border-rose-100/80 bg-white/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-left space-y-1">
            <p className="text-base sm:text-lg font-bold text-[#22181C]">
              Seeking a destination or bespoke custom shoot?
            </p>
            <p className="text-xs sm:text-sm text-[#6E5D64]">
              We travel worldwide for exclusive weddings, mehendi ceremonies, anniversaries, and editorial portraits.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/portfolio"
              className="rounded-full bg-white hover:bg-rose-50 text-[#22181C] border border-rose-200 px-5 py-3 text-xs uppercase tracking-wider font-semibold transition-all shadow-2xs"
            >
              Browse Gallery
            </Link>

            <BookingDialog
              defaultSession="Bespoke Destination"
              trigger={
                <button
                  type="button"
                  className="whitespace-nowrap rounded-full bg-[#C84C6D] hover:bg-[#B33D5B] text-white px-6 py-3 text-xs uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer"
                >
                  Inquire for Bespoke Sessions
                </button>
              }
            />
          </div>
        </div>
      </div>

      {/* Programmatic BookingDialog when clicking on any Bento card */}
      <BookingDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultSession={selectedSessionForBooking}
      />
    </section>
  )
}
