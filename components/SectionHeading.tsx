interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg text-slate-600 leading-relaxed max-w-3xl${center ? " mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
