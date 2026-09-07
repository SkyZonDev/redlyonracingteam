import { type EtatProjet, site } from "@/content/site";
import { cn } from "@/lib/utils";

const ordre: EtatProjet[] = ["idee", "conception", "fabrication", "roulant"];

export function Avancement({ etat }: { etat: EtatProjet }) {
  const courant = ordre.indexOf(etat);

  return (
    <ol className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] tracking-[0.18em] text-[#666666]">
      {ordre.map((step, index) => (
        <li
          key={step}
          className={cn(
            "inline-flex items-center gap-1.5",
            index <= courant && "text-white",
          )}
        >
          <span
            className={cn(
              "text-[8px]",
              index <= courant ? "text-rl-status" : "text-[#444444]",
            )}
            aria-hidden
          >
            ●
          </span>
          <span className={index === courant ? "text-white" : undefined}>
            {site.etats[step]}
            {index === courant ? (
              <span className="sr-only"> (état actuel)</span>
            ) : null}
          </span>
        </li>
      ))}
    </ol>
  );
}
