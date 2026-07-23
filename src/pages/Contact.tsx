import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ContactForm } from "@/components/forms/ContactForm"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { siteConfig } from "@/config/site"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export function Contact() {
  return (
    <>
      <SEO title="Contato" description="Entre em contato com a Júnior Rêgo Advocacia para agendar sua consulta." />
      
      <div className="bg-[#0c0a09] border-b border-wood-900/50 py-16 md:py-24">
        <Container>
          <SectionHeading 
            title="Contato" 
            subtitle="Estamos prontos para ouvir sua situação e avaliar como podemos ajudar."
            centered
          />
        </Container>
      </div>

      <section className="py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-medium text-white mb-4">Fale Conosco</h2>
                <p className="text-neutral-400 leading-relaxed">
                  Utilize os canais abaixo para agendar um atendimento. Priorizamos a comunicação rápida e objetiva, mantendo sempre o sigilo de suas informações.
                </p>
              </div>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0c0a09] flex items-center justify-center rounded-sm border border-wood-900/50 shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-wood-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Endereço</h3>
                    <p className="text-neutral-400 text-sm">{siteConfig.address}</p>
                    <p className="text-neutral-400 text-sm">{siteConfig.city} - {siteConfig.state}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0c0a09] flex items-center justify-center rounded-sm border border-wood-900/50 shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-wood-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Telefone / WhatsApp</h3>
                    <p className="text-neutral-400 text-sm mb-3">{siteConfig.phoneDisplay}</p>
                    <WhatsAppButton size="sm" />
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0c0a09] flex items-center justify-center rounded-sm border border-wood-900/50 shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-wood-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">E-mail</h3>
                    <p className="text-neutral-400 text-sm">{siteConfig.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0c0a09] flex items-center justify-center rounded-sm border border-wood-900/50 shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-wood-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Horário de Atendimento</h3>
                    <p className="text-neutral-400 text-sm">[PREENCHER DADO REAL]</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:mt-0">
              <h2 className="text-2xl font-serif font-medium text-white mb-6">Envie uma mensagem</h2>
              <ContactForm />
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl font-serif font-medium text-white mb-6">Nossa Localização</h2>
            <div className="w-full h-[450px] rounded-sm overflow-hidden border border-wood-900/50 bg-[#0c0a09]">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address + ', ' + siteConfig.city + ' - ' + siteConfig.state)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
