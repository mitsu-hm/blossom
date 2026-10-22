import { useState, useEffect } from "react"
import { Calendar, Phone, MessageSquare, Mail, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BookingDialogProps {
  trigger?: React.ReactNode
  defaultSession?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function BookingDialog({
  trigger,
  defaultSession = "Wedding Shoots",
  open,
  onOpenChange,
}: BookingDialogProps) {
  const [selectedSession, setSelectedSession] = useState(defaultSession)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (defaultSession) {
      setSelectedSession(defaultSession)
    }
  }, [defaultSession])

  const sessions = [
    { id: "Wedding", title: "Wedding Shoots", duration: "Full Day" },
    { id: "MehendiSangeet", title: "Mehendi & Sangeet", duration: "Multi-Day/Eve" },
    { id: "Couple", title: "Couple Shoots", duration: "90-120 min" },
    { id: "Birthday", title: "Birthday Parties", duration: "2-3 hrs" },
    { id: "Housewarming", title: "Housewarming Parties", duration: "2 hrs" },
    { id: "Graduation", title: "Graduation & Events", duration: "90 min" },
    { id: "Corporate", title: "Corporate Events", duration: "Half/Full Day" },
  ]

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Blossom Shoot Fine Arts! My name is ${name || "Client"}. I would love to inquire about booking a ${selectedSession} session.`
    )
    window.open(`https://wa.me/13469027572?text=${text}`, "_blank")
    setSubmitted(true)
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(`Session Inquiry: ${selectedSession} — Blossom Shoot Fine Arts`)
    const body = encodeURIComponent(
      `Hello Blossom Shoot Fine Arts Team,\n\nI am interested in scheduling a ${selectedSession} photo session.\nName: ${name}\nPhone: ${phone}\n\nLooking forward to hearing from you!`
    )
    window.location.href = `mailto:contact@blossomshoots.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const handleDialogChange = (isOpen: boolean) => {
    if (!isOpen) {
      setSubmitted(false)
    }
    onOpenChange?.(isOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent className="sm:max-w-lg p-6 sm:p-8 bg-white border-rose-100 rounded-3xl text-[#22181C] shadow-2xl">
        <DialogHeader className="text-left space-y-2 pb-2 border-b border-rose-100">
          <div className="flex items-center gap-2">
            <Badge variant="accent" className="bg-[#FCE7EC] text-[#C84C6D] border-[#F8C0CE] text-[10px] uppercase tracking-wider font-semibold">
              Private Atelier Inquiry
            </Badge>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-[#22181C] font-sans">
            Book Your Session
          </DialogTitle>
          <DialogDescription className="text-sm text-[#6E5D64] font-normal">
            Every session is unhurried and carefully tailored. Choose your preferred collection below to connect directly with Mrs. Manisha Jha and our team.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-[#C84C6D]">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-[#22181C]">Inquiry Initiated</h4>
            <p className="text-sm text-[#6E5D64] max-w-sm mx-auto">
              We have opened your messaging window. We look forward to capturing your timeless story.
            </p>
          </div>
        ) : (
          <div className="space-y-6 pt-3">
            {/* Session Type Picker */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6E5D64]">
                Select Collection
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                {sessions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedSession(item.title)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left text-sm transition-all ${
                      selectedSession === item.title || selectedSession === item.id
                        ? "border-[#C84C6D] bg-[#FDF2F4] text-[#C84C6D] font-medium shadow-2xs ring-1 ring-[#C84C6D]/20"
                        : "border-rose-100 bg-white hover:border-[#F8C0CE] text-[#6E5D64]"
                    }`}
                  >
                    <span className="truncate pr-1">{item.title}</span>
                    <span className="text-[10px] text-[#6E5D64]/70 font-mono shrink-0">{item.duration}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Client Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-[#6E5D64]">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-rose-200 bg-white text-sm outline-none focus:border-[#C84C6D] focus:ring-1 focus:ring-[#C84C6D]"
                />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-[#6E5D64]">Phone / WhatsApp</label>
                <input
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-rose-200 bg-white text-sm outline-none focus:border-[#C84C6D] focus:ring-1 focus:ring-[#C84C6D]"
                />
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <Button
                onClick={handleWhatsApp}
                className="flex-1 bg-[#25D366] hover:bg-[#20BE5C] text-white rounded-xl h-11 font-medium shadow-xs gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Connect via WhatsApp</span>
              </Button>
              <Button
                onClick={handleEmail}
                variant="outline"
                className="flex-1 border-[#DDE0D8] bg-white hover:bg-[#EEF0EB] rounded-xl h-11 font-medium text-[#1A1D1A] gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>Send Email Inquiry</span>
              </Button>
            </div>

            <div className="flex items-center justify-between text-xs text-[#6E5D64] pt-2 border-t border-rose-100">
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#C84C6D]" />
                <a href="tel:+13469027572" className="hover:underline font-medium text-[#22181C]">
                  +1 346 9027572
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-[#6E5D64]" />
                <span>Booking for 2026 & Beyond</span>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
