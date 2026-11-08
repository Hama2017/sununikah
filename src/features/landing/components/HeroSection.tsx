import { BackgroundPhoto } from "@/components/ui/BackgroundPhoto";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { AppRoute, LandingAnchor } from "@/enums/route.enum";
import { BackgroundLayout, ButtonVariant, SectionTone, TextVariant } from "@/enums/ui.enum";
import { BACKGROUND_IMAGES } from "../data/images";
import { ProfilePreview } from "./ProfilePreview";

const HERO_OVERLAY =
  "bg-linear-to-b from-transparent from-55% to-primary md:bg-linear-to-r md:from-primary-deep/95 md:from-30% md:via-transparent md:via-55% md:to-primary-deep/30";

export function HeroSection() {
  return (
    <Section
      tone={SectionTone.Emerald}
      className="pt-80 md:py-20"
      containerClassName="grid items-center gap-14 md:grid-cols-[minmax(0,30rem)_1fr]"
      background={
        <BackgroundPhoto
          src={BACKGROUND_IMAGES.hero}
          layout={BackgroundLayout.Full}
          overlayClassName={HERO_OVERLAY}
          imageClassName="object-[55%_0%] md:object-top"
          preload
        />
      }
    >
      <div>
        <VerifiedBadge label="Intention vérifiée" />
        <Text as="h1" variant={TextVariant.Display} className="mt-6">
          Le mariage mérite une rencontre digne et sincère.
        </Text>
        <Text variant={TextVariant.BodyLg} className="mt-5 text-canvas/85">
          SunuNikah accompagne les célibataires, veufs et divorcés dans une démarche cadrée vers
          le mariage, fondée sur le respect mutuel et des principes de vie partagés.
        </Text>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={AppRoute.SignUp} variant={ButtonVariant.Inverse}>
            Poursuivre avec intention
          </LinkButton>
          <LinkButton href={LandingAnchor.Journey} variant={ButtonVariant.OutlineOnDark}>
            Découvrir le parcours
          </LinkButton>
        </div>
      </div>
      <div className="w-full max-w-80 justify-self-center md:justify-self-end">
        <ProfilePreview />
      </div>
    </Section>
  );
}
