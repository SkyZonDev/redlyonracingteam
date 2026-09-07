import type { EtatProjet } from "@/content/site";

export type Photo = {
  src: string;
  alt: string;
  date: string;
  caption: string;
  kind: "photo" | "cao";
};

export type PhaseStatut = "completed" | "in-progress" | "planned";

export type SpecLigne = {
  name: string;
  value: string;
};

export type SpecGroupe = {
  category: string;
  specs: SpecLigne[];
};

export type ProjetPhase = {
  phase: string;
  description: string;
  status: PhaseStatut;
  date: string;
};

export type ProjetRole = {
  role: string;
  name: string;
  description: string;
};

export type ProjetInnovation = {
  title: string;
  description: string;
  status: string;
  uniqueness: string;
};

export type ProjetBudgetLigne = {
  category: string;
  amount: string;
  percentage: number;
};

export type ProjetUpgrade = {
  upgrade: string;
  description: string;
  priority: string;
  estimatedCost: string;
};

export type Projet = {
  slug: string;
  titre: string;
  resume: string;
  etat: EtatProjet;
  progress: number;
  moyens: string[];
  image: Photo | null;
  descriptionLongue: string;
  features: string[];
  technicalSpecs: SpecGroupe[];
  timeline: ProjetPhase[];
  team: ProjetRole[];
  challenges: string[];
  achievements: string[];
  innovations: ProjetInnovation[];
  technologies: string[];
  budget: {
    total: string;
    breakdown: ProjetBudgetLigne[];
    notes: string[];
  };
  futureUpgrades: ProjetUpgrade[];
};

export type TierPartenaire = "platine" | "or" | "argent" | "bronze";

export const paliers: TierPartenaire[] = ["platine", "or", "argent", "bronze"];

export const ordreTiers: Record<TierPartenaire, number> = {
  platine: 0,
  or: 1,
  argent: 2,
  bronze: 3,
};

export type Partenaire = {
  nom: string;
  logo: string;
  logo_invert?: boolean;
  debut: string;
  fin: string | null;
  tier: TierPartenaire;
  site: string;
};

export type Actualite = {
  slug: string;
  titre: string;
  date: string;
  auteur: string;
  extrait: string;
};

export type PoleSlug =
  | "bureau"
  | "com"
  | "meca"
  | "event"
  | "sponsors"
  | "merch";

export type Membre = {
  slug: string;
  prenom: string;
  nom: string;
  role: string;
  pole: PoleSlug;
  promotion: string;
  photo: Photo | null;
  autorisationImage: boolean;
};
