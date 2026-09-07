import type { Projet } from "@/lib/content/types";
import { Frame } from "../frame";
import { SectionKicker } from "./projet-progress";

export function ProjetBudget({ projet }: { projet: Projet }) {
  const { budget } = projet;
  if (!budget.total && budget.breakdown.length === 0) return null;

  return (
    <section className="border-t border-rl-line">
      <Frame className="py-10 md:py-14">
        <SectionKicker>Budget</SectionKicker>
        <p className="mt-4 text-[clamp(36px,6vw,72px)] font-bold leading-none tracking-[-0.045em] text-white">
          {budget.total}
        </p>
      </Frame>
      {budget.breakdown.length > 0 ? (
        <ul className="border-t border-rl-line">
          {budget.breakdown.map((ligne) => (
            <li
              key={ligne.category}
              className="grid items-center gap-4 border-b border-rl-line px-6 py-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.4fr)_minmax(0,1fr)] md:px-10 xl:px-14"
            >
              <p className="text-[14px] text-white">{ligne.category}</p>
              <p className="font-mono text-[11px] tracking-[0.12em] text-[#888888]">
                {ligne.amount}
              </p>
              <div className="h-px bg-white/10">
                <div
                  className="h-px bg-white/40"
                  style={{ width: `${ligne.percentage}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : null}
      {budget.notes.length > 0 ? (
        <Frame className="py-8">
          <ul className="max-w-[60ch] space-y-2 text-[14px] leading-[1.7] text-[#666666]">
            {budget.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Frame>
      ) : null}
    </section>
  );
}
