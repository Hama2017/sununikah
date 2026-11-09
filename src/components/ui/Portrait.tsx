import { LockKeyhole } from "lucide-react";
import Image from "next/image";
import { PortraitState } from "@/enums/ui.enum";
import { cn } from "@/lib/cn";

type PortraitProps = {
  src: string;
  state: PortraitState;
  className?: string;
};

/** Profile photo: stays blurred until a mutual match. */
export function Portrait({ src, state, className }: PortraitProps) {
  const isBlurred = state === PortraitState.Blurred;
  return (
    <div className={cn("relative overflow-hidden rounded-full bg-sand", className)}>
      <Image
        src={src}
        alt=""
        fill
        sizes="128px"
        className={cn("object-cover object-top", isBlurred && "scale-110 blur-[7px]")}
      />
      {isBlurred && (
        <LockKeyhole className="absolute inset-0 m-auto size-5 text-canvas" aria-hidden />
      )}
    </div>
  );
}
