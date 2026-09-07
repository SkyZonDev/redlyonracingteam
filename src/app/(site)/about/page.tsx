import { about } from "@/content/pages/about";
import { getBureau, getMembresDesPoles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { AboutHero } from "../_components/about/hero";
import { AboutManifeste } from "../_components/about/manifeste";
import { AboutMembres } from "../_components/about/membres";
import { AboutPartenaire } from "../_components/about/partenaire";
import { AboutTimeline } from "../_components/about/timeline";

export const metadata = pageMetadata({
  title: "À propos",
  description: about.chapo,
  path: "/about",
});

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
