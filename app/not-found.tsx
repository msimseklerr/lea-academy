import Link from "next/link";
import { Home, BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-8xl font-extrabold text-indigo-100 mb-2" aria-hidden="true">404</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
          Deze pagina is nog in aanbouw — net als onze robots.
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          De pagina die u zoekt bestaat niet of is verplaatst. Geen zorgen — er is genoeg te ontdekken op onze andere pagina&apos;s.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-[1.02]"
          >
            <Home size={18} />
            Terug naar home
          </Link>
          <Link
            href="/kennisbank"
            className="inline-flex items-center gap-2 bg-white border-2 border-indigo-200 hover:border-indigo-400 text-indigo-600 font-bold px-6 py-3 rounded-xl transition-all"
          >
            <BookOpen size={18} />
            Bekijk kennisbank
          </Link>
          <Link
            href="/programmas"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-semibold px-6 py-3 transition-colors"
          >
            <ArrowLeft size={18} />
            Bekijk programma&apos;s
          </Link>
        </div>
      </div>
    </section>
  );
}
