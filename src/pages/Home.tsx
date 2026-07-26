import { Link } from "react-router-dom"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { PracticeAreaCard } from "@/components/ui/PracticeAreaCard"
import { SEO } from "@/components/seo/SEO"
import { practiceAreas } from "@/config/practiceAreas"
import { professionals } from "@/config/professionals"
import { articles } from "@/config/articles"
import { ArrowRight, CheckCircle2, Clock, Calendar } from "lucide-react"

export function Home() {
  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-24 pb-32 overflow-hidden border-b border-wood-900/50">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-wood-500"></div>
              <span className="text-xs font-bold tracking-widest text-wood-500 uppercase">
                Soluções com Inteligência Estratégica
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight mb-6">
              Atuação jurídica estratégica, responsável e próxima.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl">
              Orientação e representação jurídica com análise individualizada, comunicação clara e atenção a cada etapa do caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <WhatsAppButton size="lg" />
              <Button size="lg" variant="outline" asChild>
                <Link to="/areas-de-atuacao">Conhecer as áreas de atuação</Link>
              </Button>
            </div>
            <p className="text-sm text-white0 font-medium">
              Atendimento em Esperantina, região norte do Piauí e de forma remota quando aplicável.
            </p>
          </div>
        </Container>
        {/* Decorator */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#0c0a09]/50 skew-x-12 -z-0 hidden lg:block border-l border-wood-900/50/50" />
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24 bg-black">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <SectionHeading 
              title="Áreas de Atuação" 
              subtitle="Atendimento jurídico especializado nas principais áreas do direito."
            />
            <Button variant="link" asChild className="hidden md:flex">
              <Link to="/areas-de-atuacao">
                Ver todas as áreas <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard
                key={area.id}
                title={area.title}
                description={area.description}
                href={`/areas-de-atuacao/${area.slug}`}
                icon={area.icon}
              />
            ))}
          </div>
          
          <Button variant="outline" asChild className="w-full mt-8 md:hidden">
            <Link to="/areas-de-atuacao">Ver todas as áreas</Link>
          </Button>
        </Container>
      </section>

      {/* About Preview & Differentials */}
      <section className="py-24 bg-[#0c0a09] border-y border-wood-900/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Apresentação do escritório" 
                className="mb-6"
              />
              <p className="text-neutral-400 leading-relaxed mb-6">
                A Júnior Rêgo Advocacia atua com atendimento jurídico personalizado, responsável e estratégico. Cada demanda é analisada de forma individualizada, com comunicação clara sobre possibilidades, riscos e próximos passos.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Atendimento individualizado",
                  "Comunicação clara",
                  "Análise estratégica",
                  "Acompanhamento processual",
                  "Atuação judicial e extrajudicial",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-wood-500 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline">
                <Link to="/o-escritorio">Conhecer o escritório</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-wood-950 rounded-sm overflow-hidden border border-wood-900/50">
                <div className="w-full h-full flex items-center justify-center text-white0 bg-[#151515]">
                  <div className="text-center p-4">
                    <span className="block font-medium mb-1">[PREENCHER DADO REAL]</span>
                    <span className="text-sm">Foto do ambiente do escritório</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black p-6 border border-wood-900/50 shadow-xl rounded-sm hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0c0a09] text-wood-400 border border-wood-500/30 rounded-sm flex items-center justify-center font-serif text-xl">
                    JR
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-white">{professionals[0].name}</h4>
                    <p className="text-sm text-wood-500">{professionals[0].oab}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Articles Preview */}
      <section className="py-24 bg-black">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <SectionHeading 
              title="Conteúdo Jurídico" 
              subtitle="Artigos e informações recentes sobre seus direitos."
            />
            <Button variant="link" asChild className="hidden md:flex">
              <Link to="/conteudos">
                Ver todos os artigos <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                to={`/conteudos/${article.slug}`}
                className="group flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 rounded-sm"
              >
                <div className="aspect-[16/9] bg-[#0c0a09] rounded-sm mb-4 overflow-hidden border border-wood-900/50 relative">
                  {article.image.includes("[PREENCHER") ? (
                    <div className="w-full h-full flex items-center justify-center text-neutral-500">
                      <span className="text-sm">[PREENCHER IMAGEM]</span>
                    </div>
                  ) : (
                    <img 
                      src={article.image.startsWith('/') ? `${import.meta.env.BASE_URL}${article.image.slice(1)}` : article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-white0 mb-3 font-medium">
                  <span className="bg-[#1a1a1a] border border-wood-900/50 text-neutral-300 px-2 py-1 rounded-sm">{article.category}</span>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-medium text-white mb-2 group-hover:text-wood-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <div className="mt-auto flex items-center text-sm font-medium text-wood-400 group-hover:underline underline-offset-4">
                  Ler artigo
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black border-t border-wood-900/50 text-white">
        <Container className="text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-white">
            Precisa de orientação jurídica?
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Entre em contato para apresentar sua situação e verificar a disponibilidade de atendimento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton size="lg" />
            <Button size="lg" variant="outline" className="bg-transparent border-wood-800/50 text-white hover:bg-wood-900 hover:text-white" asChild>
              <Link to="/contato">Enviar e-mail</Link>
            </Button>
          </div>
          <p className="text-white0 text-sm mt-6">
            O envio da mensagem não estabelece automaticamente relação de contratação.
          </p>
        </Container>
      </section>
    </>
  )
}
