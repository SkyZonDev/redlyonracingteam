export const site = {
  nom: "RedLyon Racing Team",
  nomCourt: "REDLYON",
  signature: "RACING TEAM · ESME, LYON",
  ecole: "ESME",
  ville: "Lyon",
  pays: "France",
  anneeCreation: 2025,
  structure: "Association étudiante · loi 1901",
  email: "contact@redlyonracingteam.com",
  url: "https://redlyonracingteam.com",
  description:
    "Association étudiante de sport automobile à l'ESME, Lyon. Un atelier, un chantier en cours, pas de palmarès.",
  nav: [
    { href: "/projets", label: "Projets" },
    { href: "/about", label: "À propos" },
    { href: "/partenaires", label: "Partenaires" },
    { href: "/actualites", label: "Actualités" },
  ],
  ctaPartenaire: { href: "/nous-rejoindre", label: "Devenir partenaire" },
  social: [] as { href: string; label: string }[],
  etats: {
    idee: "Idée",
    conception: "Conception",
    fabrication: "Fabrication",
    roulant: "Roulant",
  },
} as const;

export type EtatProjet = keyof typeof site.etats;
