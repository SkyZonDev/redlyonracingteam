import Image from "next/image";
import type { Photo } from "@/lib/content/types";

export function PhotoFrame({ photo }: { photo: Photo }) {
  return (
    <figure>
      <div className="relative aspect-[3/2] overflow-hidden border border-rl-line bg-[#111]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        {photo.kind === "cao" ? (
          <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] text-white border border-white/40 bg-black/70 px-2 py-1">
            RENDU CAO
          </span>
        ) : null}
      </div>
      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2 font-mono text-[10px] tracking-[0.16em] text-[#666666]">
        <span>{photo.caption}</span>
        <time dateTime={photo.date}>{photo.date}</time>
      </figcaption>
    </figure>
  );
}
