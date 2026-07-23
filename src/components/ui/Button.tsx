import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "whatsapp"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-wood-600 text-white hover:bg-wood-500": variant === "default",
            "border border-wood-800/50 bg-transparent hover:bg-wood-900 text-white": variant === "outline",
            "hover:bg-wood-900 text-white": variant === "ghost",
            "text-white underline-offset-4 hover:underline": variant === "link",
            "bg-[#25D366] text-white hover:bg-[#20b858]": variant === "whatsapp",
            "h-10 px-6 py-2": size === "default",
            "h-9 rounded-sm px-4": size === "sm",
            "h-12 rounded-sm px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
