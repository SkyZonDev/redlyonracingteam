import type { Projet } from "@/lib/content/types";

export const repliqueF1: Projet = {
  slug: "replique-f1",
  titre: "Réplique F1 Ferrari 2025",
  resume:
    "Réplique grandeur nature en bois d'une Ferrari F1 2025, avec cockpit détaillé, éclairages et diffusion sonore, pour expositions et événements partenaires.",
  etat: "idee",
  progress: 0,
  moyens: ["Menuiserie", "LED", "Audio"],
  image: null,
  descriptionLongue:
    "Maquette 1:1 en bois de la silhouette Ferrari F1 2025. Cockpit détaillé, éclairage LED et boucle audio moteur V6. Transportable, destinée aux salons et comme support de branding sponsors.",
  features: [
    "Silhouette Ferrari F1 2025 fidèle",
    "Cockpit intérieur détaillé",
    "Éclairages LED et son moteur V6",
  ],
  technicalSpecs: [
    {
      category: "Dimensions et structure",
      specs: [
        { name: "Longueur", value: "5,2 m" },
        { name: "Largeur", value: "~2,0 m" },
        { name: "Hauteur", value: "~0,95 m" },
        { name: "Matériau", value: "Bois (massif + contreplaqué)" },
        { name: "Construction", value: "Menuiserie de précision" },
        { name: "Finition", value: "Peinture, vernis, branding" },
      ],
    },
    {
      category: "Cockpit",
      specs: [
        { name: "Niveau de détail", value: "Intérieur détaillé" },
        { name: "Volant", value: "Réplique dimensionnée" },
        { name: "Tableau de bord", value: "Écrans / panneaux simulés" },
        { name: "Siège", value: "Moussé et habillé" },
        { name: "Halo", value: "Bois / composite" },
      ],
    },
    {
      category: "Éclairage et son",
      specs: [
        { name: "Éclairage", value: "LEDs programmables" },
        { name: "Contrôleur", value: "Arduino / ESP32" },
        { name: "Enceintes", value: "Intégrées dans la structure" },
        { name: "Son", value: "Moteur V6 turbo (boucle)" },
        { name: "Alimentation", value: "Réseau ou groupe électrogène" },
      ],
    },
    {
      category: "Exposition",
      specs: [
        { name: "Branding", value: "Carrosserie complète" },
        { name: "Portabilité", value: "Structure modulaire" },
        { name: "Installation", value: "Assemblage rapide sur site" },
        { name: "Usage", value: "Expositions, salons, événements" },
      ],
    },
  ],
  timeline: [
    {
      phase: "Recherche et références",
      description: "Photos, vidéos et dimensions de la Ferrari F1 2025",
      status: "in-progress",
      date: "Phase 1",
    },
    {
      phase: "Modélisation 3D",
      description: "Modèle numérique à l'échelle pour la fabrication",
      status: "planned",
      date: "Phase 2",
    },
    {
      phase: "Découpe et structure bois",
      description: "Gabarits, armature et silhouette",
      status: "planned",
      date: "Phase 3",
    },
    {
      phase: "Fabrication cockpit",
      description: "Construction détaillée de l'intérieur",
      status: "planned",
      date: "Phase 4",
    },
    {
      phase: "Finition carrosserie",
      description: "Lissage, enduit, peinture, préparation branding",
      status: "planned",
      date: "Phase 5",
    },
    {
      phase: "Éclairage et son",
      description: "Câblage LED, enceintes, contrôleur",
      status: "planned",
      date: "Phase 6",
    },
    {
      phase: "Branding sponsors",
      description: "Logos, vinyle ou peinture",
      status: "planned",
      date: "Phase 7",
    },
    {
      phase: "Première exposition",
      description: "Tests, transport et première présentation",
      status: "planned",
      date: "Phase 8",
    },
  ],
  team: [
    {
      role: "Équipe complète",
      name: "10 personnes",
      description: "Menuiserie, design, électronique",
    },
    {
      role: "Menuiserie et structure",
      name: "Sous-équipe fabrication",
      description: "Découpe, assemblage, finition",
    },
    {
      role: "Cockpit",
      name: "Sous-équipe intérieur",
      description: "Construction et habillage du cockpit",
    },
    {
      role: "Éclairage et son",
      name: "Sous-équipe électronique",
      description: "LEDs, enceintes, programmation",
    },
    {
      role: "Design et branding",
      name: "Sous-équipe visuelle",
      description: "Finition et cohérence sponsors",
    },
  ],
  challenges: [
    "Silhouette Ferrari 2025 fidèle en bois",
    "Structure modulaire transportable",
    "Cockpit convaincant à budget contenu",
    "LEDs et enceintes discrètes dans le bois",
    "Poids pour le transport",
    "Coordination du branding",
  ],
  achievements: [
    "Équipe de 10 personnes constituée",
    "Choix du bois : accessible et réparable",
    "Recherche visuelle de la SF-25 en cours",
    "Support prévu pour les logos partenaires",
  ],
  innovations: [
    {
      title: "Structure modulaire en bois",
      description:
        "Sections détachables, transport entre sites, assemblage sans outillage spécialisé.",
      status: "En conception",
      uniqueness: "Réplique F1 1:1 en menuiserie modulaire",
    },
    {
      title: "Cockpit détaillé",
      description: "Volant, tableau de bord et halo, entièrement en bois.",
      status: "En conception",
      uniqueness: "Niveau de détail intérieur rare à cette échelle",
    },
    {
      title: "Lumière et son",
      description:
        "Boucle V6 turbo et LEDs programmables pour une présence sur stand.",
      status: "En conception",
      uniqueness: "Maquette statique multi-sensorielle",
    },
  ],
  technologies: [
    "Menuiserie (massif / contreplaqué)",
    "Modélisation 3D",
    "LEDs addressables",
    "Arduino / ESP32",
    "Audio embarqué",
    "Peinture et vinyle",
  ],
  budget: {
    total: "À définir",
    breakdown: [],
    notes: [
      "Budget après modélisation 3D et inventaire matériaux",
      "Recherche de sponsors pour une partie des coûts",
    ],
  },
  futureUpgrades: [],
};
