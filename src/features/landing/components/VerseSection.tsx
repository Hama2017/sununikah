import { Reveal } from "@/components/motion/Reveal";
import { Rosette } from "@/components/ui/Rosette";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { SectionTone, TextVariant } from "@/enums/ui.enum";
import { BACKGROUND_IMAGES } from "../data/images";
import { SideImageBackground } from "./SideImageBackground";

export function VerseSection() {
  return (
    <Section
      tone={SectionTone.Emerald}
      className="pt-80 md:py-28"
      background={
        <SideImageBackground src={BACKGROUND_IMAGES.verse} imageClassName="object-[50%_32%]" />
      }
    >
      <Reveal className="md:w-1/2 md:pr-10">
        <figure>
          <Rosette className="size-5 motion-safe:animate-[spin_14s_linear_infinite]" />
          <Text as="blockquote" variant={TextVariant.HeadlineMd} className="mt-6 italic">
            « Et parmi Ses signes Il a créé de vous, pour vous, des épouses pour que vous viviez en
            tranquillité avec elles et Il a mis entre vous de l&apos;affection et de la bonté. »
          </Text>
          <Text as="figcaption" variant={TextVariant.Eyebrow} className="mt-6 text-gold-soft">
            Sourate Ar-Rum, 30:21
          </Text>
        </figure>
      </Reveal>
    </Section>
  );
}
