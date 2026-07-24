import type { Metadata } from "next";
import Link from "next/link";
import { Cake, Bot, Code2, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Kinderfeestjes | Robot Verjaardagsfeest bij LEA",
  description:
    "Robot verjaardagsfeest bij Little Engineers Academy! Bouwfeest of Codefeest — een onvergetelijke verjaardag voor kinderen van 6-15 jaar in Eindhoven of Eersel.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas/kinderfeestjes" },
};

const faqItems = [
  {
    question: "Hoeveel kinderen kunnen er meedoen aan een kinderfeestje?",
    answer:
      "Een kinderfeestje bij LEA is geschikt voor groepen van 8 tot 16 kinderen. Kleinere of grotere groepen zijn bespreekbaar — neem contact op voor maatwerk.",
  },
  {
    question: "Hoe lang duurt een kinderfeestje?",
    answer:
      "Een standaard feestje duurt 2 uur. Dit is inclusief introductie, bouwen/programmeren, presentatie van de projecten en vrije tijd. Een verlengd pakket van 2,5 uur is ook beschikbaar.",
  },
  {
    question: "Kan ik zelf eten en drinken meenemen?",
    answer:
      "Ja, dat is geen probleem. Wij bieden de locatie en begeleiding. Taart, snacks en drinken brengt u zelf mee. Wij hebben een kleine keukenruimte die u daarvoor kunt gebruiken.",
  },
  {
    question: "Vanaf welke leeftijd is een kinderfeestje geschikt?",
    answer:
      "Het Bouwfeest is geschikt voor kinderen vanaf 6 jaar. Het Codefeest is bedoeld voor kinderen van 8 jaar en ouder. Voor jongere kinderen (4-6) is een aangepast programma mogelijk — vraag naar de opties.",
  },
];

const packages = [
  {
    icon: Bot,
    name: "Bouwfeest",
    subtitle: "Leeftijd 6-12 jaar",
    price: "vanaf €249",
    color: "bg-amber-500",
    border: "border-amber-200",
    bg: "bg-amber-50",
    description: "Kinderen bouwen samen hun eigen robot. Elke deelnemer gaat naar huis met een zelfgebouwde en geprogrammeerde robot. Geen technische kennis vereist.",
    includes: [
      "Welkomst & introductie door een LEA-coach",
      "Bouwmateriaal voor elke deelnemer",
      "Begeleiding van minimaal 2 coaches",
      "Robot-uitdaging: wie komt het verste?",
      "Diploma & sticker voor alle deelnemers",
      "Gebruik van onze locatie voor de taart",
    ],
  },
  {
    icon: Code2,
    name: "Codefeest",
    subtitle: "Leeftijd 8-15 jaar",
    price: "vanaf €279",
    color: "bg-indigo-600",
    border: "border-indigo-200",
    bg: "bg-indigo-50",
    description: "Kinderen programmeren samen een eigen spel of animatie in Scratch. Aan het einde van het feest presenteert iedereen zijn creatie op het grote scherm.",
    includes: [
      "Welkomst & introductie door een LEA-coach",
      "Laptop of iPad per deelnemer",
      "Scratch-workshop op maat",
      "Presentatie op groot scherm",
      "Digitaal certificaat per deelnemer",
      "Gebruik van onze locatie voor de taart",
    ],
  },
];

export default function KinderfeestjesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's", href: "/programmas" }, { label: "Kinderfeestjes" }]} />
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <Cake size={20} className="text-pink-500" />
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">Verjaardagsfeest</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Robot verjaardagsfeest
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Een onvergetelijke verjaardag waarbij kinderen niet alleen feesten, maar ook iets maken. Kies tussen het Bouwfeest (eigen robot bouwen) of het Codefeest (eigen spel programmeren).
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Kies jouw feestpakket
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div className={`rounded-2xl border ${p.border} ${p.bg} p-6 h-full`}>
                  <div className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center mb-4`}>
                    <p.icon size={28} className="text-white" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{p.name}</h3>
                      <p className="text-sm text-slate-500">{p.subtitle}</p>
                    </div>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${p.color} text-white`}>{p.price}</span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{p.description}</p>
                  <ul className="space-y-2">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Zo werkt het
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Contact opnemen", desc: "Stuur een bericht via het contactformulier of bel ons" },
              { step: "2", title: "Datum & pakket", desc: "Wij bespreken de beschikbaarheid en uw wensen" },
              { step: "3", title: "Bevestiging", desc: "Na een kleine aanbetaling is uw feestje gereserveerd" },
              { step: "4", title: "Feest vieren!", desc: "Op de dag zelf regelen wij alles — u geniet mee" },
            ].map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{s.step}</div>
                  <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over kinderfeestjes</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Plan het meest bijzondere kinderfeestje" description="Neem contact op voor beschikbaarheid en reserveer de datum van het feestje. Plaatsen zijn beperkt." primaryLabel="Feestje reserveren" primaryHref="/contact" secondaryLabel="Meer over onze locaties" secondaryHref="/locaties/eindhoven" />
    </>
  );
}
