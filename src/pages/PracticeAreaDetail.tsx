import { useParams, Navigate, Link } from "react-router-dom"
import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { practiceAreas } from "@/config/practiceAreas"
import { ChevronRight, CheckCircle2 } from "lucide-react"

export function PracticeAreaDetail() {
  const { slug } = useParams<{ slug: string }>()
  const area = practiceAreas.find(a => a.slug === slug)

  if (!area) {
    return <Navigate to="/areas-de-atuacao" replace />
  }

  const Icon = area.icon

  return (
    <>
      <SEO title={`${area.title} | Áreas de Atuação`} description={area.description} />
      
      {/* Breadcrumbs */}
      <div className="bg-[#0c0a09] py-4 border-b border-wood-900/50">
        <Container>
          <nav className="flex text-sm text-neutral-400" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li>
                <Link to="/areas-de-atuacao" className="hover:text-white transition-colors">Áreas de Atuação</Link>
              </li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-white font-medium" aria-current="page">{area.title}</li>
            </ol>
          </nav>
        </Container>
      </div>

      <div className="bg-black py-16 md:py-24 border-b border-wood-900/50">
        <Container>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-[#0c0a09] border border-wood-500/30 text-wood-400 flex flex-shrink-0 items-center justify-center rounded-sm">
              <Icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <SectionHeading title={area.title} subtitle={area.description} />
            </div>
          </div>
        </Container>
      </div>

      <section className="py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-medium text-white mb-6">Situações de Atendimento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.situations.map((situation, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-wood-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{situation}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-white mb-6">Perguntas Frequentes</h3>
                <div className="space-y-6">
                  {area.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-[#0c0a09] p-6 rounded-sm border border-wood-900/50">
                      <h4 className="font-medium text-white mb-3">{faq.question}</h4>
                      <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#0c0a09] p-8 rounded-sm border border-wood-900/50 sticky top-32">
                <h3 className="text-xl font-serif font-medium text-white mb-4">Precisa de orientação em {area.title}?</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Cada caso exige uma análise individualizada e cuidadosa. Entre em contato para conversarmos sobre sua situação específica.
                </p>
                <WhatsAppButton className="w-full mb-4" />
                <p className="text-xs text-white0 text-center">
                  Atendimento presencial em Esperantina ou por videoconferência.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
