import { HandHeart, MailCheck, Scale, ShieldCheck, type LucideIcon } from "lucide-react";

type Principle = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const PRINCIPLES: Principle[] = [
  {
    icon: HandHeart,
    title: "Une intention affichée",
    text: "Chaque profil expose sa vision du mariage et son projet de foyer. On vient ici pour se marier.",
  },
  {
    icon: MailCheck,
    title: "Aucune navigation anonyme",
    text: "Adresse e-mail vérifiée et profil complet sont exigés avant d'accéder aux autres membres.",
  },
  {
    icon: Scale,
    title: "Des critères qui engagent",
    text: "Famille, valeurs spirituelles, logement après le mariage : l'essentiel est abordé dès le départ.",
  },
  {
    icon: ShieldCheck,
    title: "Des profils relus",
    text: "Biographies et photos passent en modération. Un visage identifiable et une tenue pudique sont requis.",
  },
];
