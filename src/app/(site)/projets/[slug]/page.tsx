import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjet, getProjets } from "@/lib/content";
import { pageMetadata, projetJsonLd } from "@/lib/seo";
import { CtaLink } from "../../_components/cta-link";
import { Frame } from "../../_components/frame";
import { JsonLd } from "../../_components/json-ld";
import { PhotoFrame } from "../../_components/photo-frame";
import { ProjetBudget } from "../../_components/projets/projet-budget";
import {
  ProjetProgress,
  ProjetTimeline,
  SectionKicker,
} from "../../_components/projets/projet-progress";
import { ProjetSpecs } from "../../_components/projets/projet-specs";

export function generateStaticParams() {
  return getProjets().map((projet) => ({ slug: projet.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const projet = getProjet(slug);
  if (!projet) return {};
  return pageMetadata({
    title: projet.titre,
    description: projet.resume,
    path: `/projets/${projet.slug}`,
    image: projet.image?.src,
    type: "article",
  });
}

export default async function ProjetPage({
  params,
}: PageProps<"/projets/[slug]">) {
  const { slug } = await params;
  const projet = getProjet(slug);
  if (!projet) notFound();

  return (
    <div className="pt-28 pb-20 md:pt-32">
      <JsonLd data={projetJsonLd(projet)} />
      <Frame className="pb-14 md:pb-20">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
          Projet
        </p>
        <h1 className="mt-4 max-w-[16ch] text-[clamp(36px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.045em] text-white">
          {projet.titre}
          <span className="text-rl-red">.</span>
        </h1>
        <div className="mt-8 max-w-xl">
          <ProjetProgress projet={projet} />
        </div>
        <p className="mt-8 max-w-[54ch] text-[17px] leading-[1.7] text-[#a8a8a8]">
          {projet.descriptionLongue}
        </p>
        {projet.moyens.length > 0 ? (
          <p className="mt-8 font-mono text-[11px] tracking-[0.16em] text-[#666666]">
            {projet.moyens.join(" · ")}
          </p>
        ) : null}
        <div className="mt-10">
          <CtaLink href="/projets" variant="ghost">
            Tous les projets
          </CtaLink>
        </div>
      </Frame>

      {projet.image ? (
        <Frame className="pb-16">
          <div className="max-w-3xl">
            <PhotoFrame photo={projet.image} />
          </div>
        </Frame>
      ) : null}

      <ul className="grid border-t border-rl-line md:grid-cols-3">
        {projet.features.map((feature) => (
          <li
            key={feature}
            className="border-b border-rl-line px-6 py-8 text-[15px] leading-[1.5] text-white md:border-b-0 md:border-r md:px-10 md:last:border-r-0 xl:px-14"
          >
            {feature}
          </li>
        ))}
      </ul>

      <ProjetSpecs projet={projet} />

      <section className="border-t border-rl-line">
        <Frame className="py-10 md:py-14">
          <SectionKicker>Planning</SectionKicker>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(28px,4vw,48px)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white">
            Où ça en est
            <span className="text-rl-red">.</span>
          </h2>
        </Frame>
        <ProjetTimeline projet={projet} />
      </section>

      {projet.innovations.length > 0 ? (
        <section className="border-t border-rl-line">
          <Frame className="py-10 md:py-14">
            <SectionKicker>Innovations</SectionKicker>
          </Frame>
          <ul className="grid border-t border-rl-line md:grid-cols-3">
            {projet.innovations.map((item) => (
              <li
                key={item.title}
                className="border-b border-rl-line px-6 py-10 md:border-b-0 md:border-r md:px-10 md:last:border-r-0 xl:px-14"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-rl-red">
                  {item.status}
                </p>
                <h3 className="mt-3 text-[22px] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.7] text-[#8a8a8a]">
                  {item.description}
                </p>
                <p className="mt-5 font-mono text-[10px] tracking-[0.12em] text-[#555555]">
                  {item.uniqueness}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="grid border-t border-rl-line md:grid-cols-2">
        <Frame className="border-b border-rl-line py-12 md:border-r md:border-b-0 md:py-16">
          <SectionKicker>Freins</SectionKicker>
          <ul className="mt-8 space-y-4 text-[15px] leading-[1.7] text-[#a8a8a8]">
            {projet.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Frame>
        <Frame className="py-12 md:py-16">
          <SectionKicker>Ce qui est déjà là</SectionKicker>
          <ul className="mt-8 space-y-4 text-[15px] leading-[1.7] text-[#a8a8a8]">
            {projet.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Frame>
      </div>

      <ProjetBudget projet={projet} />

      {projet.team.length > 0 ? (
        <section className="border-t border-rl-line">
          <Frame className="py-10 md:py-14">
            <SectionKicker>Équipe</SectionKicker>
          </Frame>
          <ul className="border-t border-rl-line">
            {projet.team.map((role) => (
              <li
                key={`${role.role}-${role.name}`}
                className="grid gap-2 border-b border-rl-line px-6 py-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-10 md:px-10 xl:px-14"
              >
                <div>
                  <p className="text-[16px] font-semibold text-white">
                    {role.role}
                  </p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-[#666666]">
                    {role.name}
                  </p>
                </div>
                <p className="text-[14px] leading-[1.65] text-[#8a8a8a]">
                  {role.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {projet.futureUpgrades.length > 0 ? (
        <section className="border-t border-rl-line">
          <Frame className="py-10 md:py-14">
            <SectionKicker>Suite</SectionKicker>
            <h2 className="mt-3 max-w-[16ch] text-[clamp(28px,4vw,48px)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white">
              Évolutions
              <span className="text-rl-red">.</span>
            </h2>
          </Frame>
          <ul className="border-t border-rl-line">
            {projet.futureUpgrades.map((item) => (
              <li
                key={item.upgrade}
                className="grid gap-3 border-b border-rl-line px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.4fr)_minmax(0,0.4fr)] md:items-baseline md:px-10 xl:px-14"
              >
                <div>
                  <p className="text-[16px] font-semibold text-white">
                    {item.upgrade}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#8a8a8a]">
                    {item.description}
                  </p>
                </div>
                <p className="font-mono text-[10px] tracking-[0.16em] text-rl-red">
                  {item.priority}
                </p>
                <p className="font-mono text-[11px] tracking-[0.08em] text-[#888888] md:text-right">
                  {item.estimatedCost}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {projet.technologies.length > 0 ? (
        <Frame className="border-t border-rl-line py-12">
          <SectionKicker>Moyens</SectionKicker>
          <p className="mt-6 max-w-[70ch] font-mono text-[11px] leading-[1.8] tracking-[0.12em] text-[#666666]">
            {projet.technologies.join(" · ")}
          </p>
          <div className="mt-10">
            <Link
              href="/projets"
              className="font-mono text-[10px] tracking-[0.2em] text-[#888888] no-underline hover:text-white"
            >
              ← Tous les projets
            </Link>
          </div>
        </Frame>
      ) : null}
    </div>
  );
}
