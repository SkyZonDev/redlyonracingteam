import { about } from "@/content/pages/about";
import { Frame } from "../frame";

export function AboutManifeste() {
  return (
    <section className="border-t border-rl-line">
      <div className="grid lg:grid-cols-2">
        <Frame className="flex flex-col justify-end py-16 md:py-24">
          <div className="max-w-[52ch] space-y-6 text-[16px] leading-[1.7] text-[#a8a8a8] md:text-[17px]">
            {about.manifeste.map((paragraphe) => (
              <p key={paragraphe}>{paragraphe}</p>
            ))}
          </div>
        </Frame>
        <div className="relative min-h-[280px] overflow-hidden border-t border-rl-line bg-[#14080c] lg:min-h-full lg:border-t-0 lg:border-l">
          <div className="absolute inset-y-0 left-0 z-10 w-1.5 bg-rl-red" />
          <span
            aria-hidden
            className="absolute right-2 bottom-[-0.2em] select-none font-bold italic leading-none tracking-[-0.08em] text-white/[0.08] text-[clamp(80px,18vw,180px)]"
          >
            {about.saison}
          </span>
        </div>
      </div>
    </section>
  );
}
