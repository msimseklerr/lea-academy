export type ArticleSlug =
  | "welke-leeftijd-leren-programmeren"
  | "schermvrij-coderen-kleuters"
  | "fijne-motoriek-activiteiten"
  | "hersenontwikkeling-0-6-jaar"
  | "robotica-voor-kinderen-gids"
  | "wat-is-stem-onderwijs"
  | "van-scratch-naar-python"
  | "microbit-arduino-kinderen"
  | "is-mijn-kind-hoogbegaafd"
  | "meervoudige-intelligentie"
  | "neurodiversiteit-adhd-autisme-talent"
  | "growth-mindset-kinderen"
  | "schermtijd-per-leeftijd"
  | "consumeren-vs-creeren-schermtijd"
  | "gamen-en-leren"
  | "ai-en-kinderen-chatgpt"
  | "schoolrijpheid-checklist"
  | "naschoolse-activiteiten-kiezen"
  | "wat-kost-stem-cursus"
  | "10-vragen-cursus-kiezen"
  | "21e-eeuwse-vaardigheden"
  | "welke-banen-bestaan-nog"
  | "meisjes-en-techniek-stem"
  | "van-hobby-naar-carriere-techniek"
  | "wat-is-executieve-functie"
  | "buitenspelen-hersenontwikkeling"
  | "ruimtelijk-inzicht-kinderen"
  | "motivatie-kinderen-belonen"
  | "stem-cadeaus-per-leeftijd"
  | "reverse-engineering-kinderen";

export interface ArticleTable {
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface FurtherReadingLink {
  slug: ArticleSlug;
  title: string;
}

export interface Article {
  slug: ArticleSlug;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  /** 60-80 word direct-answer intro paragraph */
  intro: string;
  /** 6-9 question-form H2 sections, 250-400 words each */
  content: ArticleSection[];
  /** At least 2 HTML tables */
  tables: ArticleTable[];
  /** Numbered list / checklist */
  checklist: {
    title: string;
    items: string[];
  };
  /** "Wat wij bij LEA zien" practical observation box, 150-200 words */
  observation: string;
  /** 5-6 FAQ entries, rendered with FAQPage schema */
  faqs: ArticleFAQ[];
  relatedProgram: { href: string; label: string };
  /** Exactly 3 internal links to related kennisbank articles */
  furtherReading: FurtherReadingLink[];
}
