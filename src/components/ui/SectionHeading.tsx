import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = false, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)} {...props}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
