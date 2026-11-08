import { ArchFrame } from "@/components/ui/ArchFrame";
import { Chip } from "@/components/ui/Chip";
import { Portrait } from "@/components/ui/Portrait";
import { Text } from "@/components/ui/Text";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { PortraitState, TextVariant } from "@/enums/ui.enum";

export function ProfilePreview() {
  return (
    <figure className="mx-auto w-full max-w-sm">
      <ArchFrame>
        <div className="flex h-full flex-col items-center justify-end px-6 pb-8 text-center">
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
      <Text as="figcaption" variant={TextVariant.BodySm} className="mt-3 text-center text-muted">
        Exemple de profil, à titre d&apos;illustration
      </Text>
    </figure>
  );
}
