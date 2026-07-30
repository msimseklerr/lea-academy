import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumb from "@/components/Breadcrumb";
import { cities, cityOrder } from "@/content/steden";

export const metadata: Metadata = {
  title: "STEM-, codeer- en roboticalessen per stad | Little Engineers Academy",
  description:
    "Ontdek waar Little Engineers Academy actief is: van onze eigen locaties in Eindhoven en Eersel tot programma's voor scholen en gemeenten in heel Nederland.",
  alternates: { canonical: "https://littleengineersacademy.com/steden" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "https://littleengineersacademy.com" },
    { "@type": "ListItem", position: 2, name: "Steden", item: "https://littleengineersacademy.com/steden" },
  ],
};

export default function StedenHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Steden" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
              Waar zijn wij actief?
            </p>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-3xl"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              STEM-, codeer- en roboticalessen per stad
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Little Engineers Academy heeft eigen locaties in Eindhoven en Eersel, en biedt
              daarnaast programma&apos;s voor scholen en gemeenten in steden door heel Nederland.
              Kies hieronder uw stad voor een complete gids over STEM-, codeer- en roboticalessen
              voor kinderen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityOrder.map((slug, i) => {
            const city = cities[slug];
            return (
              <AnimatedSection key={slug} delay={i * 0.05}>
                <Link
                  href={`/steden/${slug}`}
                  className="group block h-full bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-indigo-600" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                      {city.hasPhysicalLocation ? "Eigen locatie" : "Regio & scholen"}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  >
                    {city.cityName}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {city.heroIntro}
                  </p>
                  <span className="inline-flex items-center gap-1 text-indigo-600 font-semibold text-sm">
                    Lees de gids <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </>
  );
}
