import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, MapPin, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { articleList } from "@/content/kennisbank";
import { cities, cityOrder } from "@/content/steden";

export const metadata: Metadata = {
  title: "Kennisbank | STEM & Opvoeding Artikelen voor Ouders",
  description:
    "Lees praktische artikelen over STEM-onderwijs, programmeren voor kinderen, schermtijd, fijne motoriek en hoogbegaafdheid. Gratis kennisbank van Little Engineers Academy.",
  alternates: { canonical: "https://littleengineersacademy.com/kennisbank" },
};

const categoryColors: Record<string, string> = {
  Programmeren: "bg-indigo-100 text-indigo-700",
  "Kleuters & Motoriek": "bg-amber-100 text-amber-700",
  Motoriek: "bg-emerald-100 text-emerald-700",
  Ontwikkeling: "bg-violet-100 text-violet-700",
  Schermtijd: "bg-sky-100 text-sky-700",
  Robotica: "bg-rose-100 text-rose-700",
  Hersenontwikkeling: "bg-teal-100 text-teal-700",
  "STEM Onderwijs": "bg-blue-100 text-blue-700",
  Talentontwikkeling: "bg-orange-100 text-orange-700",
  "Maker Education": "bg-green-100 text-green-700",
  Toekomstvaardigheden: "bg-purple-100 text-purple-700",
  Praktisch: "bg-cyan-100 text-cyan-700",
};

export default function KennisbankPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Kennisbank" }]} />
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={20} className="text-indigo-600" />
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Gratis kennisbank</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Kennisbank voor ouders
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Praktische artikelen over STEM-onderwijs, programmeren, schermtijd en de ontwikkeling van kinderen. Geschreven door onze coaches en pedagogisch specialisten.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articleList.map((article, i) => (
              <AnimatedSection key={article.slug} delay={(i % 6) * 0.05}>
                <Link href={`/kennisbank/${article.slug}`} className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[article.category] ?? "bg-slate-100 text-slate-700"}`}>{article.category}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={12} />{article.readTime}
                      </span>
                    </div>
                    <h2 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {article.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{article.description}</p>
                    <p className="text-indigo-600 text-sm font-semibold mt-3 group-hover:underline">Lees artikel →</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={20} className="text-indigo-600" />
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Per stad</p>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                STEM-, codeer- en roboticalessen per stad
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Op zoek naar codeer-, robotica- of STEM-lessen in uw eigen stad? Lees onze
                stadsgidsen voor praktische informatie en advies, specifiek voor uw regio.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityOrder.map((slug, i) => {
              const city = cities[slug];
              return (
                <AnimatedSection key={slug} delay={(i % 6) * 0.05}>
                  <Link
                    href={`/steden/${slug}`}
                    className="group block h-full bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:border-indigo-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className="text-indigo-600" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                        {city.hasPhysicalLocation ? "Eigen locatie" : "Regio & scholen"}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors"
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    >
                      {city.cityName}
                    </h3>
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
        </div>
      </section>

      <CTASection title="Meer weten? Kom naar een proefles" description="Lees onze artikelen en kom dan zelf ervaren hoe Little Engineers Academy uw kind inspireert." secondaryLabel="Bekijk alle programma's" secondaryHref="/programmas" />
    </>
  );
}
