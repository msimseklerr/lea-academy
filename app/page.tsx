import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Wrench,
  Lightbulb,
  GraduationCap,
  Award,
  Users,
  School,
  Building2,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ProgramCard from "@/components/ProgramCard";

export const metadata: Metadata = {
  title:
    "Little Engineers Academy | STEM, Robotica & Coderen voor Kinderen",
  description:
    "Wij vragen niet hoe slim uw kind is — wij ontdekken hóé. Little Engineers Academy in Eindhoven en Eersel biedt 200+ engineering-workshops voor kinderen van 3-17 jaar, robotica, coderen en een wetenschappelijke talentanalyse op 70 parameters. 12.000+ leerlingen bereikt.",
  alternates: { canonical: "https://littleengineersacademy.com" },
  openGraph: {
    title:
      "Little Engineers Academy | STEM, Robotica & Coderen voor Kinderen",
    description:
      "200+ engineering-workshops voor kinderen van 3-17 jaar in Eindhoven en Eersel. Wetenschappelijke talentanalyse op 70 parameters.",
    url: "https://littleengineersacademy.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Little Engineers Academy",
  url: "https://littleengineersacademy.com",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://littleengineersacademy.com/",
  url: "https://littleengineersacademy.com",
  name: "Little Engineers Academy | STEM, Robotica & Coderen voor Kinderen",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "blockquote"],
  },
};

const faqItems = [
  {
    question:
      "Vanaf welke leeftijd kan mijn kind starten bij Little Engineers Academy?",
    answer:
      "Kinderen kunnen starten vanaf 3 jaar in ons programma Kleine Uitvinders. Op die leeftijd werken we volledig schermvrij met tastbare materialen, bouwopdrachten en spelend leren. Tot en met 17 jaar bieden we passende programma's aan.",
  },
  {
    question:
      "Wat maakt Little Engineers Academy anders dan andere STEM-aanbieders?",
    answer:
      "Wij combineren 200+ originele engineering-workshops met een wetenschappelijke talentanalyse op 70 parameters. We vragen niet hoe slim je kind is — wij ontdekken hóé je kind slim is. Elke les is hands-on, 80% schermvrij, in kleine groepen van maximaal 8 kinderen.",
  },
  {
    question: "Is er een proefles mogelijk voordat ik me inschrijf?",
    answer:
      "Ja, absoluut! Wij bieden een gratis proefles aan voor alle leeftijdsgroepen. Zo kan jouw kind kennismaken met onze aanpak en materialen zonder enige verplichting. Plan direct via de knop hierboven.",
  },
  {
    question: "Op welke locaties is Little Engineers Academy gevestigd?",
    answer:
      "Wij zijn actief op twee locaties: Kastanjelaan 410, Office 113 in Eindhoven (5652 LD) en Brouwer 1 in Eersel (5521 DK). Vanuit Eindhoven bedienen we ook Veldhoven, Best, Waalre en Son en Breugel.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Start",
      item: "https://littleengineersacademy.com",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white pt-16 pb-24 px-4">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl animate-pulse"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0}>
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
                Brainport Eindhoven &amp; Eersel | Leeftijd 3-17
              </p>
              <h1
                className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                <span className="text-slate-900">Wij vragen niet hoe slim je kind is. Wij ontdekken </span>
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  hóé
                </span>
                <span className="text-slate-900"> je kind slim is.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 max-w-lg">
                Vanuit Brainport Eindhoven biedt LEA voor kinderen van 3 tot 17
                jaar 200+ originele engineering-workshops — 80% schermvrij — en
                een wetenschappelijke talentanalyse op basis van 70 parameters.
              </p>
              <blockquote
                cite="https://littleengineersacademy.com"
                className="text-xl md:text-2xl font-bold italic text-indigo-600 mb-8 max-w-lg"
              >
                &ldquo;Elk kind is ergens een genie. Wij ontdekken waar.&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/programmas/proefles"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg hover:scale-[1.02] hover:shadow-xl transition-all"
                >
                  Boek een gratis proefles
                </Link>
                <Link
                  href="/voor-scholen"
                  className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl text-lg hover:border-indigo-300 hover:text-indigo-600 transition-all"
                >
                  Vraag samenwerking aan
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[2266/2367] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/site/stem-maker-education.jpg"
                  alt="STEM en maker educatie bij Little Engineers Academy"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <AnimatedSection>
        <div className="bg-white border-y border-slate-100 py-8 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "12+", label: "landen actief" },
              { value: "150+", label: "partnerorganisaties" },
              { value: "12.000+", label: "leerlingen bereikt" },
              { value: "300.000+", label: "geanalyseerde datapunten" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-extrabold text-indigo-600"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FOR WHOM — 4 target audience cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                Voor iedereen
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Wij werken voor u
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Users,
                label: "Ouders",
                desc: "Ontdek het programma voor uw kind",
                href: "/programmas",
                color: "bg-amber-50 border-amber-200 hover:border-amber-400",
                iconColor: "text-amber-500",
              },
              {
                icon: School,
                label: "Scholen",
                desc: "W&T-lessen en techniek op school",
                href: "/voor-scholen",
                color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
                iconColor: "text-emerald-500",
              },
              {
                icon: Building2,
                label: "Gemeenten",
                desc: "TalentLAB Centra en wijkprogramma's",
                href: "/voor-gemeenten",
                color: "bg-sky-50 border-sky-200 hover:border-sky-400",
                iconColor: "text-sky-500",
              },
              {
                icon: Globe,
                label: "EU & Techpartners",
                desc: "Europese projecten en consortia",
                href: "/eu-projecten",
                color: "bg-violet-50 border-violet-200 hover:border-violet-400",
                iconColor: "text-violet-500",
              },
            ].map((card) => (
              <AnimatedSection key={card.href}>
                <Link
                  href={card.href}
                  className={`block rounded-xl border p-5 text-center transition-all hover:-translate-y-1 hover:shadow-md ${card.color}`}
                >
                  <card.icon
                    size={32}
                    className={`mx-auto mb-3 ${card.iconColor}`}
                  />
                  <p
                    className="font-bold text-slate-900 mb-1"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  >
                    {card.label}
                  </p>
                  <p className="text-sm text-slate-500">{card.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                Vier leeftijdsgroepen
              </p>
              <h2
                className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Het juiste programma voor elk kind
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Van peuter tot tiener: elk kind legt zijn eigen pad af in onze
                zorgvuldig opgebouwde leerlijnen.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/programmas/kleine-uitvinders-3-6",
                ageLabel: "3-6 jaar",
                ageColor: "bg-amber-500",
                icon: Lightbulb,
                title: "Kleine Uitvinders",
                description:
                  "Spelend ontdekken met tastbare materialen. Volledig schermvrij voor de allerkleinsten.",
              },
              {
                href: "/programmas/jonge-makers-6-9",
                ageLabel: "6-9 jaar",
                ageColor: "bg-emerald-500",
                icon: Wrench,
                title: "Jonge Makers",
                description:
                  "Eerste stapjes in coderen met Scratch en bouwen met echte robots.",
              },
              {
                href: "/programmas/slimme-bouwers-9-12",
                ageLabel: "9-12 jaar",
                ageColor: "bg-sky-500",
                icon: Cpu,
                title: "Slimme Bouwers",
                description:
                  "Robotica-teams, micro:bit en 3D-ontwerp. Klaar voor wedstrijden.",
              },
              {
                href: "/programmas/toekomstige-ingenieurs-12-17",
                ageLabel: "12-17 jaar",
                ageColor: "bg-violet-500",
                icon: GraduationCap,
                title: "Toekomstige Ingenieurs",
                description:
                  "Python, geavanceerde robotica en portfolio-projecten voor profielkeuze.",
              },
            ].map((p) => (
              <AnimatedSection key={p.href}>
                <ProgramCard {...p} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WAT KAN EEN LEA-LEERLING? */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
              Wat bereiken onze leerlingen?
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Wat kan een LEA-leerling?
            </h2>
            <blockquote
              cite="https://littleengineersacademy.com"
              className="text-2xl md:text-3xl font-extrabold leading-tight mb-8"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                Met één motor 40 robots.
              </span>{" "}
              <span className="text-slate-900">
                Echte auto&apos;s om in te rijden. Dit is geen speelgoed — dit is engineering.
              </span>
            </blockquote>
            <blockquote className="border-l-4 border-indigo-600 pl-6 py-2">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Bij Little Engineers Academy luisteren kinderen niet alleen naar
                theorie — zij zetten hun ideeën om in tastbare, werkende
                creaties. Onze leerlingen kunnen met één enkele motor 40
                verschillende robots ontwerpen, hun eigen animaties maken en hun
                eigen digitale spellen programmeren. Ze bouwen niet alleen hun
                eigen speelgoedauto&apos;s, maar ook echte elektrische voertuigen
                waar ze zelf veilig op kunnen rijden. De werkende mechanische
                modellen van kranen, graafmachines, vliegtuigen en helikopters
                die ze om zich heen zien; hydraulische bruggen en bewegende
                dierfiguren — ze bouwen het allemaal vanaf nul. Ze bereiken
                zelfs de technische vaardigheid en het unieke creatieve
                zelfvertrouwen om een werkende klok, een nachtlampje of een
                origineel, op engineering gebaseerd cadeau voor Moederdag of
                Vaderdag te ontwerpen voor hun eigen kamer.
              </p>
            </blockquote>
            <div className="mt-8">
              <Link
                href="/programmas"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg hover:scale-[1.02] hover:shadow-xl transition-all"
              >
                Bekijk alle programma&apos;s
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LEA METHOD */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                Onze aanpak
              </p>
              <h2
                className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                De LEA Methode
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Gebaseerd op Montessori, Waldorf en Dalton: drie fasen die elk
                kind helpen zijn eigen potentieel te ontdekken.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Ontdekken",
                desc: "Kinderen worden uitgedaagd met open opdrachten. Er is geen fout antwoord — alleen nieuwsgierigheid.",
              },
              {
                step: "02",
                title: "Maken",
                desc: "Hands-on bouwen, programmeren en experimenteren. Leren door doen staat centraal.",
              },
              {
                step: "03",
                title: "Meesteren",
                desc: "Reflectie, verbetering en trots op het resultaat. Een gezonde basis voor levenslang leren.",
              },
            ].map((m, i) => (
              <AnimatedSection key={m.step} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
                  <div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  >
                    {m.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-slate-600">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-8">
              <Link
                href="/methode"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Lees meer over onze methode →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TALENT TEASER */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-6">
              Gratis TalentLAB analyse
            </p>
            <blockquote
              className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              &ldquo;Wij vragen niet hoe slim je kind is.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                Wij ontdekken hóé je kind slim is.&rdquo;
              </span>
            </blockquote>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Elke deelnemer krijgt na een workshop een gedetailleerd
              talentprofiel op 70 parameters: van probleemoplossing en
              creativiteit tot motoriek en doorzettingsvermogen — volledig gratis
              en zonder test die je kind kan falen.
            </p>
            <Link
              href="/talentanalyse"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              Ontdek het TalentLAB
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS DARK */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={12} suffix="+" label="landen actief" />
          <StatCounter value={150} suffix="+" label="partnerorganisaties" />
          <StatCounter value={12000} suffix="+" label="leerlingen bereikt" />
          <StatCounter value={300000} suffix="+" label="geanalyseerde datapunten" />
        </div>
      </section>

      {/* VOOR SCHOLEN */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-gradient-to-b from-indigo-50/50 to-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                B2B samenwerking
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Voor scholen, gemeenten &amp; EU-partners
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Wij verzorgen techniekonderwijs op basisscholen (wetenschap
                &amp; technologie), kant-en-klare activiteitenblokken voor
                BSO&apos;s, gemeentelijke STEAM-projecten en internationale
                Erasmus+-consortia. 150+ partnerorganisaties gingen u voor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/voor-scholen"
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
                >
                  <School size={18} />
                  Voor scholen →
                </Link>
                <Link
                  href="/voor-gemeenten"
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
                >
                  <Building2 size={18} />
                  Voor gemeenten →
                </Link>
                <Link
                  href="/eu-projecten"
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
                >
                  <Globe size={18} />
                  EU-projecten →
                </Link>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4">
              {[
                { icon: School, label: "Basisscholen" },
                { icon: Users, label: "BSO & Kinderopvang" },
                { icon: Award, label: "Gemeenten & EU" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100"
                >
                  <s.icon size={28} className="text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                Wat ouders zeggen
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Ervaringen van families
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <TestimonialCard
                quote="Mijn dochter van 6 ging elke week vol enthousiasme naar de les. Ze heeft nu zelf een robot gebouwd die haar speelkamer bewaakt. De impact op haar zelfvertrouwen is enorm."
                name="Sophie, moeder van Emma (6)"
                role="Deelnemer Kleine Uitvinders"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <TestimonialCard
                quote="Onze zoon was op school verveeld en demotiveerd. Bij Little Engineers Academy is hij helemaal opgebloeid. Hij heeft nu een passie voor programmeren en wil ingenieur worden."
                name="Mark, vader van Lukas (11)"
                role="Deelnemer Slimme Bouwers"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <TestimonialCard
                quote="De talentanalyse gaf ons als ouders echt inzicht in hoe onze dochter denkt en leert. Het rapport was verrassend diepgaand en concreet bruikbaar voor school en thuis."
                name="Fatima, moeder van Noor (9)"
                role="TalentLAB deelnemer"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ERASMUS */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award size={24} className="text-indigo-600" />
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                EU onderzoek &amp; erkenning
              </p>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Erasmus+ erkend onderzoeksinstituut
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              Little Engineers Academy neemt deel aan het Erasmus+ KA220 project
              &ldquo;Brain Development, Coding and Algorithm in Early
              Childhood&rdquo; met partners in Zweden, Duitsland, Turkije,
              Kroatië, Portugal en Nederland. Onze aanpak is wetenschappelijk
              onderbouwd en internationaal erkend.
            </p>
            <Link
              href="/eu-projecten"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Lees meer over onze EU-projecten →
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                Veelgestelde vragen
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Alles wat u wil weten
              </h2>
            </div>
          </AnimatedSection>
          <FAQAccordion faqs={faqItems} />
          <div className="text-center mt-8">
            <Link
              href="/veelgestelde-vragen"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Alle vragen bekijken →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
