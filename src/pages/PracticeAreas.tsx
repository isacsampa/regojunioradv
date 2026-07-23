import { SEO } from "@/components/seo/SEO"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { PracticeAreaCard } from "@/components/ui/PracticeAreaCard"
import { practiceAreas } from "@/config/practiceAreas"

export function PracticeAreas() {
  return (
    <>
      <SEO title="Áreas de Atuação" description="Conheça nossas áreas de atuação: Direito Criminal, Direito de Família, Direito Previdenciário e Direito Civil." />
      
      <div className="bg-[#0c0a09] border-b border-wood-900/50 py-16 md:py-24">
        <Container>
          <SectionHeading 
            title="Áreas de Atuação" 
            subtitle="Assessoria jurídica especializada, consultiva e contenciosa."
            centered
          />
        </Container>
      </div>

      <section className="py-24 bg-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <PracticeAreaCard
                key={area.id}
                title={area.title}
                description={area.description}
                href={`/areas-de-atuacao/${area.slug}`}
                icon={area.icon}
                className="h-full"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
