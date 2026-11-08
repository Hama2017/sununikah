import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "../data/images";
import { IllustrationCaption } from "./IllustrationCaption";

export function GallerySection() {
  return (
    <Section className="pt-0 md:pt-0">
      <SectionHeading
        eyebrow="Notre ancrage"
        title="Enraciné dans notre foi et notre culture."
      />
      <figure className="mt-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((image) => (
            <Photo
              key={image.src}
              {...image}
              sizes="(min-width: 768px) 25vw, 50vw"
              className="aspect-square rounded-card border border-gold/30"
            />
          ))}
        </div>
        <IllustrationCaption />
      </figure>
    </Section>
  );
}
