import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { siteConfig } from "@/config/site"

export function PrivacyPolicy() {
  return (
    <>
      <SEO title="Política de Privacidade" />
      
      <div className="bg-[#0c0a09] border-b border-wood-900/50 py-16 md:py-24">
        <Container className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-neutral-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </Container>
      </div>

      <section className="py-16 md:py-24 bg-black">
        <Container className="max-w-4xl prose prose-invert prose-lg text-neutral-300">
          <p>
            A <strong>{siteConfig.legalName}</strong> tem o compromisso de proteger a privacidade e os dados pessoais de seus clientes, parceiros e usuários do site, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
          </p>

          <h2>1. Dados Coletados</h2>
          <p>
            Coletamos apenas os dados essenciais para o estabelecimento de contato inicial e para o exercício regular das atividades de prestação de serviços jurídicos. Ao utilizar nosso formulário de contato, você nos fornece voluntariamente:
          </p>
          <ul>
            <li>Nome completo</li>
            <li>Telefone (WhatsApp)</li>
            <li>E-mail</li>
            <li>Cidade / Estado</li>
            <li>Área de interesse</li>
            <li>Mensagem ou resumo da situação</li>
          </ul>

          <h2>2. Finalidade do Tratamento</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para:
          </p>
          <ul>
            <li>Retornar o seu contato e responder a dúvidas ou solicitações;</li>
            <li>Realizar análise preliminar de viabilidade jurídica;</li>
            <li>Agendar reuniões ou consultas;</li>
            <li>Enviar informações institucionais estritamente relevantes ao seu interesse.</li>
          </ul>

          <h2>3. Compartilhamento de Dados</h2>
          <p>
            O escritório <strong>NÃO</strong> comercializa, aluga ou compartilha seus dados pessoais com terceiros para fins publicitários ou comerciais. O compartilhamento só ocorrerá:
          </p>
          <ul>
            <li>Com autoridades judiciais ou governamentais, quando houver obrigação legal;</li>
            <li>Com parceiros tecnológicos que fornecem infraestrutura de hospedagem ou e-mail, os quais também estão sujeitos a rigorosas normas de segurança e proteção de dados.</li>
          </ul>

          <h2>4. Armazenamento e Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda ou alteração. O sigilo profissional do advogado (art. 7º, II, do Estatuto da Advocacia) reforça o nosso dever de manter as informações sob estrita confidencialidade.
          </p>

          <h2>5. Retenção dos Dados</h2>
          <p>
            Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, inclusive para fins de cumprimento de obrigações legais, contratuais, ou requisição de autoridades competentes.
          </p>

          <h2>6. Direitos do Titular</h2>
          <p>
            Você tem o direito de solicitar, a qualquer momento:
          </p>
          <ul>
            <li>A confirmação da existência de tratamento;</li>
            <li>O acesso aos seus dados;</li>
            <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>A anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>A eliminação dos dados tratados com o seu consentimento.</li>
          </ul>

          <h2>7. Contato</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, entre em contato através do e-mail: <strong>{siteConfig.email}</strong>.
          </p>
        </Container>
      </section>
    </>
  )
}
