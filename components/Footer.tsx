import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Programma's</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programmas/kleine-uitvinders-3-6" className="hover:text-white transition-colors">
                  Kleine Uitvinders (3-6)
                </Link>
              </li>
              <li>
                <Link href="/programmas/jonge-makers-6-9" className="hover:text-white transition-colors">
                  Jonge Makers (6-9)
                </Link>
              </li>
              <li>
                <Link href="/programmas/slimme-bouwers-9-12" className="hover:text-white transition-colors">
                  Slimme Bouwers (9-12)
                </Link>
              </li>
              <li>
                <Link href="/programmas/toekomstige-ingenieurs-12-17" className="hover:text-white transition-colors">
                  Toekomstige Ingenieurs (12-17)
                </Link>
              </li>
              <li>
                <Link href="/programmas/vakantiekampen" className="hover:text-white transition-colors">
                  Vakantiekampen
                </Link>
              </li>
              <li>
                <Link href="/programmas/kinderfeestjes" className="hover:text-white transition-colors">
                  Kinderfeestjes
                </Link>
              </li>
              <li>
                <Link href="/programmas/proefles" className="hover:text-white transition-colors">
                  Gratis proefles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Academie</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/over-ons" className="hover:text-white transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/methode" className="hover:text-white transition-colors">
                  Onze methode
                </Link>
              </li>
              <li>
                <Link href="/talentanalyse" className="hover:text-white transition-colors">
                  TalentLAB
                </Link>
              </li>
              <li>
                <Link href="/voor-scholen" className="hover:text-white transition-colors">
                  Voor scholen & BSO
                </Link>
              </li>
              <li>
                <Link href="/voor-gemeenten" className="hover:text-white transition-colors">
                  Voor gemeenten
                </Link>
              </li>
              <li>
                <Link href="/sociale-impact" className="hover:text-white transition-colors">
                  Sociale impact
                </Link>
              </li>
              <li>
                <Link href="/eu-projecten" className="hover:text-white transition-colors">
                  EU-projecten
                </Link>
              </li>
              <li>
                <Link href="/galerij" className="hover:text-white transition-colors">
                  Galerij
                </Link>
              </li>
              <li>
                <Link href="/onderzoek" className="hover:text-white transition-colors">
                  Onderzoek
                </Link>
              </li>
              <li>
                <Link href="/ervaringen" className="hover:text-white transition-colors">
                  Ervaringen
                </Link>
              </li>
              <li>
                <Link href="/tarieven" className="hover:text-white transition-colors">
                  Tarieven
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Kennisbank</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kennisbank" className="hover:text-white transition-colors">
                  Alle artikelen
                </Link>
              </li>
              <li>
                <Link href="/kennisbank/welke-leeftijd-leren-programmeren" className="hover:text-white transition-colors">
                  Leren programmeren
                </Link>
              </li>
              <li>
                <Link href="/kennisbank/schermvrij-coderen-kleuters" className="hover:text-white transition-colors">
                  Schermvrij coderen
                </Link>
              </li>
              <li>
                <Link href="/kennisbank/fijne-motoriek-activiteiten" className="hover:text-white transition-colors">
                  Fijne motoriek
                </Link>
              </li>
              <li>
                <Link href="/hoe-maak-je-het" className="hover:text-white transition-colors">
                  Hoe Maak Je Het?
                </Link>
              </li>
              <li>
                <Link href="/veelgestelde-vragen" className="hover:text-white transition-colors">
                  Veelgestelde vragen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Eindhoven</p>
                <p>Kastanjelaan 410, Office 113</p>
                <p>5652 LD Eindhoven</p>
              </li>
              <li>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Eersel</p>
                <p>Brouwer 1</p>
                <p>5521 DK Eersel</p>
              </li>
              <li>
                <a href="tel:+31685485534" className="hover:text-white transition-colors">
                  +31 685 485 534
                </a>
              </li>
              <li>
                <a href="mailto:info@littleengineersacademy.com" className="hover:text-white transition-colors">
                  info@littleengineersacademy.com
                </a>
              </li>
              <li className="flex gap-3 pt-1">
                <Link href="/locaties/eindhoven" className="hover:text-white transition-colors">
                  Eindhoven →
                </Link>
                <Link href="/locaties/eersel" className="hover:text-white transition-colors">
                  Eersel →
                </Link>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact →
                </Link>
              </li>
            </ul>

            {/* Social media */}
            <div className="mt-6">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">Volg ons</p>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Volg ons op Instagram"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bekijk ons YouTube-kanaal"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <YoutubeIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Little Engineers Academy. Alle rechten voorbehouden. KvK: [nummer volgt]</p>
          <blockquote className="italic text-slate-400 text-center space-y-1">
            <p>&ldquo;Every child deserves to swim. We find their ocean.&rdquo;</p>
            <p>&ldquo;Elke vis verdient het om te zwemmen. Wij vinden zijn oceaan.&rdquo;</p>
          </blockquote>
        </div>
      </div>
    </footer>
  );
}
