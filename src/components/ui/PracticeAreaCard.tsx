import { Link } from "react-router-dom"
import { ArrowRight, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PracticeAreaCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  className?: string
}

export function PracticeAreaCard({ title, description, href, icon: Icon, className }: PracticeAreaCardProps) {
  return (
    <Link 
      to={href}
      className={cn(
        "group flex flex-col p-8 bg-[#0c0a09] border border-wood-900/50 hover:border-wood-500/50 hover:shadow-lg transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500",
        className
      )}
    >
      <div className="w-12 h-12 bg-wood-950 flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#1a1a1a] group-hover:border-wood-500/30 border border-wood-900/50 transition-colors duration-300">
        <Icon className="w-6 h-6 text-neutral-400 group-hover:text-wood-400 transition-colors duration-300" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-serif font-medium text-white mb-3">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">{description}</p>
      <div className="flex items-center text-sm font-medium text-wood-400 mt-auto group-hover:underline underline-offset-4">
        Saiba mais
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
