import { PlanType } from "@/enums/plan.enum";

type Plan = {
  type: PlanType;
  audience: string;
  title: string;
  price: string;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    type: PlanType.Seeking,
    audience: "Pour se marier",
    title: "Je cherche mon conjoint",
    price: "10 000 F CFA",
    features: [
      "Matcher avec les profils compatibles",
      "Discuter après un intérêt mutuel",
      "Échanges encadrés par un modérateur",
    ],
  },
  {
    type: PlanType.Married,
    audience: "Pour les couples",
    title: "Nous sommes mariés",
    price: "5 000 F CFA",
    features: ["Accès aux jeux pour les couples mariés", "Et plus encore"],
  },
];
