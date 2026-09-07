import Link from "next/link";
import { accueil } from "@/content/pages/accueil";
import type { Actualite } from "@/lib/content/types";
import { Frame } from "../frame";

export function Actualites({ articles }: { articles: Actualite[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="scroll-mt-24">
      <Frame className="flex items-end justify-between gap-6 border-t border-rl-line py-6">
        <p className="font-mono text-[10px] tracking-[0.28em] text-[#888888]">
          {accueil.actualites.kicker}
        </p>
        <Link
          href="/actualites"
          className="font-mono text-[10px] tracking-[0.2em] text-[#888888] no-underline transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {accueil.actualites.tous} →
        </Link>
      </Frame>
      <ul className="grid border-t border-rl-line md:grid-cols-3">
        {articles.map((article) => (
          <li
            key={article.slug}
            className="border-b border-rl-line md:border-r md:border-b-0 md:last:border-r-0"
          >
            <Link
              href={`/actualites/${article.slug}`}
              className="flex min-h-[280px] flex-col justify-end px-6 py-8 no-underline md:px-10 focus-visible:outline focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              <time
                dateTime={article.date}
                className="font-mono text-[10px] tracking-[0.2em] text-[#666666]"
              >
                {article.date}
              </time>
              <span className="mt-4 text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-[26px]">
                {article.titre}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
