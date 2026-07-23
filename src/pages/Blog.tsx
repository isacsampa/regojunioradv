import { Link } from "react-router-dom"
import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { articles } from "@/config/articles"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function Blog() {
  return (
    <>
      <SEO title="Conteúdos Jurídicos" description="Artigos, notícias e informativos jurídicos elaborados pela equipe da Júnior Rêgo Advocacia." />
      
      <div className="bg-[#0c0a09] border-b border-wood-900/50 py-16 md:py-24">
        <Container>
          <SectionHeading 
            title="Conteúdos Jurídicos" 
            subtitle="Informação acessível para auxiliar na compreensão dos seus direitos."
            centered
          />
        </Container>
      </div>

      <section className="py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                to={`/conteudos/${article.slug}`}
                className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 rounded-sm"
              >
                <div className="aspect-[16/9] bg-[#0c0a09] rounded-sm mb-4 overflow-hidden border border-wood-900/50 relative">
                  {article.image.includes("[PREENCHER") ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white0">
                      <span className="text-sm">[PREENCHER IMAGEM]</span>
                    </div>
                  ) : (
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-white0 mb-3 font-medium">
                  <span className="bg-[#1a1a1a] px-2 py-1 rounded-sm border border-wood-900/50 text-neutral-300">{article.category}</span>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h2 className="text-xl font-serif font-medium text-white mb-3 group-hover:text-wood-400 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {article.summary}
                </p>
                <div className="mt-auto flex items-center text-sm font-medium text-wood-400 group-hover:underline underline-offset-4">
                  Ler artigo completo <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
