import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const ARCH_PATH = "M2 418V176C2 100 92 62 160 3c68 59 158 97 158 173v242z";

type ArchFrameProps = {
  children: ReactNode;
  className?: string;
};

/** Ogee arch echoing the dome of the logo. */
export function ArchFrame({ children, className }: ArchFrameProps) {
  return (
    <div className={cn("relative aspect-[320/420]", className)}>
      <svg
        viewBox="0 0 320 420"
        aria-hidden
        className="absolute inset-0 size-full fill-sand stroke-gold"
      >
        <path d={ARCH_PATH} strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
