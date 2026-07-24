import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen | Little Engineers Academy",
  description:
    "Antwoorden op de meest gestelde vragen over Little Engineers Academy: inschrijving, kosten, programma's, veiligheid en meer.",
  alternates: { canonical: "https://littleengineersacademy.com/veelgestelde-vragen" },
};

const categories = [
  {
    title: "Aanmelden & kosten",
    faqs: [
      { question: "Hoe schrijf ik mijn kind in?", answer: "Inschrijven gaat eenvoudig via ons contactformulier op de contactpagina, of door te bellen naar +31 685 485 534. Wij nemen binnen 1 werkdag contact op om de plaatsing te bespreken." },
      { question: "Wat kost deelname aan een wekelijkse cursus?", answer: "Een wekelijkse cursus kost vanaf €75 per maand. Dit is inclusief alle materialen, begeleiding en de gratis talentanalyse. Exacte tarieven per programma staan op onze tarieven-pagina." },
      { question: "Is de talentanalyse echt gratis?", answer: "Ja, volledig gratis. Er zijn geen verborgen kosten. De talentanalyse is een standaard onderdeel van elk programma en ook beschikbaar voor bezoekers van een proefles." },
      { question: "Zijn er kortingen beschikbaar?", answer: "Wij werken samen met Stichting Leergeld voor gezinnen die de kosten niet kunnen dragen. Neem contact op voor de mogelijkheden. We geloven dat financiële situatie geen drempel mag zijn voor goed onderwijs." },
      { question: "Kan ik stoppen wanneer ik wil?", answer: "Ja, wij hanteren een opzegtermijn van één maand. U zit nooit vast aan een lang contract." },
    ],
  },
  {
    title: "Veiligheid & begeleiding",
    faqs: [
      { question: "Hoe ziet de begeleiding eruit?", answer: "Alle lessen worden gegeven door gecertificeerde coaches met ervaring in de relevante leeftijdsgroep. We hanteren een maximale groepsgrootte van 8 kinderen per coach. Alle coaches zijn gescreend (VOG aanwezig)." },
      { question: "Zijn de materialen veilig voor jonge kinderen?", answer: "Ja. Alle materialen zijn gecertificeerd en voldoen aan de Europese veiligheidsnormen voor speelgoed en educatieve materialen. Voor kleuters (3-6 jaar) gebruiken we uitsluitend grotere, door kleine handen goed te hanteren onderdelen." },
      { question: "Mag ik als ouder meekijken?", answer: "Ja, zeker tijdens de eerste les(sen). We moedigen ouders aan mee te kijken om te zien hoe hun kind werkt in de groep. Na de eerste weken vragen we ouders om buiten te wachten, zodat kinderen zelfstandigheid en groepsdynamiek kunnen ontwikkelen." },
    ],
  },
  {
    title: "Programma & methode",
    faqs: [
      { question: "Hoe weet ik welk programma het best bij mijn kind past?", answer: "Onze programma's zijn ingedeeld op leeftijd en ontwikkelingsniveau. Bij twijfel raden wij altijd een gratis proefles aan — na één sessie weten wij en uw kind zelf veel beter wat het beste aansluit." },
      { question: "Wat als mijn kind sneller of langzamer leert dan de groep?", answer: "Onze coaches signaleren dit snel en bespreken het met de ouders. Indien nodig kan een kind naar een andere groep worden overgeplaatst of extra uitdaging of ondersteuning krijgen binnen de huidige groep." },
      { question: "Gebruiken jullie schermen bij jonge kinderen?", answer: "Voor de groep Kleine Uitvinders (3-6 jaar) werken we volledig schermvrij. Dit is een bewuste keuze op basis van ontwikkelingspsychologisch onderzoek. Vanaf 6 jaar introduceren we geleidelijk digitale tools, altijd in combinatie met hands-on activiteiten." },
      { question: "Wat is de LEA Methode?", answer: "De LEA Methode bestaat uit drie fasen: Ontdekken, Maken en Meesteren. Gebaseerd op Montessori, Waldorf en Dalton-pedagogiek, aangevuld met het constructionisme van Seymour Papert. Lees meer op onze methodepagina." },
    ],
  },
  {
    title: "Praktisch",
    faqs: [
      { question: "Op welke locaties zijn jullie gevestigd?", answer: "Wij zijn gevestigd op twee locaties: Kastanjelaan 410, Office 113 in Eindhoven (5652 LD) en Brouwer 1 in Eersel (5521 DK). Beide locaties zijn goed bereikbaar met de auto en het openbaar vervoer." },
      { question: "Wanneer zijn jullie open?", answer: "Maandag t/m vrijdag van 13:00 tot 19:00 uur en zaterdag van 09:00 tot 17:00 uur. Lessen zijn beschikbaar op vaste tijdstippen — vraag naar de actuele agenda bij inschrijving." },
      { question: "Wat als mijn kind ziek is?", answer: "Een gemiste les kan in overleg worden ingehaald bij een andere groep op hetzelfde niveau. We vragen u ziekte zo snel mogelijk door te geven via telefoon of e-mail." },
    ],
  },
];

export default function VeelgesteldeVragenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((c) =>
      c.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Veelgestelde Vragen" }]} />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Veelgestelde vragen
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Heeft u een vraag die hier niet bij staat? Neem gerust contact op via het contactformulier of bel ons op +31 685 485 534.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.05}>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                {cat.title}
              </h2>
              <FAQAccordion faqs={cat.faqs} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTASection title="Nog vragen? We helpen je graag" description="Bel ons, stuur een e-mail of kom langs voor een gratis proefles. We staan voor u klaar." primaryLabel="Neem contact op" primaryHref="/contact" secondaryLabel="Gratis proefles aanvragen" secondaryHref="/programmas/proefles" />
    </>
  );
}
