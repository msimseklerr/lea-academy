export type ProjectCategory = "MAKER" | "STEM" | "MAKER STEM" | "STEM MAKER";

export interface HowToProject {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  videoId: string;
  youtubeUrl: string;
}

export const howToProjects: HowToProject[] = [
  {
    id: "vliegtuig-dat-echt-vliegt",
    title: "Hoe maak je een vliegtuig dat echt vliegt?",
    description:
      "Bouw stap voor stap een vliegtuig van gerecyclede materialen dat echt de lucht in gaat. Leer de basisprincipes van aerodynamica terwijl je bouwt.",
    category: "MAKER STEM",
    videoId: "RcbjPoeJVMc",
    youtubeUrl: "https://www.youtube.com/watch?v=RcbjPoeJVMc",
  },
  {
    id: "windmolen-bouwen",
    title: "Windmolen bouwen: hernieuwbare energie voor kinderen",
    description:
      "Ontdek hoe windenergie werkt door je eigen mini-windmolen te bouwen. Een perfecte introductie tot duurzame energie en mechanica.",
    category: "MAKER STEM",
    videoId: "p58fj4VdFCs",
    youtubeUrl: "https://www.youtube.com/watch?v=p58fj4VdFCs",
  },
  {
    id: "motorfiets-bouwen",
    title: "Bouw je eigen motorfiets — STEM voor kinderen",
    description:
      "Van eenvoudige materialen naar een rijdende motorfiets. Dit project leert kinderen over wielen, assen en aandrijving op een speelse manier.",
    category: "STEM",
    videoId: "aif1gu061PQ",
    youtubeUrl: "https://www.youtube.com/watch?v=aif1gu061PQ",
  },
  {
    id: "raceauto-gerecyclede-materialen",
    title: "Bouw een snelle raceauto van gerecyclede materialen",
    description:
      "Geef oud karton en plastic flessen een tweede leven als razendsnel voertuig. Leer over frictie, snelheid en constructie door dit leuke maker-project.",
    category: "MAKER",
    videoId: "piTmKZ6hR6I",
    youtubeUrl: "https://www.youtube.com/watch?v=piTmKZ6hR6I",
  },
  {
    id: "mini-schip-bouwen",
    title: "Bouw je eigen mini-schip van gerecycled materiaal",
    description:
      "Ontdek de principes van drijfvermogen en waterdichtheid terwijl je een miniatuurschip bouwt dat écht drijft op water.",
    category: "MAKER",
    videoId: "IkcaPWvElrg",
    youtubeUrl: "https://www.youtube.com/watch?v=IkcaPWvElrg",
  },
  {
    id: "spinrobot-bouwen",
    title: "Bouw een kruipende spinrobot",
    description:
      "Maak een achtpotige robot die op een echte spin lijkt. Dit project introduceert kinderen op een leuke manier aan robotica en mechanische beweging.",
    category: "STEM MAKER",
    videoId: "HKZknC-JbBY",
    youtubeUrl: "https://www.youtube.com/watch?v=HKZknC-JbBY",
  },
  {
    id: "formule-1-auto",
    title: "Bouw een snelle Formule 1-auto",
    description:
      "Ontwerp en bouw je eigen Formule 1-bolide. Leer over stroomlijn, gewicht en snelheid terwijl je een echte racer maakt van alledaagse materialen.",
    category: "STEM MAKER",
    videoId: "CinqhfdyX84",
    youtubeUrl: "https://www.youtube.com/watch?v=CinqhfdyX84",
  },
  {
    id: "tractor-gerecycled-materiaal",
    title: "Maak je eigen tractor van gerecycled materiaal",
    description:
      "Hergebruik materialen en bouw een werkende miniatuurttractor. Dit project combineert creatief denken met technisch inzicht op een toegankelijke manier.",
    category: "STEM MAKER",
    videoId: "CyzTa8fRzxc",
    youtubeUrl: "https://www.youtube.com/watch?v=CyzTa8fRzxc",
  },
  {
    id: "schildermachine-draaitafel",
    title: "Maak een schildermachine met een draaitafel",
    description:
      "Bouw een machine die zelf kunst maakt met een roterende tafel en verf. Een creatief STEM-project dat techniek en kunst combineert.",
    category: "STEM MAKER",
    videoId: "Xs5ZhP4yjxc",
    youtubeUrl: "https://www.youtube.com/watch?v=Xs5ZhP4yjxc",
  },
  {
    id: "insectenrobot-poten",
    title: "Maak een insectenrobot die met zijn poten beweegt",
    description:
      "Bouw een meerpootige robot geïnspireerd op insecten. Ontdek hoe mechanische poten werken en hoe je beweging kunt overbrengen via tandwielen en assen.",
    category: "STEM MAKER",
    videoId: "nYtdG3nOwSM",
    youtubeUrl: "https://www.youtube.com/watch?v=nYtdG3nOwSM",
  },
];
