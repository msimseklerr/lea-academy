import type { Metadata } from "next";
import Link from "next/link";
import { Check, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tarieven | Transparante Prijzen bij Little Engineers Academy",
  description:
    "Bekijk de tarieven van Little Engineers Academy: wekelijkse cursus vanaf €75/maand, workshops vanaf €19, vakantiekampen vanaf €195 en gratis proefles & talentanalyse.",
  alternates: { canonical: "https://littleengineersacademy.com/tarieven" },
};

const faqItems = [
  {
    question: "Zijn er extra kosten naast het lesgeld?",
    answer:
      "Nee. Het maandtarief is inclusief alle materialen, begeleiding en de gratis talentanalyse. Er zijn geen verborgen kosten. Enkel voor vakantiekampen en kinderfeestjes gelden aparte tarieven.",
  },
  {
    question: "Wat als wij de kosten niet kunnen dragen?",
    answer:
      "Wij werken samen met Stichting Leergeld en soortgelijke fondsen om deelname ook mogelijk te maken voor gezinnen met een beperkt budget. Neem vertrouwelijk contact op en we zoeken samen naar een oplossing.",
  },
  {
    question: "Is er een kortingsregeling voor meerdere kinderen?",
    answer:
      "Ja. Bij inschrijving van een tweede kind uit hetzelfde gezin ontvangt u 10% korting op het maandtarief van het tweede kind. Neem contact op voor de precieze voorwaarden.",
  },
];

const programs = [
  {
    title: "Wekelijkse cursus",
    price: "€75",
    period: "per maand",
    description: "Doorlopende lessen, één keer per week. Inclusief alle materialen.",
    includes: ["Alle materialen & gereedschappen", "Max. 8 kinderen per groep", "Gratis talentanalyse", "Oudergesprek na elke evaluatiecyclus", "Toegang tot onze online leeromgeving"],
    highlight: false,
  },
  {
    title: "Workshop (losse les)",
    price: "€19",
    period: "per kind",
    description: "Eenmalige workshop voor een specifiek thema of vakantie-activiteit.",
    includes: ["Materialen inbegrepen", "Groepen van 8-16 kinderen", "Thematische invulling", "Ideaal als kennismaking"],
    highlight: false,
  },
  {
    title: "Vakantiekamp",
    price: "€195",
    period: "per week",
    description: "Maandag t/m vrijdag, 09:00-16:00. Elke dag een nieuw project.",
    includes: ["Volledige dagbegeleiding", "Alle materialen", "Vroege opvang optie (€ extra)", "Eigen project om mee naar huis te nemen"],
    highlight: true,
  },
  {
    title: "Kinderfeestje",
    price: "€129",
    period: "per feestje",
    description: "Bouwfeest of Codefeest voor 8-16 kinderen. Duur: 2 uur.",
    includes: ["Bouwfeest of Codefeest", "2 coaches aanwezig", "Materialen voor alle deelnemers", "Diploma voor alle kinderen"],
    highlight: false,
  },
];

export default function TarievenPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Tarieven" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Transparant & eerlijk</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Tarieven
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Wij geloven in transparante prijzen zonder verborgen kosten. De proefles en talentanalyse zijn altijd gratis — altijd.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* GRATIS */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div>
                <p className="font-bold text-xl mb-1">Proefles & Talentanalyse</p>
                <p className="text-indigo-200">Voor elk kind, zonder uitzondering. Geen creditcard nodig.</p>
              </div>
              <div className="text-center shrink-0">
                <p className="text-4xl font-extrabold" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Gratis</p>
                <Link href="/programmas/proefles" className="mt-2 inline-block text-sm underline text-indigo-200 hover:text-white">
                  Inschrijven →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICE CARDS */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <div className={`rounded-2xl border p-6 h-full flex flex-col ${p.highlight ? "border-indigo-300 bg-indigo-50 shadow-lg" : "border-slate-100 bg-white shadow-sm"}`}>
                {p.highlight && (
                  <span className="text-xs font-bold bg-indigo-600 text-white px-2 py-1 rounded-full mb-3 self-start">Populair</span>
                )}
                <h2 className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{p.title}</h2>
                <div className="mb-2">
                  <span className="text-3xl font-extrabold text-indigo-600" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{p.price}</span>
                  <span className="text-slate-500 text-sm ml-1">{p.period}</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">{p.description}</p>
                <ul className="space-y-2 flex-1">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check size={15} className="text-indigo-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center justify-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                  Inschrijven
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Wat is altijd inbegrepen?
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Alle materialen en gereedschappen",
              "Gratis talentanalyse voor elk kind",
              "Wekelijkse voortgangsnotities",
              "Toegang tot beide locaties (Eindhoven & Eersel)",
              "Jaarlijks oudergesprek",
              "Toegang tot online leerplatform",
              "Afstemming met school op verzoek",
              "Geen inschrijfkosten",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-100">
                <Check size={18} className="text-indigo-600 shrink-0" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEERGELD */}
      <AnimatedSection>
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start">
              <Heart size={24} className="text-amber-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Stichting Leergeld & financiële steun</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Wij vinden dat financiële situatie geen drempel mag zijn voor STEM-onderwijs. Via Stichting Leergeld en soortgelijke fondsen kunnen gezinnen met een beperkt budget in aanmerking komen voor vergoeding van de kosten. Neem vertrouwelijk contact met ons op — wij helpen u bij het aanvragen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over tarieven</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Begin met een gratis proefles" description="Schrijf uw kind in voor een vrijblijvende proefles. Geen kosten, geen verplichtingen — alleen ontdekken." />
    </>
  );
}
