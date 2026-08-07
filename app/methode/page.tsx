import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "De LEA Methode | Ontdekken, Maken, Meesteren",
  description:
    "De LEA Methode combineert Montessori, Waldorf en Dalton-pedagogiek met constructionisme van Seymour Papert. Lees hoe wij STEM-onderwijs aanpakken.",
  alternates: { canonical: "https://littleengineersacademy.com/methode" },
};

const faqItems = [
  {
    question: "Is de LEA Methode wetenschappelijk onderbouwd?",
    answer:
      "Ja. De methode is gebaseerd op constructionisme (Seymour Papert, MIT), het werk van Mitchel Resnick (Lifelong Kindergarten), en inzichten uit Montessori, Waldorf en Dalton-pedagogiek. Bovendien heeft LEA deelgenomen aan Europese onderzoeksprojecten binnen het Erasmus+ programma.",
  },
  {
    question: "Hoe verschilt de LEA Methode van regulier techniekonderwijs op school?",
    answer:
      "Regulier techniekonderwijs is vaak instructiegedreven: de leerkracht legt uit, leerlingen voeren uit. Bij LEA is het andersom: kinderen starten met een uitdaging en bedenken zelf een aanpak. De coach begeleidt, stelt vragen en biedt scaffolding — maar geeft nooit het antwoord weg.",
  },
  {
    question: "Wordt de methode aangepast per leeftijdsgroep?",
    answer:
      "Ja, uitgebreid. De drie fasen Ontdekken, Maken en Meesteren keren bij elke leeftijdsgroep terug, maar de invulling verschilt volledig. Bij kleuters zijn dat tastbare, speelse activiteiten zonder schermen. Bij tieners zijn dat Python-projecten en robotica-uitdagingen.",
  },
];

export default function MethodePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Onze Methode" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Pedagogische aanpak</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              De LEA Methode:<br />Ontdekken, Maken, Meesteren
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-6">
              Onze methode is geen trucje of een marketingconcept. Het is een doordachte, wetenschappelijk onderbouwde aanpak die is ontwikkeld over 10 jaar praktijkervaring met meer dan 12.000 leerlingen.
            </p>
            <blockquote
              cite="https://littleengineersacademy.com"
              className="text-xl md:text-2xl font-bold italic text-indigo-600 max-w-2xl border-l-4 border-indigo-600 pl-6"
            >
              &ldquo;In een wereld vol schermen leren kinderen bij ons weer met hun handen denken.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* 3 PHASES */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {[
            {
              nr: "01",
              title: "Ontdekken",
              color: "text-amber-500",
              bg: "bg-amber-50",
              border: "border-amber-200",
              content: `De eerste fase van de LEA Methode begint altijd met een open vraag of een uitdaging zonder voor de hand liggend antwoord. In plaats van een instructie te geven, zet de coach kinderen aan het denken: "Hoe zou je een brug kunnen bouwen die 500 gram kan dragen met alleen karton en tape?"

In deze fase is er geen fout antwoord. Kinderen worden aangemoedigd om te brainstormen, hypotheses op te stellen en te redeneren. Dit activeert de prefrontale cortex — het deel van de hersenen dat verantwoordelijk is voor planning, probleemoplossing en creatief denken.

De Ontdekken-fase bouwt intrinsieke motivatie op. Wanneer een kind zelf een probleem formuleert en een aanpak bedenkt, is de kans veel groter dat het volhoudt als het moeilijk wordt. Dit is de kern van wat Seymour Papert constructionisme noemde: leren door te maken, niet door te horen.`,
            },
            {
              nr: "02",
              title: "Maken",
              color: "text-indigo-600",
              bg: "bg-indigo-50",
              border: "border-indigo-200",
              content: `De Maken-fase is waar het zichtbaar wordt. Kinderen bouwen, programmeren, testen en passen aan. Ze werken met echte materialen: robots, circuits, 3D-printers, programmeertalen. Hands-on, niet theoretisch.

Onze coaches hanteren de 70-20-10 regel: 70% van de tijd werkt het kind zelfstandig, 20% werkt het samen met een mede-deelnemer, en 10% van de tijd is er directe begeleiding. Dit zorgt voor een hoog niveau van zelfstandigheid terwijl kinderen toch de steun krijgen die ze nodig hebben.

Fouten zijn welkom in de Maken-fase — ze zijn essentieel. Een robot die niet rijdt, een programma dat crashed: dit zijn geen mislukkingen maar leermomenten. Kinderen leren debuggen, analyseren en opnieuw proberen. Dit is de meest directe voorbereiding op het echte leven.

De Waldorf-pedagogiek beïnvloedt hoe wij deze fase inrichten: we werken cyclisch, geven ruimte voor ritme en herhaling, en integreren ambacht en vakmanschap in technologieopdrachten.`,
            },
            {
              nr: "03",
              title: "Meesteren",
              color: "text-fuchsia-600",
              bg: "bg-fuchsia-50",
              border: "border-fuchsia-200",
              content: `De derde fase gaat over reflectie, trots en consolidatie. Elk project eindigt met een presentatiemoment: het kind laat zien wat het heeft gemaakt, legt uit hoe het werkt, en reflecteert op wat het heeft geleerd.

Dit is geen schoolpresentatie waarbij het kind beoordeeld wordt — het is een showcase voor de groep. Andere kinderen stellen vragen, geven complimenten en bouwen verder op elkaars ideeën. Dit bevordert een leer-ecosysteem.

De Dalton-pedagogiek speelt hier een rol: we werken met individuele leerplannen en evaluatiegesprekken waarbij het kind zelf doelen stelt voor de volgende cyclus. "Wat wil ik volgende week proberen?" is een vaste vraag aan het einde van elke les.

Meesteren betekent bij ons niet dat een kind alles perfect kan — het betekent dat een kind zijn eigen groei ziet en erop voortbouwt.`,
            },
          ].map((phase) => (
            <AnimatedSection key={phase.nr}>
              <div className={`rounded-2xl border ${phase.border} ${phase.bg} p-8`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-5xl font-extrabold ${phase.color}`} style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{phase.nr}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{phase.title}</h2>
                </div>
                <div className="space-y-4">
                  {phase.content.split("\n\n").map((para, i) => (
                    <p key={i} className="text-slate-700 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* INFLUENCES */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Onze pedagogische inspiratiebronnen
            </h2>
          </AnimatedSection>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-700">Pedagogiek</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Kernprincipe</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Hoe wij het toepassen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Montessori</td>
                  <td className="p-4 text-slate-600">Zelfgestuurd leren, voorbereide omgeving</td>
                  <td className="p-4 text-slate-600">Kinderen kiezen hun eigen uitdagingsniveau; materialen zijn altijd beschikbaar</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Waldorf</td>
                  <td className="p-4 text-slate-600">Ritme, ambacht, holistische ontwikkeling</td>
                  <td className="p-4 text-slate-600">Vaste lesstructuur, vakmanschap in bouwen, aandacht voor emotie naast ratio</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Dalton</td>
                  <td className="p-4 text-slate-600">Vrijheid, zelfverantwoordelijkheid, samenwerking</td>
                  <td className="p-4 text-slate-600">Persoonlijke taakkaarten, evaluatiegesprekken, keuze in werkwijze</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Constructionisme (Papert)</td>
                  <td className="p-4 text-slate-600">Leren door te maken, kennis als product</td>
                  <td className="p-4 text-slate-600">Elk project levert een tastbaar resultaat; denken en doen zijn één</td>
                </tr>
              </tbody>
            </table>
          </div>
          <AnimatedSection>
            <div className="mt-8 bg-white rounded-xl p-6 border border-indigo-100">
              <h3 className="font-bold text-slate-900 mb-2">Seymour Papert & Mitchel Resnick</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Onze methode is sterk beïnvloed door Seymour Papert (MIT), de grondlegger van constructionisme en uitvinder van de programmeertaal Logo. Zijn idee dat kinderen het best leren door dingen te maken — en die dingen te delen — is de kern van elke LEA-les. Zijn opvolger Mitchel Resnick (ook MIT, maker van Scratch) beschrijft in zijn boek &ldquo;Lifelong Kindergarten&rdquo; hoe creativiteit en nieuwsgierigheid het beste gedijen in een omgeving van spelen, projecten, passie en peers. Wij leven dat elke dag.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AGE ADAPTATIONS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Leeftijdsadaptaties
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              De drie fasen Ontdekken, Maken en Meesteren keren terug in elke leeftijdsgroep — maar de invulling verschilt wezenlijk per ontwikkelingsfase.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { age: "3-6 jaar (Kleine Uitvinders)", items: ["Ontdekken = tastbaar spel met fysieke materialen", "Maken = stapelen, constructeren, sorteren", "Meesteren = trots laten zien aan de groep", "Geen schermen, alleen hands-on"] },
              { age: "6-9 jaar (Jonge Makers)", items: ["Ontdekken = engineering design challenge", "Maken = Scratch + eerste robots", "Meesteren = demo aan de klas", "Focus op samenwerking"] },
              { age: "9-12 jaar (Slimme Bouwers)", items: ["Ontdekken = complexe probleemstelling", "Maken = micro:bit, 3D-print, robotica", "Meesteren = presentatie + iteratie", "Wedstrijdvoorbereiding als optie"] },
              { age: "12-17 jaar (Toekomstige Ingenieurs)", items: ["Ontdekken = zelfgekozen projectthema", "Maken = Python, geavanceerde robotica", "Meesteren = portfolio + eindpresentatie", "Profielkeuze-begeleiding"] },
            ].map((g) => (
              <AnimatedSection key={g.age}>
                <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                  <h3 className="font-bold text-indigo-600 mb-3">{g.age}</h3>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 shrink-0" />
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

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over onze methode</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Ervaar de methode zelf" description="Kom naar een gratis proefles en zie hoe Ontdekken, Maken en Meesteren er in de praktijk uitziet." secondaryLabel="Lees over ons onderzoek" secondaryHref="/onderzoek" />
    </>
  );
}
