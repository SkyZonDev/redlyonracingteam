import type { Projet } from "@/lib/content/types";

export const simulateur: Projet = {
  slug: "simulateur",
  titre: "Simulateur racing",
  resume:
    "Simulateur de course avec châssis tubulaire fait maison et équipement Moza Racing.",
  etat: "fabrication",
  progress: 85,
  moyens: ["Châssis tubulaire", "Moza R5", "ACC / LMU"],
  image: null,
  descriptionLongue:
    "Châssis acier tubulaire conçu et soudé sur mesure, volant direct-drive Moza R5 et grand écran. Entraînement sur Assetto Corsa Competizione et Le Mans Ultimate. Upgrade écran incurvé 49 pouces en cours.",
  features: [
    "Châssis tubulaire fait maison",
    "Volant direct-drive Moza R5",
    "Grand écran immersif",
  ],
  technicalSpecs: [
    {
      category: "Équipement de conduite",
      specs: [
        { name: "Volant", value: "Moza Racing R5 Bundle" },
        { name: "Moteur", value: "Direct-drive 5,5 Nm" },
        { name: "Pédalier", value: "Moza Racing" },
        { name: "Levier", value: "Palettes au volant" },
      ],
    },
    {
      category: "Affichage",
      specs: [
        { name: "Écran actuel", value: "Iiyama 55 pouces" },
        { name: "Écran prévu", value: "Samsung incurvé 49 pouces" },
        { name: "Courbure", value: "1000R" },
        { name: "Résolution prévue", value: "DQHD 5120×1440" },
        { name: "Ratio", value: "32:9" },
      ],
    },
    {
      category: "Châssis",
      specs: [
        { name: "Type", value: "Fabrication maison" },
        { name: "Matériau", value: "Acier tubulaire" },
        { name: "Siège", value: "Baquet racing" },
        { name: "Réglages", value: "Volant et pédales" },
      ],
    },
    {
      category: "Logiciels",
      specs: [
        { name: "Principal", value: "Assetto Corsa Competizione" },
        { name: "Secondaire", value: "Le Mans Ultimate" },
        { name: "Disciplines", value: "GT3, endurance, LMP" },
        { name: "FFB", value: "Force feedback natif" },
      ],
    },
  ],
  timeline: [
    {
      phase: "Conception du châssis",
      description: "Design de la structure tubulaire",
      status: "completed",
      date: "Phase 1",
    },
    {
      phase: "Fabrication du châssis",
      description: "Découpe, soudure, assemblage",
      status: "completed",
      date: "Phase 2",
    },
    {
      phase: "Installation équipements",
      description: "Moza R5, pédalier, siège",
      status: "completed",
      date: "Phase 3",
    },
    {
      phase: "Configuration logicielle",
      description: "ACC et Le Mans Ultimate",
      status: "completed",
      date: "Phase 4",
    },
    {
      phase: "Upgrade écran",
      description: "Samsung incurvé 49 pouces",
      status: "in-progress",
      date: "En cours",
    },
    {
      phase: "Optimisation finale",
      description: "Réglages FFB et ergonomie",
      status: "planned",
      date: "À venir",
    },
  ],
  team: [
    {
      role: "Conception et fabrication",
      name: "Équipe projet",
      description: "Châssis tubulaire sur mesure",
    },
    {
      role: "Configuration",
      name: "Équipe projet",
      description: "Équipements et logiciels",
    },
  ],
  challenges: [
    "Châssis rigide et ergonomique",
    "Soudure précise",
    "Alignement volant / pédales / écran",
    "Réglages FFB Moza R5",
    "Intégration dans l'espace atelier",
  ],
  achievements: [
    "Châssis fait maison et fonctionnel",
    "Direct-drive opérationnel",
    "Deux simulations pro installées",
    "Budget total 700 €",
  ],
  innovations: [],
  technologies: [
    "Moza Racing R5",
    "Assetto Corsa Competizione",
    "Le Mans Ultimate",
    "Soudure acier",
  ],
  budget: {
    total: "700 €",
    breakdown: [
      { category: "Volant Moza R5 Bundle", amount: "400 €", percentage: 57 },
      {
        category: "Châssis (acier tubulaire)",
        amount: "150 €",
        percentage: 21,
      },
      { category: "Siège baquet", amount: "80 €", percentage: 11 },
      { category: "Logiciels (ACC + LMU)", amount: "50 €", percentage: 7 },
      { category: "Divers", amount: "20 €", percentage: 4 },
    ],
    notes: [
      'Écran Iiyama 55" déjà possédé, hors budget',
      'Samsung 49" incurvé à venir, budget séparé',
    ],
  },
  futureUpgrades: [
    {
      upgrade: 'Écran Samsung incurvé 49"',
      description: "Remplacement de l'Iiyama",
      priority: "Haute",
      estimatedCost: "500-700 €",
    },
    {
      upgrade: "Levier séquentiel",
      description: "Shifter Moza",
      priority: "Moyenne",
      estimatedCost: "150 €",
    },
    {
      upgrade: "Frein hydraulique",
      description: "Upgrade pédalier",
      priority: "Moyenne",
      estimatedCost: "200 €",
    },
    {
      upgrade: "Bass shakers",
      description: "Retour de route",
      priority: "Basse",
      estimatedCost: "100 €",
    },
  ],
};
