import { ArchFrame } from "@/components/ui/ArchFrame";
import { Chip } from "@/components/ui/Chip";
import { Portrait } from "@/components/ui/Portrait";
import { Text } from "@/components/ui/Text";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { PortraitState, TextVariant } from "@/enums/ui.enum";
import { PROFILE_PORTRAIT } from "../data/images";

export function ProfilePreview() {
  return (
    <div className="mx-auto w-full max-w-80">
      <ArchFrame>
        <div className="flex h-full flex-col items-center justify-end bg-sand px-5 pb-6 text-center text-primary-deep">
          <Portrait src={PROFILE_PORTRAIT} state={PortraitState.Blurred} className="size-28" />
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
    </div>
  );
}
