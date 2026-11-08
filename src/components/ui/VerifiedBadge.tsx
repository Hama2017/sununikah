import { Rosette } from "./Rosette";

type VerifiedBadgeProps = {
  label: string;
};

export function VerifiedBadge({ label }: VerifiedBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-badge border border-gold bg-canvas px-2.5 py-1 text-label-sm text-primary-deep uppercase">
      <Rosette />
      {label}
    </span>
  );
}
