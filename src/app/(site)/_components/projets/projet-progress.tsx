import { site } from "@/content/site";
import type { Projet } from "@/lib/content/types";
import { cn } from "@/lib/utils";
import { Avancement } from "../avancement";

export function ProjetProgress({ projet }: { projet: Projet }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <Avancement etat={projet.etat} />
        <p className="font-mono text-[10px] tracking-[0.18em] text-[#888888]">
          {projet.progress}%
        </p>
      </div>
      <div
        className="mt-3 h-px bg-white/10"
        role="progressbar"
        aria-valuenow={projet.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Avancement ${site.etats[projet.etat]}`}
      >
        <div
          className="h-px bg-rl-red"
          style={{ width: `${projet.progress}%` }}
        />
      </div>
    </div>
  );
}

export function SectionKicker({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
      {children}
    </p>
  );
}

const phaseLabel: Record<Projet["timeline"][number]["status"], string> = {
  completed: "Fait",
  "in-progress": "En cours",
  planned: "À venir",
};

export function ProjetTimeline({ projet }: { projet: Projet }) {
  return (
    <ol className="border-t border-rl-line">
      {projet.timeline.map((etape, index) => (
        <li
          key={etape.phase}
          className={cn(
            "relative grid border-b border-rl-line md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]",
            etape.status === "in-progress" && "bg-[#14080c]",
          )}
        >
          {etape.status === "in-progress" ? (
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 z-10 w-1.5 bg-rl-red"
            />
          ) : null}
          <div className="flex items-start justify-between gap-6 px-6 py-8 md:px-10 md:py-12 xl:px-14">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-[#888888]">
                {etape.date}
              </p>
              <p
                className={cn(
                  "mt-2 font-mono text-[10px] tracking-[0.18em]",
                  etape.status === "completed" && "text-rl-status",
                  etape.status === "in-progress" && "text-rl-red",
                  etape.status === "planned" && "text-[#555555]",
                )}
              >
                {phaseLabel[etape.status]}
              </p>
            </div>
            <span
              aria-hidden
              className="font-bold italic leading-none tracking-[-0.06em] text-white/[0.08] text-[clamp(28px,4vw,48px)]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="border-t border-rl-line px-6 py-8 md:border-t-0 md:border-l md:px-10 md:py-12 xl:px-14">
            <h3 className="max-w-[22ch] text-[22px] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white md:text-[28px]">
              {etape.phase}
            </h3>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-[#8a8a8a]">
              {etape.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
