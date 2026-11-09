import { Reveal } from "@/components/motion/Reveal";
import { BackgroundPhoto } from "@/components/ui/BackgroundPhoto";
import { LinkButton } from "@/components/ui/LinkButton";
import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { AppRoute } from "@/enums/route.enum";
import {
  BackgroundLayout,
  ButtonVariant,
  LogoVariant,
  SectionTone,
  TextVariant,
} from "@/enums/ui.enum";
import { BACKGROUND_IMAGES } from "../data/images";

export function FinalCtaSection() {
  return (
    <Section
      tone={SectionTone.Emerald}
      className="pt-80 md:py-28"
      background={
        <BackgroundPhoto
          src={BACKGROUND_IMAGES.finalCta}
          layout={BackgroundLayout.Wide}
          overlayClassName="bg-linear-to-b from-transparent from-55% to-primary md:bg-linear-to-r md:from-primary md:from-14% md:to-transparent md:to-32%"
          imageClassName="object-right-top"
        />
      }
    >
      <Reveal className="md:w-1/2 md:pr-10">
        <Logo variant={LogoVariant.MarkOnDark} className="h-20 w-auto" />
        <Text as="h2" variant={TextVariant.Display} className="mt-6">
          Prêt à avancer vers le mariage ?
        </Text>
        <Text variant={TextVariant.BodyLg} className="mt-4 text-canvas/80">
          Créez votre profil et engagez votre démarche, avec sérieux et sérénité.
        </Text>
        <LinkButton href={AppRoute.SignUp} variant={ButtonVariant.Inverse} className="mt-9">
          Créer mon profil
        </LinkButton>
      </Reveal>
    </Section>
  );
}
