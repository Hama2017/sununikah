import { Rosette } from "@/components/ui/Rosette";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { SectionTone, TextVariant } from "@/enums/ui.enum";

export function VerseSection() {
  return (
    <Section tone={SectionTone.Sand} containerClassName="max-w-160 text-center">
      <figure>
        <Rosette className="mx-auto size-5" />
        <Text as="blockquote" variant={TextVariant.HeadlineMd} className="mt-6 italic">
          « Et parmi Ses signes Il a créé de vous, pour vous, des épouses pour que vous viviez en
          tranquillité avec elles et Il a mis entre vous de l&apos;affection et de la bonté. »
        </Text>
        <Text as="figcaption" variant={TextVariant.Eyebrow} className="mt-6 text-gold-ink">
          Sourate Ar-Rum, 30:21
        </Text>
      </figure>
    </Section>
  );
}
