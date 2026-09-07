export const nousRejoindre = {
  kicker: "Devenir partenaire",
  titre: "Parlez au bureau",
  chapo:
    "Matériel, usinage, atelier ou apport financier : les partenariats se discutent avec le bureau. Pas un dossier générique.",
  points: [
    "Un véhicule étudiant en construction à Lyon, pas un t-shirt à coller un logo.",
    "Un chantier documenté : photos datées, avancement réel.",
    "Un seul contact pour l'association.",
  ],
  form: {
    entreprise: "Entreprise",
    nom: "Nom",
    fonction: "Fonction",
    email: "E-mail",
    telephone: "Téléphone",
    apport: "Type d'apport",
    message: "Message",
    messagePlaceholder:
      "Ce que vous pouvez apporter, et ce que vous attendez en visibilité.",
    apports: [
      { value: "financier", label: "Financier" },
      { value: "materiel", label: "Pièces / matériel" },
      { value: "usinage", label: "Usinage" },
      { value: "atelier", label: "Temps d'atelier" },
      { value: "autre", label: "Autre" },
    ],
    submit: "Ouvrir le message",
    note: "Le bouton ouvre votre messagerie, préremplie. Rien n'est envoyé ni stocké par le site.",
    sujet: "Partenariat",
  },
} as const;
