import Image from "next/image";
import { cn } from "@/lib/cn";

type PhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  preload?: boolean;
};

/** Responsive image filling a frame; the frame's ratio is set through className. */
export function Photo({ src, alt, sizes, className, preload }: PhotoProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image src={src} alt={alt} sizes={sizes} preload={preload} fill className="object-cover" />
    </div>
  );
}
