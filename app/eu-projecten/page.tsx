import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Award, Users, Lightbulb, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import EuPartnerForm from "@/components/EuPartnerForm";

export const metadata: Metadata = {
  title: "EU-projecten & Europese Samenwerking | Little Engineers Academy",
  description:
    "LEA is actief Erasmus+-partner en Brainport-aanjager voor grensoverschrijdend STEM-onderwijs. Ontdek onze EU-projecten en hoe u kunt deelnemen.",
  alternates: {
    canonical: "https://littleengineersacademy.com/eu-projecten",
  },
  openGraph: {
    title: "EU-projecten & Europese Samenwerking | Little Engineers Academy",
    description:
      "Erasmus+-partner vanuit Brainport Eindhoven: LEA's rol in Europese STEM-innovatie en talentherkenning.",
    url: "https://littleengineersacademy.com/eu-projecten",
  },
};

const faqItems = [
  {
    question: "Welke Europese programma's zijn beschikbaar voor samenwerking?",
    answer:
      "Wij werken primair via Erasmus+ (KA2-partnerschappen voor innovatie), maar hebben ook ervaring met CERV en oriënteren ons op Horizon Europe voor onderzoekscomponenten. De meest toegankelijke route voor nieuwe partners is een KA210 of KA220 aanvraag, afhankelijk van de schaalgrootte van het beoogde project.",
  },
  {
    question: "Wat is de minimale bijdrage die van een partner verwacht wordt?",
    answer:
      "Dat verschilt sterk per project en subsidielijn. In de meeste Erasmus+ KA2-consortia verwachten we van partners een actieve inhoudelijke bijdrage: pilotuitvoering, lokale dataverzameling, of verspreiding van resultaten. Financiële co-financiering is soms vereist maar geen voorwaarde om in gesprek te gaan. Neem contact op voor een vrijblijvende verkenning.",
  },
  {
    question: "Heeft LEA ervaring met Erasmus+ rapportage en verantwoording?",
    answer:
      "Ja. Wij hebben meerdere projectcycli doorlopen en zijn vertrouwd met de Beneficiary Module, tussentijdse rapportages en eindrapportages. Wij kunnen nieuwe partners begeleiden in het rapportageproces en werken samen met een gecertificeerde externe auditor voor de financiële verantwoording.",
  },
];

export default function EuProjectenPage() {
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
              { label: "EU-projecten" },
            ]}
          />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-4">
              Europese samenwerking
            </p>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Europese samenwerking voor{" "}
              <span className="bg-gradient-to-r from-sky-600 to-indigo-500 bg-clip-text text-transparent">
                beter STEM-onderwijs
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Vanuit het hart van Brainport Eindhoven werkt LEA samen met
              Europese partners aan innovatief STEM-onderwijs en wetenschappelijke
              talentherkenning. Onze methodologie is getoetst in 12+ landen en
              verfijnd door Erasmus+-samenwerking met onderwijsinstellingen,
              onderzoekscentra en technologiebedrijven.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* BRAINPORT POSITIE */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
              <Globe size={28} className="text-sky-600" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Brainport Eindhoven: Europese hotspot voor technologie-talent
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              LEA is niet toevallig gevestigd in Eindhoven. Brainport is
              Europa&apos;s meest innovatieve regio — de thuisbasis van ASML, NXP,
              Philips, DAF en honderden hightech mkb-bedrijven. Deze omgeving
              bepaalt wat wij doen: kinderen voorbereiden op een wereld die draait
              op technologie, precisie en samenwerking.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Als Erasmus+-partner brengen wij dit ecosysteem naar Europese
              consortia. Onze contacten met de Brainport Development, TU/e,
              Fontys Hogescholen en de gemeente Eindhoven maken ons tot een
              waardevolle schakel voor partners die willen leren van een
              high-tech onderwijsomgeving.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Tegelijkertijd leren wij van onze buitenlandse partners: van
              Finse pedagogiek, Estse digitale geletterdheid en Spaanse
              inclusieve onderwijsmethodieken. Die kruisbestuiving maakt onze
              aanpak sterker.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h3
                className="font-bold text-sky-900 mb-4 text-lg"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                LEA in Europees perspectief
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                {[
                  "12+ landen waar onze methodologie is toegepast",
                  "300.000+ geanalyseerde datapunten uit internationale pilots",
                  "150+ partnerorganisaties wereldwijd",
                  "Actief Erasmus+ KA2-consortiumlid",
                  "Erkend door Nationaal Regieorgaan Onderwijsonderzoek (NRO)",
                  "Gevestigd in Brainport Eindhoven — Europees innovatiecentrum",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-sky-500 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROJECTEN */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Award size={28} className="text-indigo-600" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Lopende en afgeronde projecten
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Onze Erasmus+-projecten bouwen voort op drie pijlers: hersenontwikkeling,
                inclusief onderwijs en schaalbare talentmeting.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                    Erasmus+ KA220
                  </span>
                  <span className="text-xs text-slate-500">Lopend</span>
                </div>
                <h3
                  className="font-bold text-slate-900 mb-3 text-lg"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Brain Development Through Engineering Play
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Een multinationaal onderzoeksproject gericht op de vraag hoe
                  hands-on engineering-activiteiten de executieve functies bij
                  kinderen van 6–10 jaar versterken. Wij leveren het
                  Nederlandse pilot-cohort en de TalentLAB-meetmethode.
                  Partners: TU/e, Universiteit Helsinki, Escola de Makers
                  Barcelona.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  Consortiumrol: lead partner Nederland
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    Erasmus+ KA210
                  </span>
                  <span className="text-xs text-slate-500">Afgerond 2023</span>
                </div>
                <h3
                  className="font-bold text-slate-900 mb-3 text-lg"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Inclusive Art &amp; Engineering Education
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Een kleinschalig partnerschap met een Belgische en Poolse
                  school gericht op het combineren van beeldende kunst en
                  techniek voor kinderen met neurodiversiteit. De methodologie
                  voor visuele instructiekaarten die wij nu breed inzetten,
                  is in dit project ontwikkeld en gevalideerd.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  Resultaat: open source lesmateriaal, 3 talen
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                    Nationale erkenning
                  </span>
                  <span className="text-xs text-slate-500">2022</span>
                </div>
                <h3
                  className="font-bold text-slate-900 mb-3 text-lg"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Nationale prijs Beste Techniekonderwijs
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  In 2022 ontving LEA de nationale prijs voor beste
                  techniekonderwijs, toegekend door het Platform Bèta
                  Techniek. De jury waardeerde met name de wetenschappelijke
                  fundering van het TalentLAB, de inclusieve aanpak voor
                  kwetsbare doelgroepen en de aantoonbare leerresultaten over
                  leeftijds- en achtergrondgroepen heen.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  Platform Bèta Techniek — categorie primair onderwijs
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TOEKOMSTIGE SAMENWERKING */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={28} className="text-violet-600" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Toekomstige samenwerking — Horizon Europe, CERV &amp; CREA
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Wij orienteren ons actief op Horizon Europe voor
              onderzoekssamenwerkingen rond hersenontwikkeling en AI-ondersteunde
              talentmeting. Onze datastrategie — 300.000+ datapunten over 64
              parameters in 12+ landen — biedt een uniek fundament voor
              grootschalige longitudinale studies.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Via het CERV-programma (Citizens, Equality, Rights and Values)
              zoeken wij partners voor inclusieprojecten gericht op kinderen met
              een vluchtelingenstatus of een meervoudige achterstandssituatie.
              Onze ervaring met het Oekraïne-programma in Eindhoven vormt de
              basis voor opschaling.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Voor creatieve kruisverbanden — techniek meets kunst, STEM meets
              cultuur — zien wij kansen via het CREA-programma. Hebt u een
              consortium of zoekt u een Nederlandse partner voor een aankomende
              call? Neem dan contact op.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {[
                {
                  program: "Horizon Europe",
                  color: "indigo",
                  desc: "Onderzoek naar AI-ondersteunde talentmeting en hersenontwikkeling bij 4–12 jaar. Wij zoeken universitaire partners met een track record in cognitieve psychologie of onderwijswetenschap.",
                },
                {
                  program: "CERV",
                  color: "emerald",
                  desc: "Inclusieprojecten voor kinderen met een vluchtelingenstatus of meervoudige achterstand. Wij bieden beproefde methodologie en een netwerk in Brainport-regio.",
                },
                {
                  program: "Creative Europe (CREA)",
                  color: "fuchsia",
                  desc: "STEM-kunst verbindingen voor culturele en creatieve sectoren. Wij zoeken culturele instellingen, musea of filmmakers die techniek willen verbinden met hun inhoud.",
                },
              ].map((item) => (
                <div
                  key={item.program}
                  className={`bg-${item.color}-50 rounded-xl border border-${item.color}-100 p-5`}
                >
                  <p
                    className={`font-bold text-${item.color}-800 mb-2 text-sm`}
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  >
                    {item.program}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                <Mail size={20} className="text-sky-600" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                Partnercontact
              </p>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Start een verkennend gesprek
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Bent u op zoek naar een Nederlandse partner voor een Europees
              consortium? Of heeft u een call-referentie en wilt u verkennen of
              LEA past als partner? Vul het formulier in — wij reageren binnen
              2 werkdagen.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <EuPartnerForm />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
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
        title="Klaar om samen een aanvraag in te dienen?"
        description="Neem contact op met ons EU-partnerships team. Wij bespreken graag uw consortium-idee en de mogelijke rol van LEA als Nederlandse partner."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="Bekijk sociale impact"
        secondaryHref="/sociale-impact"
      />
    </>
  );
}
