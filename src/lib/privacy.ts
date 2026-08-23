import { readContentFile } from "./read-content";
import type { PrivacyContent } from "./content-types";

export type { PrivacyContent } from "./content-types";

export function getPrivacyContent(): PrivacyContent {
  return readContentFile<PrivacyContent>("privacy.json");
}
