import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import { SectionTone, TextVariant } from "@/enums/ui.enum";
import { PRINCIPLES } from "../data/approach";

export function ApproachSection() {
  return (
    <Section id="approche" tone={SectionTone.Sand}>
      <SectionHeading
        eyebrow="Notre approche"
        title="Ni jeu, ni défilement sans fin."
        description="Ici, chaque rapprochement repose sur ce qui compte vraiment pour construire un foyer."
      />
      <ul className="mt-12 grid gap-x-16 md:grid-cols-2">
        {PRINCIPLES.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-5 border-t border-gold/30 py-7">
            <Icon className="mt-0.5 size-6 shrink-0 text-gold-ink" aria-hidden strokeWidth={1.5} />
            <div>
              <Text as="h3" variant={TextVariant.HeadlineSm}>
                {title}
              </Text>
              <Text className="mt-2 text-muted">{text}</Text>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
