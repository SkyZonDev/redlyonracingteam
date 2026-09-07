import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Projet } from "@/lib/content/types";

export function absoluteUrl(path = "/"): string {
  if (path === "" || path === "/") {
    return site.url;
  }
  return new URL(path.startsWith("/") ? path : `/${path}`, site.url).href;
}

type OgType = "website" | "article";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  type?: OgType;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imagePath =
    image ??
    (path.startsWith("/projets/") && path !== "/projets"
      ? `${path}/opengraph-image`
      : "/og-image.png");
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : absoluteUrl(imagePath);
  const images = [
    {
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      locale: "fr_FR",
      siteName: site.nom,
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  const organizationId = `${site.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsTeam",
        "@id": organizationId,
        name: site.nom,
        alternateName: site.nomCourt,
        url: site.url,
        email: site.email,
        logo: absoluteUrl("/logo/1.png"),
        image: absoluteUrl("/logo/1.png"),
        foundingDate: String(site.anneeCreation),
        description: site.description,
        sport: "Motorsport",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.ville,
          addressCountry: "FR",
        },
        memberOf: {
          "@type": "CollegeOrUniversity",
          name: site.ecole,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.nom,
        inLanguage: "fr-FR",
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function projetJsonLd(projet: Projet) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: projet.titre,
    description: projet.resume,
    url: absoluteUrl(`/projets/${projet.slug}`),
    inLanguage: "fr-FR",
    creator: { "@id": `${site.url}/#organization` },
  };
}
