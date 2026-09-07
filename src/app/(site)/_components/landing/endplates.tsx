import { accueil } from "@/content/pages/accueil";
import { nousRejoindre } from "@/content/pages/nous-rejoindre";
import { partenairesPage } from "@/content/pages/partenaires";
import { site } from "@/content/site";
import { CtaLink } from "../cta-link";

export function Endplates() {
  return (
    <section className="grid lg:grid-cols-2">
      <div
        id="partenaires"
        className="flex min-h-[70vh] scroll-mt-24 flex-col justify-end border-t border-rl-line px-6 py-12 md:px-10 md:py-16 xl:px-14"
      >
        <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {accueil.partenaires.kicker}
        </p>
        <h2 className="mt-5 max-w-[12ch] text-[clamp(36px,5vw,72px)] font-bold uppercase leading-[0.86] tracking-[-0.05em] text-white">
          {partenairesPage.titre}
          <span className="text-rl-red">.</span>
        </h2>
        <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.65] text-[#8a8a8a]">
          {partenairesPage.chapo}
        </p>
        <div className="mt-8">
          <CtaLink href="/partenaires">{accueil.partenaires.kicker}</CtaLink>
        </div>
      </div>

      <div
        id="rejoindre"
        className="flex min-h-[70vh] scroll-mt-24 flex-col justify-end bg-rl-red px-6 py-12 text-white md:px-10 md:py-16 xl:px-14"
      >
        <p className="font-mono text-[10px] tracking-[0.28em] text-white/70">
          {accueil.rejoindre.kicker}
        </p>
        <h2 className="mt-5 max-w-[14ch] text-[clamp(36px,5vw,72px)] font-bold uppercase leading-[0.86] tracking-[-0.05em]">
          {nousRejoindre.titre}
          <span>.</span>
        </h2>
        <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.65] text-white/80">
          {nousRejoindre.chapo}
        </p>
        <div className="mt-8">
          <CtaLink href={site.ctaPartenaire.href} className="hover:text-rl-red">
            {site.ctaPartenaire.label}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
