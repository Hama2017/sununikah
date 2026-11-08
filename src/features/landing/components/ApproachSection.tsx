import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionTone } from "@/enums/ui.enum";
import { LANDING_IMAGES } from "../data/images";
import { PRINCIPLES } from "../data/approach";
import { IllustrationCaption } from "./IllustrationCaption";
import { PrincipleItem } from "./PrincipleItem";

export function ApproachSection() {
  return (
    <Section
      id="approche"
      tone={SectionTone.Sand}
      containerClassName="grid items-center gap-12 md:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20"
    >
      <figure>
        <Photo
          {...LANDING_IMAGES.womanReading}
          sizes="(min-width: 768px) 26rem, 90vw"
          className="aspect-4/5 rounded-card border border-gold/30"
        />
        <IllustrationCaption />
      </figure>
      <div>
        <SectionHeading
          eyebrow="Notre approche"
          title="Ni jeu, ni défilement sans fin."
          description="Ici, chaque rapprochement repose sur ce qui compte vraiment pour construire un foyer."
        />
        <ul className="mt-9">
          {PRINCIPLES.map((principle) => (
            <PrincipleItem key={principle.title} {...principle} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
