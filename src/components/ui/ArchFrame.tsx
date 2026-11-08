import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const ARCH_PATH = "M2 418V176C2 100 92 62 160 3c68 59 158 97 158 173v242z";
const CLIP_ID = "arch-clip";

type ArchFrameProps = {
  children: ReactNode;
  className?: string;
};

/** Ogee arch echoing the dome of the logo; clips its content to the arch. */
export function ArchFrame({ children, className }: ArchFrameProps) {
  return (
    <div className={cn("relative aspect-[320/420]", className)}>
      <div className="absolute inset-0" style={{ clipPath: `url(#${CLIP_ID})` }}>
        {children}
      </div>
      <svg viewBox="0 0 320 420" aria-hidden className="absolute inset-0 size-full fill-none">
        <clipPath id={CLIP_ID} clipPathUnits="objectBoundingBox">
          <path d={ARCH_PATH} transform="scale(0.003125 0.00238095)" />
        </clipPath>
        <path d={ARCH_PATH} className="stroke-gold" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
