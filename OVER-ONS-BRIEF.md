# BRIEF: Over Ons Sayfası — 10 Yıl Zaman Çizelgesi + Ekip

> ÖNEMLİ: Bu brief'i onay sormadan, tek seferde, baştan sona uygula. Site dili SADECE HOLLANDACA.

---

## HEDEF

`/over-ons` sayfasını güncelle: (1) "10 jaar LEA" başlıklı görsel bir zaman çizelgesi (timeline), (2) ekip fotoğrafı, (3) multidisipliner ekip vurgusu, (4) güncel rakamlar.

---

## ADIM 1 — EKİP FOTOĞRAFI

1. `C:\Users\LEA\Downloads\lea-academy\lea-academy` klasöründe "LEA team" isimli görseli bul (jpg/jpeg/png/webp).
2. `public/images/site/lea-team.jpg` (web-safe isim) olarak kopyala.
3. Over Ons sayfasına, ekip bölümüne yerleştir. next/image, Hollandaca alt: "Het multidisciplinaire team van Little Engineers Academy". Kesilmesin (object-fit ayarına dikkat).

---

## ADIM 2 — ZAMAN ÇİZELGESİ (Tijdlijn: "10 jaar LEA")

Görsel, dikey veya yatay animasyonlu bir timeline oluştur (framer-motion, mevcut tasarım dili). Her olay bir kart/nokta. İçerik Hollandaca (aşağıdaki Türkçe olayları düzgün Hollandaca'ya çevir, şehir isimlerini doğru yaz: Utrecht, Sint Maarten, Jaarbeurs, Madeira):

- **2016** — Little Engineers Academy, Mustafa Şimşekler tarafından opgericht.
- **2016-2021** — Een team van ingenieurs en pedagogen; in de eerste 5 jaar 6.000 leerlingen bereikt.
- **2020-2021 (pandemie)** — Tijdens de pandemie bleef LEA de gemeenschap ondersteunen met online lessen en broadcasts.
- **2022** — "Little Engineering Artistic Academy" project (gefinancierd door Gemeente Utrecht en Macchinerie), doel was 800 leerlingen — in het centrum van Utrecht werden 1.200 leerlingen bereikt.
- **2023** — Tweede prijs (beste project) tijdens de Sint Maarten-viering.
- **2024** — Talentanalyse-workshops voor leerlingen uit Oekraïne in de Jaarbeurs (Utrecht).
- **2024** — Met de TechFunday-evenementen 12 keer een beursactiviteit georganiseerd op middelbare scholen in het centrum van Eindhoven.
- **2024** — Coördinatierol in de Erasmus+ projecten "SIGN" en "Robotic Art".
- **2025** — De LEA-onderwijsmethodologie werd toegepast in Canada, Kroatië, Madeira en Duitsland.
- **2026** — Met het "Talent Analyse Centrum"-project van Gemeente Ede werd een talentcentrum opgezet in Ede.
- **2026** — Gevestigd in de regio waar Philips is opgericht; LEA biedt talentanalyse-diensten aan op 40 verschillende locaties in heel Nederland.

Timeline'ın üstüne kısa bir giriş paragrafı (Hollandaca): 10 yıllık yolculuğu özetleyen, gurur veren ama abartısız 2-3 cümle.

---

## ADIM 3 — MULTİDİSİPLİNER EKİP BÖLÜMÜ

Ekip fotoğrafının yanına/altına "Een multidisciplinair team" başlıklı bir bölüm ekle. Şu mesajı Hollandaca yaz: LEA'nın gücü, farklı disiplinlerden gelen uzmanlardan oluşan ekibinde. Aşağıdaki uzmanlıkları güzel bir grid/liste halinde göster (ikon + Hollandaca isim, lucide-react ikonları):

- Kunstenaars (Artists)
- Musici (Musicians)
- Leerkrachten (Teachers)
- Academici (Academics)
- Regeltechniek-ingenieur (Control Engineer)
- Werktuigbouwkundig ingenieur (Mechanical Engineer)
- Montessori-specialist
- Elektrotechnisch ingenieurs (Electronic Engineers)
- IT-ingenieur (IT Engineer)
- PhD Cognitieve Wetenschap (Cognitive Science PhD)
- Communicatie-ingenieur (Communications Engineer)
- Kleuterleerkrachten (Kindergarten Teachers)
- Psychiater (Psychiatrist)
- Specialist kinderontwikkeling (Child Development Specialist)

Vurgu cümlesi (Hollandaca): "Bij LEA werken ingenieurs, kunstenaars, musici, pedagogen en psychologen samen — een unieke combinatie die je nergens anders vindt."

---

## ADIM 4 — GÜNCEL RAKAMLAR

Over Ons sayfasındaki istatistikleri şu KESİN değerlere getir:
- **12.000+ leerlingen bereikt** (öğrenci)
- **33.000+ robots gebouwd** (robot)
- **10+ jaar ervaring** (sinds 2016)
- **150+ scholen** / partnerkurumlar
- **12+ landen**
- **40 locaties in Nederland** (yeni — 2026)

DİKKAT: Eski değerler "33.000 kinderen bereikt" ve "9.300 robots" idi. Bunlar DEĞİŞTİ. Bu sayfada yeni değerleri kullan. (Site genelindeki diğer sayfalar ayrı bir brief ile güncellenecek.)

---

## ADIM 5 — SCHEMA / SEO

- Over Ons sayfasının Organization schema'sının `foundingDate` alanını "2016" yap, `founder` alanına "Mustafa Şimşekler" ekle.
- Timeline olaylarını semantik HTML (`<ol>` veya uygun yapı) ile işaretle (AI extraction).
- İlk paragraf LEA'nın ne olduğunu direkt anlatsın.

---

## ADIM 6 — KONTROL
1. `npm run build` çalıştır, hata varsa düzelt.
2. Rapor: ekip fotoğrafı eklendi mi, timeline'da kaç olay var, multidisipliner ekip listesi eklendi mi, rakamlar güncellendi mi, build başarılı mı.

## KURALLAR
- Tüm metin HOLLANDACA, şehir/isim yazımları doğru.
- "LEA team" görseli bulunamazsa kullanıcıya haber ver ve o adımı atla ama diğerlerini tamamla.
- Mevcut tasarım dilini koru.
- YANLIŞ bilgi ekleme — sadece verilen olayları kullan.
