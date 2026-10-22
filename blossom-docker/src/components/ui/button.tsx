import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#C84C6D]/20 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#C84C6D] text-white shadow-sm hover:bg-[#B33D5B] hover:shadow-md",
        secondary:
          "bg-white/80 text-[#22181C] hover:bg-white shadow-xs border border-rose-100",
        outline:
          "border border-rose-200 bg-white/70 shadow-xs hover:bg-rose-50 text-[#22181C]",
        ghost:
          "hover:bg-rose-50 hover:text-[#C84C6D] text-[#22181C]",
        link: "text-[#C84C6D] underline-offset-4 hover:underline",
        accent:
          "bg-[#C84C6D] text-white shadow-md hover:bg-[#B33D5B]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-11 rounded-xl px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
