import { about } from "@/content/pages/about";
import { timeline } from "@/content/timeline";
import { cn } from "@/lib/utils";
import { Frame } from "../frame";

export function AboutTimeline() {
  return (
    <section id="parcours" className="scroll-mt-24">
      <Frame className="border-t border-rl-line py-6">
        <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {about.timeline.kicker}
        </p>
        <h2 className="mt-3 max-w-[16ch] text-[clamp(28px,4vw,48px)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white">
          {about.timeline.titre}
          <span className="text-rl-red">.</span>
        </h2>
      </Frame>

      <ol className="border-t border-rl-line">
        {timeline.map((etape, index) => (
          <li
            key={etape.date}
            className={cn(
              "relative grid border-b border-rl-line md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]",
              etape.highlight && "bg-[#14080c]",
            )}
          >
            {etape.highlight ? (
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 z-10 w-1.5 bg-rl-red"
              />
            ) : null}
            <div className="flex items-start justify-between gap-6 px-6 py-8 md:px-10 md:py-12 xl:px-14">
              <p className="font-mono text-[11px] tracking-[0.18em] text-[#888888]">
                {etape.date}
              </p>
              <span
                aria-hidden
                className="font-bold italic leading-none tracking-[-0.06em] text-white/[0.08] text-[clamp(28px,4vw,48px)]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="border-t border-rl-line px-6 py-8 md:border-t-0 md:border-l md:px-10 md:py-12 xl:px-14">
              <h3 className="max-w-[22ch] text-[22px] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white md:text-[28px]">
                {etape.title}
              </h3>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-[#8a8a8a]">
                {etape.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
