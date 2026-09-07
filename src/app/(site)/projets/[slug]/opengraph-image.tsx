import { site } from "@/content/site";
import { getProjet, getProjets } from "@/lib/content";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = site.nom;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return getProjets().map((projet) => ({ slug: projet.slug }));
}

export default async function ProjetOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = getProjet(slug);

  if (!projet) {
    return renderOgImage({
      kicker: "Projet",
      title: site.nom,
      subtitle: site.description,
    });
  }

  return renderOgImage({
    kicker: `Projet · ${site.etats[projet.etat]}`,
    title: projet.titre,
    subtitle: site.nom,
  });
}
