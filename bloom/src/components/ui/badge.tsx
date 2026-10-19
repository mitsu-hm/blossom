import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-rose-200/80 bg-white/80 text-[#C84C6D] shadow-2xs hover:bg-white",
        secondary:
          "border-rose-100 bg-white/60 text-[#22181C]",
        destructive:
          "border-transparent bg-rose-600 text-white shadow-xs",
        outline:
          "border-rose-200/70 bg-white/70 text-[#C84C6D] backdrop-blur-xs",
        accent:
          "border-rose-200 bg-[#FCE7EC] text-[#C84C6D]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
