import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 xl:px-14 pt-20 pb-12 font-mono text-[11px] text-[#666666] tracking-[0.12em]">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-[clamp(80px,13vw,200px)] font-sans font-bold tracking-[-0.04em] leading-[0.9] text-white mb-14">
          {site.nomCourt}
          <span className="text-[#c41e3a]">.</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 border-y border-[rgba(255,255,255,0.06)] py-4 mb-8 text-[10px] tracking-[0.2em]">
          <span className="text-[#7a7a7a]">{site.ecole}</span>
          <span className="hidden md:inline text-[rgba(255,255,255,0.18)]">
            /
          </span>
          <span className="text-[#7a7a7a]">
            {site.ville} · {site.pays}
          </span>
          <span className="hidden md:inline text-[rgba(255,255,255,0.18)]">
            /
          </span>
          <span className="text-[#7a7a7a]">DEPUIS {site.anneeCreation}</span>
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="leading-[1.8]">
              {site.nom}
              <br />
              {site.structure}
              <br />
              {site.ecole} · {site.ville}
            </div>
          </div>

          <div>
            <div className="text-white/60 mb-3">NAVIGATION</div>
            <div className="flex flex-col gap-2 leading-[1.8]">
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#888888] no-underline transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {site.social.length > 0 ? (
            <div>
              <div className="text-white/60 mb-3">SOCIAL</div>
              <div className="flex flex-col gap-2 leading-[1.8]">
                {site.social.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#888888] no-underline transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div />
          )}

          <div className="xl:text-right">
            <div className="text-white/60 mb-3">CONTACT</div>
            <Link
              href={`mailto:${site.email}`}
              className="text-[#888888] no-underline transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {site.email}
            </Link>
            <div className="mt-6 leading-[1.8]">
              © {new Date().getFullYear()} REDLYON RT.
              <br />
              <span className="font-serif italic tracking-normal text-[#a8a8a8]">
                Built in Lyon.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
