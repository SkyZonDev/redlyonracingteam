import type { Metadata } from "next";
import { nousRejoindre } from "@/content/pages/nous-rejoindre";
import { site } from "@/content/site";
import { Frame } from "../_components/frame";
import { ContactPartenaireForm } from "../_components/partenaires/contact-form";

export const metadata: Metadata = {
  title: `Devenir partenaire - ${site.nom}`,
  description: nousRejoindre.chapo,
};

export default function NousRejoindrePage() {
  return (
    <div className="pt-28 pb-20 md:pt-32">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <Frame className="border-b border-rl-line pb-14 lg:border-r lg:border-b-0 lg:pb-20">
          <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
            {nousRejoindre.kicker}
          </p>
          <h1 className="mt-4 max-w-[12ch] text-[clamp(36px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.045em] text-white">
            {nousRejoindre.titre}
            <span className="text-rl-red">.</span>
          </h1>
          <p className="mt-8 max-w-[42ch] text-[17px] leading-[1.7] text-[#a8a8a8]">
            {nousRejoindre.chapo}
          </p>
          <ul className="mt-12 space-y-5 text-[15px] leading-[1.7] text-[#888888]">
            {nousRejoindre.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="mt-12 font-mono text-[11px] tracking-[0.08em] text-[#666666]">
            {site.email}
          </p>
        </Frame>
        <Frame className="py-14 lg:py-0 lg:pl-10">
          <ContactPartenaireForm />
        </Frame>
      </div>
    </div>
  );
}
