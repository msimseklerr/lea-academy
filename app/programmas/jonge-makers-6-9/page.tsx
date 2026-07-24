import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Jonge Makers (6-9 jaar) | Scratch & Robotica bij LEA",
  description:
    "Jonge Makers bij Little Engineers Academy: kinderen van 6-9 jaar leren programmeren met Scratch, bouwen hun eerste robots en ontdekken het engineering design process.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas/jonge-makers-6-9" },
};

const faqItems = [
  {
    question: "Moet mijn kind al kunnen lezen om te kunnen programmeren?",
    answer:
      "Nee. Wij starten met ScratchJr, een visuele programmeertaal die speciaal is ontworpen voor kinderen die nog niet kunnen lezen. Via kleurrijke blokken leren kinderen de basisprincipes van coderen zonder dat tekst een drempel vormt.",
  },
  {
    question: "Hoe ziet een typische les eruit bij Jonge Makers?",
    answer:
      "Een les bestaat uit drie delen: een korte introductie (15 min) waarbij we het doel van de dag uitleggen, een bouwen/programmeer-fase (45 min) waarbij kinderen zelfstandig en in tweetallen werken, en een show & tell-ronde (15 min) waarbij kinderen hun creatie presenteren aan de groep.",
  },
  {
    question: "Wat voor robots gebruiken jullie?",
    answer:
      "Afhankelijk van het niveau werken we met Dash, Ozobot en eenvoudige Arduino-gebaseerde sets. Alle robots zijn kindveilig gecertificeerd en ontworpen voor educatief gebruik.",
  },
];

export default function JongeMakersPage() {
  const weeklySchedule = [
    { time: "0:00 - 0:15", activity: "Introductie", desc: "Vandaag bouwen we een robot die een doolhof oplost" },
    { time: "0:15 - 0:45", activity: "Bouwen & programmeren", desc: "Kinderen werken in tweetallen aan hun eigen robot" },
    { time: "0:45 - 1:00", activity: "Test & debug", desc: "Wat werkt? Wat moet beter? Iteratief verbeteren" },
    { time: "1:00 - 1:15", activity: "Show & tell", desc: "Iedere groep presenteert hun creatie" },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's", href: "/programmas" }, { label: "Jonge Makers" }]} />
          <AnimatedSection>
            <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">6-9 jaar</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Jonge Makers
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-6">
              Van ScratchJr naar Scratch, van eerste algoritmes naar echte robots. Kinderen van 6-9 jaar ontdekken het engineering design process en leren dat fouten maken bij leren hoort.
            </p>
            <Link href="/programmas/proefles" className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02] hover:shadow-xl">
              Gratis proefles aanvragen
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Van spelen naar bouwen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Bij Jonge Makers maken kinderen de overgang van spelend ontdekken naar doelgericht maken. Ze leren het engineering design process kennen: een probleem begrijpen, een oplossing bedenken, bouwen, testen en verbeteren. Dit cyclische proces is de kern van iedere ingenieur.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Programmeren begint met ScratchJr voor de jongsten en evolueert al snel naar Scratch — het visuele programmeerplatform van MIT dat wereldwijd door miljoenen kinderen wordt gebruikt. Kinderen maken animaties, spelletjes en interactieve verhalen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Parallel daaraan leren ze met echte robots werken. Via eenvoudige drag-and-drop interfaces geven ze opdrachten aan hun robot: vooruit rijden, een hoek draaien, reageren op obstakels. Dit maakt programmeren tastbaar en direct zichtbaar.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
                alt="Kind van 7 jaar programmeert een robot op een tablet bij Little Engineers Academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WEEKLY SCHEDULE */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Hoe ziet een les eruit?
            </h2>
            <p className="text-slate-600 mb-6">Een les bij Jonge Makers duurt 60 minuten en is als volgt opgebouwd:</p>
          </AnimatedSection>
          <div className="space-y-4">
            {weeklySchedule.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-4 border border-emerald-100 flex gap-4">
                  <div className="text-xs font-mono text-emerald-600 font-bold shrink-0 pt-1 w-24">{s.time}</div>
                  <div>
                    <p className="font-semibold text-slate-900">{s.activity}</p>
                    <p className="text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over Jonge Makers</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Laat je kind zijn eerste robot bouwen" description="Meld je aan voor een gratis proefles Jonge Makers en ervaar zelf hoe motiverend hands-on leren is." primaryLabel="Gratis proefles Jonge Makers" secondaryLabel="Bekijk alle programma's" />
    </>
  );
}
