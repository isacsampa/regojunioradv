import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <>
      <SEO title="O Escritório" description="Conheça a história e os princípios de atendimento da Júnior Rêgo Advocacia." />
      
      <div className="bg-[#0c0a09] border-b border-wood-900/50 py-16 md:py-24">
        <Container>
          <SectionHeading 
            title="O Escritório" 
            subtitle="Compromisso com a ética, transparência e atendimento individualizado."
            centered
          />
        </Container>
      </div>

      <section className="py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 text-neutral-400 leading-relaxed text-lg">
              <p>
                A <strong className="text-white">Júnior Rêgo Advocacia</strong> foi fundada com o propósito de oferecer serviços jurídicos que aliam técnica apurada, responsabilidade e proximidade com o cliente. Entendemos que cada caso envolve vidas, patrimônios e histórias únicas que merecem ser tratadas com a máxima atenção.
              </p>
              
              <p>
                Nossa atuação é pautada pela análise minuciosa de riscos e possibilidades. Antes de qualquer medida judicial ou extrajudicial, apresentamos aos nossos clientes um panorama claro e objetivo, permitindo tomadas de decisão conscientes e seguras.
              </p>
              
              <div className="bg-[#0c0a09] p-8 rounded-sm border border-wood-900/50 mt-8">
                <h3 className="font-serif text-2xl font-medium text-white mb-6">Nossos Princípios</h3>
                <ul className="space-y-4">
                  {[
                    "Ética e transparência em todas as relações",
                    "Comunicação acessível, sem excesso de jargões",
                    "Atualização técnica constante",
                    "Tratamento individualizado de cada demanda",
                    "Sigilo absoluto e proteção de dados"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 text-wood-500 mr-3 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="aspect-[4/3] bg-[#0c0a09] rounded-sm overflow-hidden border border-wood-900/50 relative">
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white0">
                    <span className="font-medium mb-2">[PREENCHER DADO REAL]</span>
                    <span className="text-sm">Foto da fachada ou recepção do escritório</span>
                 </div>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl font-medium text-white mb-4">Estrutura de Atendimento</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Nosso espaço físico em Esperantina foi pensado para garantir conforto, privacidade e sigilo para nossos clientes. Além do atendimento presencial, contamos com infraestrutura completa para reuniões virtuais seguras, atendendo demandas de toda a região norte do Piauí e outros estados.
                </p>
                <WhatsAppButton text="Agendar uma consulta" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
