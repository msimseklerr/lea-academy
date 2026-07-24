import type { Article, ArticleSlug } from "./types";

import welkeLeeftijdLerenProgrammeren from "./articles/welke-leeftijd-leren-programmeren";
import schermvrijCoderenKleuters from "./articles/schermvrij-coderen-kleuters";
import fijneMotoriekActiviteiten from "./articles/fijne-motoriek-activiteiten";
import hersenontwikkeling06Jaar from "./articles/hersenontwikkeling-0-6-jaar";
import roboticaVoorKinderenGids from "./articles/robotica-voor-kinderen-gids";
import watIsStemOnderwijs from "./articles/wat-is-stem-onderwijs";
import vanScratchNaarPython from "./articles/van-scratch-naar-python";
import microbitArduinoKinderen from "./articles/microbit-arduino-kinderen";
import isMijnKindHoogbegaafd from "./articles/is-mijn-kind-hoogbegaafd";
import meervoudigeIntelligentie from "./articles/meervoudige-intelligentie";
import neurodiversiteitAdhdAutismeTalent from "./articles/neurodiversiteit-adhd-autisme-talent";
import growthMindsetKinderen from "./articles/growth-mindset-kinderen";
import schermtijdPerLeeftijd from "./articles/schermtijd-per-leeftijd";
import consumerenVsCreerenSchermtijd from "./articles/consumeren-vs-creeren-schermtijd";
import gamenEnLeren from "./articles/gamen-en-leren";
import aiEnKinderenChatgpt from "./articles/ai-en-kinderen-chatgpt";
import schoolrijpheidChecklist from "./articles/schoolrijpheid-checklist";
import naschoolseActiviteitenKiezen from "./articles/naschoolse-activiteiten-kiezen";
import watKostStemCursus from "./articles/wat-kost-stem-cursus";
import tienVragenCursusKiezen from "./articles/10-vragen-cursus-kiezen";
import eenentwintigsteEeuwseVaardigheden from "./articles/21e-eeuwse-vaardigheden";
import welkeBanenBestaanNog from "./articles/welke-banen-bestaan-nog";
import meisjesEnTechniekStem from "./articles/meisjes-en-techniek-stem";
import vanHobbyNaarCarriereTechniek from "./articles/van-hobby-naar-carriere-techniek";
import watIsExecutieveFunctie from "./articles/wat-is-executieve-functie";
import buitenspelenHersenontwikkeling from "./articles/buitenspelen-hersenontwikkeling";
import ruimtelijkInzichtKinderen from "./articles/ruimtelijk-inzicht-kinderen";
import motivatieKinderenBelonen from "./articles/motivatie-kinderen-belonen";
import stemCadeausPerLeeftijd from "./articles/stem-cadeaus-per-leeftijd";
import reverseEngineeringKinderen from "./articles/reverse-engineering-kinderen";

export const articles: Record<ArticleSlug, Article> = {
  "welke-leeftijd-leren-programmeren": welkeLeeftijdLerenProgrammeren,
  "schermvrij-coderen-kleuters": schermvrijCoderenKleuters,
  "fijne-motoriek-activiteiten": fijneMotoriekActiviteiten,
  "hersenontwikkeling-0-6-jaar": hersenontwikkeling06Jaar,
  "robotica-voor-kinderen-gids": roboticaVoorKinderenGids,
  "wat-is-stem-onderwijs": watIsStemOnderwijs,
  "van-scratch-naar-python": vanScratchNaarPython,
  "microbit-arduino-kinderen": microbitArduinoKinderen,
  "is-mijn-kind-hoogbegaafd": isMijnKindHoogbegaafd,
  "meervoudige-intelligentie": meervoudigeIntelligentie,
  "neurodiversiteit-adhd-autisme-talent": neurodiversiteitAdhdAutismeTalent,
  "growth-mindset-kinderen": growthMindsetKinderen,
  "schermtijd-per-leeftijd": schermtijdPerLeeftijd,
  "consumeren-vs-creeren-schermtijd": consumerenVsCreerenSchermtijd,
  "gamen-en-leren": gamenEnLeren,
  "ai-en-kinderen-chatgpt": aiEnKinderenChatgpt,
  "schoolrijpheid-checklist": schoolrijpheidChecklist,
  "naschoolse-activiteiten-kiezen": naschoolseActiviteitenKiezen,
  "wat-kost-stem-cursus": watKostStemCursus,
  "10-vragen-cursus-kiezen": tienVragenCursusKiezen,
  "21e-eeuwse-vaardigheden": eenentwintigsteEeuwseVaardigheden,
  "welke-banen-bestaan-nog": welkeBanenBestaanNog,
  "meisjes-en-techniek-stem": meisjesEnTechniekStem,
  "van-hobby-naar-carriere-techniek": vanHobbyNaarCarriereTechniek,
  "wat-is-executieve-functie": watIsExecutieveFunctie,
  "buitenspelen-hersenontwikkeling": buitenspelenHersenontwikkeling,
  "ruimtelijk-inzicht-kinderen": ruimtelijkInzichtKinderen,
  "motivatie-kinderen-belonen": motivatieKinderenBelonen,
  "stem-cadeaus-per-leeftijd": stemCadeausPerLeeftijd,
  "reverse-engineering-kinderen": reverseEngineeringKinderen,
};

export const articleList: Article[] = Object.values(articles);

export type { Article, ArticleSlug, ArticleFAQ, ArticleTable, ArticleSection } from "./types";
