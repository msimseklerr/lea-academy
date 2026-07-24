import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Users, MapPin, FlaskConical } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import CalendlyInline from "@/components/CalendlyInline";

export const metadata: Metadata = {
  title: "Gratis Proefles | Kennismaken met Little Engineers Academy",
  description:
    "Schrijf je in voor een gratis proefles bij Little Engineers Academy in Eindhoven of Eersel. Geen verplichting — ontdek of ons programma past bij jouw kind.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas/proefles" },
};

const faqItems = [
  {
    question: "Moet ik iets meebrengen voor de proefles?",
    answer:
      "Nee, alles is aanwezig. U hoeft alleen uw kind mee te brengen! Wij zorgen voor alle materialen, gereedschappen en begeleiding. Comfortabele kleding is handig, want we bouwen echt.",
  },
  {
    question: "Hoe lang duurt een proefles?",
    answer:
      "Een proefles duurt 60-75 minuten, afhankelijk van de leeftijdsgroep. Ouders zijn welkom om mee te kijken of te wachten in onze ontvangstruimte.",
  },
  {
    question: "Wordt mijn kind ingedeeld bij de juiste groep?",
    answer:
      "Ja. Op basis van leeftijd en eventuele voorkennis plaatsen wij uw kind in de meest passende proefgroep. Na de les bespreken we samen of dit de juiste fit is.",
  },
  {
    question: "Zit ik ergens aan vast na de proefles?",
    answer:
      "Absoluut niet. Een proefles is 100% vrijblijvend en gratis. Er is geen verplichte inschrijving of betaling vooraf. U besluit daarna rustig of u wilt doorgaan.",
  },
];

export default function ProeflesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's", href: "/programmas" }, { label: "Gratis proefles" }]} />
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical size={20} className="text-indigo-600" />
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">100% gratis & vrijblijvend</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Gratis proefles
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
              Nog niet zeker of Little Engineers Academy iets is voor jouw kind? Kom gerust een keer kennismaken. Een proefles is volledig gratis en zonder enige verplichting.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Wat kun je verwachten?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Een proefles bij Little Engineers Academy is geen toets en geen sollicitatie — het is gewoon een les. Uw kind doet mee met een echte groep, aan een echt project, met echte materialen. Na afloop weet u precies of het past.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Onze begeleiders letten tijdens de proefles extra op hoe uw kind de opdrachten aanpakt, samenwerkt en reageert op nieuwe uitdagingen. Dit vormt de basis voor het eerste gesprek over het talentprofiel.
            </p>
            <ul className="space-y-3">
              {[
                "Uw kind bouwt of programmeert direct mee — geen rondleiding",
                "Kleine groep van maximaal 8 kinderen",
                "Ervaren begeleider die aandacht geeft aan uw kind",
                "Na afloop een korte terugkoppeling voor ouders",
                "Gratis — geen creditcard of betaling vereist",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <Check size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              In 3 stappen kennismaken
            </h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Aanmelden", desc: "Vul het formulier in via de knop hieronder. Geef de leeftijd van je kind en een voorkeursdatum op." },
                { step: "2", title: "Bevestiging", desc: "Binnen 1 werkdag ontvang je een bevestiging met de exacte tijd en locatie van de proefles." },
                { step: "3", title: "Kom kennismaken", desc: "Kom op de afgesproken dag naar onze locatie in Eindhoven of Eersel. Uw kind doet direct mee!" },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shrink-0" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    {s.step}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{s.title}</p>
                    <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-indigo-600 shrink-0" />
                <span>Eindhoven: Kastanjelaan 410, Office 113, 5652 LD</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-indigo-600 shrink-0" />
                <span>Eersel: Brouwer 1, 5521 DK</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Clock size={16} className="text-indigo-600 shrink-0" />
                <span>Maandag-vrijdag 13:00-19:00, zaterdag 09:00-17:00</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Users size={16} className="text-indigo-600 shrink-0" />
                <span>Beschikbaar voor leeftijden 3-17 jaar</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Meld je nu aan voor een gratis proefles
            </h2>
            <p className="text-indigo-200 mb-8 text-lg">
              Geen verplichtingen. Geen kosten. Alleen kennismaken met de wereld van technologie, robotica en coderen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-indigo-600 font-bold px-8 py-4 rounded-xl text-lg hover:scale-[1.02] hover:shadow-xl transition-all">
                Proefles aanvragen via contact
              </Link>
              <a href="tel:+31401234567" className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all">
                Bel: +31 40 123 4567
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over de proefles</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      {/* CALENDLY INLINE */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Direct inplannen</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Plan direct je gratis proefles
              </h2>
              <p className="text-slate-600 mt-3 text-lg">Kies een datum en tijd die jou het beste uitkomt. Binnen enkele minuten geregeld.</p>
            </div>
          </AnimatedSection>
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden">
            <CalendlyInline />
          </div>
        </div>
      </section>
    </>
  );
}
