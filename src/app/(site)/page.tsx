import {
  getActualitesRecentes,
  getPartenairesActifs,
  getPreuve,
  getProjets,
} from "@/lib/content";
import { Actualites } from "./_components/landing/actualites";
import { Endplates } from "./_components/landing/endplates";
import { EquipeBref } from "./_components/landing/equipe-bref";
import { Hero } from "./_components/landing/hero";
import { Partenaires } from "./_components/landing/partenaires";
import { Preuve } from "./_components/landing/preuve";
import { ProjetsEnCours } from "./_components/landing/projets-en-cours";

export default function Home() {
  const projets = getProjets();
  const photos = getPreuve();
  const partenaires = getPartenairesActifs();
  const articles = getActualitesRecentes();

  return (
    <div className="relative">
      <Hero projets={projets} partenaires={partenaires} />
      <ProjetsEnCours projets={projets} />
      <Preuve photos={photos} />
      <EquipeBref />
      <Partenaires partenaires={partenaires} />
      <Endplates />
      <Actualites articles={articles} />
    </div>
  );
}
