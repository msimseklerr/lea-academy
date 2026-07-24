import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1 text-sm text-slate-500 mb-6"
    >
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={14} />}
          {c.href ? (
            <Link href={c.href} className="hover:text-indigo-600 transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-slate-800 font-medium">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
