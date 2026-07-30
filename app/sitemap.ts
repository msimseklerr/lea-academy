import type { MetadataRoute } from "next";

const base = "https://littleengineersacademy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const static_pages = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/programmas`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/programmas/kleine-uitvinders-3-6`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/programmas/jonge-makers-6-9`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/programmas/slimme-bouwers-9-12`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/programmas/toekomstige-ingenieurs-12-17`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/programmas/vakantiekampen`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/programmas/kinderfeestjes`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/programmas/proefles`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/talentanalyse`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/methode`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/voor-scholen`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/onderzoek`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${base}/over-ons`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/ervaringen`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/veelgestelde-vragen`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/tarieven`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/locaties/eindhoven`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/locaties/eersel`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/kennisbank`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/sociale-impact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/voor-gemeenten`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/eu-projecten`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/galerij`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/hoe-maak-je-het`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/steden`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const cities = [
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

  const city_pages = cities.map((slug) => ({
    url: `${base}/steden/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const articles = [
    "welke-leeftijd-leren-programmeren",
    "schermvrij-coderen-kleuters",
    "fijne-motoriek-activiteiten",
    "is-mijn-kind-hoogbegaafd",
    "schermtijd-per-leeftijd",
    "robotica-voor-kinderen-gids",
    "hersenontwikkeling-0-6-jaar",
    "wat-is-stem-onderwijs",
    "van-scratch-naar-python",
    "microbit-arduino-kinderen",
    "meervoudige-intelligentie",
    "neurodiversiteit-adhd-autisme-talent",
    "growth-mindset-kinderen",
    "consumeren-vs-creeren-schermtijd",
    "gamen-en-leren",
    "ai-en-kinderen-chatgpt",
    "schoolrijpheid-checklist",
    "naschoolse-activiteiten-kiezen",
    "wat-kost-stem-cursus",
    "10-vragen-cursus-kiezen",
    "21e-eeuwse-vaardigheden",
    "welke-banen-bestaan-nog",
    "meisjes-en-techniek-stem",
    "van-hobby-naar-carriere-techniek",
    "wat-is-executieve-functie",
    "buitenspelen-hersenontwikkeling",
    "ruimtelijk-inzicht-kinderen",
    "motivatie-kinderen-belonen",
    "stem-cadeaus-per-leeftijd",
    "reverse-engineering-kinderen",
  ];

  const article_pages = articles.map((slug) => ({
    url: `${base}/kennisbank/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...static_pages, ...article_pages, ...city_pages].map((p) => ({
    ...p,
    lastModified: now,
  }));
}
