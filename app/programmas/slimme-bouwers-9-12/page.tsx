import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Slimme Bouwers (9-12 jaar) | Micro:bit & Robotica bij LEA",
  description:
    "Slimme Bouwers bij Little Engineers Academy: kinderen van 9-12 jaar werken met micro:bit, 3D-ontwerp en robotica-teams. Deelname aan nationale wedstrijden.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas/slimme-bouwers-9-12" },
};

const faqItems = [
  {
    question: "Wat is een micro:bit en waarom gebruiken jullie die?",
    answer:
      "De BBC micro:bit is een kleine programmeerbare computer die populair is in onderwijs wereldwijd. Hij heeft LED-schermen, bewegingssensoren, een kompas en Bluetooth — perfect voor creatieve techniekprojecten. Kinderen programmeren hem via MakeCode (visueel) of Python.",
  },
  {
    question: "Doen kinderen ook mee aan wedstrijden?",
    answer:
      "Ja, kinderen die dat willen kunnen deelnemen aan regionale en nationale robotica-wedstrijden. Deelname is altijd vrijwillig. Onze begeleiders helpen bij de voorbereiding maar de oplossingen komen altijd van de kinderen zelf.",
  },
  {
    question: "Hoe moeilijk is 3D-ontwerp voor kinderen van 9-12?",
    answer:
      "We gebruiken Tinkercad, een gratis, browsergebaseerde 3D-ontwerptool die speciaal is ontwikkeld voor beginners. Kinderen leren binnen een paar lessen eenvoudige 3D-modellen maken en begrijpen de basisprincipes van constructief ontwerp.",
  },
];

export default function SlimmeBouwersPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's", href: "/programmas" }, { label: "Slimme Bouwers" }]} />
          <AnimatedSection>
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">9-12 jaar</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Slimme Bouwers
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
              Scratch op masterniveau, micro:bit programmeren, 3D-ontwerp met Tinkercad en robotica-teams die klaar zijn voor wedstrijden. Voor kinderen die echt uitgedaagd willen worden.
            </p>
            <Link href="/programmas/proefles" className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02] hover:shadow-xl">
              Gratis proefles aanvragen
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Techniek op serieus niveau
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Bij Slimme Bouwers gaan kinderen echt de diepte in. Scratch is niet langer nieuw — ze gebruiken het om complexe spelletjes en interactieve verhalen te maken met variabelen, loops en functies. Daarna maken ze de overstap naar micro:bit: een kleine programmeerbare computer waarmee ze sensoren uitlezen, LED-patronen programmeren en eigen uitvindingen bouwen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              3D-ontwerp met Tinkercad laat kinderen zien hoe digitale ontwerpen werkelijkheid worden. Ze leren nadenken over maten, stevigheid en functionaliteit — vaardigheden die later terugkomen in architectuur, design en engineering.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Voor kinderen die extra uitdaging zoeken, bieden we deelname aan robotica-wedstrijden. Onder begeleiding van onze coaches ontwikkelen teams samen een oplossing voor een concrete technische uitdaging. Dit leert strategisch denken, teamwerk en doorzettingsvermogen.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="Kind van 10 jaar werkt met een micro:bit microcontroller bij Little Engineers Academy in Eindhoven"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Scratch mastery", desc: "Variabelen, functies, events" },
                { label: "Micro:bit", desc: "Sensoren, LED, Bluetooth" },
                { label: "3D-ontwerp", desc: "Tinkercad, printen, itereren" },
                { label: "Robotica", desc: "Teams, wedstrijden, presenteren" },
              ].map((item) => (
                <div key={item.label} className="bg-sky-50 rounded-xl p-3 border border-sky-100">
                  <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over Slimme Bouwers</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Klaar voor de volgende uitdaging?" description="Schrijf je kind in voor een gratis proefles Slimme Bouwers en ontdek de wereld van micro:bit, 3D-ontwerp en robotica." primaryLabel="Gratis proefles Slimme Bouwers" secondaryLabel="Bekijk alle programma's" />
    </>
  );
}
