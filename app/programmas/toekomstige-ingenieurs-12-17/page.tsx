import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Toekomstige Ingenieurs (12-17 jaar) | Python & Robotica bij LEA",
  description:
    "Toekomstige Ingenieurs bij Little Engineers Academy: jongeren van 12-17 jaar leren Python, geavanceerde robotica en bouwen een portfolio voor hun profielkeuze.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas/toekomstige-ingenieurs-12-17" },
};

const faqItems = [
  {
    question: "Leren jongeren echte programmeertalen bij Toekomstige Ingenieurs?",
    answer:
      "Ja, Python is de hoofdtaal in dit programma. Python is een van de meest gebruikte programmeertalen ter wereld en ideaal als eerste tekstgebaseerde taal vanwege de leesbare syntax. Deelnemers leren datatypes, functies, loops, klassen en bibliotheken zoals NumPy en Pygame.",
  },
  {
    question: "Helpt dit programma bij de profielkeuze in het voortgezet onderwijs?",
    answer:
      "Zeker. Onze begeleiders bespreken met jongeren welke technische richtingen passen bij hun talenten en interesses. Het opgebouwde portfolio is een concreet bewijs van competenties dat bij aanmeldingen voor technische middelbare scholen of later hbo/wo gebruikt kan worden.",
  },
  {
    question: "Wat staat er in het portfolio aan het einde van het programma?",
    answer:
      "Het portfolio bevat projectbeschrijvingen, broncode, video's van werkende prototypes en een persoonlijke reflectie. Elk kind presenteert het portfolio aan het eind van het jaar aan ouders en mede-deelnemers.",
  },
];

export default function ToekomstigeIngenieurPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-violet-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's", href: "/programmas" }, { label: "Toekomstige Ingenieurs" }]} />
          <AnimatedSection>
            <span className="inline-block bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">12-17 jaar</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Toekomstige Ingenieurs
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
              Python-programmering, geavanceerde robotica en een persoonlijk portfolio. Voor jongeren die technologie niet alleen als hobby zien, maar als toekomst.
            </p>
            <Link href="/programmas/proefles" className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02] hover:shadow-xl">
              Gratis proefles aanvragen
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Van hobbyist naar maker
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Toekomstige Ingenieurs is ons meest gevorderde programma, speciaal ontworpen voor jongeren van 12 tot 17 jaar die klaar zijn voor de stap naar professionele technologie. Python is de eerste echte programmeertaal — niet meer visueel, maar tekstgebaseerd en industrie-standaard.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Deelnemers werken aan geavanceerde roboticasystemen: sensorfusie, PID-regelaars, autonome navigatie en machine learning-experimenten. Ze leren niet alleen hoe het werkt, maar ook waarom — de ingenieursmindset staat centraal.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Elk deelnemer bouwt gedurende het jaar aan een persoonlijk portfolio met afgeronde projecten, broncode en reflecties. Dit portfolio helpt bij de profielkeuze in het voortgezet onderwijs en bij aanmeldingen voor technische studies.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                alt="Tiener van 15 jaar programmeert in Python op een laptop bij Little Engineers Academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 bg-violet-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Wat leer je dit jaar?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { q: "1e kwartaal", topics: ["Python basisprincipes", "Functies & modules", "Datastructuren", "Eerste projecten"] },
              { q: "2e kwartaal", topics: ["Robotica-interfaces", "Sensoren & actuatoren", "Object-georiënteerd programmeren", "Teamproject"] },
              { q: "3e & 4e kwartaal", topics: ["Zelfgekozen project", "Portfolio opbouwen", "Presentatievaardigheden", "Profielkeuze gesprek"] },
            ].map((k) => (
              <AnimatedSection key={k.q}>
                <div className="bg-white rounded-xl p-5 border border-violet-100">
                  <p className="font-bold text-violet-600 mb-3">{k.q}</p>
                  <ul className="space-y-1">
                    {k.topics.map((t) => (
                      <li key={t} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over Toekomstige Ingenieurs</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Bouw aan de toekomst — letterlijk" description="Schrijf je in voor een gratis proefles en ontdek of Toekomstige Ingenieurs de juiste uitdaging is voor jouw kind." primaryLabel="Gratis proefles aanvragen" secondaryLabel="Bekijk alle programma's" />
    </>
  );
}
