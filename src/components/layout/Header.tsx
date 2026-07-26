import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { navigation } from "@/config/navigation"
import { siteConfig } from "@/config/site"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-wood-900/50 py-3 shadow-sm"
          : "bg-black border-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 rounded-sm"
          aria-label={`${siteConfig.name} - Página Inicial`}
        >
          <div className="flex items-center">
            <img src="/logo.png" alt="Júnior Rêgo Advocacia" className="h-12 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Menu Principal">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || 
                              (item.href !== "/" && location.pathname.startsWith(item.href))
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 rounded-sm px-1 py-0.5",
                      isActive ? "text-white" : "text-neutral-400"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <WhatsAppButton size="sm" text="Falar conosco" showIcon={false} />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-neutral-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 rounded-md"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu principal"
        >
          <Menu className="w-6 h-6" />
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
            aria-hidden="true" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0c0a09] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-wood-900/50">
            <div className="flex items-center justify-between p-6 border-b border-wood-900/50">
              <span className="font-serif text-xl font-semibold text-white">Menu</span>
              <button
                type="button"
                className="p-2 -mr-2 text-neutral-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6" aria-label="Menu Mobile">
              <ul className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href || 
                                  (item.href !== "/" && location.pathname.startsWith(item.href))
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={cn(
                          "block py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 rounded-sm",
                          isActive ? "text-white" : "text-neutral-400"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="p-6 border-t border-wood-900/50">
              <WhatsAppButton className="w-full" size="lg" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
