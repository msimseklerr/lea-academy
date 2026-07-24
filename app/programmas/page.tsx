import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Wrench, Cpu, GraduationCap, Sun, Cake, FlaskConical } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Programma's voor Kinderen | Robotica, Coderen & Engineering",
  description:
    "Ontdek alle programma's van Little Engineers Academy: wekelijkse cursussen, workshops, vakantiekampen en kinderfeestjes voor kinderen van 3-17 jaar in Eindhoven en Eersel.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas" },
  openGraph: {
    title: "Programma's voor Kinderen | Little Engineers Academy",
    description:
      "STEM-programma's voor kinderen van 3-17 jaar: robotica, coderen en engineering.",
    url: "https://littleengineersacademy.com/programmas",
  },
};

const faqItems = [
  {
    question: "Hoe weet ik welk programma bij mijn kind past?",
    answer:
      "Onze programma's zijn ingedeeld op leeftijd en ontwikkelingsniveau. Twijfelt u? Neem contact op of schrijf u in voor een gratis proefles — na één sessie weten wij precies welke groep het beste aansluit bij uw kind.",
  },
  {
    question: "Zijn de groepen klein?",
    answer:
      "Ja, wij hanteren een maximale groepsgrootte van 8 kinderen per les. Zo krijgt elk kind persoonlijke begeleiding en genoeg ruimte om op zijn of haar eigen tempo te werken.",
  },
  {
    question: "Kan mijn kind tussentijds van programma wisselen?",
    answer:
      "Dat is mogelijk. Wanneer een kind sneller of langzamer ontwikkelt dan verwacht, overleggen wij met de ouders en zoeken we samen naar de beste oplossing.",
  },
  {
    question: "Zijn er ook programma's tijdens schoolvakanties?",
    answer:
      "Ja! Wij organiseren vakantiekampen in bijna elke schoolvakantie. Kijk op de pagina Vakantiekampen voor de actuele planning.",
  },
];

const ageGroups = [
  {
    href: "/programmas/kleine-uitvinders-3-6",
    color: "amber",
    colorClass: "bg-amber-500",
    borderClass: "border-amber-200",
    bgClass: "bg-amber-50",
    icon: Lightbulb,
    age: "3-6 jaar",
    title: "Kleine Uitvinders",
    description:
      "Voor de allerkleinsten die de wereld willen begrijpen door te doen. Volledig schermvrij, spelend leren met tastbare materialen en bouwopdrachten die aansluiten bij de kleuterfase.",
    highlights: ["Schermvrij", "Fijne motoriek", "Unplugged coderen", "Schoolrijpheid"],
  },
  {
    href: "/programmas/jonge-makers-6-9",
    color: "emerald",
    colorClass: "bg-emerald-500",
    borderClass: "border-emerald-200",
    bgClass: "bg-emerald-50",
    icon: Wrench,
    age: "6-9 jaar",
    title: "Jonge Makers",
    description:
      "Kinderen maken kennis met ScratchJr en Scratch, bouwen hun eerste echte robots en leren het engineering design process kennen. Creativiteit en samenwerking staan centraal.",
    highlights: ["Scratch & ScratchJr", "Eerste robots", "Engineering design", "Samenwerken"],
  },
  {
    href: "/programmas/slimme-bouwers-9-12",
    color: "sky",
    colorClass: "bg-sky-500",
    borderClass: "border-sky-200",
    bgClass: "bg-sky-50",
    icon: Cpu,
    age: "9-12 jaar",
    title: "Slimme Bouwers",
    description:
      "Scratch op masterniveau, micro:bit programmeren, 3D-ontwerp en robotica-teams die deelnemen aan wedstrijden. Voor kinderen die uitgedaagd willen worden.",
    highlights: ["Scratch mastery", "Micro:bit", "3D-ontwerp", "Robotica-wedstrijden"],
  },
  {
    href: "/programmas/toekomstige-ingenieurs-12-17",
    color: "violet",
    colorClass: "bg-violet-500",
    borderClass: "border-violet-200",
    bgClass: "bg-violet-50",
    icon: GraduationCap,
    age: "12-17 jaar",
    title: "Toekomstige Ingenieurs",
    description:
      "Python-programmering, geavanceerde robotica, portfolio-projecten en begeleiding bij profielkeuze. Voor jongeren die technologie als toekomst zien.",
    highlights: ["Python", "Geavanceerde robotica", "Portfolio", "Profielkeuze"],
  },
];

const formats = [
  { href: "/programmas", icon: Cpu, title: "Wekelijkse cursussen", desc: "Doorlopende lessen, één keer per week, in kleine groepen van max. 8 kinderen." },
  { href: "/programmas/vakantiekampen", icon: Sun, title: "Vakantiekampen", desc: "Intensieve daagprogramma's in schoolvakanties. Elke dag een nieuw project." },
  { href: "/programmas/kinderfeestjes", icon: Cake, title: "Kinderfeestjes", desc: "Robot verjaardagsfeest! Bouwfeest of Codefeest — onvergetelijk voor elk kind." },
  { href: "/programmas/proefles", icon: FlaskConical, title: "Gratis proefles", desc: "Kom eerst kennismaken — helemaal vrijblijvend en gratis voor alle groepen." },
];

export default function ProgrammasPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://littleengineersacademy.com" },
      { "@type": "ListItem", position: 2, name: "Programma's", item: "https://littleengineersacademy.com/programmas" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-b from-indigo-50/50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Leeftijd 3-17 jaar</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Alle programma&apos;s
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Little Engineers Academy biedt een doorlopende leerlijn van 3 tot 17 jaar. Elk programma is afgestemd op de ontwikkelingsfase van het kind — van spelend ontdekken tot geavanceerde engineering.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AGE GROUPS */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Leeftijdsgroepen
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {ageGroups.map((g, i) => (
              <AnimatedSection key={g.href} delay={i * 0.05}>
                <div className={`rounded-2xl border ${g.borderClass} ${g.bgClass} p-6 md:p-8`}>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className={`w-14 h-14 rounded-xl ${g.colorClass} flex items-center justify-center shrink-0`}>
                      <g.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full ${g.colorClass} text-white`}>{g.age}</span>
                        <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{g.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-4 leading-relaxed">{g.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {g.highlights.map((h) => (
                          <span key={h} className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">{h}</span>
                        ))}
                      </div>
                      <Link href={g.href} className="text-indigo-600 font-semibold hover:underline text-sm">
                        Meer over {g.title} →
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Alle lesvormen
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.05}>
                <Link href={f.href} className="group block bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <f.icon size={24} className="text-indigo-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Vergelijkingstabel programma&apos;s
            </h2>
          </AnimatedSection>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-700">Programma</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Leeftijd</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Groepsgrootte</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Duur per les</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">Kleine Uitvinders</td>
                  <td className="p-4 text-slate-600">3-6 jaar</td>
                  <td className="p-4 text-slate-600">Max. 8</td>
                  <td className="p-4 text-slate-600">60 minuten</td>
                  <td className="p-4 text-slate-600">Spelend leren, schermvrij</td>
                </tr>
                <tr className="hover:bg-emerald-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">Jonge Makers</td>
                  <td className="p-4 text-slate-600">6-9 jaar</td>
                  <td className="p-4 text-slate-600">Max. 8</td>
                  <td className="p-4 text-slate-600">60 minuten</td>
                  <td className="p-4 text-slate-600">Scratch, robots, design</td>
                </tr>
                <tr className="hover:bg-sky-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">Slimme Bouwers</td>
                  <td className="p-4 text-slate-600">9-12 jaar</td>
                  <td className="p-4 text-slate-600">Max. 8</td>
                  <td className="p-4 text-slate-600">60 minuten</td>
                  <td className="p-4 text-slate-600">Micro:bit, 3D, wedstrijden</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">Toekomstige Ingenieurs</td>
                  <td className="p-4 text-slate-600">12-17 jaar</td>
                  <td className="p-4 text-slate-600">Max. 8</td>
                  <td className="p-4 text-slate-600">60 minuten</td>
                  <td className="p-4 text-slate-600">Python, portfolio, robotica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Veelgestelde vragen over onze programma&apos;s</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
