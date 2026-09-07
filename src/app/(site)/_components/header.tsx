"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { CtaLink } from "./cta-link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ease-[cubic-bezier(.2,.7,.3,1)]",
        scrolled
          ? "px-4 md:px-12 py-3.5 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(13,13,13,0.82)] backdrop-blur-md"
          : "px-4 md:px-14 py-5 border-b border-transparent bg-transparent",
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-3.5 no-underline text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Image src="/logo/logo.svg" alt={site.nom} width={40} height={40} />
        <div className="hidden sm:block">
          <div className="text-[13px] tracking-[0.14em] font-semibold">
            {site.nomCourt}
          </div>
          <div className="text-[10px] tracking-[0.22em] text-[#666666] font-mono">
            {site.signature}
          </div>
        </div>
      </Link>

      <div className="hidden lg:flex gap-2 justify-center">
        {site.nav.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="relative text-white hover:text-white/60 px-4 py-2.5 text-[13px] tracking-[0.04em] no-underline transition-colors duration-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end">
        <CtaLink href={site.ctaPartenaire.href}>
          {site.ctaPartenaire.label}
        </CtaLink>
      </div>
    </nav>
  );
}
