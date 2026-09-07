import Link from "next/link";
import { about } from "@/content/pages/about";
import { accueil } from "@/content/pages/accueil";
import { equipe } from "@/content/pages/equipe";
import { site } from "@/content/site";
import { Frame } from "../frame";

export function EquipeBref() {
  return (
    <section id="equipe" className="scroll-mt-24">
      <Frame className="flex flex-col gap-3 border-t border-rl-line py-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
            {accueil.equipe.kicker}
          </p>
          <p className="mt-2 text-[13px] text-[#888888]">
            {equipe.effectifLabel}
            <span className="mx-3 text-white/20">/</span>
            {site.ecole}
          </p>
        </div>
        <Link
          href="/about"
          className="font-mono text-[10px] tracking-[0.2em] text-[#888888] no-underline transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {accueil.equipe.voir} →
        </Link>
      </Frame>

      <ul className="grid border-t border-rl-line sm:grid-cols-2">
        {about.poles.items.map((pole, index) => (
          <li
            key={pole.slug}
            className="border-b border-rl-line sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <Link
              href={`/about#pole-${pole.slug}`}
              className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden px-6 py-8 no-underline md:min-h-[320px] md:px-10 xl:px-14 focus-visible:outline focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute top-2 right-4 select-none text-[120px] font-bold leading-none tracking-[-0.08em] text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.08] md:text-[160px]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative font-mono text-[10px] tracking-[0.22em] text-[#666666]">
                {equipe.poleKicker} {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative text-[36px] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-[48px]">
                {pole.nom}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
