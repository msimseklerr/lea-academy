import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  Focus,
  Lightbulb,
  Users,
  Target,
  MessageSquare,
  BarChart3,
  ClipboardList,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import CalendlyInline from "@/components/CalendlyInline";

export const metadata: Metadata = {
  title: "TalentLAB | Wetenschappelijke Talentanalyse op 64 Parameters",
  description:
    "Het TalentLAB van Little Engineers Academy analyseert uw kind op 64 parameters in 8 categorieën. Geen IQ-test, geen stress — observatie in spel. Volledig gratis.",
  alternates: { canonical: "https://littleengineersacademy.com/talentanalyse" },
};

const faqItems = [
  {
    question: "Is de talentanalyse hetzelfde als een IQ-test?",
    answer:
      "Absoluut niet. Een IQ-test meet cognitieve capaciteit in een kunstmatige, stressvolle situatie. Onze talentanalyse observeert hoe uw kind omgaat met echte uitdagingen in een natuurlijke, speelse omgeving. We meten geen intelligentie — we ontdekken hoe een kind leert en werkt. Dit zijn twee heel verschillende dingen. Een kind dat laag scoort op een IQ-test kan bij ons uitblinken in doorzettingsvermogen en creatief probleemoplossen.",
  },
  {
    question: "Hoe lang duurt de talentanalyse?",
    answer:
      "De observatie vindt plaats tijdens een reguliere workshop van 60-90 minuten. Er is geen apart tijdslot nodig. Na de workshop analyseren onze coaches de observatiedata, wat 3-5 werkdagen in beslag neemt. Daarna volgt een oudergesprek van 30 minuten.",
  },
  {
    question: "Wat kost de talentanalyse?",
    answer:
      "De talentanalyse is volledig gratis voor alle deelnemers aan onze programma's. Ook voor bezoekers van een proefles is een basisobservatie gratis. Er zijn geen verborgen kosten.",
  },
  {
    question: "Wat staat er precies in het rapport?",
    answer:
      "Het rapport bevat een persoonlijk profiel op 64 parameters verdeeld over 8 categorieën, observatiemomenten per competentie, een samenvatting van sterktes, aanbevelingen voor thuis en op school, en suggesties voor vervolgprogramma's bij LEA.",
  },
  {
    question: "Hoe wordt de privacy van mijn kind gewaarborgd?",
    answer:
      "Alle observatiedata wordt vertrouwelijk behandeld conform de AVG/GDPR. Data wordt niet gedeeld met derden. Het rapport wordt alleen gedeeld met de ouders/verzorgers. Na afloop kunnen ouders verzoeken om alle data te laten verwijderen.",
  },
];

const talentCategories = [
  {
    title: "Probleemoplossing",
    color: "bg-indigo-100 text-indigo-700",
    params: [
      "Analytisch denken",
      "Systematisch aanpakken",
      "Creatief oplossen",
      "Doorzetten bij obstakels",
      "Hypotheses testen",
      "Alternatieven bedenken",
      "Risico-inschatting",
      "Foutherkenning",
    ],
  },
  {
    title: "Creativiteit",
    color: "bg-fuchsia-100 text-fuchsia-700",
    params: [
      "Origineel denken",
      "Associatief verbinden",
      "Visueel ontwerpen",
      "Improvisatievermogen",
      "Experimenteerlust",
      "Esthetisch bewustzijn",
      "Divergent denken",
      "Speelsheid",
    ],
  },
  {
    title: "Samenwerking",
    color: "bg-emerald-100 text-emerald-700",
    params: [
      "Communicatie",
      "Luistervermogen",
      "Rol in groep",
      "Conflictoplossing",
      "Empathie",
      "Gedeeld leiderschap",
      "Bijdrage aan team",
      "Feedback geven/ontvangen",
    ],
  },
  {
    title: "Concentratie",
    color: "bg-sky-100 text-sky-700",
    params: [
      "Aandachtsduur",
      "Taakgerichtheid",
      "Afleidingsgevoeligheid",
      "Werkgeheugen",
      "Planning",
      "Zelfsturing",
      "Overgangen hanteren",
      "Diepe focus",
    ],
  },
  {
    title: "Motoriek",
    color: "bg-amber-100 text-amber-700",
    params: [
      "Fijne motoriek",
      "Oog-handcoördinatie",
      "Gereedschapgebruik",
      "Ruimtelijk bouwen",
      "Precisiewerk",
      "Kracht en controle",
      "Bouwtechniek",
      "Constructielogica",
    ],
  },
  {
    title: "Taal & Communicatie",
    color: "bg-violet-100 text-violet-700",
    params: [
      "Woordenschat",
      "Vraagstelling",
      "Uitlegvermogen",
      "Schrijfvaardigheid",
      "Presenteren",
      "Luisteren naar instructie",
      "Begripscontrole",
      "Reflectie verwoorden",
    ],
  },
  {
    title: "Zelfvertrouwen",
    color: "bg-rose-100 text-rose-700",
    params: [
      "Initiatief nemen",
      "Durven falen",
      "Doorzetten",
      "Zelfstandigheid",
      "Eigen ideeën verdedigen",
      "Trots tonen",
      "Hulp durven vragen",
      "Zelfkennis",
    ],
  },
  {
    title: "Doorzettingsvermogen",
    color: "bg-orange-100 text-orange-700",
    params: [
      "Frustratiegrens",
      "Herstelvermogen",
      "Taakvolharding",
      "Motivatie bij tegenslag",
      "Langetermijnfocus",
      "Omgaan met imperfectie",
      "Groei-mindset",
      "Intrinsieke drive",
    ],
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Workshop deelnemen",
    desc: "Uw kind neemt deel aan een reguliere workshop. Er is geen speciale voorbereiding nodig.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Observatie door coaches",
    desc: "Onze getrainde coaches observeren en noteren op basis van 64 parameters. De workshops zijn zo opgezet dat ze continu uitdagender worden — zo meten we echt potentieel.",
  },
  {
    icon: Brain,
    step: "03",
    title: "Analyse & rapport",
    desc: "Binnen 3-5 werkdagen stellen wij een persoonlijk talentprofiel op 64 parameters op.",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "Oudergesprek",
    desc: "Wij nemen de tijd voor een uitgebreid gesprek over het profiel, de aanbevelingen en vervolgstappen.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TalentLAB — Wetenschappelijke Talentanalyse op 64 Parameters",
  description:
    "Observatiegebaseerde talentanalyse voor kinderen van 3-17 jaar. Meet 64 parameters verdeeld over 8 categorieën waaronder probleemoplossing, creativiteit, concentratie en doorzettingsvermogen.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Little Engineers Academy",
  },
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            crumbs={[{ label: "Start", href: "/" }, { label: "TalentLAB" }]}
          />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
              Gratis voor alle deelnemers
            </p>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              TalentLAB: Wetenschappelijke Talentanalyse op{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                64 Parameters
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-6">
              Little Engineers Academy biedt als enige STEM-academie in de
              regio een volledig gratis talentanalyse aan — gebaseerd op
              observatie tijdens een workshop, niet op een stressvolle test.
              Meer dan 300.000 datapunten liggen aan de basis van ons
              analysemodel.
            </p>
            <blockquote className="text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-4 mb-4">
              &ldquo;Wij vragen niet hoe slim je kind is. Wij ontdekken hóé je
              kind slim is.&rdquo;
            </blockquote>
            <p className="text-xl font-bold italic text-indigo-600 mb-8">
              &ldquo;Every child is a genius somewhere. We find where.&rdquo;
            </p>
            <Link
              href="/programmas/proefles"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              Gratis TalentLAB analyse starten
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 64 PARAMETERS */}
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
                64 parameters in 8 categorieën
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Elk kind wordt geobserveerd op 8 categorieën met elk 8
                specifieke parameters. Zo ontstaat een volledig, genuanceerd
                beeld van hoe uw kind denkt, leert en samenwerkt.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentCategories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                  <span
                    className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${cat.color}`}
                  >
                    {cat.title}
                  </span>
                  <ul className="space-y-1">
                    {cat.params.map((p) => (
                      <li key={p} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BIG PROMISE */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200 mb-4">
              Onze belofte aan u
            </p>
            <blockquote
              className="text-2xl md:text-3xl font-bold leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              &ldquo;Aan het einde ontvangt u een uitgebreid
              ontwikkelingsrapport dat laat zien waarin uw kind uitblinkt, waar
              het zelfvertrouwen het grootst is, en hoe u het beschermt tegen
              manipulatie.&rdquo;
            </blockquote>
          </div>
        </section>
      </AnimatedSection>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Hoe werkt het TalentLAB?
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center mx-auto mb-4">
                    <s.icon size={24} className="text-indigo-600" />
                  </div>
                  <p className="text-xs font-bold text-indigo-600 mb-1">
                    {s.step}
                  </p>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NO FAIL GUARANTEE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-indigo-600" />
                <p className="font-bold text-indigo-600">Onze garantie</p>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Geen test die je kind kan falen
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Wij geloven dat elk kind unieke talenten heeft — ze worden
                alleen niet altijd herkend door traditionele testmethodes. Onze
                talentanalyse is ontworpen om te ontdekken, niet te beoordelen.
                Er is geen goed of slecht resultaat. Er zijn alleen inzichten
                die helpen om uw kind beter te begrijpen.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Alle data wordt vertrouwelijk behandeld conform de AVG. U bent
                altijd eigenaar van de gegevens van uw kind en kunt op elk
                moment verzoeken om verwijdering.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold text-slate-900 mb-6"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            Veelgestelde vragen over het TalentLAB
          </h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      {/* CALENDLY INLINE */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                Direct inplannen
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Plan uw TalentLAB sessie
              </h2>
              <p className="text-slate-600 mt-3 text-lg">
                Kies een datum en tijd die u het beste uitkomt. De analyse is
                volledig gratis en vrijblijvend.
              </p>
            </div>
          </AnimatedSection>
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden">
            <CalendlyInline />
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
