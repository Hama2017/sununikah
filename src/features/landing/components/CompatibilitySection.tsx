import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import { TextVariant } from "@/enums/ui.enum";
import { COMPATIBILITY_TOPICS } from "../data/compatibility";

export function CompatibilitySection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Compatibilité"
        title="Les vraies questions, posées dès le début."
        description="Ce qui se découvre trop tard ailleurs figure ici sur chaque profil."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {COMPATIBILITY_TOPICS.map(({ question, options, selected }, index) => (
          <Reveal key={question} delay={index * 0.1}>
            <Card className="h-full transition duration-500 hover:-translate-y-1 hover:border-gold">
              <Text as="h3" variant={TextVariant.HeadlineSm}>
                {question}
              </Text>
              <div className="mt-4 flex flex-wrap gap-2">
                {options.map((option) => (
                  <Chip key={option} label={option} selected={option === selected} />
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
