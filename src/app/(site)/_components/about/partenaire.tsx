import { about } from "@/content/pages/about";
import { site } from "@/content/site";
import { CtaLink } from "../cta-link";

export function AboutPartenaire() {
  return (
    <section className="flex min-h-[50vh] flex-col justify-end bg-rl-red px-6 py-16 text-white md:px-10 md:py-20 xl:px-14">
      <p className="font-mono text-[10px] tracking-[0.28em] text-white/70">
        {site.ctaPartenaire.label}
      </p>
      <h2 className="mt-5 max-w-[14ch] text-[clamp(36px,5vw,72px)] font-bold uppercase leading-18 tracking-[-0.05em]">
        {about.partenaire.titre}
        <span>.</span>
      </h2>
      <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.65] text-white/80">
        {about.partenaire.chapo}
      </p>
      <div className="mt-8">
        <CtaLink href={site.ctaPartenaire.href}>
          {site.ctaPartenaire.label}
        </CtaLink>
      </div>
    </section>
  );
}
