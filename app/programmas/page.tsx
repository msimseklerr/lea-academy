import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightbulb,
  Wrench,
  Cpu,
  GraduationCap,
  Sun,
  Cake,
  FlaskConical,
  Bot,
  Palette,
  Gamepad2,
  Car,
  Cog,
  Sparkles,
  ShieldCheck,
  Users,
  ArrowRight,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Programma's voor Kinderen | Robotica, Coderen & Engineering",
  description:
    "Bij LEA heeft elk kind zijn eigen programma. Ontdek alle programma's van Little Engineers Academy: wekelijkse cursussen, workshops, vakantiekampen en kinderfeestjes voor kinderen van 3-17 jaar in Eindhoven en Eersel.",
  alternates: { canonical: "https://littleengineersacademy.com/programmas" },
  openGraph: {
    title: "Programma's voor Kinderen | Little Engineers Academy",
    description:
      "Bij LEA heeft elk kind zijn eigen programma. STEM-programma's voor kinderen van 3-17 jaar: robotica, coderen en engineering.",
    url: "https://littleengineersacademy.com/programmas",
  },
};

const faqItems = [
  {
    question: "Hoe weet ik welk programma bij mijn kind past?",
    answer:
      "Onze programma's zijn ingedeeld op leeftijd en ontwikkelingsniveau. Twijfelt u? Neem contact op of schrijf u in voor een gratis proefles — na één sessie weten wij precies welke groep het beste aansluit bij uw kind.",
  },
  {
    question: "Zijn de groepen klein?",
    answer:
      "Ja, wij hanteren een maximale groepsgrootte van 8 kinderen per les. Zo krijgt elk kind persoonlijke begeleiding en genoeg ruimte om op zijn of haar eigen tempo te werken.",
  },
  {
    question: "Kan mijn kind tussentijds van programma wisselen?",
    answer:
      "Dat is mogelijk. Wanneer een kind sneller of langzamer ontwikkelt dan verwacht, overleggen wij met de ouders en zoeken we samen naar de beste oplossing.",
  },
  {
    question: "Zijn er ook programma's tijdens schoolvakanties?",
    answer:
      "Ja! Wij organiseren vakantiekampen in bijna elke schoolvakantie. Kijk op de pagina Vakantiekampen voor de actuele planning.",
  },
];

const ageGroups = [
  {
    href: "/programmas/kleine-uitvinders-3-6",
    color: "amber",
    colorClass: "bg-amber-500",
    borderClass: "border-amber-200",
    bgClass: "bg-amber-50",
    icon: Lightbulb,
    age: "3-6 jaar",
    title: "Kleine Uitvinders",
    description:
      "Voor de allerkleinsten die de wereld willen begrijpen door zelf te doen. Volledig schermvrij: spelend leren met tastbare materialen, eerste bouwopdrachten en de allereerste stapjes richting logisch denken — precies afgestemd op de kleuterfase.",
    highlights: ["Schermvrij", "Fijne motoriek", "Unplugged coderen", "Schoolrijpheid"],
  },
  {
    href: "/programmas/jonge-makers-6-9",
    color: "emerald",
    colorClass: "bg-emerald-500",
    borderClass: "border-emerald-200",
    bgClass: "bg-emerald-50",
    icon: Wrench,
    age: "6-9 jaar",
    title: "Jonge Makers",
    description:
      "Kinderen bouwen hun eerste échte robots en doorlopen voor het eerst het volledige engineering design process: bedenken, ontwerpen, bouwen, testen en verbeteren. Programmeren — met ScratchJr en Scratch — leren ze al doende, als gereedschap, niet als doel op zich. Creativiteit en samenwerken staan centraal.",
    highlights: ["Scratch & ScratchJr", "Eerste robots", "Engineering design", "Samenwerken"],
  },
  {
    href: "/programmas/slimme-bouwers-9-12",
    color: "sky",
    colorClass: "bg-sky-500",
    borderClass: "border-sky-200",
    bgClass: "bg-sky-50",
    icon: Cpu,
    age: "9-12 jaar",
    title: "Slimme Bouwers",
    description:
      "Kinderen ontwerpen en bouwen steeds complexere machines, verdiepen zich in elektronica en 3D-ontwerp, en zetten hun vaardigheden in als onderdeel van echte robotica-teams. Voor kinderen die verder willen kijken dan een kant-en-klare handleiding en zichzelf willen uitdagen.",
    highlights: ["Scratch mastery", "Micro:bit", "3D-ontwerp", "Robotica-wedstrijden"],
  },
  {
    href: "/programmas/toekomstige-ingenieurs-12-17",
    color: "violet",
    colorClass: "bg-violet-500",
    borderClass: "border-violet-200",
    bgClass: "bg-violet-50",
    icon: GraduationCap,
    age: "12-17 jaar",
    title: "Toekomstige Ingenieurs",
    description:
      "Jongeren ontwerpen eigen software en robotica-projecten, bouwen aan een persoonlijk portfolio en worden begeleid bij het ontdekken van hun technische profiel voor de toekomst. Voor wie technologie niet als hobby, maar als toekomst ziet.",
    highlights: ["Python", "Geavanceerde robotica", "Portfolio", "Profielkeuze"],
  },
];

const formats = [
  { href: "/programmas", icon: Cpu, title: "Wekelijkse cursussen", desc: "Doorlopende lessen, één keer per week, in kleine groepen van max. 8 kinderen." },
  { href: "/programmas/vakantiekampen", icon: Sun, title: "Vakantiekampen", desc: "Intensieve daagprogramma's in schoolvakanties. Elke dag een nieuw project." },
  { href: "/programmas/kinderfeestjes", icon: Cake, title: "Kinderfeestjes", desc: "Robot verjaardagsfeest! Bouwfeest of Codefeest — onvergetelijk voor elk kind." },
  { href: "/programmas/proefles", icon: FlaskConical, title: "Gratis proefles", desc: "Kom eerst kennismaken — helemaal vrijblijvend en gratis voor alle groepen." },
];

const skills = [
  { icon: Bot, text: "Hoe je, stap voor stap, een echte robot bouwt." },
  { icon: Cog, text: "Met één en dezelfde motor tientallen verschillende machines ontwerpen: een vliegtuig, een helikopter, een konijn, een auto — en nog vele andere." },
  { icon: Palette, text: "Hoe je zelf een animatie maakt." },
  { icon: Gamepad2, text: "Hoe je een digitaal spel programmeert." },
  { icon: Car, text: "Hoe je een echt voertuig of een echte robot ontwerpt, het bouwt én de bijpassende software ervoor schrijft." },
];

const paths = [
  {
    icon: Car,
    title: "Van speelgoedauto tot rijdend meesterwerk",
    desc: "Hij ontwerpt eerst een kleine modelauto — en bouwt haar vervolgens uit tot een groot, rijdend exemplaar waar hij zelf, met een trotse glimlach, in rondrijdt.",
  },
  {
    icon: Cog,
    title: "Een graafmachine die écht werkt",
    desc: "Zij tekent, berekent en bouwt haar eigen graafmachine — en gebruikt hem daarna gewoon, dag in dag uit, in de eigen achtertuin.",
  },
  {
    icon: Cpu,
    title: "Zijn eigen weg in code",
    desc: "Hij krijgt een eigen softwarebord in handen en groeit, stap voor stap, uit tot een jonge programmeur — in precies de taal en op precies het tempo dat bij hem past.",
  },
];

export default function ProgrammasPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://littleengineersacademy.com" },
      { "@type": "ListItem", position: 2, name: "Programma's", item: "https://littleengineersacademy.com/programmas" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: ageGroups.map((g, i) => ({
      "@type": "Course",
      position: i + 1,
      name: g.title,
      description: g.description,
      url: `https://littleengineersacademy.com${g.href}`,
      provider: {
        "@type": "Organization",
        name: "Little Engineers Academy",
        sameAs: "https://littleengineersacademy.com",
      },
    })),
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-b from-indigo-50/50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Programma's" }]} />
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Leeftijd 3-17 jaar</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Bij LEA heeft elk kind zijn eigen programma.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
              Elk kind is bijzonder, elk kind is uniek — en elk kind heeft zijn eigen ontwikkelingscurve. Daarom bestaat er bij LEA geen kant-en-klaar programma dat we op ieder kind loslaten. Er zijn net zoveel programma&apos;s als er kinderen zijn: elk traject wordt afgestemd op wie uw kind is, en op het talent dat wij samen met hem of haar gaan ontdekken.
            </p>
            <blockquote
              cite="https://littleengineersacademy.com"
              className="text-xl md:text-2xl font-bold italic text-indigo-600 max-w-2xl border-l-4 border-indigo-600 pl-6"
            >
              &ldquo;Elke vis verdient het om te zwemmen. Wij vinden zijn oceaan.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* 200+ WORKSHOPS OP WETENSCHAPPELIJKE BASIS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <Globe size={36} className="text-indigo-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              200+ originele workshops, gebouwd op wetenschap
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              LEA biedt meer dan 200 originele workshops en activiteiten. Ze zijn stuk voor stuk ontwikkeld met als referentie de meest vooraanstaande universiteiten en onderwijsmethodes ter wereld: Stanford, Tufts, MIT, de University of British Columbia, Boston Children&apos;s Hospital, Harvard, en de pedagogische tradities van Montessori, Waldorf, Dalton en Reggio Emilia.
            </p>
            <p className="text-lg font-semibold text-slate-900 leading-relaxed max-w-2xl mx-auto">
              Dit is de plek die uw kind een voorproefje geeft van zijn leven over twintig jaar — en waar het voelt in welke richting het verder wil.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WAT LEREN KINDEREN BIJ LEA */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Wat leren kinderen bij LEA?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              Onder onze begeleiding bouwen kinderen concrete, tastbare vaardigheden op — geen losse trucjes, maar echte engineering-competenties die ze hun hele leven meedragen.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {skills.map((s, i) => (
                <li key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl border border-slate-100 p-5">
                  <s.icon size={22} className="text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{s.text}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-indigo-600 pl-6 py-2">
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-4">
                &ldquo;Eén motor, 40 verschillende robots. Echte voertuigen om in te rijden. Dit is geen speelgoed — dit is een wonder van engineering.&rdquo;
              </p>
              <p className="text-base font-normal text-slate-600 leading-relaxed">
                En dat stopt niet bij techniek: bij tientallen verschillende ontwerpen ontdekken en ontwikkelen kinderen ook hun artistieke kant.
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ELK KIND KIEST ZIJN EIGEN PAD */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Elk kind kiest zijn eigen pad
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              Zodra deze basisvaardigheden er zijn, gaat elk kind zijn eigen weg. Wat dat pad precies wordt, verschilt per kind — en dat is precies de bedoeling. Enkele voorbeelden van waar leerlingen bij LEA uitkomen:
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {paths.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                    <p.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="text-lg font-semibold text-slate-900 mb-4 max-w-3xl">
              Wij vinden de weg naar het talent van elk kind — en helpen het daarin uit te blinken.
            </p>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Want kinderen gedragen zich als een genie op het gebied van hun talent: ze vergeten te eten, te drinken, te slapen — en de tijd.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FILOSOFIE */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Kant-en-klare kits zijn bij ons nooit het eindpunt.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Brickset, LEGO en Scratch gebruiken wij als gereedschap — niet als doel. Zulke kant-en-klare pakketten vormen zo&apos;n 20% van onze lessen; de overige 80% bestaat uit eigen, unieke oefeningen en projecten, waarvan het grootste deel volledig schermvrij is. Alleen les geven in het gebruik van een kant-en-klaar pakket is als een kind leren hoe het een iPhone moet bedienen: u zet een kind naast een product dat al ontworpen is om gebruikt te worden. De robot is geen doel, maar een middel. Het doel is en blijft de ontwikkeling van uw kind.
            </p>
            <blockquote className="text-lg font-bold italic text-indigo-600 border-l-4 border-indigo-600 pl-6 mb-6">
              &ldquo;Wij kiezen niet eerst het materiaal. Wij kijken eerst naar het kind.&rdquo;
            </blockquote>
            <Link
              href="/kennisbank/waarom-lea-anders-is"
              className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline"
            >
              Lees waarom LEA anders is <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* EXPERT TEAM */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Begeleiding door échte experts
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                  <Wrench size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Echte ingenieurs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {/* Boeing/Siemens iddiası: sadece doğruysa bırak, işletme sahibi teyit etmeli */}
                  Uw kind wordt begeleid door echte ingenieurs — met achtergronden in elektronica, werktuigbouwkunde en constructie, waaronder ingenieurs met ervaring bij toonaangevende technologiebedrijven.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                  <Sparkles size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Psychologisch onderbouwd</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Wij hechten bijzondere waarde aan de psychologische ontwikkeling van uw kind. Ons curriculum wordt voortdurend vernieuwd door psychologen.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                  <Users size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Multidisciplinair team</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ingenieurs, kunstenaars en psychologen werken samen aan één doel: het talent van uw kind zichtbaar maken en laten groeien.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* EMOTIONELE AFSLUITING */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <ShieldCheck size={36} className="text-indigo-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              LEA is een oceaan van mogelijkheden
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              LEA is een plek waar kinderen niet kunnen wachten om naar binnen te gaan — en waar ze, als de les erop zit, moeite hebben om weer weg te gaan. Soms zelfs met tranen. Het is een plek waar gemaakt wordt en waar talent aan het licht komt.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              LEA is een oceaan waarin uw kind zijn passie kan vinden: mogelijkheden en kansen die thuis of ergens anders vaak niet voorhanden zijn.
            </p>
            <blockquote className="text-xl md:text-2xl font-bold italic text-indigo-600 mb-8">
              &ldquo;Elke vis verdient het om te zwemmen. Wij vinden zijn oceaan.&rdquo;
            </blockquote>
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Uw kind is bijzonder en uniek. Ergens in hem of haar schuilt een talent dat nog niet gezien is — bij LEA gaan wij dat samen met u ontdekken.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AGE GROUPS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Leeftijdsgroepen
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {ageGroups.map((g, i) => (
              <AnimatedSection key={g.href} delay={i * 0.05}>
                <div className={`rounded-2xl border ${g.borderClass} ${g.bgClass} p-6 md:p-8`}>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className={`w-14 h-14 rounded-xl ${g.colorClass} flex items-center justify-center shrink-0`}>
                      <g.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full ${g.colorClass} text-white`}>{g.age}</span>
                        <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{g.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-4 leading-relaxed">{g.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {g.highlights.map((h) => (
                          <span key={h} className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">{h}</span>
                        ))}
                      </div>
                      <Link href={g.href} className="text-indigo-600 font-semibold hover:underline text-sm">
                        Meer over {g.title} →
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Alle lesvormen
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.05}>
                <Link href={f.href} className="group block bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <f.icon size={24} className="text-indigo-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Vergelijkingstabel programma&apos;s
            </h2>
          </AnimatedSection>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-700">Programma</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Leeftijd</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Groepsgrootte</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Duur per les</th>
                  <th className="text-left p-4 font-semibold text-slate-700">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">Kleine Uitvinders</td>
                  <td className="p-4 text-slate-600">3-6 jaar</td>
                  <td className="p-4 text-slate-600">Max. 8</td>
                  <td className="p-4 text-slate-600">60 minuten</td>
                  <td className="p-4 text-slate-600">Spelend leren, schermvrij</td>
                </tr>
                <tr className="hover:bg-emerald-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">Jonge Makers</td>
                  <td className="p-4 text-slate-600">6-9 jaar</td>
                  <td className="p-4 text-slate-600">Max. 8</td>
                  <td className="p-4 text-slate-600">60 minuten</td>
                  <td className="p-4 text-slate-600">Scratch, robots, design</td>
                </tr>
                <tr className="hover:bg-sky-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">Slimme Bouwers</td>
                  <td className="p-4 text-slate-600">9-12 jaar</td>
                  <td className="p-4 text-slate-600">Max. 8</td>
                  <td className="p-4 text-slate-600">60 minuten</td>
                  <td className="p-4 text-slate-600">Micro:bit, 3D, wedstrijden</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">Toekomstige Ingenieurs</td>
                  <td className="p-4 text-slate-600">12-17 jaar</td>
                  <td className="p-4 text-slate-600">Max. 8</td>
                  <td className="p-4 text-slate-600">60 minuten</td>
                  <td className="p-4 text-slate-600">Python, portfolio, robotica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Veelgestelde vragen over onze programma&apos;s</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection
        title="Plan een gratis proefles en ontdek het talent van uw kind"
        description="Vrijblijvend, gratis en binnen enkele minuten geregeld. Kom kennismaken en ervaar zelf wat LEA voor uw kind kan betekenen."
      />
    </>
  );
}
