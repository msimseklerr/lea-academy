import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Props {
  href: string;
  ageLabel: string;
  ageColor: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProgramCard({
  href,
  ageLabel,
  ageColor,
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${ageColor} shrink-0`}
        >
          <Icon size={24} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <span
            className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 ${ageColor} text-white`}
          >
            {ageLabel}
          </span>
          <h3
            className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            {title}
          </h3>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            {description}
          </p>
          <span className="text-indigo-600 text-sm font-semibold mt-3 inline-block group-hover:underline">
            Meer info →
          </span>
        </div>
      </div>
    </Link>
  );
}
