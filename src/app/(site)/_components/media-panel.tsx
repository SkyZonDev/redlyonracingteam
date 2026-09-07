import Image from "next/image";
import type { Photo } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export function MediaPanel({
  index,
  photo,
  className,
}: {
  index: string;
  photo: Photo | null;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden bg-[#14080c]",
        className,
      )}
    >
      <div className="absolute inset-y-0 left-0 z-10 w-1.5 bg-rl-red" />
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      ) : (
        <span
          aria-hidden
          className="absolute right-2 bottom-[-0.2em] font-display text-[clamp(80px,18vw,180px)] font-black italic leading-none text-white/[0.08]"
        >
          {index}
        </span>
      )}
      {photo?.kind === "cao" ? (
        <span className="absolute top-3 left-4 z-10 border border-white/50 bg-black/70 px-2 py-1 font-display text-[11px] font-bold tracking-[0.18em] text-white uppercase">
          Rendu CAO
        </span>
      ) : null}
    </div>
  );
}
