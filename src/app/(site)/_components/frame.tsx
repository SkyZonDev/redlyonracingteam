import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Frame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-6 md:px-10 xl:px-14", className)}>
      <div className="mx-auto max-w-[1600px]">{children}</div>
    </div>
  );
}
