import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"
import { navigation } from "@/config/navigation"
import { Container } from "@/components/ui/Container"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-neutral-300 py-16 lg:py-24 border-t border-wood-900/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              <img src="/images/logo.png" alt="Júnior Rêgo Advocacia" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              Atuação jurídica estratégica, responsável e próxima. 
              {siteConfig.responsibleLawyer} - {siteConfig.oab}.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Navegação</h3>
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1 -ml-1 py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contato</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-wood-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">
                  {siteConfig.address}<br />
                  {siteConfig.city} - {siteConfig.state}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-wood-500 shrink-0" aria-hidden="true" />
                <span>{siteConfig.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-wood-500 shrink-0" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Informações Legais</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/politica-de-privacidade" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-wood-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white0">
          <p>© {currentYear} {siteConfig.legalName}. Todos os direitos reservados.</p>
          <p className="max-w-xl text-center md:text-right">
            Conteúdo de caráter informativo. A análise jurídica depende das particularidades de cada caso.
          </p>
        </div>
      </Container>
    </footer>
  )
}
