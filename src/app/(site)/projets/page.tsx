import Link from "next/link";
import { projetsPage } from "@/content/pages/projets";
import { getProjets } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { Frame } from "../_components/frame";
import { ProjetProgress } from "../_components/projets/projet-progress";

export const metadata = pageMetadata({
  title: "Projets",
  description: projetsPage.chapo,
  path: "/projets",
});

export default function ProjetsPage() {
  const projets = getProjets();

  return (
    <div className="pt-28 pb-20 md:pt-32">
      <Frame className="pb-14 md:pb-20">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
          {projetsPage.kicker}
        </p>
        <h1 className="mt-4 max-w-[14ch] text-[clamp(36px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.045em] text-white">
          {projetsPage.titre}
          <span className="text-rl-red">.</span>
        </h1>
        <p className="mt-8 max-w-[52ch] text-[17px] leading-[1.7] text-[#a8a8a8]">
          {projetsPage.chapo}
        </p>
      </Frame>

      <ul className="grid border-t border-rl-line lg:grid-cols-3">
        {projets.map((projet, index) => (
          <li
            key={projet.slug}
            className="border-b border-rl-line lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <Link
              href={`/projets/${projet.slug}`}
              className="group relative flex min-h-[480px] flex-col justify-end overflow-hidden px-6 py-8 no-underline md:min-h-[560px] md:px-10 md:py-10 xl:px-14 focus-visible:outline focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -bottom-6 select-none text-[160px] font-bold leading-none tracking-[-0.08em] text-white/[0.04] transition-colors duration-500 group-hover:text-rl-red/20 md:text-[220px]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <ProjetProgress projet={projet} />
                <h2 className="mt-8 max-w-[12ch] text-[32px] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-[40px]">
                  {projet.titre}
                </h2>
                <p className="mt-5 max-w-[36ch] text-[14px] leading-[1.65] text-[#8a8a8a] transition-colors duration-300 group-hover:text-[#cfcfcf]">
                  {projet.resume}
                </p>
                <ul className="mt-6 space-y-1.5">
                  {projet.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-mono text-[10px] tracking-[0.12em] text-[#666666]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
