import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Car, Train, Phone, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Locatie Eindhoven | Little Engineers Academy Kastanjelaan",
  description:
    "Little Engineers Academy Eindhoven: Kastanjelaan 410, Office 113, 5652 LD Eindhoven. STEM-lessen voor kinderen van 3-17 jaar in Eindhoven, Veldhoven, Best en omgeving.",
  alternates: { canonical: "https://littleengineersacademy.com/locaties/eindhoven" },
};

const faqItems = [
  {
    question: "Hoe bereik ik de locatie in Eindhoven?",
    answer:
      "De locatie aan de Kastanjelaan 410 is goed bereikbaar met de auto (A2/A67, afrit Eindhoven-West), de bus (lijn 14/18, halte Kastanjelaan) en de fiets. Er is gratis parkeren in de omgeving.",
  },
  {
    question: "Welke wijken bedient de locatie Eindhoven?",
    answer:
      "Vanuit onze Eindhovense locatie bedienen wij de gehele stad Eindhoven en de omliggende gemeenten: Veldhoven, Best, Waalre en Son en Breugel. Veel ouders komen ook vanuit Nuenen en Geldrop.",
  },
  {
    question: "Zijn er ook lessen op zaterdag in Eindhoven?",
    answer:
      "Ja. Op zaterdag zijn we open van 09:00 tot 17:00 uur en bieden we lessen aan voor alle leeftijdsgroepen. Zaterdag is voor veel gezinnen de meest praktische dag.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Little Engineers Academy — Eindhoven",
  url: "https://littleengineersacademy.com/locaties/eindhoven",
  telephone: "+31401234567",
  email: "info@littleengineersacademy.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kastanjelaan 410, Office 113",
    postalCode: "5652 LD",
    addressLocality: "Eindhoven",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4416,
    longitude: 5.4697,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "13:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" },
  ],
};

export default function EindhovenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Locaties" }, { label: "Eindhoven" }]} />
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-indigo-600" />
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Eindhoven</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Little Engineers Academy Eindhoven
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Onze hoofdlocatie in Eindhoven is gevestigd aan de Kastanjelaan — een inspirerende leeromgeving voor kinderen van 3 tot 17 jaar uit Eindhoven en omstreken.
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
                <MapPin size={20} className="text-indigo-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Kastanjelaan 410, Office 113</p>
                  <p className="text-slate-600">5652 LD Eindhoven</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-indigo-600 shrink-0" />
                <a href="tel:+31401234567" className="text-slate-700 hover:text-indigo-600">+31 40 123 4567</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-indigo-600 shrink-0" />
                <a href="mailto:info@littleengineersacademy.com" className="text-slate-700 hover:text-indigo-600">info@littleengineersacademy.com</a>
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
                <Car size={18} className="text-indigo-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Met de auto</p>
                  <p className="text-slate-600 text-sm">Afslag A2/A67 Eindhoven-West, volg Kastanjelaan. Gratis parkeren op de parkeerplaats naast het gebouw.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Train size={18} className="text-indigo-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Met het openbaar vervoer</p>
                  <p className="text-slate-600 text-sm">Bus lijn 14 of 18, halte Kastanjelaan. Vanaf station Eindhoven Centraal ca. 15 minuten.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.5!2d5.4697!3d51.4416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzI5LjgiTiA1wrAyOCcxMC45IkU!5e0!3m2!1snl!2snl!4v1600000000000!5m2!1snl!2snl"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Engineers Academy Eindhoven op de kaart"
              />
            </div>
            <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <p className="text-sm font-semibold text-indigo-600 mb-1">Servicegebied Eindhoven</p>
              <p className="text-sm text-slate-600">Eindhoven • Veldhoven • Best • Waalre • Son en Breugel • Nuenen • Geldrop</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Vragen over de locatie Eindhoven</h2>
          <FAQAccordion faqs={faqItems} />
        </div>
      </section>

      <CTASection title="Plan een bezoek aan onze Eindhovense locatie" description="Schrijf uw kind in voor een gratis proefles op de Kastanjelaan en ontdek onze inspirerende leeromgeving." primaryLabel="Gratis proefles boeken" secondaryLabel="Bekijk locatie Eersel" secondaryHref="/locaties/eersel" />
    </>
  );
}
