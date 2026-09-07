import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { accueil } from "@/content/pages/accueil";
import { site } from "@/content/site";
import type { Partenaire, Projet } from "@/lib/content/types";
import { cn } from "@/lib/utils";
import { CtaLink } from "../cta-link";
import { Frame } from "../frame";

const lignesTitre = accueil.titre.split(". ");

function bandePartenaires(partenaires: Partenaire[]) {
  const copies = Math.max(4, Math.ceil(8 / partenaires.length));
  return Array.from({ length: copies }, () => partenaires).flat();
}

export function Hero({
  projets,
  partenaires,
}: {
  projets: Projet[];
  partenaires: Partenaire[];
}) {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] right-0 select-none font-bold leading-[0.72] tracking-[-0.08em] text-white/[0.045] text-[clamp(180px,42vw,520px)]"
      >
        {accueil.saison}
      </div>

      <Frame className="relative z-10 flex flex-1 flex-col justify-end pt-28 pb-10 md:pt-32 md:pb-14">
        <p className="mb-6 font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {accueil.kicker}
        </p>
        <h1 className="max-w-[16ch] text-[clamp(44px,10.5vw,152px)] font-bold uppercase leading-[0.8] tracking-[-0.055em] text-white">
          {lignesTitre.map((ligne, index) => (
            <span key={ligne} className="block">
              {index === lignesTitre.length - 1 ? (
                <span className="italic">
                  {ligne}
                  <span className="not-italic text-rl-red">.</span>
                </span>
              ) : (
                ligne
              )}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-[40ch] text-[15px] leading-[1.65] text-[#9a9a9a] md:text-[16px]">
          {accueil.chapo}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <CtaLink href={site.ctaPartenaire.href}>
            {site.ctaPartenaire.label}
          </CtaLink>
        </div>
      </Frame>

      {partenaires.length > 0 ? (
        <Marquee
          pauseOnHover
          speed={40}
          className="relative z-10 mx-auto mt-10 max-w-[1600px] sm:mt-16"
          aria-label={accueil.partenaires.kicker}
        >
          {bandePartenaires(partenaires).map((partenaire, index) => (
            <div
              key={`${partenaire.nom}-${index}`}
              className="flex h-12 shrink-0 items-center px-10 md:h-14 md:px-14"
            >
              {partenaire.logo ? (
                <Image
                  src={partenaire.logo}
                  alt={partenaire.nom}
                  width={140}
                  height={40}
                  className={cn(
                    "h-8 w-auto max-w-[140px] object-contain opacity-50 grayscale transition-opacity duration-300 hover:opacity-90 md:h-10",
                    partenaire.logo_invert ? "invert" : "",
                  )}
                  style={{
                    filter: partenaire.logo_invert ? "invert(1)" : "none",
                  }}
                />
              ) : (
                <span className="text-[13px] font-semibold tracking-[0.18em] text-white/40 uppercase">
                  {partenaire.nom}
                </span>
              )}
            </div>
          ))}
        </Marquee>
      ) : null}

      {projets.length > 0 ? (
        <nav
          aria-label={accueil.projets.kicker}
          className="relative z-10 grid border-t border-rl-line md:grid-cols-3"
        >
          {projets.map((projet, index) => (
            <Link
              key={projet.slug}
              href={`#chantier-${projet.slug}`}
              className="group flex items-baseline justify-between gap-4 border-b border-rl-line px-6 py-4 no-underline transition-colors duration-300 hover:bg-white/[0.03] md:border-b-0 md:border-r md:last:border-r-0 md:px-10 xl:px-14 focus-visible:outline focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              <span className="flex min-w-0 items-baseline gap-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#555555]">
                  S{String(index + 1).padStart(2, "0")}
                </span>
                <span className="truncate text-[13px] font-semibold tracking-[0.04em] text-white uppercase">
                  {projet.titre}
                </span>
              </span>
              <span className="shrink-0 font-mono text-[10px] tracking-[0.18em] text-rl-red">
                {site.etats[projet.etat]}
              </span>
            </Link>
          ))}
        </nav>
      ) : null}
    </section>
  );
}
