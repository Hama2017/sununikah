import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionTone } from "@/enums/ui.enum";
import { PRINCIPLES } from "../data/approach";
import { PrincipleItem } from "./PrincipleItem";

export function ApproachSection() {
  return (
    <Section id="approche" tone={SectionTone.Sand}>
      <SectionHeading
        eyebrow="Notre approche"
        title="Ni jeu, ni défilement sans fin."
        description="Ici, chaque rapprochement repose sur ce qui compte vraiment pour construire un foyer."
      />
      <ul className="mt-12 grid gap-x-16 md:grid-cols-2">
        {PRINCIPLES.map((principle, index) => (
          <PrincipleItem key={principle.title} {...principle} delay={index * 0.1} />
        ))}
      </ul>
    </Section>
  );
}
