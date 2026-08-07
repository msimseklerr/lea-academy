import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Palette,
  Music,
  GraduationCap,
  Microscope,
  SlidersHorizontal,
  Cog,
  Flower2,
  Zap,
  Cpu,
  Brain,
  Radio,
  Baby,
  Stethoscope,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Over Ons | Het Verhaal van Little Engineers Academy",
  description:
    "Little Engineers Academy is opgericht in 2016 in Eindhoven door Mustafa Şimşekler. Lees ons verhaal, onze 10-jarige tijdlijn en ontmoet ons multidisciplinaire team.",
  alternates: { canonical: "https://littleengineersacademy.com/over-ons" },
};

const faqItems = [
  {
    question: "Wanneer is Little Engineers Academy opgericht?",
    answer:
      "Little Engineers Academy is in 2016 in Eindhoven opgericht door Mustafa Şimşekler, met als missie om STEM-onderwijs toegankelijk, inspirerend en betekenisvol te maken voor elk kind — ongeacht achtergrond of voorkennis.",
  },
  {
    question: "Hoe groot is het team van LEA?",
    answer:
      "Ons team bestaat uit specialisten uit heel verschillende disciplines: ingenieurs, kunstenaars, musici, leerkrachten, academici en psychologen. Iedereen is getraind in onze methode en heeft ervaring met de betreffende leeftijdsgroepen.",
  },
  {
    question: "Werkt Little Engineers Academy ook met vrijwilligers of stagiaires?",
    answer:
      "Ja. Wij verwelkomen stagiaires van technische opleidingen (MBO/HBO) en samenwerken met studenten die onderzoek doen naar STEM-onderwijs. Interesse? Neem contact op.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "Oprichting door Mustafa Şimşekler",
    desc: "Little Engineers Academy wordt in Eindhoven opgericht door Mustafa Şimşekler, met de ambitie om STEM-onderwijs toegankelijk te maken voor elk kind.",
  },
  {
    year: "2016-2021",
    title: "6.000 leerlingen in de eerste vijf jaar",
    desc: "Een team van ingenieurs en pedagogen bouwt de methode verder uit. In de eerste vijf jaar bereikt LEA al meer dan 6.000 leerlingen.",
  },
  {
    year: "2020-2021",
    title: "Doorgaan tijdens de pandemie",
    desc: "Tijdens de pandemie blijft LEA de gemeenschap ondersteunen met online lessen en broadcasts, zodat kinderen thuis konden blijven leren en bouwen.",
  },
  {
    year: "2022",
    title: "Little Engineering Artistic Academy in Utrecht",
    desc: "Met financiering van Gemeente Utrecht en Macchinerie start het project 'Little Engineering Artistic Academy'. Het doel was 800 leerlingen — in het centrum van Utrecht werden uiteindelijk 1.200 leerlingen bereikt.",
  },
  {
    year: "2023",
    title: "Tweede prijs tijdens de Sint Maarten-viering",
    desc: "LEA behaalt de tweede prijs voor het beste project tijdens de Sint Maarten-viering.",
  },
  {
    year: "2024",
    title: "Talentanalyse voor Oekraïense leerlingen",
    desc: "In de Jaarbeurs in Utrecht verzorgt LEA talentanalyse-workshops voor leerlingen uit Oekraïne.",
  },
  {
    year: "2024",
    title: "12x TechFunday op middelbare scholen",
    desc: "Met de TechFunday-evenementen organiseert LEA 12 keer een beursactiviteit op middelbare scholen in het centrum van Eindhoven.",
  },
  {
    year: "2024",
    title: "Coördinator van Erasmus+ projecten",
    desc: "LEA vervult een coördinerende rol in de Erasmus+ projecten 'SIGN' en 'Robotic Art'.",
  },
  {
    year: "2025",
    title: "LEA-methodologie internationaal toegepast",
    desc: "De LEA-onderwijsmethodologie wordt toegepast in Canada, Kroatië, Madeira en Duitsland.",
  },
  {
    year: "2026",
    title: "Talent Analyse Centrum in Ede",
    desc: "Met het project 'Talent Analyse Centrum' van Gemeente Ede wordt een talentcentrum opgezet in Ede.",
  },
  {
    year: "2026",
    title: "40 locaties in heel Nederland",
    desc: "Gevestigd in de regio waar Philips ooit is opgericht, biedt LEA inmiddels talentanalyse-diensten aan op 40 verschillende locaties door heel Nederland.",
  },
];

const disciplines = [
  { label: "Kunstenaars", icon: Palette },
  { label: "Musici", icon: Music },
  { label: "Leerkrachten", icon: GraduationCap },
  { label: "Academici", icon: Microscope },
  { label: "Regeltechniek-ingenieurs", icon: SlidersHorizontal },
  { label: "Werktuigbouwkundig ingenieurs", icon: Cog },
  { label: "Montessori-specialisten", icon: Flower2 },
  { label: "Elektrotechnisch ingenieurs", icon: Zap },
  { label: "IT-ingenieurs", icon: Cpu },
  { label: "PhD Cognitieve Wetenschap", icon: Brain },
  { label: "Communicatie-ingenieurs", icon: Radio },
  { label: "Kleuterleerkrachten", icon: Baby },
  { label: "Psychiaters", icon: Stethoscope },
  { label: "Specialisten kinderontwikkeling", icon: Users },
];

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Over Ons" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Opgericht in 2016</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Ons verhaal
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Little Engineers Academy is een STEM-educatieacademie voor kinderen van 3 tot 17 jaar, opgericht in 2016 in Eindhoven door Mustafa Şimşekler. Wij zijn opgericht vanuit één overtuiging: elk kind heeft de potentie om een innovator, maker of probleemoplosser te worden. Onze taak is die potentie te helpen ontdekken.
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

      {/* TEAM PHOTO + MULTIDISCIPLINAIR TEAM */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Ons team
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Ons team bestaat uit gepassioneerde specialisten met achtergronden in techniek, onderwijs, kunst en psychologie. Allen getraind in de LEA Methode en gecertificeerd voor de betreffende leeftijdsgroepen.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white mb-12">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/site/lea-team.png"
                  alt="Het multidisciplinaire team van Little Engineers Academy"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Een multidisciplinair team
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl mb-8">
              De kracht van LEA zit in ons team: specialisten uit heel verschillende disciplines die samen een completer beeld van elk kind vormen dan één vakgebied alleen zou kunnen. Van engineering tot kunst, van psychologie tot pedagogiek — iedere achtergrond draagt bij aan hoe wij kinderen begeleiden.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {disciplines.map((d, i) => {
              const Icon = d.icon;
              return (
                <AnimatedSection key={d.label} delay={(i % 8) * 0.04}>
                  <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 shadow-sm p-4 h-full">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-indigo-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 leading-snug">{d.label}</span>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <p className="text-center text-slate-700 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Bij LEA werken ingenieurs, kunstenaars, musici, pedagogen en psychologen samen — een unieke combinatie die je nergens anders vindt.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              10 jaar LEA: een tijdlijn
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
              In tien jaar tijd groeide Little Engineers Academy van een klein initiatief in Eindhoven tot een landelijk netwerk voor talentanalyse en STEM-onderwijs. Onderstaande tijdlijn laat de belangrijkste stappen zien — van de eerste les tot samenwerkingen in heel Europa.
            </p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-200" />
            <ol className="space-y-8">
              {timeline.map((item, i) => (
                <li key={`${item.year}-${item.title}`}>
                  <AnimatedSection delay={i * 0.05}>
                    <div className="flex gap-6 relative">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 z-10 text-white text-xs font-bold text-center leading-tight px-1">
                        {item.year.length > 4 ? item.year.split("-")[0].slice(2) : item.year.slice(2)}
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
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          <StatCounter value={12000} suffix="+" label="leerlingen bereikt" />
          <StatCounter value={33000} suffix="+" label="robots gebouwd" />
          <StatCounter value={10} suffix="+" label="jaar ervaring" />
          <StatCounter value={150} suffix="+" label="scholen" />
          <StatCounter value={12} suffix="+" label="landen" />
          <StatCounter value={40} label="locaties in Nederland" />
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
