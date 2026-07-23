import * as React from "react"
import { siteConfig } from "@/config/site"
import { ButtonProps } from "./Button"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps extends Omit<ButtonProps, "children" | "onClick"> {
  text?: string
  message?: string
  showIcon?: boolean
}

export function WhatsAppButton({ 
  text = "Falar com o escritório", 
  message = "Olá, encontrei o escritório pelo site e gostaria de informações sobre atendimento jurídico.",
  showIcon = true,
  className,
  variant = "whatsapp",
  size = "default",
  ...props
}: WhatsAppButtonProps) {
  const isPlaceholder = siteConfig.whatsappNumber.includes("[PREENCHER");
  const cleanNumber = isPlaceholder ? "" : siteConfig.whatsappNumber.replace(/\D/g, "");
  const url = isPlaceholder ? "#" : `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = (e: React.MouseEvent) => {
    if (isPlaceholder) {
      e.preventDefault();
      console.log("Número de WhatsApp ainda não configurado.");
    }
  }

  return (
    <a 
      href={url}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      onClick={handleClick}
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
    >
      {showIcon && <MessageCircle className="w-4 h-4 mr-2" />}
      {text}
    </a>
  )
}
