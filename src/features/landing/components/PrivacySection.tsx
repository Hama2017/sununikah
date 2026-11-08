import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import { SectionTone, TextVariant } from "@/enums/ui.enum";
import { PRIVACY_POINTS } from "../data/privacy";
import { PhotoReveal } from "./PhotoReveal";

export function PrivacySection() {
  return (
    <Section
      id="confidentialite"
      tone={SectionTone.Emerald}
      containerClassName="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
    >
      <div>
        <SectionHeading
          onDark
          eyebrow="Pudeur et confidentialité"
          title="Votre image reste protégée."
          description="Vous gardez la main sur ce qui est montré, et à qui."
        />
        <ul className="mt-9 space-y-5">
          {PRIVACY_POINTS.map(({ title, text }) => (
            <li key={title} className="flex gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <Text as="h3" variant={TextVariant.Title}>
                  {title}
                </Text>
                <Text className="mt-1 text-canvas/75">{text}</Text>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <PhotoReveal />
    </Section>
  );
}
