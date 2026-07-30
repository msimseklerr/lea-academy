import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import { cities } from "@/content/steden";
import type { CitySlug } from "@/content/steden";
import { CALENDLY_URL_PROEFLES, WHATSAPP_NUMBER } from "@/lib/constants";

export function generateStaticParams(): { stad: CitySlug }[] {
  return Object.keys(cities).map((stad) => ({ stad: stad as CitySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>;
}): Promise<Metadata> {
  const { stad } = await params;
  const city = cities[stad as CitySlug];
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `https://littleengineersacademy.com/steden/${stad}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://littleengineersacademy.com/steden/${stad}`,
    },
  };
}

export default async function StadPage({
  params,
}: {
  params: Promise<{ stad: string }>;
}) {
  const { stad } = await params;
  const city = cities[stad as CitySlug];

  if (!city) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Pagina niet gevonden</h1>
        <Link href="/steden" className="text-indigo-600 hover:underline">Terug naar alle steden →</Link>
      </div>
    );
  }

  const pageUrl = `https://littleengineersacademy.com/steden/${stad}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Little Engineers Academy",
    url: "https://littleengineersacademy.com",
    areaServed: city.cityName,
    address: city.hasPhysicalLocation && city.address
      ? {
          "@type": "PostalAddress",
          streetAddress: city.address.street,
          postalCode: city.address.postalCode,
          addressLocality: city.address.addressCityName,
          addressCountry: "NL",
        }
      : {
          "@type": "PostalAddress",
          streetAddress: "Kastanjelaan 410, Office 113",
          postalCode: "5652 LD",
          addressLocality: "Eindhoven",
          addressCountry: "NL",
        },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: city.metaTitle,
    description: city.metaDescription,
    author: {
      "@type": "Organization",
      name: "Little Engineers Academy",
      url: "https://littleengineersacademy.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Little Engineers Academy",
      url: "https://littleengineersacademy.com",
    },
    datePublished: "2026-07-01",
    dateModified: "2026-07-31",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://littleengineersacademy.com" },
      { "@type": "ListItem", position: 2, name: "Steden", item: "https://littleengineersacademy.com/steden" },
      { "@type": "ListItem", position: 3, name: city.cityName, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Start", href: "/" },
            { label: "Steden", href: "/steden" },
            { label: city.cityName },
          ]}
        />

        <AnimatedSection>
          <h1
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            Codeer- en roboticalessen voor kinderen in{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              {city.cityName}
            </span>
            : de complete gids (2026)
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-indigo-600 pl-4">
            {city.heroIntro}
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="prose prose-slate max-w-none mb-10">
            <h2
              className="text-xl md:text-2xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              {city.goodStemSection.heading}
            </h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{city.goodStemSection.body}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="prose prose-slate max-w-none mb-10">
            <h2
              className="text-xl md:text-2xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              {city.optionsSection.heading}
            </h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{city.optionsSection.body}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <section className="my-12 -mx-4 sm:mx-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white rounded-none sm:rounded-3xl p-6 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200 mb-3">
              De keuze voor {city.cityName}
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-5"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Waarom Little Engineers Academy de beste keuze is in {city.cityName}
            </h2>
            <p className="text-indigo-50 leading-relaxed mb-6 whitespace-pre-line">{city.whyLeaIntro}</p>
            <ul className="space-y-4 mb-6">
              {city.whyLeaPoints.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{p.title}</p>
                    <p className="text-indigo-100 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-indigo-50 leading-relaxed font-medium whitespace-pre-line">{city.whyLeaClosing}</p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <div className="prose prose-slate max-w-none mb-10">
            <h2
              className="text-xl md:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              <MapPin size={22} className="text-indigo-600" />
              {city.localSection.heading}
            </h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{city.localSection.body}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-10">
            <h2
              className="text-xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Veelgestelde vragen over STEM-lessen in {city.cityName}
            </h2>
            <FAQAccordion faqs={city.faqs} />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <section className="my-12 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Plan een gratis proefles in {city.cityName}
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Ontdek zelf hoe Little Engineers Academy uw kind laat bouwen, coderen en ontdekken —
              zonder verplichtingen, volledig gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={CALENDLY_URL_PROEFLES}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg hover:scale-[1.02] hover:shadow-xl transition-all"
              >
                Plan een gratis proefles
              </Link>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                <MessageCircle size={20} />
                Stuur een WhatsApp bericht
              </Link>
            </div>
          </section>
        </AnimatedSection>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100 text-sm">
          <Link href="/programmas" className="text-indigo-600 font-semibold hover:underline">
            Bekijk alle programma&apos;s →
          </Link>
          <Link href="/talentanalyse" className="text-indigo-600 font-semibold hover:underline">
            Ontdek het TalentLAB →
          </Link>
          <Link href="/steden" className="text-indigo-600 font-semibold hover:underline">
            Alle steden →
          </Link>
        </div>
      </article>
    </>
  );
}
