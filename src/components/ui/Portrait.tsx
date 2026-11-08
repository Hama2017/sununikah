import { LockKeyhole } from "lucide-react";
import { PortraitState } from "@/enums/ui.enum";
import { cn } from "@/lib/cn";

type PortraitProps = {
  state: PortraitState;
  className?: string;
};

/** Abstract portrait: profile photos stay blurred until a mutual match. */
export function Portrait({ state, className }: PortraitProps) {
  const isBlurred = state === PortraitState.Blurred;
  return (
    <div className={cn("relative overflow-hidden rounded-full bg-gold-soft", className)}>
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        className={cn("size-full", isBlurred && "scale-110 blur-[6px]")}
      >
        <circle cx="50" cy="38" r="17" className="fill-primary-soft" />
        <path d="M14 104c0-27 16-44 36-44s36 17 36 44z" className="fill-primary" />
      </svg>
      {isBlurred && (
        <LockKeyhole className="absolute inset-0 m-auto size-5 text-canvas" aria-hidden />
      )}
    </div>
  );
}
