import { Link } from "react-router-dom"
import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export function NotFound() {
  return (
    <>
      <SEO title="Página Não Encontrada" />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-24">
        <Container className="max-w-xl">
          <div className="text-white font-serif font-bold text-9xl mb-6">404</div>
          <h1 className="text-3xl font-serif font-medium text-slate-900 mb-4">Página Não Encontrada</h1>
          <p className="text-neutral-500 mb-8 leading-relaxed">
            O conteúdo que você está procurando pode ter sido movido, excluído ou não existe. Verifique se o endereço foi digitado corretamente.
          </p>
          <Button size="lg" asChild>
            <Link to="/">Voltar para a Página Inicial</Link>
          </Button>
        </Container>
      </div>
    </>
  )
}
