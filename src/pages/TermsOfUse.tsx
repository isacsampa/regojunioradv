import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { siteConfig } from "@/config/site"

export function TermsOfUse() {
  return (
    <>
      <SEO title="Termos de Uso" />
      
      <div className="bg-[#0c0a09] border-b border-wood-900/50 py-16 md:py-24">
        <Container className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-neutral-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </Container>
      </div>

      <section className="py-16 md:py-24 bg-black">
        <Container className="max-w-4xl prose prose-invert prose-lg text-neutral-300">
          <h2>1. Informações Gerais</h2>
          <p>
            Este site é mantido e operado pela <strong>{siteConfig.legalName}</strong>. O acesso e a utilização deste site estão sujeitos aos presentes Termos de Uso, que devem ser lidos atentamente pelo usuário.
          </p>

          <h2>2. Natureza Informativa</h2>
          <p>
            Todo o conteúdo disponibilizado neste site (artigos, textos, notícias, informações gerais) tem caráter <strong>estritamente informativo e institucional</strong>. Nenhuma publicação contida neste domínio substitui a consulta jurídica formal com um advogado.
          </p>
          <p>
            A leitura de artigos ou o envio de mensagens através de formulários <strong>não estabelece relação de cliente-advogado</strong> e não constitui prestação de serviços jurídicos. A análise de qualquer demanda exige o conhecimento de particularidades do caso concreto.
          </p>

          <h2>3. Propriedade Intelectual</h2>
          <p>
            Os textos, fotografias, logotipos e toda a estrutura visual deste site são de propriedade exclusiva da <strong>{siteConfig.legalName}</strong> e são protegidos pelas leis de direitos autorais e propriedade intelectual. É vedada a reprodução, distribuição ou modificação do conteúdo sem prévia e expressa autorização.
          </p>

          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            O escritório não se responsabiliza por:
          </p>
          <ul>
            <li>Decisões tomadas com base no conteúdo genérico publicado no site;</li>
            <li>Falhas técnicas, indisponibilidade do sistema ou instabilidades na conexão de internet do usuário;</li>
            <li>Conteúdos de sites de terceiros eventualmente referenciados por meio de links (hyperlinks).</li>
          </ul>

          <h2>5. Envio de Informações</h2>
          <p>
            Recomendamos que não sejam enviadas informações sensíveis ou documentos sigilosos através do formulário de contato inicial do site. Tais documentos devem ser compartilhados apenas em ambiente seguro após o estabelecimento formal do contato e agendamento.
          </p>

          <h2>6. Conformidade com a OAB</h2>
          <p>
            Este site foi desenvolvido respeitando rigorosamente o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do Conselho Federal da OAB, mantendo sobriedade, caráter informativo e evitando qualquer prática de captação de clientela ou mercantilização da profissão.
          </p>
        </Container>
      </section>
    </>
  )
}
