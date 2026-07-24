import type { Metadata } from "next";
import { howToProjects } from "@/content/how-to-make/projects";
import HoeProjectsClient from "@/components/HoeProjectsClient";

export const metadata: Metadata = {
  title: "Hoe Maak Je Het? — Bouw Zelf Deze STEM Projecten | Little Engineers Academy",
  description:
    "Bouw thuis of in de klas zelf STEM-projecten van gerecyclede materialen. Stap-voor-stap YouTube-video's over vliegtuigen, robots, raceauto's en meer voor kinderen.",
  openGraph: {
    title: "Hoe Maak Je Het? — Bouw Zelf Deze STEM Projecten",
    description:
      "Bouw thuis of in de klas zelf STEM-projecten van gerecyclede materialen. Stap-voor-stap YouTube-video's voor kinderen.",
  },
};

const videoObjects = howToProjects.map((p) => ({
  "@type": "VideoObject",
  name: p.title,
  description: p.description,
  thumbnailUrl: `https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`,
  embedUrl: `https://www.youtube.com/embed/${p.videoId}`,
  uploadDate: "2024-01-01",
}));

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hoe Maak Je Het? — Bouw Zelf Deze STEM Projecten",
    description:
      "Videohandleidingen voor kinderen om thuis STEM-projecten te bouwen van gerecyclede materialen.",
    url: "https://littleengineersacademy.com/hoe-maak-je-het",
    hasPart: videoObjects,
  },
];

export default function HoeMaakJeHetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
            Maker Education
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            Hoe Maak Je Het?
          </h1>
          <p className="text-xl font-semibold text-indigo-600 mb-4">
            Bouw zelf deze STEM-projecten thuis of in de klas
          </p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Bij Little Engineers Academy geloven we in leren door te doen. Daarom delen we stap-voor-stap
            video's waarin kinderen van 5 tot 15 jaar zelf STEM-projecten bouwen — van vliegtuigen die
            écht vliegen tot kruipende spinrobots — allemaal van gerecyclede materialen die je thuis kunt
            vinden. Deze projecten sluiten aan bij onze filosofie: maak kinderen niet tot consumenten van
            technologie, maar tot <em>makers</em>. Probeer er één dit weekend!
          </p>
        </div>

        <HoeProjectsClient projects={howToProjects} />
      </section>
    </>
  );
}
