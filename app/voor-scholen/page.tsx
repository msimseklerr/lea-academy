import type { Metadata } from "next";
import Link from "next/link";
import { School, Building2, Landmark, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Voor Scholen & BSO | STEM-onderwijs op Maat",
  description:
    "Little Engineers Academy verzorgt techniekonderwijs voor basisscholen (W&T), kant-en-klare activiteitenblokken voor BSO's en STEAM-projecten voor gemeenten.",
  alternates: { canonical: "https://littleengineersacademy.com/voor-scholen" },
};

const faqItems = [
  {
    question: "Passen jullie activiteiten bij de W&T kerndoelen?",
    answer:
      "Ja. Al onze basisschoolprogramma's zijn afgestemd op de kerndoelen voor wetenschap en technologie (W&T) van het primair onderwijs. Wij leveren ook lesmateriaal en handleidingen voor de leerkracht.",
  },
  {
    question: "Kan een BSO een eenmalige workshop boeken?",
    answer:
      "Ja. Wij bieden zowel losse workshops als doorlopende activiteitenblokken aan. Een eenmalige workshop duurt 60-90 minuten en is geschikt voor groepen van 8-20 kinderen.",
  },
  {
    question: "Hoe snel kunnen jullie starten?",
    answer:
      "Na een eerste gesprek en planning kunnen wij in de meeste gevallen binnen 2-4 weken starten. Neem contact op via het formulier of bel ons direct.",
  },
];

export default function VoorScholenPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Voor Scholen" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">B2B samenwerking</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Voor scholen, BSO&apos;s &amp; gemeenten
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Little Engineers Academy werkt samen met 150+ scholen en BSO&apos;s in de regio Eindhoven en De Kempen. Wij brengen STEM-onderwijs rechtstreeks naar uw locatie, volledig op maat van uw doelgroep.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* BASISSCHOLEN */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <School size={20} className="text-indigo-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Basisscholen</h2>
            </div>
            <p className="text-slate-600 max-w-2xl mb-6 leading-relaxed">
              Wij verzorgen W&T-lessen als aanvulling op of vervanging van het bestaande techniekonderwijs. Onze coaches komen naar uw school, brengen alle materialen mee en verzorgen een volledige les.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="space-y-3">
                {[
                  "Aansluiting op W&T kerndoelen primair onderwijs",
                  "Geschikt voor groepen 1 t/m 8",
                  "Materialen en begeleiding volledig verzorgd",
                  "Losse lessen of doorlopend programma",
                  "Aansluitend bij de leerlijn van de school",
                  "Digitale evaluatie en ouderinformatie",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-700">
                    <Check size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                <h3 className="font-bold text-slate-900 mb-3">Brochure aanvragen</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">Ontvang onze schoolbrochure met programmaoverzicht, tarieven en referenties van andere scholen.</p>
                <a
                  href="mailto:info@littleengineersacademy.com?subject=Brochure%20basisscholen"
                  className="inline-flex items-center justify-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                >
                  Vraag de schoolbrochure aan →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* BSO */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Building2 size={20} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>BSO &amp; Kinderopvang</h2>
            </div>
            <p className="text-slate-600 max-w-2xl mb-6 leading-relaxed">
              Voor BSO&apos;s bieden wij kant-en-klare activiteitenblokken aan: een complete activiteit inclusief materialen, begeleiding en evaluatieformulier. Uw medewerkers hoeven niets voor te bereiden.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Losse workshop", desc: "Een enkele activiteit van 60-90 minuten voor een BSO-groep", price: "Op aanvraag" },
              { title: "Maandprogramma", desc: "Elke maand een thematische activiteit, doorlopend door het jaar", price: "Op aanvraag" },
              { title: "Seizoensprogramma", desc: "Intensief programma gedurende één schoolvakantie", price: "Op aanvraag" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                  <p className="text-xs text-indigo-600 font-semibold">{item.price}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="mt-6">
              <a
                href="mailto:info@littleengineersacademy.com?subject=BSO%20programma%20aanvraag"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
              >
                Vraag de BSO-brochure aan →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GEMEENTEN */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                <Landmark size={20} className="text-violet-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Gemeenten &amp; overheid</h2>
            </div>
            <p className="text-slate-600 max-w-2xl mb-6 leading-relaxed">
              Little Engineers Academy heeft ervaring met gemeentelijke STEAM-projecten in 7 wijken van Eindhoven en omgeving. Wij hebben ook programma&apos;s verzorgd voor kwetsbare doelgroepen, waaronder Oekraïense jeugd in de regio.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="space-y-3">
                {[
                  "Wijkgerichte STEAM-projecten in achterstandsgebieden",
                  "Programma's voor diversere doelgroepen",
                  "Subsidie-aanvragen ondersteuning beschikbaar",
                  "Rapportage en evaluatie voor verantwoording",
                  "Samenwerking met gemeente, welzijnsorganisaties en scholen",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-700">
                    <Check size={18} className="text-violet-600 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-violet-50 rounded-2xl p-6 border border-violet-100">
                <h3 className="font-bold text-slate-900 mb-3">Gemeentebrochure aanvragen</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">Ontvang onze projectreferenties, casestudies en mogelijkheden voor subsidieaanvragen.</p>
                <a
                  href="mailto:info@littleengineersacademy.com?subject=Gemeente%20brochure"
                  className="inline-flex items-center justify-center bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors text-sm"
                >
                  Vraag de gemeentebrochure aan →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over B2B samenwerking</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Neem contact op voor een samenwerking" description="Wij bespreken graag hoe wij uw school, BSO of gemeente kunnen helpen. Bel, mail of vul het contactformulier in." primaryLabel="Neem contact op" primaryHref="/contact" secondaryLabel="Bekijk ons onderzoek" secondaryHref="/onderzoek" />
    </>
  );
}
