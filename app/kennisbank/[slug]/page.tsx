import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft, CheckCircle2, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { articles } from "@/content/kennisbank";
import type { ArticleSlug } from "@/content/kennisbank";

export function generateStaticParams(): { slug: ArticleSlug }[] {
  return Object.keys(articles).map((slug) => ({ slug: slug as ArticleSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://littleengineersacademy.com/kennisbank/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://littleengineersacademy.com/kennisbank/${slug}`,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function KennisbankArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Artikel niet gevonden</h1>
        <Link href="/kennisbank" className="text-indigo-600 hover:underline">Terug naar de kennisbank →</Link>
      </div>
    );
  }

  const articleUrl = `https://littleengineersacademy.com/kennisbank/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
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
    dateModified: "2026-07-15",
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "blockquote"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://littleengineersacademy.com/" },
      { "@type": "ListItem", position: 2, name: "Kennisbank", item: "https://littleengineersacademy.com/kennisbank" },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };

  const isSchoolArticle = article.category === "Voor scholen";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Kennisbank", href: "/kennisbank" }, { label: article.category }]} />

        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{article.category}</span>
            <span className="flex items-center gap-1 text-xs text-slate-400"><Clock size={12} />{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
            {article.title}
          </h1>
          <blockquote
            cite="https://littleengineersacademy.com"
            className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-indigo-600 pl-4 not-italic"
          >
            {article.intro}
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="prose prose-slate max-w-none">
            {article.content.map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  {section.heading}
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {article.tables.map((table, i) => (
          <AnimatedSection key={i}>
            <div className="my-8">
              {table.title && (
                <h3 className="text-lg font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  {table.title}
                </h3>
              )}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      {table.headers.map((h) => (
                        <th key={h} className="text-left p-4 font-semibold text-slate-700">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {table.rows.map((row, r) => (
                      <tr key={r} className="bg-white hover:bg-slate-50">
                        {row.map((cell, c) => (
                          <td key={c} className={`p-4 ${c === 0 ? "font-semibold text-slate-900" : "text-slate-600"}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection>
          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              <CheckCircle2 size={20} className="text-indigo-600" />
              {article.checklist.title}
            </h3>
            <ol className="space-y-2">
              {article.checklist.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-10 bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-indigo-900 mb-3" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              <Lightbulb size={20} className="text-indigo-600" />
              Wat wij bij LEA zien
            </h3>
            <p className="text-indigo-950/80 leading-relaxed">{article.observation}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Veelgestelde vragen</h2>
            <FAQAccordion faqs={article.faqs} />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="my-8 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-indigo-600 mb-1">Gerelateerd programma</p>
            <Link href={article.relatedProgram.href} className="font-bold text-slate-900 hover:text-indigo-600 transition-colors">
              {article.relatedProgram.label} →
            </Link>
          </div>
        </AnimatedSection>

        {/* VERDER LEZEN */}
        <AnimatedSection>
          <div className="my-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Verder lezen</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {article.furtherReading.map((link) => (
                <Link
                  key={link.slug}
                  href={`/kennisbank/${link.slug}`}
                  className="block bg-slate-50 border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors"
                >
                  <p className="font-semibold text-slate-900 text-sm leading-snug">{link.title} →</p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-8 pt-8 border-t border-slate-100">
          <Link href="/kennisbank" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline">
            <ArrowLeft size={16} />
            Terug naar de kennisbank
          </Link>
        </div>
      </article>

      {isSchoolArticle ? (
        <CTASection
          title="Vraag een workshop op maat aan voor uw school"
          description="Vertel ons welk vak of thema u wilt behandelen — wij stellen de perfecte workshop voor. Bel, mail of stuur een WhatsApp-bericht."
          primaryLabel="Neem contact op"
          primaryHref="/contact"
          secondaryLabel="Bekijk alle programma's"
          secondaryHref="/programmas"
        />
      ) : (
        <CTASection title="Geïnspireerd? Kom naar een proefles" description="Schrijf uw kind in voor een gratis proefles en zie onze aanpak in de praktijk." />
      )}
    </>
  );
}
