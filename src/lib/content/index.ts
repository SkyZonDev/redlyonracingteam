import { actualites } from "@/content/actualites";
import { membres } from "@/content/membres";
import { partenaires } from "@/content/partenaires";
import { preuve } from "@/content/preuve";
import { prototypeBiplace } from "@/content/projets/prototype-biplace";
import { repliqueF1 } from "@/content/projets/replique-f1";
import { simulateur } from "@/content/projets/simulateur";
import {
  type Actualite,
  type Membre,
  ordreTiers,
  type Partenaire,
  type Photo,
  type Projet,
  paliers,
  type TierPartenaire,
} from "@/lib/content/types";

const TROIS_MOIS_MS = 1000 * 60 * 60 * 24 * 90;

export function getProjets(): Projet[] {
  return [prototypeBiplace, repliqueF1, simulateur];
}

export function getProjet(slug: string): Projet | undefined {
  return getProjets().find((projet) => projet.slug === slug);
}

export function getPreuve(): Photo[] {
  return preuve;
}

export function getPartenairesActifs(now = new Date()): Partenaire[] {
  return partenaires
    .filter((partenaire) => {
      if (now < new Date(partenaire.debut)) return false;
      if (partenaire.fin && now > new Date(partenaire.fin)) return false;
      return true;
    })
    .sort((a, b) => {
      const palier = ordreTiers[a.tier] - ordreTiers[b.tier];
      if (palier !== 0) return palier;
      return a.nom.localeCompare(b.nom, "fr");
    });
}

export function getPartenairesParPalier(
  now = new Date(),
): { tier: TierPartenaire; items: Partenaire[] }[] {
  const actifs = getPartenairesActifs(now);
  return paliers.map((tier) => ({
    tier,
    items: actifs.filter((partenaire) => partenaire.tier === tier),
  }));
}

export function getActualitesRecentes(now = new Date()): Actualite[] {
  const cutoff = now.getTime() - TROIS_MOIS_MS;
  return actualites
    .filter((article) => new Date(article.date).getTime() >= cutoff)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}

export function getMembres(): Membre[] {
  const ordre: Membre["pole"][] = [
    "bureau",
    "com",
    "meca",
    "event",
    "sponsors",
    "merch",
  ];

  return membres
    .map((membre) => ({
      ...membre,
      photo: membre.autorisationImage ? membre.photo : null,
    }))
    .sort((a, b) => ordre.indexOf(a.pole) - ordre.indexOf(b.pole));
}

export function getBureau(): Membre[] {
  return getMembres().filter((membre) => membre.pole === "bureau");
}

export function getMembresDesPoles(): Membre[] {
  return getMembres().filter((membre) => membre.pole !== "bureau");
}
