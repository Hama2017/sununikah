import { LinkButton } from "@/components/ui/LinkButton";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { AppRoute } from "@/enums/route.enum";
import { ButtonVariant, SectionTone, TextVariant } from "@/enums/ui.enum";
import { LANDING_IMAGES } from "../data/images";
import { IllustrationCaption } from "./IllustrationCaption";

export function FinalCtaSection() {
  return (
    <Section
      tone={SectionTone.Emerald}
      containerClassName="grid items-center gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-20"
    >
      <figure>
        <Photo
          {...LANDING_IMAGES.coupleSunset}
          sizes="(min-width: 768px) 55vw, 90vw"
          className="aspect-16/9 rounded-card border border-gold/40"
        />
        <IllustrationCaption />
      </figure>
      <div>
        <Text as="h2" variant={TextVariant.Display}>
          Prêt à avancer vers le mariage ?
        </Text>
        <Text variant={TextVariant.BodyLg} className="mt-4 text-canvas/80">
          Créez votre profil et engagez votre démarche, avec sérieux et sérénité.
        </Text>
        <LinkButton href={AppRoute.SignUp} variant={ButtonVariant.Inverse} className="mt-9">
          Créer mon profil
        </LinkButton>
      </div>
    </Section>
  );
}
