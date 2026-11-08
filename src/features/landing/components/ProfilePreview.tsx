import { ArchFrame } from "@/components/ui/ArchFrame";
import { Chip } from "@/components/ui/Chip";
import { Portrait } from "@/components/ui/Portrait";
import { Text } from "@/components/ui/Text";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { PortraitState, TextVariant } from "@/enums/ui.enum";

export function ProfilePreview() {
  return (
    <figure className="mx-auto w-full max-w-80">
      <ArchFrame>
        <div className="flex h-full flex-col items-center justify-end bg-sand px-5 pb-6 text-center text-primary-deep">
          <Portrait state={PortraitState.Blurred} className="size-28" />
          <div className="mt-4">
            <VerifiedBadge label="Profil validé" />
          </div>
          <Text as="p" variant={TextVariant.HeadlineMd} className="mt-3">
            M., 27 ans
          </Text>
          <Text variant={TextVariant.BodySm} className="text-muted">
            Sénégal · Ville masquée
          </Text>
          <Text variant={TextVariant.HeadlineSm} className="mt-4 italic">
            « Bâtir un foyer apaisé, tourné vers Allah. »
          </Text>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Chip label="Foyer pieux" selected />
            <Chip label="Stabilité" selected />
          </div>
        </div>
      </ArchFrame>
      <Text as="figcaption" variant={TextVariant.BodySm} className="mx-auto mt-3 w-fit rounded-full bg-primary-deep/80 px-3 py-1 text-center text-canvas">
        Exemple de profil, à titre d&apos;illustration
      </Text>
    </figure>
  );
}
