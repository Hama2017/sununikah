import { cn } from "@/lib/cn";

type ChipProps = {
  label: string;
  selected?: boolean;
};

export function Chip({ label, selected = false }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-body-sm",
        selected ? "bg-primary text-canvas" : "bg-primary/10 text-primary-soft",
      )}
    >
      {label}
    </span>
  );
}
