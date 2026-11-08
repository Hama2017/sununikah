import { Text } from "@/components/ui/Text";
import { TextVariant } from "@/enums/ui.enum";
import { ILLUSTRATION_CAPTION } from "../data/images";

export function IllustrationCaption() {
  return (
    <Text as="figcaption" variant={TextVariant.BodySm} className="mt-3 opacity-70">
      {ILLUSTRATION_CAPTION}
    </Text>
  );
}
