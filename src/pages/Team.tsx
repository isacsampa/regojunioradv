import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { professionals } from "@/config/professionals"
import { CheckCircle2 } from "lucide-react"

export function Team() {
  return (
    <>
      <SEO title="Equipe" description="Conheça os profissionais da Júnior Rêgo Advocacia." />
      
      <div className="bg-[#0c0a09] border-b border-wood-900/50 py-16 md:py-24">
        <Container>
          <SectionHeading 
            title="Nossa Equipe" 
            subtitle="Profissionais comprometidos com a excelência técnica e o atendimento humanizado."
            centered
          />
        </Container>
      </div>

      <section className="py-24 bg-black">
        <Container>
          <div className="flex flex-col gap-24">
            {professionals.map((prof, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <div className="aspect-[3/4] bg-[#0c0a09] rounded-sm overflow-hidden border border-wood-900/50 relative">
                    {prof.photo && !prof.photo.includes("[PREENCHER") ? (
                      <img 
                        src={prof.photo} 
                        alt={`Fotografia de ${prof.name}`} 
                        className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white0 bg-[#0c0a09]">
                        <span className="font-medium mb-2">[PREENCHER DADO REAL]</span>
                        <span className="text-sm">Fotografia Profissional</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="lg:col-span-8">
                  <h2 className="text-3xl font-serif font-medium text-white mb-2">{prof.name}</h2>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-wood-400 font-medium">{prof.role}</span>
                    <span className="text-neutral-600">|</span>
                    <span className="text-neutral-400">{prof.oab}</span>
                  </div>
                  
                  <div className="prose prose-invert max-w-none mb-8">
                    <p className="text-lg leading-relaxed text-neutral-400">
                      {prof.bio}
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-serif font-medium text-white mb-4">Áreas de atuação</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {prof.areas.map((area, aIdx) => (
                      <div key={aIdx} className="flex items-center text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-wood-500 mr-3 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>

                  {prof.linkedin && !prof.linkedin.includes("[PREENCHER") && (
                    <a 
                      href={prof.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-wood-400 hover:text-wood-300 hover:underline underline-offset-4"
                    >
                      Perfil no LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
