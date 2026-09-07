import Link from "next/link";
import { getActualitesRecentes } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "../_components/page-shell";

export const metadata = pageMetadata({
  title: "Actualités",
  description: "Le journal de bord de RedLyon Racing Team.",
  path: "/actualites",
});

export default function ActualitesPage() {
  const articles = getActualitesRecentes();

  return (
    <PageShell>
      <p className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
        Actualités
      </p>
      <h1 className="mt-4 max-w-[14ch] text-[clamp(36px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.045em] text-white">
        Journal de bord
        <span className="text-rl-red">.</span>
      </h1>

      {articles.length === 0 ? (
        <p className="mt-10 max-w-[46ch] text-[16px] leading-[1.7] text-[#888888]">
          Rien de publié pour le moment. On n&apos;affiche pas d&apos;ancienne
          actualité pour faire semblant.
        </p>
      ) : (
        <ul className="mt-12 border-t border-rl-line">
          {articles.map((article) => (
            <li key={article.slug} className="border-b border-rl-line">
              <Link
                href={`/actualites/${article.slug}`}
                className="grid gap-2 py-6 no-underline md:grid-cols-[140px_minmax(0,1fr)] md:gap-10 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <time
                  dateTime={article.date}
                  className="font-mono text-[11px] tracking-[0.16em] text-[#666666]"
                >
                  {article.date}
                </time>
                <span className="text-[18px] text-white">{article.titre}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
