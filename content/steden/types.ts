export type CitySlug =
  | "eindhoven"
  | "eersel"
  | "amsterdam"
  | "rotterdam"
  | "den-haag"
  | "utrecht"
  | "tilburg"
  | "breda"
  | "helmond"
  | "s-hertogenbosch";

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CitySection {
  heading: string;
  /** One or more paragraphs, separated by a blank line. */
  body: string;
}

export interface WhyLeaPoint {
  title: string;
  desc: string;
}

export interface CityData {
  slug: CitySlug;
  /** Display name, e.g. "Den Haag" or "'s-Hertogenbosch" */
  cityName: string;
  metaTitle: string;
  metaDescription: string;
  /** 60-80 word direct-answer paragraph following the H1 */
  heroIntro: string;
  hasPhysicalLocation: boolean;
  address?: { street: string; postalCode: string; addressCityName: string };
  /** 2B — "Wat maakt een goede STEM-les voor kinderen?" */
  goodStemSection: CitySection;
  /** 2C — "Opties voor codeer- en roboticalessen in [Stad]" */
  optionsSection: CitySection;
  /** 2D — opening paragraph of the "Waarom LEA" section */
  whyLeaIntro: string;
  /** 2D — the unique-pillar list, 6-7 items */
  whyLeaPoints: WhyLeaPoint[];
  /** 2D — closing paragraph (kit vs. LEA contrast) */
  whyLeaClosing: string;
  /** 2E — city-specific practical section */
  localSection: CitySection;
  /** 2F — 5-6 FAQ items */
  faqs: CityFAQ[];
}
