import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Kleine Uitvinders (3-6 jaar) | Spelend Leren bij LEA",
  description:
    "Het programma Kleine Uitvinders bij Little Engineers Academy is volledig schermvrij en gebaseerd op spelend leren voor kinderen van 3-6 jaar in Eindhoven en Eersel.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas/kleine-uitvinders-3-6" },
};

const faqItems = [
  {
    question: "Is 3 jaar niet te jong om naar een techniekles te gaan?",
    answer:
      "Absoluut niet. Wetenschappelijk onderzoek toont aan dat de hersenen tussen 3 en 6 jaar zich razendsnel ontwikkelen. Onze lessen sluiten perfect aan bij de kleuterfase: alles is spelenderwijs, zonder schermen, met tastbare materialen zoals houten blokken, tandwielen en bouwsets. Er is geen enkel fout antwoord — alleen ontdekken.",
  },
  {
    question: "Gebruiken jullie schermen bij de kleuters?",
    answer:
      "Nee, volledig schermvrij. Bij de groep Kleine Uitvinders (3-6 jaar) werken we uitsluitend met fysieke materialen: bouwsets, puzzels, magnetische tegels en andere manipulatieve middelen. Unplugged coderen — algoritmisch denken zonder computer — staat centraal. Dit is een bewuste keuze gebaseerd op actueel ontwikkelingspsychologisch onderzoek.",
  },
  {
    question: "Hoe gaan jullie om met verlegenheid of huilen bij jonge kinderen?",
    answer:
      "Onze begeleiders zijn gespecialiseerd in de kleuterfase en begrijpen dat aanpassen tijd kost. Ouders mogen de eerste les meekijken. We hanteren maximaal 8 kinderen per groep zodat elk kind de aandacht krijgt die het nodig heeft. Kinderen die wat meer tijd nodig hebben om te wennen, krijgen die ruimte — zonder druk.",
  },
  {
    question: "Wat leert mijn kind precies in dit programma?",
    answer:
      "Kinderen ontwikkelen fijne motoriek, ruimtelijk inzicht, probleemoplossend denken en vroege gecijferdheid. Ze oefenen met logisch redeneren door middel van sequenties en patronen — de basis van later programmeren. Alles in een speelse context die aansluit bij hun belevingswereld.",
  },
  {
    question: "Bereidt dit programma mijn kind voor op de basisschool?",
    answer:
      "Ja, dit is een aanvullend voordeel van ons programma. Kinderen die deelnemen aan Kleine Uitvinders ontwikkelen concentratie, zelfsturing en samenwerking — precies de vaardigheden die basisscholen zoeken. Meerdere ouders hebben ons verteld dat hun kind beter voorbereid was op de overgang naar groep 1 of 2.",
  },
];

export default function KleineUitvindersPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Kleine Uitvinders (3-6 jaar)",
    description: "Spelend leren, schermvrij STEM-onderwijs voor kinderen van 3 tot 6 jaar.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Little Engineers Academy",
      url: "https://littleengineersacademy.com",
    },
    hasCourseInstance: [
      { "@type": "CourseInstance", courseMode: "in-person", location: { "@type": "Place", name: "Eindhoven", address: "Kastanjelaan 410, Office 113, 5652 LD Eindhoven" } },
      { "@type": "CourseInstance", courseMode: "in-person", location: { "@type": "Place", name: "Eersel", address: "Brouwer 1, 5521 DK Eersel" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's", href: "/programmas" }, { label: "Kleine Uitvinders" }]} />
          <AnimatedSection>
            <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">3-6 jaar</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Kleine Uitvinders
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
              Spelend leren in een volledig schermvrije omgeving. Voor kleuters die de wereld willen begrijpen door te bouwen, te voelen en te ontdekken.
            </p>
            <Link href="/programmas/proefles" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02] hover:shadow-xl">
              Gratis proefles aanvragen
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Waarom beginnen op jonge leeftijd?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              De kleuterfase is de meest kritieke periode voor hersenontwikkeling. Kinderen van 3 tot 6 jaar leren het meest efficiënt door spelen, bewegen en het tastbaar maken van abstracte begrippen. Little Engineers Academy maakt hier optimaal gebruik van door STEM-concepten te verweven in speelse activiteiten.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              In onze Kleine Uitvinders-groep werken kinderen met houten bouwsets, magnetische constructiepanelen, puzzels en eenvoudige mechanische systemen. Ze leren wat een tandwiel doet, hoe een katrol werkt, en waarom sommige structuren stabieler zijn dan andere — allemaal zonder een scherm.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Unplugged coderen staat centraal: we leren kinderen algoritmisch denken via bewegingsopdrachten, kaartspelletjes en kleursequenties. Dit vormt de perfecte basis voor later programmeren, maar is nu puur spelend en fysiek.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                alt="Kleuter bouwt vrolijk met houten blokken en magnetische tegels bij Little Engineers Academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT CHILDREN LEARN PER AGE */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Wat leert je kind per leeftijd?
            </h2>
          </AnimatedSection>
          <div className="overflow-x-auto rounded-xl border border-amber-200">
            <table className="w-full text-sm">
              <thead className="bg-amber-100 border-b border-amber-200">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-700">Leeftijd</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Motoriek & zintuigen</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Denken & logica</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Sociaal & creatief</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 bg-white">
                <tr>
                  <td className="p-4 font-bold text-amber-600">3-4 jaar</td>
                  <td className="p-4 text-slate-600">Grip, stapelen, sorteren op kleur/vorm</td>
                  <td className="p-4 text-slate-600">Oorzaak-gevolg, eenvoudige patronen</td>
                  <td className="p-4 text-slate-600">Naast anderen spelen, imiteren</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-amber-600">4-5 jaar</td>
                  <td className="p-4 text-slate-600">Precisie met kleine objecten, knippen</td>
                  <td className="p-4 text-slate-600">Sequenties begrijpen, als-dan-redenering</td>
                  <td className="p-4 text-slate-600">Samen bouwen, eenvoudige rolverdeling</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-amber-600">5-6 jaar</td>
                  <td className="p-4 text-slate-600">Complexe constructies, precieze plaatsing</td>
                  <td className="p-4 text-slate-600">Algoritmes als stappenplan, lus begrijpen</td>
                  <td className="p-4 text-slate-600">Plannen, verdelen, resultaat evalueren</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
            Vragen van ouders
          </h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection
        title="Geef je kind een vliegende start"
        description="Schrijf je in voor een gratis proefles Kleine Uitvinders en ontdek hoe spelend leren het fundament legt voor een leven lang nieuwsgierigheid."
        primaryLabel="Gratis proefles Kleine Uitvinders"
        secondaryLabel="Bekijk alle programma's"
      />
    </>
  );
}
