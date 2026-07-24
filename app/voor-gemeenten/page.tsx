import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Users, Award, MapPin, Mail, ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import GemeenteContactForm from "@/components/GemeenteContactForm";

export const metadata: Metadata = {
  title: "Voor Gemeenten | TalentLAB Centra & STEAM-programma's",
  description:
    "LEA helpt gemeenten bij het opzetten van TalentLAB Centra, het stimuleren van jonge werkgelegenheid en STEAM-programma's voor alle kinderen in de regio.",
  alternates: {
    canonical: "https://littleengineersacademy.com/voor-gemeenten",
  },
  openGraph: {
    title: "Voor Gemeenten | Little Engineers Academy",
    description:
      "TalentLAB Centra, wijk-STEAM-programma's en jonge talentontwikkeling voor gemeenten.",
    url: "https://littleengineersacademy.com/voor-gemeenten",
  },
};

const faqItems = [
  {
    question: "Wat zijn de kosten voor een gemeentelijk partnerschap?",
    answer:
      "De kosten hangen af van de schaal en het type samenwerking: een pilot-programma voor één wijk verschilt van een volwaardig TalentLAB Centrum. Wij werken op maat en bespreken graag de mogelijkheden in een eerste gesprek. Subsidietrajecten via Erasmus+, ESF en gemeentelijke fondsen kunnen bijdragen aan de financiering.",
  },
  {
    question: "Hoe snel kan een TalentLAB Centrum operationeel zijn?",
    answer:
      "Een pop-up TalentLAB kan binnen 4-6 weken operationeel zijn — wij leveren alle materialen, coaches en methodologie. Een permanent centrum kost doorgaans 3-6 maanden afhankelijk van huisvesting en vergunningen. Wij begeleiden het volledige proces.",
  },
  {
    question: "Zijn er EU-subsidiemogelijkheden voor gemeenten?",
    answer:
      "Ja. Gemeenten kunnen als partnerorganisatie deelnemen aan Erasmus+ KA2- en KA3-projecten. LEA heeft ervaring als penvoerder en als partner in EU-consortia. Wij helpen gemeenten bij het identificeren van passende calls en het opstellen van subsidieaanvragen.",
  },
];

export default function VoorGemeentenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: "Start", href: "/" },
              { label: "Voor organisaties", href: "/voor-scholen" },
              { label: "Voor Gemeenten" },
            ]}
          />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-4">
              Gemeentelijke samenwerking
            </p>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Bouw samen aan de{" "}
              <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                toekomst van uw gemeente
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
              LEA werkt met gemeenten in de Brainport-regio en daarbuiten om
              toegankelijk, hoogwaardig techniekonderwijs te brengen naar elk
              kind — ongeacht achtergrond, wijk of inkomen. Met bewezen
              programma&apos;s, 10.000+ afgestudeerde leerlingen en internationale
              Erasmus+-erkenning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact-gemeente"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg hover:scale-[1.02] hover:shadow-xl transition-all"
              >
                Vraag een gesprek aan
              </Link>
              <Link
                href="/sociale-impact"
                className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl text-lg hover:border-indigo-300 hover:text-indigo-600 transition-all"
              >
                Bekijk sociale impact →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TALENTLAB CENTRA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Building2 size={24} className="text-indigo-600" />
              </div>
              <h2
                className="text-3xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                TalentLAB Centra
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Een TalentLAB Centrum is een permanente of pop-up faciliteit
                  waar kinderen uit de buurt workshops kunnen volgen én waar hun
                  talenten wetenschappelijk in kaart worden gebracht. Het centrum
                  fungeert als een laagdrempelig loket voor talentontwikkeling,
                  geschikt voor alle kinderen van 3-17 jaar, ongeacht hun
                  thuissituatie.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  LEA levert het complete pakket: de methodologie, alle
                  materialen en gereedschappen, getrainde coaches, het
                  TalentLAB-analysemodel met 64 parameters, en de rapportage voor
                  ouders en eventueel school. De gemeente levert de locatie en
                  zorgt voor bekendheid in de wijk.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Financiering kan worden geregeld via Stichting Leergeld,
                  gemeentelijke armoedebeleid-budgetten, het Nationaal
                  Groeifonds, of via Europese subsidies waarbij LEA kan
                  meeschrijven als partner. Onze ervaring in 7 Eindhovense wijken
                  toont aan dat de centra snel worden omarmd door zowel scholen
                  als ouders.
                </p>
                <div className="flex items-center gap-3 text-sm text-indigo-600 font-semibold">
                  <MapPin size={16} />
                  <span>
                    Bewezen aanpak in 7 wijken in de gemeente Eindhoven
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Pop-up TalentLAB",
                    desc: "In 4-6 weken operationeel. Tijdelijk of seizoensgebonden. Ideaal voor pilots of evenementen.",
                    tag: "Snel inzetbaar",
                  },
                  {
                    title: "Permanent Centrum",
                    desc: "Vaste locatie, vaste openingstijden, diep verankerd in de wijk. Langetermijninvestering.",
                    tag: "Maximale impact",
                  },
                  {
                    title: "School-embedded",
                    desc: "TalentLAB geïntegreerd in basisschool. Lessen tijdens schooltijd, analyse als deel van het rapport.",
                    tag: "Bestaand netwerk",
                  },
                ].map((model) => (
                  <div
                    key={model.title}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-200"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-slate-900">{model.title}</h3>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full shrink-0 font-semibold">
                        {model.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* JEUGDWERKGELEGENHEID */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Award size={24} className="text-emerald-600" />
              </div>
              <h2
                className="text-3xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Jeugdwerkgelegenheid & talentontwikkeling
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Vroege blootstelling aan technologie verhoogt de kans op een
                  succesvolle loopbaan in de technische sector aantoonbaar. Dit
                  is niet alleen goed voor het individu, maar ook voor de
                  gemeente: een hogere arbeidsparticipatie, minder
                  uitkeringen op de lange termijn, en een sterkere lokale
                  economie.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Van onze meer dan 10.000 afgestudeerde leerlingen werkt een
                  significant deel nu in technische beroepen — als ingenieur,
                  programmeur, ontwerper of innovator. Enkelen hebben hun eigen
                  bedrijf gestart. Wij geloven dat dit niet toeval is, maar het
                  gevolg van vroege, kwalitatieve begeleiding in een omgeving
                  die talent erkent en ontwikkelt.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Samenwerking met MBO-instellingen zorgt voor soepele
                  overgang van onze oudste groepen (12-17 jaar) naar
                  beroepsonderwijs. LEA biedt portfolio-begeleiding die
                  aansluit op de profielkeuze van middelbare scholieren,
                  specifiek gericht op technische, bèta en designprofielen.
                </p>
              </div>
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Voor specifieke doelgroepen bieden wij aanvullende
                  programma&apos;s:
                </p>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Oekraïense jeugd",
                      desc: "Non-verbale workshops die taalbarrières omzeilen en integratie via gedeelde creatie bevorderen.",
                    },
                    {
                      title: "Kinderen met een beperking",
                      desc: "Aangepaste werkvormen in samenwerking met zorginstellingen. Focus op kracht, niet op beperking.",
                    },
                    {
                      title: "Meisjes in de techniek",
                      desc: "Gerichte programma's die genderstereotypen doorbreken en meisjes enthousiast maken voor STEM.",
                    },
                    {
                      title: "Kinderen uit armoede",
                      desc: "Via Stichting Leergeld en gemeentelijke fondsen gratis toegankelijk voor gezinnen met beperkt inkomen.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-900">
                          {item.title}:{" "}
                        </span>
                        <span className="text-slate-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-gemeente" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mail size={24} className="text-indigo-600" />
              </div>
              <h2
                className="text-3xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Vraag een gesprek aan
              </h2>
              <p className="text-slate-600">
                Vul het formulier in. Wij nemen binnen 2 werkdagen contact op
                voor een eerste kennismaking.
              </p>
            </div>
            <GemeenteContactForm />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold text-slate-900 mb-6"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            Veelgestelde vragen
          </h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection
        title="Klaar om samen te bouwen aan de toekomst?"
        description="Of het nu gaat om een pilot, een volledig TalentLAB Centrum of een EU-project — wij denken graag met u mee."
        primaryLabel="Vraag een gesprek aan"
        primaryHref="#contact-gemeente"
        secondaryLabel="Bekijk EU-projecten"
        secondaryHref="/eu-projecten"
      />
    </>
  );
}
