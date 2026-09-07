import type { ReactNode } from "react";
import { Frame } from "./frame";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="pt-28 pb-20 md:pt-32">
      <Frame>{children}</Frame>
    </div>
  );
}
