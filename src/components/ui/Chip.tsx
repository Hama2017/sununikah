import { cn } from "@/lib/cn";

type ChipProps = {
  label: string;
  selected?: boolean;
};

export function Chip({ label, selected = false }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1.5 text-body-sm",
        selected
          ? "border-gold bg-primary text-canvas"
          : "border-line bg-sand text-primary-soft",
      )}
    >
      {label}
    </span>
  );
}
