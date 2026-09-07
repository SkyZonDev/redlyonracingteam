import type { Metadata } from "next";
import { about } from "@/content/pages/about";
import { site } from "@/content/site";
import { getBureau, getMembresDesPoles } from "@/lib/content";
import { AboutHero } from "../_components/about/hero";
import { AboutManifeste } from "../_components/about/manifeste";
import { AboutMembres } from "../_components/about/membres";
import { AboutPartenaire } from "../_components/about/partenaire";
import { AboutTimeline } from "../_components/about/timeline";

export const metadata: Metadata = {
  title: `À propos - ${site.nom}`,
  description: about.chapo,
};

export default function AboutPage() {
  const bureau = getBureau();
  const poles = getMembresDesPoles();

  return (
    <div>
      <AboutHero />
      <AboutManifeste />
      <AboutTimeline />
      <AboutMembres bureau={bureau} poles={poles} />
      <AboutPartenaire />
    </div>
  );
}
