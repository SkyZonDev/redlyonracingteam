import type { Metadata } from "next";
import { partenairesPage } from "@/content/pages/partenaires";
import { site } from "@/content/site";
import { getPartenairesActifs, getPartenairesParPalier } from "@/lib/content";
import { CtaLink } from "../_components/cta-link";
import { Frame } from "../_components/frame";
import { PartenairesPaliers } from "../_components/partenaires/paliers";

export const metadata: Metadata = {
  title: `Partenaires - ${site.nom}`,
  description: partenairesPage.chapo,
};

export default function PartenairesPage() {
  const partenaires = getPartenairesActifs();
  const groupes = getPartenairesParPalier();

  return (
    <div className="pt-28 pb-20 md:pt-32">
      <Frame className="pb-14 md:pb-20">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
          {partenairesPage.kicker}
        </p>
        <h1 className="mt-4 max-w-[16ch] text-[clamp(36px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.045em] text-white">
          {partenairesPage.titre}
          <span className="text-rl-red">.</span>
        </h1>
        <p className="mt-8 max-w-[52ch] text-[17px] leading-[1.7] text-[#a8a8a8]">
          {partenairesPage.chapo}
        </p>
        <div className="mt-10">
          <CtaLink href={site.ctaPartenaire.href}>
            {partenairesPage.cta}
          </CtaLink>
        </div>
      </Frame>

      <div className="grid border-t border-rl-line sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          label={partenairesPage.stats.partenaires.k}
          value={String(partenaires.length).padStart(2, "0")}
          unit={partenairesPage.stats.partenaires.unit}
        />
        <Stat
          label={partenairesPage.stats.paliers.k}
          value={partenairesPage.stats.paliers.v}
          unit={partenairesPage.stats.paliers.unit}
        />
        <Stat
          label={partenairesPage.stats.ecole.k}
          value={partenairesPage.stats.ecole.v}
          unit={partenairesPage.stats.ecole.unit}
        />
        <Stat
          label={partenairesPage.stats.structure.k}
          value={partenairesPage.stats.structure.v}
          unit={partenairesPage.stats.structure.unit}
        />
      </div>

      <Frame className="border-t border-rl-line py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
              {partenairesPage.ceQueVousFinancezTitre}
            </h2>
            <ul className="mt-5 space-y-4 text-[16px] leading-[1.7] text-[#a8a8a8]">
              {partenairesPage.ceQueVousFinancez.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
              {partenairesPage.ceQueVousRecevezTitre}
            </h2>
            <ul className="mt-5 space-y-4 text-[16px] leading-[1.7] text-[#a8a8a8]">
              {partenairesPage.ceQueVousRecevez.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Frame>

      <PartenairesPaliers groupes={groupes} />

      <section
        id="devenir-partenaire"
        className="scroll-mt-24 border-t border-rl-line"
      >
        <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Frame className="border-b border-rl-line py-16 md:border-r md:border-b-0 md:py-20">
            <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
              {partenairesPage.devenir.kicker}
            </p>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.9] tracking-[-0.045em] text-white">
              {partenairesPage.devenir.titre}
              <span className="text-rl-red">.</span>
            </h2>
            <p className="mt-8 max-w-[46ch] text-[16px] leading-[1.7] text-[#a8a8a8]">
              {partenairesPage.devenir.chapo}
            </p>
            <div className="mt-10">
              <CtaLink href={site.ctaPartenaire.href}>
                {partenairesPage.cta}
              </CtaLink>
            </div>
          </Frame>
          <Frame className="py-16 md:py-20">
            <p className="font-mono text-[10px] tracking-[0.22em] text-rl-red">
              {partenairesPage.grille.kicker}
            </p>
            <ul className="mt-8">
              {partenairesPage.devenir.perks.map((ligne) => (
                <li
                  key={ligne.palier}
                  className="flex items-baseline justify-between gap-4 border-b border-rl-line py-4"
                >
                  <span className="font-mono text-[11px] tracking-[0.16em] text-white uppercase">
                    {ligne.palier}
                  </span>
                  <span className="text-right font-mono text-[11px] tracking-[0.08em] text-[#666666]">
                    {ligne.perk}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[13px] leading-[1.65] text-[#666666]">
              {partenairesPage.devenir.note}
            </p>
          </Frame>
        </div>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="border-b border-r border-rl-line px-6 py-8 last:border-r-0 md:px-10 lg:border-b-0">
      <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
        {label}
      </p>
      <p className="mt-3 text-[36px] font-bold leading-none tracking-[-0.04em] text-white md:text-[44px]">
        {value}
      </p>
      <p className="mt-2 text-[13px] text-[#666666]">{unit}</p>
    </div>
  );
}
