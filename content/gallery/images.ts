/*
 * KENDİ GÖRSELLERİNİZİ EKLEMEK İÇİN:
 * 1. Görsel dosyalarınızı /public/images/gallery/ klasörüne atın
 *    (klasör yoksa oluşturun: public/images/gallery/)
 * 2. Dosya adlarını şu formatta verin: kategori-aciklama.jpg
 *    Örnek: workshops-robot-bouwen-01.jpg
 * 3. Aşağıdaki listeye yeni bir satır ekleyin:
 *    { src: "/images/gallery/workshops-robot-bouwen-01.jpg", alt: "Kinderen bouwen een robot tijdens workshop", category: "workshops", width: 1200, height: 800 }
 * 4. src alanını "/images/gallery/DOSYA-ADINIZ.jpg" olacak şekilde güncelleyin
 * 5. Kaydedip siteyi yenileyin — görsel otomatik galeriye eklenecektir
 *
 * KATEGORİLER: "workshops" | "robotica" | "vakantiekamp" | "kinderfeestje" | "locaties"
 */

export type GalleryCategory = "workshops" | "robotica" | "vakantiekamp" | "kinderfeestje" | "locaties";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
  title?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&q=80",
    alt: "Kinderen programmeren samen een robot tijdens een workshop bij Little Engineers Academy",
    category: "workshops",
    width: 900,
    height: 600,
    title: "Samen programmeren",
  },
  {
    src: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=900&q=80",
    alt: "Kind bouwt een kleine robot van onderdelen tijdens een robotica-les bij LEA",
    category: "robotica",
    width: 900,
    height: 1200,
    title: "Robot bouwen",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
    alt: "Begeleider helpt kinderen bij hun STEM-project in een kleine groep",
    category: "workshops",
    width: 900,
    height: 700,
    title: "Begeleiding op maat",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    alt: "Kleuters leren spelenderwijs bouwen met kleurrijke blokken bij Kleine Uitvinders",
    category: "workshops",
    width: 900,
    height: 600,
    title: "Kleine Uitvinders",
  },
  {
    src: "/images/workshops/microcontroller-elektronica.png",
    alt: "Close-up van een micro:bit circuit dat een kind heeft geprogrammeerd",
    category: "robotica",
    width: 2000,
    height: 2000,
    title: "Micro:bit project",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
    alt: "Groep kinderen luistert aandachtig naar een STEM-uitleg in een workshop",
    category: "workshops",
    width: 900,
    height: 1350,
    title: "Groepsworkshop",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80",
    alt: "Kinderen werken samen aan een technisch project tijdens een vakantiekamp bij LEA",
    category: "vakantiekamp",
    width: 900,
    height: 600,
    title: "Vakantiekamp samenwerken",
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80",
    alt: "Kind werkt geconcentreerd aan een codeeropdracht op een laptop",
    category: "workshops",
    width: 900,
    height: 700,
    title: "Coderen leren",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    alt: "Kinderen vieren de verjaardag van een vriend met een robot kinderfeestje bij LEA",
    category: "kinderfeestje",
    width: 900,
    height: 600,
    title: "Robot kinderfeestje",
  },
  {
    src: "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=900&q=80",
    alt: "Sfeervolle buitenkant van de LEA-locatie in Eindhoven",
    category: "locaties",
    width: 900,
    height: 1200,
    title: "Locatie Eindhoven",
  },
  {
    src: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=900&q=80",
    alt: "Kind lost een technisch puzzel op tijdens een STEM vakantiekamp in de zomervakantie",
    category: "vakantiekamp",
    width: 900,
    height: 600,
    title: "Zomervakantiekamp",
  },
  {
    src: "https://images.unsplash.com/photo-1491897554428-130a60dd4757?w=900&q=80",
    alt: "Handen van een kind die nauwkeurig kleine elektronische onderdelen monteren",
    category: "robotica",
    width: 900,
    height: 600,
    title: "Precisiewerk",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
    alt: "Kinderen werken in tweetallen aan een gezamenlijk roboticaproject bij LEA",
    category: "workshops",
    width: 900,
    height: 600,
    title: "Samenwerken",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80",
    alt: "Vrolijk kinderfeestje met robots en techniek bij Little Engineers Academy Eersel",
    category: "kinderfeestje",
    width: 900,
    height: 1350,
    title: "Codefeest",
  },
  {
    src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=900&q=80",
    alt: "Leerlingen tonen trots hun zelfgebouwde robots na een intensief vakantiekamp",
    category: "vakantiekamp",
    width: 900,
    height: 600,
    title: "Resultaat vakantiekamp",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
    alt: "Meisje programmeert zelfstandig haar robot met een grote glimlach",
    category: "robotica",
    width: 900,
    height: 600,
    title: "Meisjes in techniek",
  },
];
