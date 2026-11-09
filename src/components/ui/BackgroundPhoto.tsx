import Image from "next/image";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { BackgroundLayout } from "@/enums/ui.enum";
import { cn } from "@/lib/cn";

const LAYOUT_CLASSES: Record<BackgroundLayout, string> = {
  [BackgroundLayout.Full]: "md:inset-0 md:h-auto",
  [BackgroundLayout.Side]: "md:inset-y-0 md:right-0 md:left-1/2 md:h-auto",
  [BackgroundLayout.Wide]: "md:inset-y-0 md:right-0 md:left-[38%] md:h-auto",
};

type BackgroundPhotoProps = {
  src: string;
  layout: BackgroundLayout;
  overlayClassName: string;
  imageClassName?: string;
  preload?: boolean;
};

/** Decorative photo behind a section: a top band on mobile, a backdrop from tablet up. */
export function BackgroundPhoto({
  src,
  layout,
  overlayClassName,
  imageClassName,
  preload,
}: BackgroundPhotoProps) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-x-0 top-0 h-80 overflow-hidden", LAYOUT_CLASSES[layout])}
    >
      <ParallaxLayer>
        <Image
          src={src}
          alt=""
          fill
          sizes={layout === BackgroundLayout.Full ? "100vw" : "(min-width: 768px) 62vw, 100vw"}
          preload={preload}
          className={cn("object-cover", imageClassName)}
        />
      </ParallaxLayer>
      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
