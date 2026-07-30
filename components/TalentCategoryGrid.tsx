"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  Palette,
  Activity,
  Heart,
  Compass,
  MessageSquare,
  Eye,
  Wrench,
  ChevronDown,
} from "lucide-react";

interface Parameter {
  name: string;
  age?: string;
  desc: string;
}

interface Category {
  icon: typeof Brain;
  title: string;
  color: string;
  iconBg: string;
  iconColor: string;
  params: Parameter[];
}

const categories: Category[] = [
  {
    icon: Brain,
    title: "Cognitieve & Hogere Denkvaardigheden",
    color: "border-indigo-200 hover:border-indigo-400",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    params: [
      { name: "Inductief redeneren", age: "5+", desc: "Uit voorbeelden een algemeen principe afleiden" },
      { name: "Deductief redeneren", age: "6+", desc: "Van algemeen principe naar specifieke situatie" },
      { name: "Analogisch denken", age: "5+", desc: "Overeenkomsten leggen tussen verschillende domeinen" },
      { name: "Leren van voorbeelden / modelleren", age: "3+", desc: "Een gezien voorbeeld kunnen nabootsen" },
      { name: "Patroonherkenning", age: "4+", desc: "Sequentiële, ruimtelijke of conceptuele patronen herkennen" },
      { name: "Metacognitie", age: "7+", desc: "Bewustzijn van het eigen denkproces" },
      { name: "Conceptuele categorisatie", age: "4+", desc: "Objecten in betekenisvolle groepen indelen" },
      { name: "Contrafactisch denken", age: "6+", desc: "“Wat als?”-scenario's mentaal construeren" },
      { name: "Causaal redeneren", age: "4+", desc: "Oorzaak-gevolgrelaties detecteren en voorspellen" },
      { name: "Probabilistisch denken", age: "7+", desc: "Beslissen onder onzekerheid" },
      { name: "Numeriek/kwantitatief redeneren", age: "4+", desc: "Hoeveelheden inschatten, wiskundige intuïtie" },
      { name: "Verbaal redeneren", age: "4+", desc: "Denken met taal, concepten verwoorden" },
    ],
  },
  {
    icon: Zap,
    title: "Executieve Functies",
    color: "border-violet-200 hover:border-violet-400",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    params: [
      { name: "Inhibitiecontrole / impulsbeheersing", age: "3+", desc: "Een eerste impuls kunnen onderdrukken" },
      { name: "Werkgeheugen", age: "4+", desc: "Informatie vasthouden terwijl je ermee werkt" },
      { name: "Cognitieve flexibiliteit", age: "5+", desc: "Soepel schakelen tussen manieren van denken" },
      { name: "Planning", age: "5+", desc: "Stappen vooruit bedenken om een doel te bereiken" },
      { name: "Uitgestelde beloning", age: "4+", desc: "Kunnen wachten op een groter resultaat later" },
      { name: "Taakwisseling", age: "5+", desc: "Aandacht verplaatsen tussen verschillende taken" },
      { name: "Zelfmonitoring", age: "6+", desc: "Het eigen gedrag en de voortgang in de gaten houden" },
    ],
  },
  {
    icon: Palette,
    title: "Creatief-Productieve Vaardigheden",
    color: "border-fuchsia-200 hover:border-fuchsia-400",
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
    params: [
      { name: "Vloeiendheid", age: "5+", desc: "Veel ideeën genereren" },
      { name: "Flexibiliteit", age: "5+", desc: "Ideeën uit verschillende categorieën aandragen" },
      { name: "Elaboratie", age: "5+", desc: "Een idee verdiepen en uitwerken" },
      { name: "Metaforisch/symbolisch denken", age: "5+", desc: "Betekenis overdragen via beelden en symbolen" },
      { name: "Narratieve constructie / verhalen vertellen", age: "4+", desc: "Een samenhangend verhaal opbouwen" },
      { name: "Esthetisch gevoel", age: "3+", desc: "Gevoel voor vorm, kleur en compositie" },
      { name: "Synthese", age: "7+", desc: "Informatie uit verschillende bronnen combineren" },
    ],
  },
  {
    icon: Activity,
    title: "Motorische & Psychomotorische Vaardigheden",
    color: "border-amber-200 hover:border-amber-400",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    params: [
      { name: "Fijne motoriek", age: "3+", desc: "Precieze bewegingen met vingers en handen" },
      { name: "Grove motoriek", age: "3+", desc: "Bewegingen met het hele lichaam" },
      { name: "Bilaterale coördinatie", age: "4+", desc: "Beide lichaamshelften gecoördineerd inzetten" },
      { name: "Oog-handcoördinatie", age: "3+", desc: "Zien en bewegen op elkaar afstemmen" },
      { name: "Motorische planning / praxis", age: "4+", desc: "Een nieuwe beweging bedenken en uitvoeren" },
      { name: "Fijnmotorisch uithoudingsvermogen", age: "5+", desc: "Precisie volhouden over langere tijd" },
    ],
  },
  {
    icon: Heart,
    title: "Sociaal-Emotionele Vaardigheden",
    color: "border-emerald-200 hover:border-emerald-400",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    params: [
      { name: "Emotieherkenning", age: "3+", desc: "Emoties bij zichzelf en anderen herkennen" },
      { name: "Emotieregulatie", age: "3+", desc: "Omgaan met en bijsturen van eigen emoties" },
      { name: "Empathie", age: "4+", desc: "Zich inleven in het perspectief van een ander" },
      { name: "Theory of Mind", age: "4+", desc: "Begrijpen dat anderen andere gedachten hebben" },
      { name: "Sociale grenzen & persoonlijke ruimte", age: "4+", desc: "Grenzen van zichzelf en anderen herkennen" },
      { name: "Conflictoplossing", age: "5+", desc: "Een meningsverschil constructief oplossen" },
      { name: "Samenwerking", age: "4+", desc: "Gezamenlijk toewerken naar een doel" },
      { name: "Sociale moed / initiatief", age: "4+", desc: "Zelf de eerste stap durven zetten" },
      { name: "Wachten op de beurt & delen", age: "3+", desc: "Beurten en materialen delen met anderen" },
    ],
  },
  {
    icon: Compass,
    title: "Zelfmanagement & Wilsvaardigheden",
    color: "border-rose-200 hover:border-rose-400",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    params: [
      { name: "Zelfbewustzijn", age: "5+", desc: "Weten wat je sterke en minder sterke kanten zijn" },
      { name: "Veerkracht / resilience", age: "4+", desc: "Herstellen na een tegenslag" },
      { name: "Growth mindset", age: "5+", desc: "Geloven dat vaardigheden te ontwikkelen zijn" },
      { name: "Faaltolerantie", age: "4+", desc: "Fouten kunnen verdragen als onderdeel van leren" },
      { name: "Risicobereidheid", age: "4+", desc: "Bereid zijn iets nieuws te proberen" },
      { name: "Nieuwsgierigheid", age: "3+", desc: "Uit zichzelf willen ontdekken en onderzoeken" },
      { name: "Intrinsieke vs. extrinsieke motivatie", age: "4+", desc: "Van binnenuit gedreven zijn versus voor een beloning" },
      { name: "Doelen stellen en volgen", age: "6+", desc: "Een doel bepalen en ernaartoe werken" },
      { name: "Geduld & plezier in het proces", age: "4+", desc: "Kunnen genieten van de weg, niet alleen het resultaat" },
    ],
  },
  {
    icon: MessageSquare,
    title: "Taal & Communicatie",
    color: "border-sky-200 hover:border-sky-400",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    params: [
      { name: "Receptieve taal", age: "3+", desc: "Taal van anderen begrijpen" },
      { name: "Expressieve taal", age: "3+", desc: "Zichzelf verwoorden in taal" },
      { name: "Tweedetaalverwerving", age: "3+", desc: "Een nieuwe taal oppikken en toepassen" },
      { name: "Non-verbale communicatie lezen", age: "4+", desc: "Lichaamstaal en gezichtsuitdrukkingen begrijpen" },
      { name: "Mondelinge presentatie", age: "6+", desc: "Ideeën helder overbrengen aan een groep" },
      { name: "Actief luisteren", age: "5+", desc: "Gericht luisteren en daarop reageren" },
    ],
  },
  {
    icon: Eye,
    title: "Zintuiglijke & Perceptuele Vaardigheden",
    color: "border-cyan-200 hover:border-cyan-400",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    params: [
      { name: "Visuele discriminatie", age: "3+", desc: "Verschillen en overeenkomsten visueel opmerken" },
      { name: "Auditieve verwerking", age: "3+", desc: "Geluiden en klanken verwerken en onderscheiden" },
      { name: "Tactiele gevoeligheid", age: "3+", desc: "Informatie opdoen via de tastzin" },
      { name: "Proprioceptie / lichaamsbewustzijn", age: "3+", desc: "Voelen waar het lichaam zich bevindt" },
      { name: "Ritmegevoel", age: "3+", desc: "Patronen in tijd en beweging aanvoelen" },
      { name: "Synesthetische neiging", age: "5+", desc: "Zintuiglijke indrukken met elkaar verbinden" },
    ],
  },
  {
    icon: Wrench,
    title: "Technische & Toegepaste Vaardigheden",
    color: "border-orange-200 hover:border-orange-400",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    params: [
      { name: "Aanleg voor gereedschapsgebruik", desc: "Gereedschap doelgericht en veilig hanteren" },
      { name: "Mechanisch inzicht", desc: "Begrijpen hoe bewegende onderdelen samenwerken" },
      { name: "Circuit-/verbindingsinzicht", desc: "Logica van elektrische verbindingen doorzien" },
      { name: "Pre-engineering denken", desc: "Een technisch probleem stap voor stap benaderen" },
      { name: "Prototyping-moed", desc: "Een eerste versie durven bouwen, ook al is die niet perfect" },
      { name: "Materiaalgevoel", desc: "Aanvoelen wat een materiaal wel en niet aankan" },
      { name: "Deconstructie-drang", desc: "Dingen uit elkaar willen halen om ze te begrijpen" },
    ],
  },
];

export default function TalentCategoryGrid() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((cat, i) => {
        const Icon = cat.icon;
        const isOpen = open === i;
        return (
          <motion.div
            key={cat.title}
            className={`bg-white rounded-2xl border p-5 shadow-sm transition-colors ${cat.color}`}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-3 text-left"
              aria-expanded={isOpen}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg}`}>
                <Icon size={22} className={cat.iconColor} />
              </div>
              <span
                className="font-bold text-slate-900 text-sm leading-snug flex-1"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                {cat.title}
              </span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} className="text-slate-400 shrink-0" />
              </motion.span>
            </button>
            <p className="text-xs text-slate-400 mt-2">{cat.params.length} parameters</p>
            {isOpen && (
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                {cat.params.map((p) => (
                  <li key={p.name} className="flex items-start justify-between gap-2 text-sm">
                    <div>
                      <span className="font-medium text-slate-800">{p.name}</span>
                      <span className="block text-xs text-slate-500">{p.desc}</span>
                    </div>
                    {p.age && (
                      <span className="shrink-0 text-[11px] font-bold text-slate-500 bg-slate-100 rounded-full px-2 py-0.5">
                        {p.age}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
