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
import veldhoven from "./cities/veldhoven";
import best from "./cities/best";
import nuenen from "./cities/nuenen";
import geldropMierlo from "./cities/geldrop-mierlo";
import waalre from "./cities/waalre";
import sonEnBreugel from "./cities/son-en-breugel";
import valkenswaard from "./cities/valkenswaard";
import bergeijk from "./cities/bergeijk";

export const cityOrder: CitySlug[] = [
  "eindhoven",
  "veldhoven",
  "helmond",
  "eersel",
  "best",
  "nuenen",
  "geldrop-mierlo",
  "waalre",
  "son-en-breugel",
  "valkenswaard",
  "bergeijk",
  "amsterdam",
  "rotterdam",
  "den-haag",
  "utrecht",
  "tilburg",
  "breda",
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
  veldhoven,
  best,
  nuenen,
  "geldrop-mierlo": geldropMierlo,
  waalre,
  "son-en-breugel": sonEnBreugel,
  valkenswaard,
  bergeijk,
};

export type { CityData, CitySlug, CityFAQ, CitySection, WhyLeaPoint } from "./types";
