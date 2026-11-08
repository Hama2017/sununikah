import { cn } from "@/lib/cn";

type RosetteProps = {
  className?: string;
};

/** Eight-point geometric star used by trust seals. */
export function Rosette({ className }: RosetteProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("size-3.5 fill-gold", className)}>
      <rect x="5" y="5" width="14" height="14" rx="1" />
      <rect x="5" y="5" width="14" height="14" rx="1" transform="rotate(45 12 12)" />
    </svg>
  );
}
