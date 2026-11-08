"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LinkButton } from "@/components/ui/LinkButton";
import { AppRoute } from "@/enums/route.enum";
import { NAV_LINKS } from "./navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const Icon = isOpen ? X : Menu;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-11 items-center justify-center text-primary"
      >
        <Icon className="size-6" aria-hidden />
      </button>
      {isOpen && (
        <nav
          aria-label="Navigation mobile"
          className="absolute inset-x-5 top-full mt-2 flex flex-col rounded-card bg-canvas p-6 shadow-modal md:inset-x-8"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={close} className="py-3 text-title-md text-primary">
              {label}
            </a>
          ))}
          <LinkButton href={AppRoute.SignUp} onClick={close} className="mt-4">
            Créer mon profil
          </LinkButton>
        </nav>
      )}
    </div>
  );
}
