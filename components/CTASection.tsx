import Link from "next/link";

interface Props {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Klaar om te ontdekken wat jouw kind kan?",
  description = "Schrijf je in voor een gratis proefles en ontdek de wereld van technologie, robotica en coderen in een veilige, inspirerende omgeving.",
  primaryLabel = "Gratis proefles aanvragen",
  primaryHref = "/programmas/proefles",
  secondaryLabel = "Bekijk alle programma's",
  secondaryHref = "/programmas",
}: Props) {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
          style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
        >
          {title}
        </h2>
        <p className="text-lg text-indigo-100 mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center bg-white text-indigo-600 font-bold px-8 py-4 rounded-lg hover:scale-[1.02] hover:shadow-xl transition-all text-lg"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all text-lg"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
