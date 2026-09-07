import type { Membre } from "@/lib/content/types";

function membre(
  membre: Omit<Membre, "photo" | "autorisationImage" | "promotion">,
): Membre {
  return {
    ...membre,
    promotion: "",
    photo: null,
    autorisationImage: false,
  };
}

export const membres: Membre[] = [
  membre({
    slug: "bruno-de-lambert",
    prenom: "Bruno",
    nom: "De Lambert",
    role: "Président",
    pole: "bureau",
  }),
  membre({
    slug: "eva-derogis",
    prenom: "Eva",
    nom: "Derogis",
    role: "Vice Présidente",
    pole: "bureau",
  }),
  membre({
    slug: "jean-pierre-dupuis",
    prenom: "Jean-Pierre",
    nom: "Dupuis",
    role: "Trésorier",
    pole: "bureau",
  }),
  membre({
    slug: "bastian-pautet",
    prenom: "Bastian",
    nom: "Pautet",
    role: "Secrétaire",
    pole: "bureau",
  }),
  membre({
    slug: "lucas-suprayen",
    prenom: "Lucas",
    nom: "Suprayen",
    role: "Resp. Com",
    pole: "com",
  }),
  membre({
    slug: "philiphe-maillard",
    prenom: "Philiphe",
    nom: "Maillard",
    role: "Resp. Meca / CAO",
    pole: "meca",
  }),
  membre({
    slug: "michel-antoine-disson",
    prenom: "Michel Antoine",
    nom: "Disson",
    role: "Resp. Event",
    pole: "event",
  }),
  membre({
    slug: "juliette-fontenelle",
    prenom: "Juliette",
    nom: "Fontenelle",
    role: "Resp. Sponsors",
    pole: "sponsors",
  }),
  membre({
    slug: "emma-verbois",
    prenom: "Emma",
    nom: "Verbois",
    role: "Resp. Merch",
    pole: "merch",
  }),
];
