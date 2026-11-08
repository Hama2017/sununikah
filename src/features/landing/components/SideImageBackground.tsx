import { BackgroundPhoto } from "@/components/ui/BackgroundPhoto";
import { BackgroundLayout } from "@/enums/ui.enum";

const SIDE_OVERLAY =
  "bg-linear-to-b from-transparent from-50% to-primary md:bg-linear-to-r md:from-primary md:from-0% md:via-primary/25 md:via-45% md:to-transparent";

type SideImageBackgroundProps = {
  src: string;
  imageClassName: string;
};

export function SideImageBackground({ src, imageClassName }: SideImageBackgroundProps) {
  return (
    <BackgroundPhoto
      src={src}
      layout={BackgroundLayout.Side}
      overlayClassName={SIDE_OVERLAY}
      imageClassName={imageClassName}
    />
  );
}
