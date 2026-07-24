import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Ervaringen | Wat Ouders Zeggen over Little Engineers Academy",
  description:
    "Lees de ervaringen van ouders en kinderen bij Little Engineers Academy in Eindhoven en Eersel. Ontdek hoe onze STEM-programma's kinderen inspireren.",
  alternates: { canonical: "https://littleengineersacademy.com/ervaringen" },
};

const testimonials = [
  {
    quote: `Onze zoon Daan was altijd een beetje een buitenbeentje op school. Hij hield van bouwen, van puzzelen, van dingen uit elkaar halen — maar op school was daar weinig ruimte voor. We zochten iets wat bij hem paste.

Bij Little Engineers Academy vond hij zijn plek. Na de eerste les liep hij naar buiten met een brede grijns en de mededeling: "Papa, dit is het beste wat ik ooit heb gedaan." Hij had een kleine robot gebouwd die met zijn handen scheen te rijden.

Wat me het meest raakte was hoe de coaches op hem reageerden. Ze hadden snel door hoe hij werkt: intuïtief, impulsief, creatief. Ze gaven hem ruimte om zijn eigen weg te vinden, maar stelden op het juiste moment de vraag die hem even liet nadenken. Binnen een maand was het alsof er een licht was aangedaan.

Daan zit nu al twee jaar bij de Jonge Makers-groep. Hij leest boeken over robots, vraagt of hij thuis ook mag programmeren, en heeft onlangs besloten dat hij later "iets met technologie" wil doen. Dat was voor ons als ouders onvoorstelbaar een jaar geleden.`,
    name: "Yuri, vader van Daan (8)",
    role: "Deelnemer Jonge Makers, Eindhoven",
  },
  {
    quote: `Onze dochter Lotte sloeg dicht op school. Ze was slim — dat wisten haar leerkrachten ook — maar ze vond het moeilijk om zich te uiten, om fouten te maken, om mee te doen als andere kinderen keken.

We hadden al van alles geprobeerd: muziek, sport, schilderen. Niets klikte echt. Totdat een vriendin ons vertelde over Little Engineers Academy. We twijfelden — techniek, robots, coderen… was dat iets voor Lotte?

Het was meer dan iets. Het was hét. In de kleine groep voelde ze zich veilig genoeg om te experimenteren. De coach begreep snel dat ze beter werkt als ze tijd heeft om na te denken, en gaf haar die ruimte. Na twee maanden presenteerde ze haar eigen Scratch-project aan de klas — voor het eerst stond ze met trots voor een groepje mensen te praten.

Het mooiste was de talentanalyse. Het rapport liet ons zien wat wij al voelden maar nooit goed konden omschrijven: Lotte heeft een uitzonderlijk concentratievermogen en een bijzonder systematische manier van probleemoplossen. Haar juf heeft het rapport ook gelezen en zegt dat het haar helpt om Lotte beter te begrijpen.

Ik raad dit iedereen aan die een kind heeft dat 'anders' is. Niet anders als probleem, maar anders als gave.`,
    name: "Marieke, moeder van Lotte (9)",
    role: "Deelnemer Slimme Bouwers, Eersel",
  },
  {
    quote: `Ik was eerlijk gezegd sceptisch over de talentanalyse. Klinkt het niet een beetje zweverig? Een rapport over hoe mijn kind speelt?

Maar onze ervaring was heel anders. Het rapport van de talentanalyse was verrassend concreet en professioneel. Het beschreef hoe onze zoon Noah (10) omgaat met frustratie, hoe hij in een groep opereert, wanneer hij afhaakt en wat hem weer activeert. Het was alsof iemand hem weken lang had bestudeerd — wat ook zo is, bleek.

Het gesprek met de coach erna was het meest waardevolle van alles. Ze had duidelijke, praktische suggesties voor thuis én voor school. We hebben het rapport gedeeld met zijn basisschool en zijn juf reageerde enthousiast: ze had gelijk dezelfde observaties gedaan maar wist niet hoe ze ermee om moest gaan.

Noah is nu bijna een jaar bij de Slimme Bouwers. Hij heeft deelgenomen aan een regionale robotica-wedstrijd (derde plek!) en heeft voor het eerst in zijn schoolcarrière het gevoel dat hij ergens echt goed in is. Dat is onbetaalbaar.`,
    name: "Thomas, vader van Noah (10)",
    role: "Talentanalyse deelnemer, Eindhoven",
  },
];

export default function ErvaringenPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Ervaringen" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Ouders en kinderen aan het woord</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Ervaringen
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              De beste graadmeter voor de kwaliteit van ons onderwijs zijn de kinderen en ouders zelf. Lees hieronder drie eerlijke, onverkorte verhalen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 leading-relaxed whitespace-pre-line mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatedSection>
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Wat vindt u van ons?
            </h2>
            <p className="text-slate-600 mb-6">Heeft uw kind deelgenomen aan een programma van Little Engineers Academy? Wij horen graag uw ervaring.</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm"
            >
              <Star size={18} className="text-amber-400" />
              Schrijf een Google review
            </a>
          </div>
        </section>
      </AnimatedSection>

      <CTASection title="Word de volgende succesverhaal" description="Schrijf uw kind in voor een gratis proefles en ontdek wat Little Engineers Academy voor uw gezin kan betekenen." secondaryLabel="Lees meer over talentanalyse" secondaryHref="/talentanalyse" />
    </>
  );
}
