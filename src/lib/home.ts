import { readContentFile } from "./read-content";
import type { HomepageContent } from "./content-types";

export type { HomepageContent } from "./content-types";

export function getHomepageContent(): HomepageContent {
  return readContentFile<HomepageContent>("homepage.json");
}
