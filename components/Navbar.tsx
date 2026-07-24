"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem =
  | { type: "link"; href: string; label: string }
  | { type: "dropdown"; label: string; links: { href: string; label: string }[] };

const navItems: NavItem[] = [
  { type: "link", href: "/programmas", label: "Programma's" },
  { type: "link", href: "/talentanalyse", label: "TalentLAB" },
  {
    type: "dropdown",
    label: "Kennis & Inspiratie",
    links: [
      { href: "/kennisbank", label: "Kennisbank" },
      { href: "/galerij", label: "Galerij" },
      { href: "/hoe-maak-je-het", label: "Hoe Maak Je Het?" },
    ],
  },
  {
    type: "dropdown",
    label: "Voor organisaties",
    links: [
      { href: "/voor-scholen", label: "Voor scholen" },
      { href: "/voor-gemeenten", label: "Voor gemeenten" },
      { href: "/eu-projecten", label: "EU-projecten" },
      { href: "/sociale-impact", label: "Sociale impact" },
    ],
  },
  {
    type: "dropdown",
    label: "Over LEA",
    links: [
      { href: "/methode", label: "Onze Methode" },
      { href: "/over-ons", label: "Over ons" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleGroupEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenGroup(label);
  };

  const handleGroupLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenGroup(null), 200);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-xl text-indigo-600"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold">
              LEA
            </span>
            <span className="hidden sm:inline text-slate-900">Little Engineers Academy</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleGroupEnter(item.label)}
                  onMouseLeave={handleGroupLeave}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                    {item.label} <ChevronDown size={14} />
                  </button>
                  {openGroup === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-52 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                        {item.links.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/voor-scholen"
              className="hidden md:inline-flex items-center border border-indigo-300 text-indigo-600 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-indigo-50 transition-all"
            >
              Voor organisaties
            </Link>
            <Link
              href="/programmas/proefles"
              className="hidden sm:inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:scale-[1.02] hover:shadow-md"
            >
              Gratis proefles
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-indigo-600"
              aria-label="Menu openen"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ) : (
              <div key={item.label} className="pt-2 border-t border-slate-100 mt-2 first:border-t-0 first:mt-0 first:pt-0">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest py-1">
                  {item.label}
                </p>
                {item.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-slate-700 hover:text-indigo-600"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )
          )}
          <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 mt-2">
            <Link
              href="/voor-scholen"
              onClick={() => setOpen(false)}
              className="block border border-indigo-300 text-indigo-600 text-sm font-semibold px-4 py-2 rounded-lg text-center"
            >
              Voor organisaties
            </Link>
            <Link
              href="/programmas/proefles"
              onClick={() => setOpen(false)}
              className="block bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
            >
              Gratis proefles
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
