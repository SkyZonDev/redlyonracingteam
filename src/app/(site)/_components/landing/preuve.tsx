import Image from "next/image";
import { accueil } from "@/content/pages/accueil";
import type { Photo } from "@/lib/content/types";
import { Frame } from "../frame";

export function Preuve({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return null;

  return (
    <section className="scroll-mt-24">
      <Frame className="border-t border-rl-line py-6">
        <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {accueil.preuve.kicker}
        </p>
      </Frame>
      <ul className="grid border-t border-rl-line md:grid-cols-2 xl:grid-cols-3">
        {photos.map((photo) => (
          <li
            key={photo.src}
            className="relative min-h-[320px] overflow-hidden border-b border-rl-line md:border-r md:min-h-[420px] md:[&:nth-child(2n)]:border-r-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            {photo.kind === "cao" ? (
              <span className="absolute top-4 left-4 z-10 font-mono text-[10px] tracking-[0.2em] text-white border border-white/50 bg-black/70 px-2 py-1">
                Rendu CAO
              </span>
            ) : null}
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
              <span className="text-[13px] text-white">{photo.caption}</span>
              <time
                dateTime={photo.date}
                className="font-mono text-[10px] tracking-[0.16em] text-white/70"
              >
                {photo.date}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
