import type { CityData, CitySlug } from "./types";

import eindhoven from "./cities/eindhoven";
import eersel from "./cities/eersel";
import amsterdam from "./cities/amsterdam";
import rotterdam from "./cities/rotterdam";
import denHaag from "./cities/den-haag";
import utrecht from "./cities/utrecht";
import tilburg from "./cities/tilburg";
import breda from "./cities/breda";
import helmond from "./cities/helmond";
import sHertogenbosch from "./cities/s-hertogenbosch";

export const cityOrder: CitySlug[] = [
  "eindhoven",
  "eersel",
  "amsterdam",
  "rotterdam",
  "den-haag",
  "utrecht",
  "tilburg",
  "breda",
  "helmond",
  "s-hertogenbosch",
];

export const cities: Record<CitySlug, CityData> = {
  eindhoven,
  eersel,
  amsterdam,
  rotterdam,
  "den-haag": denHaag,
  utrecht,
  tilburg,
  breda,
  helmond,
  "s-hertogenbosch": sHertogenbosch,
};

export type { CityData, CitySlug, CityFAQ, CitySection, WhyLeaPoint } from "./types";
