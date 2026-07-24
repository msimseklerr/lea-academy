import type { Metadata } from "next";
import Link from "next/link";
import { Sun, Clock, Users, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Vakantiekampen | STEM & Robotica Kampen voor Kinderen",
  description:
    "Vakantiekampen bij Little Engineers Academy: intensieve dagprogramma's in schoolvakanties voor kinderen van 6-17 jaar. Robotica, coderen en engineering. Eindhoven & Eersel.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas/vakantiekampen" },
};

const faqItems = [
  {
    question: "Voor welke leeftijden zijn de vakantiekampen?",
    answer:
      "Onze vakantiekampen zijn beschikbaar voor kinderen van 6 tot 17 jaar. We werken met aparte groepen per leeftijdsniveau, zodat de opdrachten en het tempo altijd passen bij de deelnemers.",
  },
  {
    question: "Hoe lang duurt een vakantiekamp?",
    answer:
      "Een vakantiekamp is een week van maandag tot en met vrijdag, van 09:00 tot 16:00 uur. Er is ook een vroege opvang mogelijkheid (08:00) en late opvang (17:30) beschikbaar tegen meerprijs.",
  },
  {
    question: "Wat neemt mijn kind mee naar huis na het kamp?",
    answer:
      "Elk kind gaat naar huis met een afgerond project: een geprogrammeerde robot, een zelfgemaakt spel of een 3D-geprinte uitvinding. Alles wat ze maken is van henzelf.",
  },
];

const daySchedule = [
  { time: "09:00 - 09:30", activity: "Aankomst & warming-up", desc: "Team challenge om de dag te starten" },
  { time: "09:30 - 11:30", activity: "Ochtendproject", desc: "Eerste bouwfase van het dagproject" },
  { time: "11:30 - 12:00", activity: "Lunch & pauze", desc: "Eigen lunch, buitenspelen" },
  { time: "12:00 - 14:00", activity: "Middagproject", desc: "Doorbouwen, testen en debuggen" },
  { time: "14:00 - 14:15", activity: "Pauze", desc: "Snack & frisse lucht" },
  { time: "14:15 - 15:45", activity: "Afwerking & presentatie", desc: "Project afmaken en presenteren aan de groep" },
  { time: "15:45 - 16:00", activity: "Afsluiting", desc: "Dagbespreking en vooruitkijken naar morgen" },
];

export default function VakantiekampenPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's", href: "/programmas" }, { label: "Vakantiekampen" }]} />
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <Sun size={20} className="text-orange-500" />
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">Schoolvakanties</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Vakantiekampen
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
              Een hele week bouwen, programmeren en experimenteren. Onze vakantiekampen bieden een intensief programma waarbij kinderen elke dag een nieuw project van start tot finish voltooien.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-slate-200 text-sm">
                <Users size={16} className="text-indigo-600" />
                <span className="text-slate-700">Leeftijd 6-17 jaar</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-slate-200 text-sm">
                <Clock size={16} className="text-indigo-600" />
                <span className="text-slate-700">Ma-Vr 09:00 - 16:00</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-slate-200 text-sm">
                <Star size={16} className="text-indigo-600" />
                <span className="text-slate-700">Vanaf €195/week</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Een dag op het vakantiekamp
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {daySchedule.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div className="flex gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <div className="text-xs font-mono text-indigo-600 font-bold shrink-0 pt-1 w-28">{s.time}</div>
                  <div>
                    <p className="font-semibold text-slate-900">{s.activity}</p>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over vakantiekampen</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Maak van elke vakantie een avontuur" description="Reserveer een plek voor het eerstvolgende vakantiekamp — plaatsen zijn beperkt. Schrijf nu in." primaryLabel="Inschrijven vakantiekamp" primaryHref="/contact" secondaryLabel="Bekijk alle programma's" />
    </>
  );
}
