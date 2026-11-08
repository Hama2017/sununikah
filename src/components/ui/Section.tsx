import type { ComponentProps } from "react";
import { SectionTone } from "@/enums/ui.enum";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

const TONE_CLASSES: Record<SectionTone, string> = {
  [SectionTone.Canvas]: "bg-canvas text-primary-deep",
  [SectionTone.Sand]: "bg-sand text-primary-deep",
  [SectionTone.Emerald]: "bg-primary text-canvas",
};

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
  containerClassName?: string;
};

export function Section({
  tone = SectionTone.Canvas,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-20 py-18 md:py-24", TONE_CLASSES[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
