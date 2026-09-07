import type { MetadataRoute } from "next";
import { getProjets } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/projets", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partenaires", changeFrequency: "monthly", priority: 0.8 },
  { path: "/actualites", changeFrequency: "weekly", priority: 0.6 },
  { path: "/nous-rejoindre", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projets = getProjets().map((projet) => ({
    url: absoluteUrl(`/projets/${projet.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projets,
  ];
}
