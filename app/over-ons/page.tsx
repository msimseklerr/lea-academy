import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Over Ons | Het Verhaal van Little Engineers Academy",
  description:
    "Little Engineers Academy is opgericht in 2016 in Eindhoven. Lees ons verhaal, onze missie en ontdek wat ons drijft om STEM-onderwijs toegankelijk te maken voor elk kind.",
  alternates: { canonical: "https://littleengineersacademy.com/over-ons" },
};

const faqItems = [
  {
    question: "Wanneer is Little Engineers Academy opgericht?",
    answer:
      "Little Engineers Academy is in 2016 opgericht in Eindhoven, met als missie om STEM-onderwijs toegankelijk, inspirerend en betekenisvol te maken voor elk kind — ongeacht achtergrond of voorkennis.",
  },
  {
    question: "Hoe groot is het team van LEA?",
    answer:
      "Ons team groeit gestaag. We werken met een kern van vaste coaches en een netwerk van gespecialiseerde instructeurs. Alle coaches zijn getraind in onze methode en hebben ervaring met de betreffende leeftijdsgroepen.",
  },
  {
    question: "Werkt Little Engineers Academy ook met vrijwilligers of stagiaires?",
    answer:
      "Ja. Wij verwelkomen stagiaires van technische opleidingen (MBO/HBO) en samenwerken met studenten die onderzoek doen naar STEM-onderwijs. Interesse? Neem contact op.",
  },
];

const timeline = [
  { year: "2016", title: "Oprichting in Eindhoven", desc: "Little Engineers Academy start met een kleine groep kinderen in Eindhoven. De eerste lessen zijn gebaseerd op Scratch en eenvoudige robotica." },
  { year: "2018", title: "Opening Eersel & 1.000 kinderen", desc: "De tweede locatie opent in Eersel. In hetzelfde jaar bereiken we de mijlpaal van 1.000 begeleidde kinderen." },
  { year: "2020", title: "Online doorgaan tijdens pandemie", desc: "Tijdens de COVID-19 pandemie ontwikkelen wij een online lesprogramma. Meer dan 200 gezinnen volgen wekelijks een les vanuit huis." },
  { year: "2022", title: "Erasmus+ & nationale prijs", desc: "We starten met twee Erasmus+ projecten en behalen de 2e prijs in de nationale techniekprojectencompetitie." },
  { year: "2025", title: "33.000 kinderen bereikt", desc: "Een historische mijlpaal: meer dan 33.000 kinderen hebben inmiddels een programma bij LEA gevolgd. 9.300+ robots zijn gebouwd." },
  { year: "2026", title: "Heden & toekomst", desc: "Twee sterke locaties, 295.000+ observatiepunten en een internationaal netwerk. We blijven groeien — altijd met het kind centraal." },
];

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Over Ons" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Opgericht 2016</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Ons verhaal
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Little Engineers Academy is opgericht vanuit één overtuiging: elk kind heeft de potentie om een innovator, maker of probleemoplosser te worden. Onze taak is die potentie te helpen ontdekken.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Onze missie
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              Wij geloven dat STEM-onderwijs niet voorbehouden moet zijn aan kinderen die toevallig een technisch georiënteerde ouder of school hebben. Elk kind verdient de kans om te ontdekken of technologie, coderen of engineering iets is voor hem of haar.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Dat is waarom wij de talentanalyse gratis aanbieden. Dat is waarom wij programma's hebben voor kinderen van 3 tot 17 jaar. En dat is waarom we samenwerken met scholen in achterstandswijken en gemeenten die investeren in kansengelijkheid.
            </p>
            <blockquote className="border-l-4 border-indigo-600 pl-6 py-2 my-6 italic text-slate-700 text-lg">
              &ldquo;Elke vis verdient het om te zwemmen. Wij vinden zijn oceaan.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              10 jaar LEA: een tijdlijn
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-200" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.05}>
                  <div className="flex gap-6 relative">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 z-10 text-white text-xs font-bold">
                      {item.year.slice(2)}
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-indigo-600">{item.year}</span>
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={33000} suffix="+" label="kinderen begeleid" />
          <StatCounter value={9300} suffix="+" label="zelfgebouwde robots" />
          <StatCounter value={150} label="partnerscholen" />
          <StatCounter value={10} suffix="+" label="jaar ervaring" />
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Ons team
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ons team bestaat uit gepassioneerde coaches met achtergronden in techniek, onderwijs, pedagogiek en design. Allen getraind in de LEA Methode en gecertificeerd voor de betreffende leeftijdsgroepen.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: "STEM Coach (3-9 jaar)", desc: "Gespecialiseerd in kleuteronderwijs en early childhood STEM. Montessori gecertificeerd." },
              { role: "Technologie Instructeur", desc: "Achtergrond in informatica en didactiek. Gespecialiseerd in programmeren voor 9-17 jaar." },
              { role: "Talentanalyse Specialist", desc: "Pedagogiek en ontwikkelingspsychologie. Verantwoordelijk voor de observatie en rapportage." },
            ].map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-indigo-600 text-2xl">👤</span>
                  </div>
                  <p className="font-bold text-slate-900 mb-1">{member.role}</p>
                  <p className="text-sm text-slate-600">{member.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="text-center text-slate-500 text-sm mt-6 italic">
              Ons team groeit — binnenkort stellen wij ons persoonlijk voor op deze pagina.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over Little Engineers Academy</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Maak kennis met het team" description="Plan een bezoek of schrijf je kind in voor een gratis proefles en ontmoet onze coaches persoonlijk." secondaryLabel="Bekijk onze locaties" secondaryHref="/locaties/eindhoven" />
    </>
  );
}
