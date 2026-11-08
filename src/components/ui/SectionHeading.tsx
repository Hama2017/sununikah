import { TextVariant } from "@/enums/ui.enum";
import { cn } from "@/lib/cn";
import { Text } from "./Text";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  onDark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-160", className)}>
      <Text variant={TextVariant.Eyebrow} className={onDark ? "text-gold-soft" : "text-gold-ink"}>
        {eyebrow}
      </Text>
      <Text as="h2" variant={TextVariant.HeadlineLg} className="mt-3">
        {title}
      </Text>
      {description && (
        <Text
          variant={TextVariant.BodyLg}
          className={cn("mt-4", onDark ? "text-canvas/80" : "text-muted")}
        >
          {description}
        </Text>
      )}
    </header>
  );
}
