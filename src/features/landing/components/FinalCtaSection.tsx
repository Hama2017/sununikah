import { LinkButton } from "@/components/ui/LinkButton";
import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { AppRoute } from "@/enums/route.enum";
import { ButtonVariant, LogoVariant, SectionTone, TextVariant } from "@/enums/ui.enum";

export function FinalCtaSection() {
  return (
    <Section
      tone={SectionTone.Emerald}
      containerClassName="flex max-w-160 flex-col items-center text-center"
    >
      <Logo variant={LogoVariant.MarkOnDark} className="h-24 w-auto" />
      <Text as="h2" variant={TextVariant.Display} className="mt-8">
        Prêt à avancer vers le mariage ?
      </Text>
      <Text variant={TextVariant.BodyLg} className="mt-4 text-canvas/80">
        Créez votre profil et engagez votre démarche, avec sérieux et sérénité.
      </Text>
      <LinkButton href={AppRoute.SignUp} variant={ButtonVariant.Inverse} className="mt-9">
        Créer mon profil
      </LinkButton>
    </Section>
  );
}
