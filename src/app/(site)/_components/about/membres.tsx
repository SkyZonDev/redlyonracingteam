import Image from "next/image";
import { about } from "@/content/pages/about";
import type { Membre } from "@/lib/content/types";
import { Frame } from "../frame";

function nomComplet(membre: Membre) {
  return `${membre.prenom} ${membre.nom}`;
}

function MembreCard({ membre, index }: { membre: Membre; index: number }) {
  return (
    <article>
      <div className="relative aspect-[3/4] overflow-hidden bg-[#14080c]">
        {membre.photo ? (
          <Image
            src={membre.photo.src}
            alt={membre.photo.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        ) : (
          <span
            aria-hidden
            className="absolute right-1 bottom-[-0.15em] select-none text-[clamp(72px,18vw,140px)] font-bold italic leading-none tracking-[-0.08em] text-white/[0.08]"
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="px-4 py-5 md:px-5">
        <p className="font-mono text-[10px] tracking-[0.2em] text-[#666666] uppercase">
          {membre.role}
        </p>
        <h3 className="mt-2 text-[18px] font-bold tracking-[-0.03em] text-white md:text-[22px]">
          {nomComplet(membre)}
        </h3>
        {membre.promotion ? (
          <p className="mt-1 text-[13px] text-[#888888]">{membre.promotion}</p>
        ) : null}
      </div>
    </article>
  );
}

function Grille({
  membres,
  startIndex,
}: {
  membres: Membre[];
  startIndex: number;
}) {
  return (
    <ul className="grid grid-cols-2 border-t border-rl-line md:grid-cols-3 xl:grid-cols-4">
      {membres.map((membre, index) => (
        <li
          key={membre.slug}
          id={membre.pole === "bureau" ? undefined : `pole-${membre.pole}`}
          className="scroll-mt-24 border-r border-b border-rl-line [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:border-r xl:[&:nth-child(4n)]:border-r-0"
        >
          <MembreCard membre={membre} index={startIndex + index} />
        </li>
      ))}
    </ul>
  );
}

export function AboutMembres({
  bureau,
  poles,
}: {
  bureau: Membre[];
  poles: Membre[];
}) {
  if (bureau.length === 0 && poles.length === 0) {
    return (
      <section className="border-t border-rl-line">
        <Frame className="py-16 md:py-20">
          <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
            {about.membres.kicker}
          </p>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.7] text-[#888888]">
            {about.membres.vide}
          </p>
        </Frame>
      </section>
    );
  }

  return (
    <>
      {bureau.length > 0 ? (
        <section id="bureau" className="scroll-mt-24">
          <Frame className="border-t border-rl-line py-6">
            <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
              {about.bureau.kicker}
            </p>
            <h2 className="mt-3 text-[clamp(28px,4vw,48px)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white">
              {about.bureau.titre}
              <span className="text-rl-red">.</span>
            </h2>
          </Frame>
          <Grille membres={bureau} startIndex={1} />
        </section>
      ) : null}

      {poles.length > 0 ? (
        <section id="grille" className="scroll-mt-24">
          <Frame className="border-t border-rl-line py-6">
            <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
              {about.poles.kicker}
            </p>
            <h2 className="mt-3 max-w-[16ch] text-[clamp(28px,4vw,48px)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white">
              {about.poles.titre}
              <span className="text-rl-red">.</span>
            </h2>
          </Frame>
          <Grille membres={poles} startIndex={bureau.length + 1} />
        </section>
      ) : null}
    </>
  );
}
