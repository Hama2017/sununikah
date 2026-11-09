import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { LinkButton } from "@/components/ui/LinkButton";
import { Text } from "@/components/ui/Text";
import { AppRoute, LandingAnchor } from "@/enums/route.enum";
import { ButtonVariant, TextVariant } from "@/enums/ui.enum";

export function HeroContent() {
  return (
    <div>
      <Text as="h1" variant={TextVariant.Display}>
        <SplitWords text="Le mariage mérite une rencontre digne et sincère." delay={0.2} />
      </Text>
      <Reveal delay={0.8}>
        <Text variant={TextVariant.BodyLg} className="mt-5 text-canvas/85">
          SunuNikah accompagne les célibataires, veufs et divorcés dans une démarche cadrée vers
          le mariage, fondée sur le respect mutuel et des principes de vie partagés.
        </Text>
      </Reveal>
      <Reveal delay={1} className="mt-9 flex flex-col gap-3 sm:flex-row">
        <LinkButton href={AppRoute.SignUp} variant={ButtonVariant.Inverse}>
          Poursuivre avec intention
        </LinkButton>
        <LinkButton href={LandingAnchor.Journey} variant={ButtonVariant.OutlineOnDark}>
          Découvrir le parcours
        </LinkButton>
      </Reveal>
    </div>
  );
}
