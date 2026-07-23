import { useParams, Navigate, Link } from "react-router-dom"
import Markdown from "react-markdown"
import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { articles } from "@/config/articles"
import { ChevronRight, Calendar, Clock, User } from "lucide-react"

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return <Navigate to="/conteudos" replace />
  }

  return (
    <>
      <SEO 
        title={article.title} 
        description={article.summary} 
      />
      
      {/* Breadcrumbs */}
      <div className="bg-[#0c0a09] py-4 border-b border-wood-900/50">
        <Container>
          <nav className="flex text-sm text-neutral-400 overflow-x-auto whitespace-nowrap hide-scrollbar" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li><ChevronRight className="w-4 h-4 shrink-0" /></li>
              <li>
                <Link to="/conteudos" className="hover:text-white transition-colors">Conteúdos</Link>
              </li>
              <li><ChevronRight className="w-4 h-4 shrink-0" /></li>
              <li className="text-white font-medium truncate max-wxs md:max-w-md" aria-current="page">{article.title}</li>
            </ol>
          </nav>
        </Container>
      </div>

      <article className="py-16 md:py-24 bg-black">
        <Container className="max-w-4xl">
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block bg-[#0c0a09] text-neutral-300 border border-wood-900/50 text-sm font-medium px-3 py-1 rounded-sm">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 font-medium py-6 border-y border-wood-900/50 mb-10">
              <div className="flex items-center text-neutral-300">
                <User className="w-4 h-4 mr-2 text-wood-500" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(article.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
            </div>
            
            <div className="aspect-[21/9] bg-[#0c0a09] rounded-sm overflow-hidden border border-wood-900/50 relative mb-12">
              {article.image.includes("[PREENCHER") ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white0">
                  <span className="text-sm">[PREENCHER IMAGEM]</span>
                </div>
              ) : (
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-neutral-300 mb-16">
            <p className="lead text-xl text-white mb-8 font-medium">
              {article.summary}
            </p>
            
            {article.isMarkdown ? (
              <div className="markdown-body text-neutral-300 space-y-6">
                <Markdown>{article.content}</Markdown>
              </div>
            ) : (
              <div className="bg-[#0c0a09] border-l-4 border-wood-500 p-6 my-8 text-sm text-neutral-300">
                <strong className="text-wood-400">Nota:</strong> {article.content}
                <br /><br />
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Este é um artigo de demonstração estrutural.</span>
              </div>
            )}
          </div>

          <div className="bg-[#0c0a09] p-8 md:p-10 rounded-sm border border-wood-900/50 text-center">
            <h3 className="font-serif text-2xl font-medium text-white mb-4">
              Ficou com alguma dúvida sobre este assunto?
            </h3>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Cada situação possui particularidades que podem alterar a interpretação jurídica. Para uma análise precisa do seu caso, converse com um advogado.
            </p>
            <WhatsAppButton size="lg" />
          </div>
        </Container>
      </article>
    </>
  )
}
