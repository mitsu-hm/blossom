import { motion } from "framer-motion"
import { Sparkles, Clock, Check, ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "@/components/BookingDialog"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const collections = [
  {
    id: "birthday",
    title: "Birthday Parties",
    tag: "Milestone Joy",
    duration: "2 to 3 Hours",
    image: "/images/real/birthday-1.webp",
    description: "Candid smiles, cake cutting, and spirited celebration portraiture tailored for milestone birthdays.",
    highlights: [
      "Coverage of venue decor, cake cutting & guest greetings",
      "Candid family & friends celebration storytelling",
      "Dedicated birthday VIP portrait session",
    ],
    inclusions: [
      "High-resolution edited digital gallery with fast turnaround",
      "Online proofing & lifetime private digital downloads",
      "Social-media ready highlights delivered within 48 hours",
      "Full non-commercial print release included",
    ],
    popular: false,
  },
  {
    id: "housewarming",
    title: "Housewarming Parties",
    tag: "New Beginnings",
    duration: "2 Hours",
    image: "/images/real/housewarming-1.webp",
    description: "Commemorate your new home sanctuary with heartfelt family gatherings and traditional ceremonies.",
    highlights: [
      "Griha Pravesh rituals / warm welcoming coverage",
      "Architectural & interior decor detail captures",
      "Group family portraits in gentle natural light",
    ],
    inclusions: [
      "Private curated online gallery ready for sharing",
      "High-resolution archival digital download",
      "Guidance on optimal natural indoor lighting setups",
      "Print rights for keepsake family albums",
    ],
    popular: false,
  },
  {
    id: "couples",
    title: "Couple Shoots",
    tag: "Romantic Storytelling",
    duration: "90 to 120 Minutes",
    image: "/images/real/couple-1.webp",
    description: "Candid intimacy and romantic connection captured in ethereal, golden-hour light.",
    highlights: [
      "Consultation on scenic location & wardrobe styling",
      "Sunset / golden hour lighting coordination",
      "40+ professionally color-graded fine art images",
    ],
    inclusions: [
      "Complimentary styling guide & moodboard alignment",
      "Express preview gallery within 48 hours",
      "Full printing rights for announcements & wedding invites",
      "Custom online client showcase",
    ],
    popular: false,
  },
  {
    id: "wedding",
    title: "Wedding Shoots",
    tag: "Most Cherished",
    duration: "Full Day / Custom",
    image: "/images/real/wedding-1.webp",
    description: "Unobtrusive documentary coverage capturing the grand emotions and quiet sacred vows.",
    highlights: [
      "Pre-wedding preparations through grand reception exit",
      "Multi-angle candid and editorial couple portraits",
      "Comprehensive family, ceremony & ritual documentation",
    ],
    inclusions: [
      "Master color-graded archival digital collection",
      "Complimentary engagement or rehearsal session consultation",
      "Dual-photographer coverage coordination available",
      "Heirloom handcrafted album design consultation",
    ],
    popular: true,
  },
  {
    id: "corporate",
    title: "Corporate Events",
    tag: "Executive Presence",
    duration: "Half or Full Day",
    image: "/images/real/corporate-1.webp",
    description: "Polished gala coverage, corporate summits, conferences, and executive team branding.",
    highlights: [
      "Keynote presentations, awards, and networking captures",
      "Expedited same-day / next-day press release selects",
      "Commercial usage rights and high-res digital delivery",
    ],
    inclusions: [
      "Executive headshot corner available upon request",
      "Discrete, professional photography etiquette",
      "Secure corporate portal for enterprise asset distribution",
      "Dedicated account manager for corporate billing",
    ],
    popular: false,
  },
  {
    id: "graduation",
    title: "Graduation Photo Shoot and Events",
    tag: "Honor & Achievement",
    duration: "90 Minutes",
    image: "/images/real/graduation-1.webp",
    description: "Commemorate academic milestones with proud campus portraits and celebratory family gatherings.",
    highlights: [
      "Cap, gown, sash, and formal attire portraiture",
      "Campus landmark location coordination",
      "Family and proud mentors celebration photos",
    ],
    inclusions: [
      "Fine-art retouching for announcement cards and prints",
      "Instant social-ready digital previews",
      "Multiple outfit change accommodations",
      "Full non-commercial print license",
    ],
    popular: false,
  },
]

export function Collections() {
  return (
    <section id="collections" className="py-24 px-4 sm:px-6 lg:px-10 border-t border-rose-100/60 bg-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1 text-xs font-semibold text-[#C84C6D] shadow-2xs backdrop-blur-sm">
            <span>Tailored Commissions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22181C] font-sans">
            Curated Collections for{" "}
            <span className="italic font-light text-[#C84C6D]">every celebration.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D64] font-normal max-w-xl mx-auto">
            Transparent, bespoke experiences with no hidden fees. Each commission includes thorough preparation, styling assistance, and archival fine-art retouching.
          </p>
        </div>

        {/* Collections Grid - 3 columns for 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {collections.map((col, idx) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex"
            >
              <Card
                className={`w-full flex flex-col justify-between rounded-3xl transition-all duration-300 overflow-hidden ${
                  col.popular
                    ? "border-[#C84C6D]/80 bg-white/80 backdrop-blur-md shadow-xl shadow-[#C84C6D]/10 relative ring-2 ring-[#C84C6D]/30"
                    : "border-rose-100/80 bg-white/60 backdrop-blur-md shadow-xs hover:shadow-xl hover:border-[#C84C6D]/40"
                }`}
              >
                {col.popular && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="rounded-full bg-[#C84C6D] text-white text-[10px] uppercase tracking-wider px-3.5 py-1 font-semibold shadow-xs flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      {col.tag}
                    </span>
                  </div>
                )}

                {/* Card Top Image Banner */}
                <div className="overflow-hidden aspect-[16/10] bg-rose-50 relative group/img">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  {!col.popular && (
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/90 backdrop-blur-md text-[#C84C6D] text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 shadow-2xs">
                        {col.tag}
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader className="text-left space-y-2 pb-3 pt-4">
                  <CardTitle className="text-xl font-bold text-[#22181C] font-sans">
                    {col.title}
                  </CardTitle>
                  <div className="flex items-center gap-1.5 text-xs text-[#6E5D64] font-medium">
                    <Clock className="h-3.5 w-3.5 text-[#C84C6D]" />
                    <span>{col.duration}</span>
                  </div>
                  <CardDescription className="text-xs text-[#6E5D64] leading-relaxed pt-1">
                    {col.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="h-px w-full bg-rose-100/70 my-2" />
                    <ul className="space-y-2 text-left text-xs text-[#6E5D64]">
                      {col.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-[#C84C6D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ShadCN Accordion for Progressive Disclosure */}
                  <Accordion type="single" collapsible className="w-full mt-4 border-t border-rose-100/70 pt-1">
                    <AccordionItem value={`details-${col.id}`} className="border-none">
                      <AccordionTrigger className="py-2 text-xs font-semibold text-[#C84C6D] hover:no-underline hover:text-[#B33D5B]">
                        View Inclusions & Details
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-1 text-xs text-[#6E5D64] space-y-1.5">
                        {col.inclusions.map((inc, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[11px]">
                            <span className="h-1 w-1 rounded-full bg-[#C84C6D] shrink-0 mt-1.5" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>

                <CardFooter className="pt-4 border-t border-rose-100/60">
                  <BookingDialog
                    defaultSession={col.title}
                    trigger={
                      <Button
                        className={`w-full rounded-2xl h-10 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                          col.popular
                            ? "bg-[#C84C6D] hover:bg-[#B33D5B] text-white shadow-xs"
                            : "bg-white/80 hover:bg-[#C84C6D] hover:text-white text-[#22181C] border border-rose-200/80 shadow-2xs"
                        }`}
                      >
                        <span>Book Session</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    }
                  />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
