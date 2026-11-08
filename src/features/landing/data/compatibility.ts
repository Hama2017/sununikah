type CompatibilityTopic = {
  question: string;
  options: string[];
  selected: string;
};

export const COMPATIBILITY_TOPICS: CompatibilityTopic[] = [
  {
    question: "Quelle vision du mariage ?",
    options: ["Stabilité", "Foyer pieux", "Expatriation"],
    selected: "Foyer pieux",
  },
  {
    question: "Quelle position sur la polygamie ?",
    options: ["Oui", "Non", "À discuter"],
    selected: "À discuter",
  },
  {
    question: "Quel logement après le mariage ?",
    options: ["Indépendant", "Partagé avec la famille", "Indépendant à terme"],
    selected: "Indépendant",
  },
  {
    question: "Quelle situation aujourd'hui ?",
    options: ["Célibataire", "Divorcé(e)", "Veuf(ve)"],
    selected: "Célibataire",
  },
];
