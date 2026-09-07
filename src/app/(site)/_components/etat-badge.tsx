import { type EtatProjet, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function EtatBadge({
  etat,
  className,
}: {
  etat: EtatProjet;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex bg-rl-red px-2.5 py-1 font-display text-[12px] font-bold tracking-[0.16em] text-white uppercase",
        className,
      )}
    >
      {site.etats[etat]}
    </span>
  );
}
