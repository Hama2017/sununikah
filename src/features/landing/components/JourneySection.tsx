import { Reveal } from "@/components/motion/Reveal";
import { ScrollLine } from "@/components/motion/ScrollLine";
import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoVariant } from "@/enums/ui.enum";
import { JOURNEY_STEPS } from "../data/journey";
import { JourneyStep } from "./JourneyStep";

export function JourneySection() {
  return (
    <Section id="parcours" containerClassName="grid gap-12 md:grid-cols-[1fr_1.3fr] lg:gap-20">
      <div className="md:sticky md:top-28 md:self-start">
        <SectionHeading
          eyebrow="Le parcours"
          title="Un chemin clair, sans raccourci."
          description="Aucune étape ne peut être sautée : c'est ce qui protège chaque membre."
        />
        <Reveal delay={0.2} className="mt-10 hidden md:block">
          <Logo variant={LogoVariant.Mark} className="h-60 w-auto" />
        </Reveal>
      </div>
      <ol className="relative">
        <ScrollLine />
        {JOURNEY_STEPS.map((step, index) => (
          <JourneyStep key={step.title} {...step} position={index + 1} />
        ))}
      </ol>
    </Section>
  );
}
