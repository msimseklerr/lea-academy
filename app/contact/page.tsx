import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumb from "@/components/Breadcrumb";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Little Engineers Academy",
  description:
    "Neem contact op met Little Engineers Academy in Eindhoven of Eersel. Schrijf ons, bel of kom langs. Reactie binnen 1 werkdag.",
  alternates: { canonical: "https://littleengineersacademy.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb crumbs={[{ label: "Start", href: "/" }, { label: "Contact" }]} />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Neem contact op
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Wij reageren binnen 1 werkdag op uw bericht. Liever direct bellen? Dat kan ook — wij staan voor u klaar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Stuur ons een bericht
            </h2>
            <form
              action="mailto:info@littleengineersacademy.com"
              method="get"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="naam">Naam</label>
                  <input id="naam" name="naam" type="text" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Uw naam" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">E-mailadres</label>
                  <input id="email" name="email" type="email" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="uw@email.nl" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="onderwerp">Onderwerp</label>
                <select id="onderwerp" name="onderwerp" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">
                  <option>Gratis proefles aanvragen</option>
                  <option>Talentanalyse informatie</option>
                  <option>School of BSO samenwerking</option>
                  <option>Kinderfeestje reserveren</option>
                  <option>Vakantiekamp inschrijving</option>
                  <option>Tarieven & inschrijving</option>
                  <option>Anders</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="bericht">Uw bericht</label>
                <textarea id="bericht" name="body" rows={5} required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none" placeholder="Schrijf hier uw vraag of opmerking..." />
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.01] hover:shadow-lg">
                Bericht versturen
              </button>
              <p className="text-xs text-slate-400 text-center">
                Dit opent uw e-mailprogramma. Binnen 1 werkdag ontvangt u een reactie.
              </p>
            </form>
          </AnimatedSection>

          {/* LOCATION CARDS */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Onze locaties
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                <p className="font-bold text-slate-900 mb-3 text-indigo-600">Eindhoven</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-slate-700">
                    <MapPin size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>Kastanjelaan 410, Office 113<br />5652 LD Eindhoven</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock size={16} className="text-indigo-600 shrink-0" />
                    <span>Ma-Vr 13:00-19:00 | Za 09:00-17:00</span>
                  </div>
                  <Link href="/locaties/eindhoven" className="text-indigo-600 text-xs font-semibold hover:underline">Route bekijken →</Link>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                <p className="font-bold text-slate-900 mb-3 text-emerald-600">Eersel</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-slate-700">
                    <MapPin size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Brouwer 1<br />5521 DK Eersel</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock size={16} className="text-emerald-600 shrink-0" />
                    <span>Ma-Vr 13:00-19:00 | Za 09:00-17:00</span>
                  </div>
                  <Link href="/locaties/eersel" className="text-emerald-600 text-xs font-semibold hover:underline">Route bekijken →</Link>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+31685485534"
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-indigo-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Bellen</p>
                  <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">+31 685 485 534</p>
                </div>
              </a>
              <a
                href="mailto:info@littleengineersacademy.com"
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-indigo-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">E-mail</p>
                  <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-sm">info@littleengineersacademy.com</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-green-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">WhatsApp</p>
                  <p className="font-bold text-slate-900 group-hover:text-green-600 transition-colors">Stuur een WhatsApp bericht</p>
                </div>
              </a>
            </div>

            <div className="mt-6 bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <p className="text-sm text-indigo-700 font-medium">⏱ Reactietijd: binnen 1 werkdag</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
