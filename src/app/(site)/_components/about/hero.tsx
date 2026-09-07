import { about } from "@/content/pages/about";
import { site } from "@/content/site";
import { CtaLink } from "../cta-link";
import { Frame } from "../frame";

const lignesTitre = about.titre.split(". ");

export function AboutHero() {
  return (
    <section className="relative flex min-h-[80svh] flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[10%] right-0 select-none font-bold leading-[0.72] tracking-[-0.08em] text-white/[0.045] text-[clamp(160px,38vw,460px)]"
      >
        {about.saison}
      </div>

      <Frame className="relative z-10 flex flex-1 flex-col justify-end pt-28 pb-10 md:pt-32 md:pb-14">
        <p className="mb-6 font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {about.kicker}
        </p>
        <h1 className="max-w-[16ch] text-[clamp(44px,9vw,128px)] font-bold uppercase leading-[0.8] tracking-[-0.055em] text-white">
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
        <p className="mt-8 max-w-[44ch] text-[15px] leading-[1.65] text-[#9a9a9a] md:text-[16px]">
          {about.chapo}
        </p>
        <div className="mt-9">
          <CtaLink href={site.ctaPartenaire.href}>
            {site.ctaPartenaire.label}
          </CtaLink>
        </div>
      </Frame>

      <dl className="relative z-10 grid border-t border-rl-line sm:grid-cols-2 lg:grid-cols-5">
        {about.faits.map((fait) => (
          <div
            key={fait.k}
            className="flex items-baseline justify-between gap-4 border-b border-rl-line px-6 py-4 sm:border-r sm:last:border-r-0 lg:border-b-0 lg:px-8 xl:px-10"
          >
            <dt className="font-mono text-[10px] tracking-[0.2em] text-[#666666]">
              {fait.k}
            </dt>
            <dd className="text-right text-[13px] font-semibold tracking-[0.04em] text-white">
              {fait.v}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
