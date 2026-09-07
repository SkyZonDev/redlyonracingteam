import Image from "next/image";
import { partenairesPage } from "@/content/pages/partenaires";
import { site } from "@/content/site";
import type { Partenaire, TierPartenaire } from "@/lib/content/types";
import { cn } from "@/lib/utils";
import { CtaLink } from "../cta-link";
import { Frame } from "../frame";

const miseEnPage: Record<
  TierPartenaire,
  { grille: string; cellule: string; logo: string }
> = {
  platine: {
    grille: "grid-cols-1",
    cellule: "min-h-[220px] md:min-h-[300px]",
    logo: "h-16 max-w-[280px] md:h-24",
  },
  or: {
    grille: "grid-cols-1 md:grid-cols-2",
    cellule: "min-h-[200px] md:min-h-[260px]",
    logo: "h-14 max-w-[240px] md:h-20",
  },
  argent: {
    grille: "grid-cols-1 sm:grid-cols-2",
    cellule: "min-h-[180px] md:min-h-[220px]",
    logo: "h-10 max-w-[200px] md:h-14",
  },
  bronze: {
    grille: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
    cellule: "min-h-[160px] md:min-h-[200px]",
    logo: "h-8 max-w-[140px] md:h-10",
  },
};

function Logo({
  partenaire,
  className,
}: {
  partenaire: Partenaire;
  className: string;
}) {
  if (!partenaire.logo) {
    return (
      <span className="text-[15px] font-semibold tracking-[0.12em] text-white uppercase">
        {partenaire.nom}
      </span>
    );
  }

  return (
    <Image
      src={partenaire.logo}
      alt={partenaire.nom}
      width={280}
      height={80}
      className={cn(
        "w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100",
        className,
        partenaire.logo_invert && "invert",
      )}
    />
  );
}

function Carte({ partenaire }: { partenaire: Partenaire }) {
  const page = miseEnPage[partenaire.tier];

  return (
    <a
      href={`${partenaire.site}?utm_source=redlyon&utm_medium=website&utm_campaign=sponsors`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col justify-between border-r border-b border-rl-line px-6 py-8 no-underline last:border-r-0 md:px-10",
        page.cellule,
      )}
    >
      <Logo partenaire={partenaire} className={page.logo} />
      <div className="mt-8 border-t border-rl-line pt-5">
        <p className="text-[15px] font-semibold tracking-[-0.02em] text-white">
          {partenaire.nom}
        </p>
        <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-[#666666]">
          {partenairesPage.paliers[partenaire.tier].label}
          <span className="mx-2 text-white/20">/</span>
          {partenaire.debut.slice(0, 4)}
        </p>
      </div>
    </a>
  );
}

export function PartenairesPaliers({
  groupes,
}: {
  groupes: { tier: TierPartenaire; items: Partenaire[] }[];
}) {
  return (
    <section className="scroll-mt-24">
      <Frame className="border-t border-rl-line py-10 md:py-14">
        <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {partenairesPage.grille.kicker}
        </p>
        <h2 className="mt-4 max-w-[14ch] text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.9] tracking-[-0.045em] text-white">
          {partenairesPage.grille.titre}
          <span className="text-rl-red">.</span>
        </h2>
      </Frame>

      {groupes.map((groupe) => {
        const page = miseEnPage[groupe.tier];
        const copie = partenairesPage.paliers[groupe.tier];
        const grille = groupe.items.length === 1 ? "grid-cols-1" : page.grille;

        return (
          <div key={groupe.tier} id={`palier-${groupe.tier}`}>
            <Frame className="flex flex-col gap-2 border-t border-rl-line py-5 md:flex-row md:items-baseline md:gap-8">
              <p className="shrink-0 font-mono text-[10px] tracking-[0.22em] text-white">
                {copie.label}
              </p>
              <p className="text-[13px] text-[#888888]">{copie.desc}</p>
            </Frame>

            {groupe.items.length === 0 ? (
              <div className="border-t border-dashed border-rl-line px-6 py-14 text-center md:px-10">
                <p className="font-mono text-[10px] tracking-[0.22em] text-rl-red">
                  {partenairesPage.slotVide.kicker}
                </p>
                <p className="mx-auto mt-4 max-w-[42ch] text-[15px] leading-[1.65] text-[#888888]">
                  {partenairesPage.slotVide.texte}
                </p>
                <div className="mt-6 flex justify-center">
                  <CtaLink href={site.ctaPartenaire.href}>
                    {partenairesPage.slotVide.cta}
                  </CtaLink>
                </div>
              </div>
            ) : (
              <div className={cn("grid border-t border-rl-line", grille)}>
                {groupe.items.map((partenaire) => (
                  <Carte key={partenaire.nom} partenaire={partenaire} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
