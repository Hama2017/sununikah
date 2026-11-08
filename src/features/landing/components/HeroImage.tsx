import { ArchFrame } from "@/components/ui/ArchFrame";
import { Photo } from "@/components/ui/Photo";
import { LANDING_IMAGES } from "../data/images";
import { IllustrationCaption } from "./IllustrationCaption";

export function HeroImage() {
  return (
    <figure className="mx-auto w-full max-w-sm text-center">
      <ArchFrame>
        <Photo
          {...LANDING_IMAGES.heroBride}
          sizes="(min-width: 768px) 24rem, 90vw"
          className="size-full"
          preload
        />
      </ArchFrame>
      <IllustrationCaption />
    </figure>
  );
}
