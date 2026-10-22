import { Star } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function GoogleReviewBadge() {
  return (
    <div className="fixed bottom-5 left-5 z-40 print:hidden animate-in fade-in slide-in-from-bottom-3 duration-500">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://g.page/r/CcKxanJ1lSZbEAI/review"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 bg-white/95 hover:bg-white border border-rose-200/90 shadow-md hover:shadow-xl px-3.5 py-2 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-md ring-1 ring-rose-200/60"
            aria-label="Verified 5.0 Star Reviews on Google"
          >
            {/* Google Colorful G Icon */}
            <svg
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-6"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            {/* Amber Star Rating */}
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400" />
              ))}
            </div>

            {/* Score & Label */}
            <span className="font-bold text-[#22181C] text-xs">5.0</span>
            <span className="text-[11px] font-semibold text-[#C84C6D] hidden sm:inline whitespace-nowrap">
              Google Reviews
            </span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-[#22181C] text-white text-[11px] rounded-lg px-2.5 py-1">
          Verified 5.0 Star Reviews · Read or Leave a Review on Google
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
