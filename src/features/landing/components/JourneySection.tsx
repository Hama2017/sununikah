import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JOURNEY_STEPS } from "../data/journey";
import { JourneyStep } from "./JourneyStep";

export function JourneySection() {
  return (
    <Section id="parcours" containerClassName="grid gap-12 md:grid-cols-[1fr_1.3fr] lg:gap-20">
      <SectionHeading
        eyebrow="Le parcours"
        title="Un chemin clair, sans raccourci."
        description="Aucune étape ne peut être sautée : c'est ce qui protège chaque membre."
        className="md:sticky md:top-28 md:self-start"
      />
      <ol>
        {JOURNEY_STEPS.map((step, index) => (
          <JourneyStep key={step.title} {...step} position={index + 1} />
        ))}
      </ol>
    </Section>
  );
}
