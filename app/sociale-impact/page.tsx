import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Users, Shield, Brain } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sociale Impact | Little Engineers Academy",
  description:
    "LEA werkt met kinderen met neurodiversiteit, vluchtelingen en kwetsbare jongeren. Ontdek hoe technologie een brug slaat naar kansen voor elk kind.",
  alternates: {
    canonical: "https://littleengineersacademy.com/sociale-impact",
  },
  openGraph: {
    title: "Sociale Impact | Little Engineers Academy",
    description:
      "Technologie als brug naar kansen: LEA's aanpak voor neurodiverse kinderen, nieuwkomers en kwetsbare jongeren.",
    url: "https://littleengineersacademy.com/sociale-impact",
  },
};

const faqItems = [
  {
    question: "Werkt LEA samen met zorginstellingen?",
    answer:
      "Ja. Wij werken samen met gespecialiseerde orthopedagogen, logopedisten en ergotherapeuten. Onze coaches worden bijgeschoold in het werken met kinderen met autisme, ADHD en andere neurodiversiteit. Bij kinderen met een complexe ondersteuningsbehoefte stemmen we altijd af met betrokken zorgprofessionals.",
  },
  {
    question: "Zijn er subsidies beschikbaar voor kwetsbare gezinnen?",
    answer:
      "Ja. Wij werken nauw samen met Stichting Leergeld, gemeentelijke fondsen en schoolbudgetten om onze programma's toegankelijk te maken voor gezinnen die niet de financiële middelen hebben. Neem contact op om de mogelijkheden te bespreken — wij vinden altijd een oplossing. Talent kent geen financiële grens.",
  },
  {
    question: "Hoe gaan jullie om met taalbarrières in de groep?",
    answer:
      "Onze workshops zijn bewust grotendeels non-verbaal opgezet: bouwen, monteren, coderen via visuele blokken. Coaches gebruiken pictogrammen, demonstraties en visuele instructies. In groepen met nieuwkomers worden activiteiten extra visueel ondersteund. Wij zien keer op keer dat kinderen die in de klas stil zijn, in onze workshop volledig openbloeien.",
  },
];

export default function SocialeImpactPage() {
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

      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: "Start", href: "/" },
              { label: "Sociale Impact" },
            ]}
          />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
              Kansen voor ieder kind
            </p>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Technologie als brug naar{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                kansen voor elk kind
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Bij Little Engineers Academy geloven wij dat talent geen paspoort,
              diagnose of portemonnee heeft. Wij werken actief met kinderen die
              in het reguliere onderwijs buiten de boot vallen — en ontdekken
              keer op keer dat hun talenten veelal ongezien zijn, niet afwezig.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* NEURODIVERSITEIT */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
              <Brain size={28} className="text-violet-600" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Neurodiversiteit: Autisme & ADHD als kracht
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kinderen met autisme of ADHD worden in het reguliere onderwijs
              vaak beoordeeld op wat ze niet kunnen: stilzitten, lange teksten
              lezen, sociaal navigeren in grote groepen. Bij Little Engineers
              Academy draaien we dit om. Onze gestructureerde, hands-on
              workshops sluiten van nature aan bij de manier waarop veel
              neurodiverse kinderen het beste leren: via doen, via herhaling,
              via tastbare resultaten.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Wij zien regelmatig kinderen die verbaal moeizaam communiceren,
              maar in de bouwhoek in een keer een mechanisme begrijpen dat hun
              groepsgenoten een uur kost. Kinderen met ADHD die normaliter
              moeite hebben met concentratie, verliezen zichzelf volledig in een
              roboticaproject — omdat de motivatie intrinsiek is en het
              resultaat direct zichtbaar. Dit zijn geen uitzonderingen. Dit is
              het patroon dat wij keer op keer zien, in beide locaties, in alle
              leeftijdsgroepen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ons TalentLAB meet op 70 parameters. Juist voor neurodiverse
              kinderen levert dit waardevolle inzichten op die een standaard
              IQ- of schooltoets niet geeft: hoe gaat het kind om met frustratie?
              Hoe snel herstelt het? Hoe creatief is het bij open opdrachten?
              Wij beantwoorden deze vragen met feiten, niet met labels.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-violet-50 rounded-2xl p-8 border border-violet-100">
              <h3
                className="font-bold text-violet-900 mb-4 text-lg"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Wat wij bij LEA zien
              </h3>
              <blockquote className="text-slate-700 leading-relaxed italic border-l-4 border-violet-400 pl-4">
                &ldquo;Eén van onze leerlingen, een jongen van 9 jaar met een
                ASS-diagnose, kon in de klas nauwelijks een gesprek voeren.
                Tijdens zijn derde les bouwde hij zelfstandig een werkende
                robotarm en legde daarna aan de groep uit hoe het koppelstuk
                werkte. De coach telde drie minuten aaneengesloten, vloeiend
                spreken. Zijn moeder huilde na afloop.&rdquo;
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VLUCHTELINGEN */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1} className="order-2 lg:order-1">
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <h3
                className="font-bold text-emerald-900 mb-4 text-lg"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Praktijkvoorbeeld: Brainport Oekraïne-programma
              </h3>
              <p className="text-slate-700 leading-relaxed">
                In 2022 en 2023 begeleidden wij in samenwerking met de gemeente
                Eindhoven Oekraïense kinderen die vanwege de oorlog naar
                Nederland waren gekomen. Taal was een barrière. Trauma ook.
                Maar bouwen, meten, verbinden — dat is universeel. Na vier
                weken rapporteerden begeleiders al een merkbare verbetering in
                concentratie, sociaal contact met Nederlandse kinderen, en
                zichtbare trots op de gemaakte projecten.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="order-1 lg:order-2">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <Globe size={28} className="text-emerald-600" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Vluchtelingen & nieuwkomers — talent overstijgt taal
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Een kind dat Arabisch, Oekraïens of Tigrinya spreekt en pas net
              in Nederland is, heeft geen Nederlandstalige instructies nodig om
              een robot te bouwen. Ruimtelijk inzicht, fijne motoriek,
              probleemoplossend denken — deze vaardigheden zijn universeel. Onze
              workshops zijn bewust zo ontworpen dat ze voor het grootste deel
              non-verbaal zijn: demonstratie, visuele instructiekaarten, en
              directe terugkoppeling van het gebouwde resultaat.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Voor nieuwkomers is LEA meer dan een techniekles. Het is een plek
              waar ze direct gelijkwaardig zijn aan hun Nederlandse
              groepsgenoten. Waar hun bijdrage telt. Waar het niet uitmaakt hoe
              goed je bent in taal of rekenen — maar hoe creatief je een
              probleem oplost.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Wij werken samen met vluchtelingenorganisaties, ISK-scholen en
              gemeentelijke integratiediensten. Subsidietrajecten zijn
              beschikbaar via gemeentelijke fondsen en Europese programma&apos;s.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INTERNATIONAAL TALENTLAB */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Users size={28} className="text-sky-600" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Internationaal TalentLAB
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Ons TalentLAB-model werkt over culturen heen. In 12+ landen
                zien wij dezelfde patronen: talent is universeel aanwezig, maar
                de kans om het te tonen is ongelijk verdeeld.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Cultureel neutrale meting",
                desc: "Onze 70 parameters zijn zo ontworpen dat ze niet cultureel gebonden zijn. We meten gedrag in context, niet taalvaardigheid of culturele normen. Dit maakt de analyse valide over de gehele wereld.",
              },
              {
                title: "Lokale aanpassing",
                desc: "In elk land werken wij met lokale partners die de culturele context kennen. De methodologie is universeel; de begeleiding is lokaal. Dit zorgt voor betrouwbare resultaten en veilige begeleiding.",
              },
              {
                title: "Data over grenzen",
                desc: "300.000+ datapunten uit 12+ landen geven ons een uniek vergelijkingskader. Wij zien welke talentpatronen universeel zijn — kennis die we inzetten voor betere begeleiding wereldwijd.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <h3
                    className="font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex gap-4">
              <Shield size={20} className="text-indigo-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-slate-800 mb-1">
                  Privacy en ethiek
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Alle data die wij verzamelen wordt vertrouwelijk behandeld
                  conform de AVG/GDPR en de ethische richtlijnen van het
                  Erasmus+-programma. Bij kwetsbare doelgroepen — waaronder
                  kinderen met een vluchtelingenstatus of een
                  zorgachtergrond — hanteren wij extra strenge protocollen. Wij
                  vragen altijd expliciete toestemming van ouders of verzorgers,
                  in de taal die zij begrijpen.
                </p>
              </div>
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
            Veelgestelde vragen
          </h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection
        title="Wilt u samenwerken voor sociale impact?"
        description="Bent u een zorginstelling, gemeente, school of Europese partner met een missie voor kansengelijkheid? Neem contact op — wij werken graag samen."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="Bekijk EU-projecten"
        secondaryHref="/eu-projecten"
      />
    </>
  );
}
