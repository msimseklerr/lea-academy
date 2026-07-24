import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Car, Train, Phone, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Locatie Eersel | Little Engineers Academy De Kempen",
  description:
    "Little Engineers Academy Eersel: Brouwer 1, 5521 DK Eersel. STEM-lessen voor kinderen van 3-17 jaar in Eersel, Bladel, Bergeijk, Veldhoven en De Kempen.",
  alternates: { canonical: "https://littleengineersacademy.com/locaties/eersel" },
};

const faqItems = [
  {
    question: "Welke dorpen en steden bedient de locatie Eersel?",
    answer:
      "Vanuit Eersel bedienen wij de hele regio De Kempen: Eersel, Bladel, Bergeijk, Veldhoven, Reusel, Diessen en omliggende dorpen. De locatie is centraal gelegen in De Kempen.",
  },
  {
    question: "Is er parkeren bij de locatie in Eersel?",
    answer:
      "Ja, er is ruim gratis parkeren direct bij de locatie aan de Brouwer 1. De locatie is ook bereikbaar met de fiets via de fietspaden door De Kempen.",
  },
  {
    question: "Zijn alle programma's ook beschikbaar in Eersel?",
    answer:
      "Ja, alle vier leeftijdsgroepen (Kleine Uitvinders, Jonge Makers, Slimme Bouwers en Toekomstige Ingenieurs) zijn beschikbaar in Eersel. Vakantiekampen en kinderfeestjes zijn ook mogelijk op deze locatie.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Little Engineers Academy — Eersel",
  url: "https://littleengineersacademy.com/locaties/eersel",
  telephone: "+31685485534",
  email: "info@littleengineersacademy.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brouwer 1",
    postalCode: "5521 DK",
    addressLocality: "Eersel",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3583,
    longitude: 5.3167,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "13:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" },
  ],
};

export default function EerselPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="bg-gradient-to-b from-emerald-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Locaties" }, { label: "Eersel" }]} />
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-emerald-600" />
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Eersel — De Kempen</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Little Engineers Academy Eersel
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Onze locatie in Eersel bedient de regio De Kempen. Een compacte, warme leeromgeving waar kinderen van 3 tot 17 jaar STEM ontdekken vlakbij huis.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Adres & contact</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Brouwer 1</p>
                  <p className="text-slate-600">5521 DK Eersel</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-600 shrink-0" />
                <a href="tel:+31685485534" className="text-slate-700 hover:text-emerald-600">+31 685 485 534</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-600 shrink-0" />
                <a href="mailto:info@littleengineersacademy.com" className="text-slate-700 hover:text-emerald-600">info@littleengineersacademy.com</a>
              </div>
            </div>

            <h3 className="font-bold text-slate-900 mb-3">Openingstijden</h3>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    { day: "Maandag – Vrijdag", hours: "13:00 – 19:00" },
                    { day: "Zaterdag", hours: "09:00 – 17:00" },
                    { day: "Zondag", hours: "Gesloten" },
                  ].map((row) => (
                    <tr key={row.day} className="bg-white hover:bg-slate-50">
                      <td className="p-3 text-slate-700">{row.day}</td>
                      <td className="p-3 text-slate-900 font-medium">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Car size={18} className="text-emerald-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Met de auto</p>
                  <p className="text-slate-600 text-sm">Via N284 of N69. Ruim gratis parkeren direct bij de locatie. Vanuit Eindhoven ca. 20 minuten.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Train size={18} className="text-emerald-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Met het openbaar vervoer</p>
                  <p className="text-slate-600 text-sm">Buslijn 311 (Eindhoven–Eersel), halte Eersel Centrum. Looptijd naar de locatie ca. 5 minuten.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490!2d5.3167!3d51.3583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIxJzI5LjkiTiA1wrAxOScwMC4xIkU!5e0!3m2!1snl!2snl!4v1600000000001!5m2!1snl!2snl"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Engineers Academy Eersel op de kaart"
              />
            </div>
            <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="text-sm font-semibold text-emerald-700 mb-1">Servicegebied Eersel</p>
              <p className="text-sm text-slate-600">Eersel • Bladel • Bergeijk • Veldhoven • Reusel • Diessen • Hoogeloon • Hapert</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over de locatie Eersel</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Plan een bezoek aan onze locatie in Eersel" description="Schrijf uw kind in voor een gratis proefles in Eersel en ontdek onze warme leeromgeving in De Kempen." primaryLabel="Gratis proefles in Eersel" secondaryLabel="Bekijk locatie Eindhoven" secondaryHref="/locaties/eindhoven" />
    </>
  );
}
