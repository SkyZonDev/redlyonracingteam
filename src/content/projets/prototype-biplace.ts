import type { Projet } from "@/lib/content/types";

export const prototypeBiplace: Projet = {
  slug: "prototype-biplace",
  titre: "Prototype biplace",
  resume:
    "Véhicule biplace de compétition propulsé par un moteur de moto 1000 cc.",
  etat: "conception",
  progress: 25,
  moyens: ["CAO", "CFD", "Châssis tubulaire"],
  image: null,
  descriptionLongue:
    "Ce prototype biplace intègre une direction modulaire (monoplace centrale ou biplace déportée) et une aérodynamique active. Propulsé par un moteur moto 1000 cc conservant sa boîte d'origine, il est conçu pour les compétitions inter-écoles, avec un budget maîtrisé.",
  features: [
    "Direction modulaire centrale / déportée",
    "Moteur moto 1000 cc avec boîte d'origine",
  ],
  technicalSpecs: [
    {
      category: "Motorisation",
      specs: [
        { name: "Type", value: "Moteur moto 4 cylindres en ligne" },
        { name: "Cylindrée", value: "1000 cc" },
        { name: "Puissance estimée", value: "150-180 ch" },
        { name: "Couple estimé", value: "110-120 Nm" },
        { name: "Transmission", value: "Boîte séquentielle moto (6 rapports)" },
        { name: "Refroidissement", value: "Liquide" },
      ],
    },
    {
      category: "Châssis et structure",
      specs: [
        { name: "Type", value: "Châssis tubulaire acier" },
        { name: "Configuration", value: "Biplace (modulaire)" },
        { name: "Poids estimé", value: "450-500 kg" },
        { name: "Longueur", value: "3,2 m (estimation)" },
        { name: "Largeur", value: "1,6 m (estimation)" },
        { name: "Hauteur", value: "1,1 m (estimation)" },
      ],
    },
    {
      category: "Direction modulaire",
      specs: [
        { name: "Type", value: "Système à géométrie variable" },
        { name: "Mode monoplace", value: "Position centrale" },
        { name: "Mode biplace", value: "Position déportée gauche" },
        { name: "Conversion", value: "Système mécanique modulaire" },
      ],
    },
    {
      category: "Aérodynamique active",
      specs: [
        { name: "Concept", value: "Éléments mobiles adaptatifs" },
        { name: "Inspiration", value: "Mercedes-AMG One" },
        {
          name: "Éléments actifs",
          value: "Ailerons avant / arrière variables",
        },
        { name: "Modes", value: "Performance / Efficacité / Freinage" },
        { name: "Contrôle", value: "Électronique automatique" },
      ],
    },
    {
      category: "Performance",
      specs: [
        { name: "Vitesse maximale", value: "150 km/h" },
        { name: "0-100 km/h", value: "< 5 s (estimation)" },
        { name: "Rapport poids / puissance", value: "~3 kg/ch" },
        { name: "Freinage", value: "Disques ventilés 4 pistons" },
        { name: "Suspension", value: "Double triangulation" },
      ],
    },
  ],
  timeline: [
    {
      phase: "Conception initiale",
      description: "Étude de faisabilité et définition du concept",
      status: "completed",
      date: "Phase 1",
    },
    {
      phase: "Design châssis tubulaire",
      description: "CAO du châssis et calculs de résistance",
      status: "in-progress",
      date: "Phase 2",
    },
    {
      phase: "Système direction modulaire",
      description: "Conception du mécanisme de repositionnement",
      status: "in-progress",
      date: "Phase 3",
    },
    {
      phase: "Aérodynamique active",
      description: "Design et simulation CFD des éléments mobiles",
      status: "planned",
      date: "Phase 4",
    },
    {
      phase: "Fabrication châssis",
      description: "Découpe et soudure du châssis tubulaire",
      status: "planned",
      date: "Phase 5",
    },
    {
      phase: "Intégration moteur",
      description: "Installation du moteur moto et de la transmission",
      status: "planned",
      date: "Phase 6",
    },
    {
      phase: "Électronique et contrôles",
      description: "Système de gestion moteur et aéro active",
      status: "planned",
      date: "Phase 7",
    },
    {
      phase: "Tests et validation",
      description: "Essais dynamiques et optimisations",
      status: "planned",
      date: "Phase 8",
    },
  ],
  team: [
    {
      role: "Équipe complète",
      name: "20 étudiants",
      description: "Mécanique, électronique, aérodynamique et fabrication",
    },
    {
      role: "Conception châssis",
      name: "Sous-équipe mécanique",
      description: "Design et calculs du châssis tubulaire",
    },
    {
      role: "Direction modulaire",
      name: "Sous-équipe innovation",
      description: "Système de direction repositionnable",
    },
    {
      role: "Aérodynamique active",
      name: "Sous-équipe aéro",
      description: "Conception et simulation des éléments adaptatifs",
    },
    {
      role: "Motorisation",
      name: "Sous-équipe propulsion",
      description: "Intégration du moteur moto au châssis",
    },
  ],
  challenges: [
    "Direction modulaire fiable et sécurisée",
    "Intégration d'un moteur moto dans un châssis automobile",
    "Aérodynamique active avec budget limité",
    "Poids vs rigidité structurelle",
    "Coordination d'une équipe large",
    "Adaptation de la boîte moto à l'usage circuit",
    "Synchronisation des éléments aérodynamiques",
    "Normes de sécurité des compétitions",
  ],
  achievements: [
    "Concept de direction modulaire unique en compétition étudiante",
    "Aéro active inspirée de la F1, adaptée aux moyens étudiants",
    "Moteur moto : performances et coûts contenus",
    "Équipe de 20 personnes mobilisée",
  ],
  innovations: [
    {
      title: "Direction modulaire",
      description:
        "Repositionnement de la direction du centre vers la gauche : monoplace (pilote central) ou biplace (pilote à gauche).",
      status: "En développement",
      uniqueness: "Premier prototype étudiant avec cette architecture",
    },
    {
      title: "Aérodynamique active",
      description:
        "Ailerons mobiles selon accélération, vitesse de pointe et freinage, pour gérer appui et traînée.",
      status: "Phase de conception",
      uniqueness: "Technologie rare en compétition étudiante",
    },
    {
      title: "Intégration moteur moto",
      description: "Bloc 1000 cc complet avec boîte séquentielle d'origine.",
      status: "Sélection en cours",
      uniqueness: "Approche pragmatique sur le coût et la fiabilité",
    },
  ],
  technologies: [
    "SolidWorks / CATIA",
    "Simulation CFD",
    "Calculs éléments finis",
    "Soudure acier",
    "Électronique embarquée",
    "Systèmes hydrauliques / pneumatiques",
  ],
  budget: {
    total: "15 000 €",
    breakdown: [
      { category: "Moteur et transmission", amount: "1 500 €", percentage: 30 },
      {
        category: "Châssis (tubes, soudure)",
        amount: "1 000 €",
        percentage: 20,
      },
      { category: "Suspension et freinage", amount: "800 €", percentage: 16 },
      { category: "Direction modulaire", amount: "600 €", percentage: 12 },
      { category: "Aérodynamique active", amount: "500 €", percentage: 10 },
      { category: "Électronique et capteurs", amount: "300 €", percentage: 6 },
      { category: "Roues et pneumatiques", amount: "200 €", percentage: 4 },
      { category: "Divers et imprévus", amount: "100 €", percentage: 2 },
    ],
    notes: [
      "Budget optimisé grâce au moteur moto complet",
      "Partenariats recherchés pour réduire les coûts",
      "Fabrication maison du châssis",
    ],
  },
  futureUpgrades: [
    {
      upgrade: "Optimisation aérodynamique",
      description: "CFD et tests pour affiner l'aéro active",
      priority: "Haute",
      estimatedCost: "500 €",
    },
    {
      upgrade: "Télémétrie",
      description: "GPS, accéléromètres, températures",
      priority: "Moyenne",
      estimatedCost: "400 €",
    },
    {
      upgrade: "Carrosserie composite",
      description: "Fibre de verre ou carbone",
      priority: "Moyenne",
      estimatedCost: "800 €",
    },
    {
      upgrade: "Système DRS",
      description: "Réduction de traînée sur l'aileron arrière",
      priority: "Basse",
      estimatedCost: "300 €",
    },
  ],
};
