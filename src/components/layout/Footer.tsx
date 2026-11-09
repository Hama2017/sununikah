import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Text } from "@/components/ui/Text";
import { LogoVariant, TextVariant } from "@/enums/ui.enum";
import { NAV_LINKS } from "./navigation";

export function Footer() {
  return (
    <footer className="bg-primary-deep py-12 text-canvas">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo variant={LogoVariant.HorizontalOnDark} className="h-14 w-auto" />
          <Text variant={TextVariant.BodySm} className="mt-3 text-canvas/70">
            Jusqu&apos;à ce que jannah nous réunisse
          </Text>
          <Text variant={TextVariant.BodySm} className="mt-1 text-canvas/50">
            Photos et exemple de profil à titre d&apos;illustration.
          </Text>
        </div>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-7 gap-y-3">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="text-body-sm text-canvas/80 hover:text-gold-soft">
              {label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
