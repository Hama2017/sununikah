import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { AppRoute, LandingAnchor } from "@/enums/route.enum";
import { ButtonVariant, TextVariant } from "@/enums/ui.enum";
import { ProfilePreview } from "./ProfilePreview";

export function HeroSection() {
  return (
    <Section
      containerClassName="grid items-center gap-14 md:grid-cols-[1fr_minmax(0,24rem)] lg:gap-24"
      className="md:py-20"
    >
      <div className="max-w-140">
        <VerifiedBadge label="Intention vérifiée" />
        <Text as="h1" variant={TextVariant.Display} className="mt-6">
          Le mariage mérite une rencontre digne et sincère.
        </Text>
        <Text variant={TextVariant.BodyLg} className="mt-5 text-muted">
          SunuNikah accompagne les célibataires, veufs et divorcés dans une démarche cadrée vers
          le mariage, fondée sur le respect mutuel et des principes de vie partagés.
        </Text>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={AppRoute.SignUp}>Poursuivre avec intention</LinkButton>
          <LinkButton href={LandingAnchor.Journey} variant={ButtonVariant.Secondary}>
            Découvrir le parcours
          </LinkButton>
        </div>
      </div>
      <ProfilePreview />
    </Section>
  );
}
