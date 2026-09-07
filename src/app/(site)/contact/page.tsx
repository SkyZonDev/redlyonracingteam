import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: `Contact - ${site.nom}`,
  description: site.description,
};

export default function ContactPage() {
  return (
    <PageShell>
      <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
        Contact
      </p>
      <h1 className="mt-4 max-w-[12ch] text-[clamp(36px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.045em] text-white">
        Écrire au bureau
        <span className="text-rl-red">.</span>
      </h1>
      <p className="mt-8 max-w-[46ch] text-[17px] leading-[1.7] text-[#a8a8a8]">
        Un seul contact pour l&apos;association. Pas de coordonnées
        individuelles.
      </p>
      <div className="mt-10">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 border border-white px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-white no-underline transition-colors duration-300 hover:bg-white hover:text-[#0d0d0d] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {site.email}
        </a>
      </div>
    </PageShell>
  );
}
