import type { Metadata } from "next";
import Link from "next/link";
import { Baby, School, Building2, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import TalentCategoryGrid from "@/components/TalentCategoryGrid";
import { CALENDLY_URL_PROEFLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "TalentLAB | Wetenschappelijke Talentanalyse op 70 Parameters",
  description:
    "Het TalentLAB van Little Engineers Academy analyseert uw kind op 70 wetenschappelijke parameters in 9 talentcategorieën. Geen test, geen stress — observatie tijdens spel. Voor ouders, scholen en gemeenten.",
  alternates: { canonical: "https://littleengineersacademy.com/talentanalyse" },
};

const academicSources = [
  {
    source: "University of British Columbia (Adele Diamond)",
    contribution:
      "Onderzoek naar executieve functies toont aan dat zelfregulatie en werkgeheugen een sterkere voorspeller zijn van schoolsucces dan IQ.",
    application: "Basis van onze categorie Executieve Functies.",
  },
  {
    source: "Boston Children's Hospital / Center on the Developing Child",
    contribution:
      "Onderzoek naar vroege hersenontwikkeling en het 'serve-and-return'-interactiemodel tussen kind en begeleider.",
    application: "Onze coaches reageren bewust en responsief op elk initiatief van het kind.",
  },
  {
    source: "Harvard University — Center on the Developing Child",
    contribution:
      "Kader voor executieve functies, zelfregulatie en 'brain architecture' als basis voor levenslang leren.",
    application: "Wetenschappelijke ruggengraat van onze observatiemethodiek.",
  },
  {
    source: "Howard Gardner (Harvard)",
    contribution: "Theorie van meervoudige intelligenties: talent is nooit eendimensionaal.",
    application: "Daarom meten wij op 9 categorieën in plaats van één enkele score.",
  },
  {
    source: "Carol Dweck (Stanford)",
    contribution: "Onderzoek naar growth mindset: de overtuiging dat vaardigheden ontwikkelbaar zijn.",
    application: "Terug te vinden in onze categorie Zelfmanagement & Wilsvaardigheden.",
  },
  {
    source: "Seymour Papert (MIT)",
    contribution: "Constructionisme: kinderen leren het diepst door zelf iets tastbaars te bouwen.",
    application: "De basis van elke LEA-workshop.",
  },
  {
    source: "Mitchel Resnick (MIT Media Lab)",
    contribution: "Lifelong Kindergarten-onderzoek naar creatief, spelend leren.",
    application: "Zichtbaar in onze categorie Creatief-Productieve Vaardigheden.",
  },
  {
    source: "Lev Vygotsky",
    contribution: "Zone van naaste ontwikkeling: leren gebeurt net buiten wat een kind al zelfstandig kan.",
    application: "Onze observatiesetups dagen kinderen net genoeg uit.",
  },
  {
    source: "Jean Piaget",
    contribution: "Fasen van cognitieve ontwikkeling bij kinderen.",
    application: "Parameters zijn opgebouwd per leeftijdsfase (leeftijdsbadges).",
  },
  {
    source: "Maria Montessori",
    contribution: "Spelend, kindgericht leren zonder externe druk of beoordeling.",
    application: "De speelse vorm van al onze observatiesetups.",
  },
];

const privacyPoints = [
  "Little Engineers Academy verzamelt en verwerkt gegevens van uw kind volledig in lijn met de AVG (Algemene Verordening Gegevensbescherming).",
  "De verzamelde gegevens zijn geen testresultaten, maar observatiegebaseerde ontwikkelindicatoren.",
  "Zonder expliciete toestemming van ouder of verzorger wordt geen enkel observatiegegeven verwerkt.",
  "Gegevens worden uitsluitend gebruikt voor het ontwikkelrapport van uw kind — nooit gedeeld met derden, nooit commercieel verkocht.",
  "Alleen na anonimisering kunnen gegevens gebruikt worden voor geaggregeerd, wetenschappelijk onderzoek.",
  "U heeft als ouder altijd recht op inzage, rectificatie en verwijdering van de gegevens van uw kind.",
  "Gegevens worden veilig en versleuteld opgeslagen en zijn uitsluitend toegankelijk voor bevoegde coaches.",
  "Na een vastgestelde bewaartermijn worden de gegevens verwijderd.",
];

const faqItems = [
  {
    question: "Hoe verzamelen jullie deze gegevens?",
    answer:
      "Via speelse observatiesetups, in een natuurlijke omgeving, zonder dat uw kind druk ervaart. Het is geen test, maar gerichte observatie tijdens spel.",
  },
  {
    question: "Voelt mijn kind zich getest?",
    answer:
      "Nee. Uw kind ervaart alleen dat het speelt en plezier heeft. De observatie vindt plaats tijdens leuke, uitdagende activiteiten, zonder testtafel of puntentelling.",
  },
  {
    question: "Meten jullie de intelligentie van mijn kind?",
    answer:
      "Nee. Wij meten geen intelligentie, maar ontdekken de aanpak en sterke kanten van uw kind bij het oplossen van problemen. Bij Little Engineers Academy meten wij geen kinderen — wij ontdekken hun sterke kanten.",
  },
  {
    question: "Is dit wetenschappelijk onderbouwd?",
    answer:
      "Ja. Onze methodiek bouwt voort op onderzoek van onder meer de University of British Columbia, Boston Children's Hospital en Harvard's Center on the Developing Child, gecombineerd met bewezen pedagogische methodieken zoals Montessori, Waldorf en Dalton.",
  },
  {
    question: "Wat gebeurt er met de gegevens van mijn kind?",
    answer:
      "De gegevens worden AVG-conform en versleuteld opgeslagen, nooit verkocht of gedeeld met derden. Als ouder heeft u altijd het recht om de gegevens in te zien of te laten verwijderen.",
  },
  {
    question: "Vanaf welke leeftijd is TalentLAB geschikt?",
    answer:
      "Vanaf 3 jaar. De geobserveerde parameters worden per leeftijdsfase aangepast, zodat de observatie altijd aansluit bij de ontwikkeling van uw kind.",
  },
  {
    question: "Krijg ik een rapport?",
    answer:
      "Ja. Na de observatie ontvangt u een overzichtelijk ontwikkelrapport dat de sterke kanten en het talentprofiel van uw kind laat zien, met concrete aanbevelingen.",
  },
  {
    question: "Voor wie is TalentLAB bedoeld?",
    answer:
      "Voor ouders die het talent van hun kind willen ontdekken, voor scholen die TalentLAB willen integreren in hun onderwijsaanbod, en voor gemeenten die een Talent Analyse Centrum willen opzetten. Bij Little Engineers Academy bieden wij voor elke doelgroep een eigen samenwerkingsvorm.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TalentLAB — Wetenschappelijke Talentanalyse",
  description:
    "Observatiegebaseerde talentanalyse voor kinderen van 3-17 jaar. Meet 70 wetenschappelijke parameters verdeeld over 9 talentcategorieën, voor ouders, scholen en gemeenten.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Little Engineers Academy",
    url: "https://littleengineersacademy.com",
  },
  audience: [
    { "@type": "Audience", audienceType: "Ouders" },
    { "@type": "Audience", audienceType: "Scholen" },
    { "@type": "Audience", audienceType: "Gemeenten" },
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "https://littleengineersacademy.com" },
    { "@type": "ListItem", position: 2, name: "TalentLAB", item: "https://littleengineersacademy.com/talentanalyse" },
  ],
};

export default function TalentanalysePage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* SECTION 1 — HERO */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "TalentLAB" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
              Voor ouders, scholen & gemeenten
            </p>
            <h1
              className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              TalentLAB:{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                Wij vragen niet hoe slim je kind is. Wij ontdekken hóé je kind slim is.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
              TalentLAB is een wetenschappelijk observatiesysteem dat het talent van uw kind in kaart
              brengt via 70 bewezen parameters — verdeeld over 9 talentcategorieën. Alle
              observaties vinden plaats tijdens spel, in een natuurlijke, drukvrije omgeving.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl">
              {[
                { value: "70", label: "wetenschappelijke parameters" },
                { value: "9", label: "talentcategorieën" },
                { value: "295.000+", label: "observatiedatapunten" },
                { value: "Vanaf 3 jaar", label: "geschikt voor elke leeftijd" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-4 text-white text-center shadow-md"
                >
                  <p className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    {s.value}
                  </p>
                  <p className="text-xs text-indigo-100 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            <blockquote
              cite="https://littleengineersacademy.com"
              className="not-italic text-xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-4 mb-8 max-w-2xl"
            >
              &ldquo;Elke vis verdient het om te zwemmen. Wij vinden zijn oceaan.&rdquo;
            </blockquote>

            <Link
              href={CALENDLY_URL_PROEFLES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              Plan een gratis kennismaking
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 — TALENTCATEGORIEËN VITRINE */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                Wat meten wij?
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                9 talentcategorieën, 70 parameters
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Klik op een categorie om de onderliggende parameters te bekijken, inclusief de
                leeftijd waarop wij erop observeren.
              </p>
            </div>
          </AnimatedSection>
          <TalentCategoryGrid />
        </div>
      </section>

      {/* SECTION 3 — HOE METEN WIJ DIT? */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200 mb-4 text-center">
              Onze methodiek
            </p>
            <h2
              className="text-2xl md:text-4xl font-bold leading-tight mb-8 text-center"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              &ldquo;Wij meten geen kinderen. Wij waarderen hun benadering van problemen.&rdquo;
            </h2>
            <div className="space-y-4 text-indigo-50 text-lg leading-relaxed">
              <p>
                Kinderen voelen bij Little Engineers Academy niet dat ze gemeten worden. Er is geen
                testtafel, geen examen en geen puntentelling.
              </p>
              <p>
                Wat LEA uniek maakt, is de ontwikkeling van speelse observatie-setups waarin kinderen
                vooral plezier beleven — terwijl onze coaches ondertussen hun vaardigheden observeren.
              </p>
              <p>
                Deze setups zijn opgebouwd volgens de logica van het spel. Want zoals Maria Montessori
                het verwoordde:
              </p>
              <blockquote
                cite="https://littleengineersacademy.com"
                className="not-italic text-xl md:text-2xl font-bold border-l-4 border-white/60 pl-4"
              >
                &ldquo;Het spel is het werk van het kind.&rdquo; — Maria Montessori
              </blockquote>
              <p>
                In deze speelse setups zijn kleine, verborgen problemen verwerkt. Terwijl kinderen deze
                problemen oplossen, ontdekken wij waar ze werkelijk in uitblinken.
              </p>
              <p>
                Zo vindt de observatie plaats in een natuurlijke omgeving, tijdens het spel, zonder
                enige druk — en dat legt authentieke talenten bloot die een klassieke test nooit
                zichtbaar zou maken.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 4 — WETENSCHAPPELIJKE BASIS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                Onderbouwing
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Wetenschappelijke basis
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Onze observatiesetups zijn ontwikkeld op basis van onderzoek van vooraanstaande
                instituten zoals de University of British Columbia, Boston Children&apos;s Hospital en
                Harvard&apos;s Center on the Developing Child, gecombineerd met bewezen pedagogische
                methodieken (Montessori, Waldorf, Dalton).
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-700">Bron</th>
                    <th className="text-left p-4 font-semibold text-slate-700">Kernbijdrage</th>
                    <th className="text-left p-4 font-semibold text-slate-700">Toepassing bij LEA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {academicSources.map((s) => (
                    <tr key={s.source} className="hover:bg-indigo-50/50 transition-colors">
                      <td className="p-4 font-semibold text-slate-900 align-top">{s.source}</td>
                      <td className="p-4 text-slate-600 align-top">{s.contribution}</td>
                      <td className="p-4 text-slate-600 align-top">{s.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — PRIVACY & AVG */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={24} className="text-indigo-600" />
                <p className="font-bold text-indigo-600">Privacy &amp; AVG-naleving</p>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Uw kinds gegevens zijn veilig bij ons
              </h2>
              <ul className="space-y-3">
                {privacyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                    <ShieldCheck size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Veelgestelde vragen over het TalentLAB
            </h2>
          </AnimatedSection>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      {/* SECTION 7 — 3 DOELGROEP CTA's */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Voor wie is TalentLAB?
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <div className="h-full flex flex-col bg-white rounded-2xl border border-indigo-100 shadow-sm p-8 text-center">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Baby size={26} className="text-indigo-600" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Voor ouders</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Ontdek het unieke talent van uw kind
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Plan een gratis kennismaking en ontvang na een reguliere workshop een compleet
                  talentprofiel van uw kind.
                </p>
                <Link
                  href={CALENDLY_URL_PROEFLES}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all"
                >
                  Plan gratis kennismaking
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="h-full flex flex-col bg-white rounded-2xl border border-emerald-100 shadow-sm p-8 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <School size={26} className="text-emerald-600" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Voor scholen</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Integreer TalentLAB in uw school
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Bied TalentLAB aan als onderdeel van uw W&amp;T-lessen of BSO-programma en geef elke
                  leerling een talentprofiel.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/voor-scholen"
                    className="inline-flex items-center justify-center border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold px-5 py-3 rounded-xl text-sm transition-all"
                  >
                    Meer over Voor Scholen
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center text-emerald-700 font-semibold text-sm hover:underline"
                  >
                    Neem contact op →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="h-full flex flex-col bg-white rounded-2xl border border-sky-100 shadow-sm p-8 text-center">
                <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 size={26} className="text-sky-600" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">Voor gemeenten</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Zet een Talent Analyse Centrum op
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Bied kinderen in uw regio toegang tot wetenschappelijke talentanalyse via een
                  TalentLAB Centrum, ingebed in lokale STEAM-programma&apos;s.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/voor-gemeenten"
                    className="inline-flex items-center justify-center border-2 border-sky-600 text-sky-600 hover:bg-sky-50 font-semibold px-5 py-3 rounded-xl text-sm transition-all"
                  >
                    Meer over Voor Gemeenten
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center text-sky-700 font-semibold text-sm hover:underline"
                  >
                    Neem contact op →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        title="Ontdek het talent van jouw kind"
        description="Meld je aan voor een gratis proefles en de bijbehorende TalentLAB analyse. Geen test, geen stress — alleen inzicht."
        primaryLabel="Gratis TalentLAB starten"
        secondaryLabel="Lees meer over onze methode"
        secondaryHref="/methode"
      />
    </>
  );
}
