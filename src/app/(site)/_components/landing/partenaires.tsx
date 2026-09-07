import Image from "next/image";
import { accueil } from "@/content/pages/accueil";
import { site } from "@/content/site";
import {
  type Partenaire,
  paliers,
  type TierPartenaire,
} from "@/lib/content/types";
import { cn } from "@/lib/utils";
import { CtaLink } from "../cta-link";
import { Frame } from "../frame";

const miseEnPage: Record<
  TierPartenaire,
  { grille: string; cellule: string; logo: string }
> = {
  platine: {
    grille: "grid-cols-1",
    cellule: "min-h-[200px] md:min-h-[280px]",
    logo: "h-16 max-w-[280px] md:h-24",
  },
  or: {
    grille: "grid-cols-1 md:grid-cols-2",
    cellule: "min-h-[160px] md:min-h-[220px]",
    logo: "h-14 max-w-[240px] md:h-20",
  },
  argent: {
    grille: "grid-cols-1 sm:grid-cols-2",
    cellule: "min-h-[140px] md:min-h-[180px]",
    logo: "h-10 max-w-[200px] md:h-14",
  },
  bronze: {
    grille: "grid-cols-2 md:grid-cols-4",
    cellule: "min-h-[110px] md:min-h-[140px]",
    logo: "h-8 max-w-[140px] md:h-10",
  },
};

function groupesParPalier(partenaires: Partenaire[]) {
  return paliers
    .map((tier) => ({
      tier,
      items: partenaires.filter((partenaire) => partenaire.tier === tier),
    }))
    .filter((groupe) => groupe.items.length > 0);
}

function Logo({
  partenaire,
  className,
}: {
  partenaire: Partenaire;
  className: string;
}) {
  if (!partenaire.logo) {
    return (
      <span className="text-[13px] font-semibold tracking-[0.12em] text-white uppercase">
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

export function Partenaires({ partenaires }: { partenaires: Partenaire[] }) {
  if (partenaires.length === 0) return null;

  const groupes = groupesParPalier(partenaires);

  return (
    <section className="scroll-mt-24">
      <Frame className="flex flex-col gap-3 border-t border-rl-line py-6 md:flex-row md:items-end md:justify-between">
        <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {accueil.partenaires.kicker}
        </p>
        <CtaLink href={site.ctaPartenaire.href} variant="ghost">
          {site.ctaPartenaire.label}
        </CtaLink>
      </Frame>

      {groupes.map((groupe) => {
        const page = miseEnPage[groupe.tier];
        const grille = groupe.items.length === 1 ? "grid-cols-1" : page.grille;

        return (
          <div key={groupe.tier} className="border-t border-rl-line">
            <Frame className="py-4">
              <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
                {accueil.partenaires.tiers[groupe.tier]}
              </p>
            </Frame>
            <ul className={cn("grid border-t border-rl-line", grille)}>
              {groupe.items.map((partenaire) => (
                <li
                  key={partenaire.nom}
                  className={cn(
                    "group flex items-center justify-center border-r border-b border-rl-line px-6 py-8 last:border-r-0 md:px-10",
                    page.cellule,
                  )}
                >
                  <Logo partenaire={partenaire} className={page.logo} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
