import type { Metadata } from "next";
import Link from "next/link";
import { Award, Globe, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Onderzoek & Erasmus+ Projecten | Little Engineers Academy",
  description:
    "Little Engineers Academy neemt deel aan Erasmus+ projecten KA220 en KA210. Lees over ons wetenschappelijk onderbouwde STEM-onderwijs en internationale erkenning.",
  alternates: { canonical: "https://littleengineersacademy.com/onderzoek" },
};

const faqItems = [
  {
    question: "Waarom doet Little Engineers Academy mee aan Europees onderzoek?",
    answer:
      "Wij geloven dat goed onderwijs gebaseerd moet zijn op bewijs. Door deel te nemen aan Europees onderzoek toetsen wij onze aanpak aan internationale standaarden, leren wij van partners in andere landen en dragen wij bij aan de wetenschappelijke kennisbasis over vroeg STEM-onderwijs.",
  },
  {
    question: "Welke landen zijn betrokken bij het KA220 project?",
    answer:
      "Het KA220 project 'Brain Development, Coding and Algorithm in Early Childhood' heeft partners in Zweden, Duitsland, Turkije, Kroatië, Portugal en Nederland (Little Engineers Academy).",
  },
  {
    question: "Zijn de onderzoeksresultaten openbaar beschikbaar?",
    answer:
      "Ja. Erasmus+ projecten zijn publiek gefinancierd en de resultaten worden openbaar gepubliceerd. Vraag via ons contactformulier naar de meest recente publicaties.",
  },
];

const projects = [
  {
    icon: Globe,
    badge: "Erasmus+ KA220",
    title: "Brain Development, Coding and Algorithm in Early Childhood",
    partners: ["🇸🇪 Zweden", "🇩🇪 Duitsland", "🇹🇷 Turkije", "🇭🇷 Kroatië", "🇵🇹 Portugal", "🇳🇱 Nederland"],
    description: `Dit is het meest omvangrijke internationale project waaraan Little Engineers Academy deelneemt. Het KA220-project onderzoekt hoe programmeeronderwijs en algoritmisch denken bijdragen aan de hersenontwikkeling van jonge kinderen (2-8 jaar).

Centraal staat de vraag: welke pedagogische aanpak leidt tot de beste cognitieve uitkomsten voor jonge kinderen bij het leren van informatisch denken? Zes landen, zes verschillende onderwijssystemen, één gedeeld doel: aantonen dat vroeg programmeeronderwijs van fundamentele waarde is voor de brede ontwikkeling van kinderen.

Little Engineers Academy draagt bij met de praktijkervaring van meer dan 33.000 kinderen en 295.000+ observatiepunten. Onze talentanalysemethode is mede gevalideerd in dit Europees kader.`,
  },
  {
    icon: BookOpen,
    badge: "Erasmus+ KA210",
    title: "Inclusive Art Education through STEM",
    partners: ["🇳🇱 Nederland", "🇩🇪 Duitsland", "🇵🇹 Portugal"],
    description: `Het KA210-project 'Inclusive Art Education' onderzoekt hoe kunst en technologie gecombineerd kunnen worden om inclusief onderwijs te bevorderen — specifiek voor kinderen met verschillende leerbehoeften.

Little Engineers Academy heeft in dit project workshops ontwikkeld waarbij kinderen via digitale kunstprojecten (generatieve kunst, muziekmaken met code) hun creativiteit uiten terwijl ze tegelijk informatisch denken ontwikkelen. Dit bleek bijzonder effectief voor kinderen die in traditioneel onderwijs moeite hebben met concentratie.

De resultaten zijn verwerkt in ons programma voor Kleine Uitvinders en Jonge Makers, waar we nu standaard aandacht besteden aan de kruising tussen kunst en technologie.`,
  },
  {
    icon: Award,
    badge: "Nationaal — 2022",
    title: "2e prijs Nationaal Techniekproject 2022",
    partners: ["🇳🇱 Nederland"],
    description: `In 2022 behaalde Little Engineers Academy de tweede prijs in de nationale techniekprojectencompetitie met het project "Van Kleur naar Code" — een innovatieve methode waarbij kleuters leren programmeren via kleursequenties op een vloermat, zonder schermen.

Dit project toonde aan dat kinderen van 3-4 jaar al in staat zijn om eenvoudige algoritmes te begrijpen en uit te voeren, mits de presentatievorm aansluit bij hun ontwikkelingsleeftijd. De methode is sindsdien opgenomen in het curriculum van Kleine Uitvinders.

De prijs bevestigde onze overtuiging dat innovatief denken over educatie beloond wordt — en dat de grens van wat jonge kinderen kunnen leren veel verder ligt dan traditioneel aangenomen.`,
  },
];

export default function OnderzoekPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Onderzoek" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Wetenschappelijk onderbouwd</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Onderzoek &amp; internationaal netwerk
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Little Engineers Academy is niet alleen een STEM-academie — het is ook een actieve deelnemer aan Europees en nationaal onderzoek naar vroeg STEM-onderwijs. Onze aanpak is verankerd in wetenschap.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY RESEARCH */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Waarom onderzoek?
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Bij Little Engineers Academy werken we op basis van data, niet van onderbuikgevoel. Onze 295.000+ observatiepunten zijn niet alleen nuttig voor het talentprofiel van individuele kinderen — ze vormen ook een waardevolle bron voor wetenschappelijk onderzoek naar leerprocessen. Door deel te nemen aan Europese projecten toetsen wij onze methode aan internationale standaarden en leren wij continu bij. Dit komt direct ten goede aan onze deelnemers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 flex items-center gap-3">
                  <p.icon size={20} className="text-white" />
                  <span className="text-white font-semibold text-sm">{p.badge}</span>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    {p.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.partners.map((partner) => (
                      <span key={partner} className="text-xs bg-slate-100 rounded-full px-3 py-1 text-slate-600">
                        {partner}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {p.description.split("\n\n").map((para, j) => (
                      <p key={j} className="text-slate-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over ons onderzoek</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Onderwijs dat werkt, bewezen" description="Zie zelf hoe onze wetenschappelijk onderbouwde aanpak uw kind verder helpt. Begin met een gratis proefles." secondaryLabel="Lees over onze methode" secondaryHref="/methode" />
    </>
  );
}
