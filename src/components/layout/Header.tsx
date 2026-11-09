import Link from "next/link";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Logo } from "@/components/ui/Logo";
import { AppRoute } from "@/enums/route.enum";
import { ButtonVariant } from "@/enums/ui.enum";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "./navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <Container className="relative flex h-20 items-center justify-between gap-4">
        <Link href={AppRoute.Home} aria-label="Accueil SunuNikah" className="shrink-0">
          <Logo className="h-12 w-auto" preload />
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="text-body-md text-primary-soft hover:text-gold-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <LinkButton href={AppRoute.SignIn} variant={ButtonVariant.Tertiary}>
            Se connecter
          </LinkButton>
          <div className="hidden md:block">
            <LinkButton href={AppRoute.SignUp}>Créer mon profil</LinkButton>
          </div>
          <MobileMenu />
        </div>
      </Container>
      <ScrollProgress />
    </header>
  );
}
