import type { Projet } from "@/lib/content/types";
import { Frame } from "../frame";
import { SectionKicker } from "./projet-progress";

export function ProjetSpecs({ projet }: { projet: Projet }) {
  return (
    <section className="border-t border-rl-line">
      <Frame className="py-10 md:py-14">
        <SectionKicker>Fiche technique</SectionKicker>
      </Frame>
      <div className="grid border-t border-rl-line md:grid-cols-2 xl:grid-cols-3">
        {projet.technicalSpecs.map((groupe) => (
          <div
            key={groupe.category}
            className="border-b border-rl-line px-6 py-8 md:border-r md:px-10 xl:px-14 [&:nth-child(2n)]:md:border-r-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0"
          >
            <h3 className="text-[18px] font-bold uppercase tracking-[-0.03em] text-white">
              {groupe.category}
            </h3>
            <dl className="mt-6 space-y-3">
              {groupe.specs.map((spec) => (
                <div
                  key={spec.name}
                  className="flex items-baseline justify-between gap-4 border-b border-rl-line pb-3 last:border-b-0"
                >
                  <dt className="font-mono text-[10px] tracking-[0.14em] text-[#666666]">
                    {spec.name}
                  </dt>
                  <dd className="text-right text-[13px] text-white">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
