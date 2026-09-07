import Link from "next/link";
import { accueil } from "@/content/pages/accueil";
import { site } from "@/content/site";
import type { Projet } from "@/lib/content/types";
import { Frame } from "../frame";

export function ProjetsEnCours({ projets }: { projets: Projet[] }) {
  if (projets.length === 0) return null;

  return (
    <section id="projets" className="scroll-mt-24">
      <Frame className="flex items-end justify-between gap-6 border-t border-rl-line py-6">
        <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {accueil.projets.kicker}
        </p>
        <Link
          href="/projets"
          className="font-mono text-[10px] tracking-[0.2em] text-[#888888] no-underline transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {accueil.projets.tous} →
        </Link>
      </Frame>

      <ul className="grid border-t border-rl-line lg:grid-cols-3">
        {projets.map((projet, index) => (
          <li
            key={projet.slug}
            id={`chantier-${projet.slug}`}
            className="scroll-mt-24 border-b border-rl-line lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <Link
              href={`/projets/${projet.slug}`}
              className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden px-6 py-8 no-underline md:min-h-[560px] md:px-10 md:py-10 xl:px-14 focus-visible:outline focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -bottom-6 select-none text-[160px] font-bold leading-none tracking-[-0.08em] text-white/[0.04] transition-colors duration-500 group-hover:text-rl-red/20 md:text-[220px]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative font-mono text-[10px] tracking-[0.22em] text-rl-red">
                {site.etats[projet.etat]}
              </span>
              <h3 className="relative mt-4 text-[32px] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-[44px]">
                {projet.titre}
              </h3>
              <p className="relative mt-5 max-w-[34ch] text-[14px] leading-[1.65] text-[#8a8a8a] transition-colors duration-300 group-hover:text-[#cfcfcf]">
                {projet.resume}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
