import { Text } from "@/components/ui/Text";
import { TextVariant } from "@/enums/ui.enum";

type JourneyStepProps = {
  position: number;
  title: string;
  text: string;
};

export function JourneyStep({ position, title, text }: JourneyStepProps) {
  return (
    <li className="relative flex gap-5 pb-9 last:pb-0">
      <span
        aria-hidden
        className="absolute top-11 bottom-0 left-5.5 w-px bg-gold/40 in-[li:last-child]:hidden"
      />
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold font-display text-headline-sm text-primary">
        {position}
      </span>
      <div className="pt-1.5">
        <Text as="h3" variant={TextVariant.HeadlineSm}>
          {title}
        </Text>
        <Text className="mt-1.5 text-muted">{text}</Text>
      </div>
    </li>
  );
}
