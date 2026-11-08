import { Plus } from "lucide-react";
import { Text } from "@/components/ui/Text";
import { TextVariant } from "@/enums/ui.enum";

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group border-t border-gold/30">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <Text as="span" variant={TextVariant.Title}>
          {question}
        </Text>
        <Plus
          className="size-5 shrink-0 text-gold-ink transition-transform group-open:rotate-45"
          aria-hidden
        />
      </summary>
      <Text className="max-w-160 pb-6 text-muted">{answer}</Text>
    </details>
  );
}
