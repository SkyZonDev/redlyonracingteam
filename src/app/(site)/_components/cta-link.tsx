import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: string;
  variant?: "solid" | "ghost";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "solid",
  className,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] uppercase no-underline whitespace-nowrap transition-colors duration-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white",
        variant === "solid" &&
          "border border-white text-white hover:bg-white hover:text-[#0d0d0d]",
        variant === "ghost" && "text-[#888888] hover:text-white",
        className,
      )}
    >
      {children} <ArrowRight size={16} aria-hidden />
    </Link>
  );
}
