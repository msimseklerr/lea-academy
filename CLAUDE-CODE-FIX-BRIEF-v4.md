# CLAUDE CODE DÜZELTME BRIEF v4 — Acil Hatalar

Bu 3 sorunu sırayla, onay sormadan, tek seferde çöz. Her adımda gerçekten test et (sadece kod yazıp geçme, çalıştığından emin ol).

---

## SORUN 1 — next.config.ts YouTube görsel hatası

`img.youtube.com` hostname'i next.config.ts içindeki `images.remotePatterns` listesinde tanımlı değil, bu yüzden /hoe-maak-je-het sayfası çöküyor.

next.config.ts dosyasını aç, `images.remotePatterns` array'ine şunu ekle (mevcut unsplash pattern'ini SİLME, yanına ekle):

```typescript
{
  protocol: "https",
  hostname: "img.youtube.com",
},
```

Ekledikten sonra dev server'ı yeniden başlat (next.config değişikliği hot-reload ile algılanmaz, restart gerekir) ve /hoe-maak-je-het sayfasının artık hatasız açıldığını doğrula. Ayrıca `maxresdefault.jpg` bazı eski/düşük çözünürlüklü videolarda mevcut olmayabilir (404 dönebilir) — her 10 video için gerçekten yükleniyor mu kontrol et, yüklenmeyenler için `hqdefault.jpg` fallback'ine geç (bu her zaman mevcuttur): `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg`.

---

## SORUN 2 — Yeni sayfalara site içinden ulaşılamıyor

/galerij, /hoe-maak-je-het ve önceki brief'lerde eklenen diğer yeni sayfalar (/talentanalyse yeni hali, /sociale-impact, /voor-gemeenten, /eu-projecten) navbar veya footer'da linklenmemiş, sadece URL yazarak erişiliyor. Bunu düzelt:

1. components/Navbar.tsx (veya proje içindeki gerçek dosya adı neyse) dosyasını aç, mevcut menü linklerini incele
2. Navbar'a şu linkleri ekle (kalabalık olacaksa dropdown/mega-menu kullan):
   - Galerij → /galerij
   - Hoe Maak Je Het → /hoe-maak-je-het
   - Talentanalyse → /talentanalyse (varsa zaten kontrol et)
   - "Voor Organisaties" dropdown altında: Voor Scholen (/voor-scholen), Voor Gemeenten (/voor-gemeenten), EU-projecten (/eu-projecten), Sociale Impact (/sociale-impact)
3. Footer'ı da aç, aynı sayfaların linklerini footer'daki uygun kolona (Kennisbank/Academie/Programma's gibi) ekle
4. app/sitemap.ts dosyasını aç, TÜM route'ların (yeni eklenenler dahil) sitemap'te olduğunu doğrula, eksikse ekle
5. Projede kaç tane app/(routes)/.../page.tsx dosyası varsa, HER BİRİNİN navbar'dan VEYA footer'dan VEYA bir hub sayfasından en az bir tıklamayla erişilebilir olduğunu tek tek kontrol et. Erişilemeyen (orphan) sayfa kalmasın.

---

## SORUN 3 — Makale sayısı hâlâ 6, uzunluk hâlâ kısa

Önceki brief'lerde 24'e sonra 30'a çıkarılması istenen kennisbank makale sayısı hâlâ 6'da kalmış ve makaleler kısa. Bu işi şimdi gerçekten tamamla, yarım bırakma.

Kesin hedef:
- Toplam 30 makale, content/kennisbank/ (veya projede makalelerin tutulduğu gerçek klasör) altında
- Her makale 2000-2800 kelime arası (kelime sayısını gerçekten kontrol et, "yeterince uzun görünüyor" diye geçme — yazdıktan sonra kelime say)
- Her makale şu zorunlu iskelete sahip olacak:
  - Giriş: 60-80 kelimelik direkt cevap paragrafı
  - 6-9 H2 alt başlık, soru formatında, her biri 250-400 kelime
  - En az 2 HTML tablo
  - En az 1 numaralı liste/checklist
  - "Wat wij bij LEA zien" pratik gözlem kutusu (150-200 kelime)
  - 5-6 SSS (FAQ) + FAQPage schema
  - "Verder lezen" bölümü: 3 iç link

Konu listesi (mevcut 6 tanesini uzat, eksik olan 24 tanesini sıfırdan yaz):

1. Op welke leeftijd kan een kind leren programmeren?
2. Schermvrij coderen: unplugged activiteiten voor kleuters
3. Fijne motoriek ontwikkelen: van bouwblokken tot schroevendraaier
4. Hersenontwikkeling 0-6 jaar: wat elke ouder moet weten
5. Robotica voor kinderen: de complete gids
6. Wat is STEM/STEAM onderwijs en waarom is het belangrijk?
7. Van Scratch naar Python: de programmeerladder per leeftijd
8. micro:bit en Arduino voor kinderen: waar begin je?
9. Is mijn kind hoogbegaafd? Signalen per leeftijd
10. Meervoudige intelligentie: waarom "hoe slim" de verkeerde vraag is
11. Neurodiversiteit en talent: ADHD en autisme als kracht, niet beperking
12. Growth mindset bij kinderen: hoe bouw je doorzettingsvermogen op
13. Schermtijd per leeftijd: een realistische richtlijn
14. Consumeren vs creëren: de enige schermtijd-vraag die ertoe doet
15. Gamen en leren: wanneer is het gezond, wanneer niet?
16. AI en kinderen: hoe leg je ChatGPT uit aan een 8-jarige?
17. Schoolrijpheid checklist: is mijn kind klaar voor groep 3?
18. Naschoolse activiteiten kiezen: STEM, sport of muziek?
19. Wat kost een STEM-cursus voor kinderen? Een eerlijk overzicht
20. 10 vragen die je moet stellen voordat je een cursus kiest
21. 21e-eeuwse vaardigheden: wat moet mijn kind echt leren?
22. Welke banen bestaan over 15 jaar nog?
23. Meisjes en techniek: hoe stimuleer je interesse in STEM?
24. Van hobby naar carrière: techniekberoepen uitgelegd aan kinderen
25. Wat is executieve functie en waarom is het belangrijker dan IQ?
26. Buitenspelen en hersenontwikkeling: waarom risicovol spel slim maakt
27. Ruimtelijk inzicht bij kinderen: de onderschatte vaardigheid achter wiskunde
28. Motivatie bij kinderen: waarom belonen vaak averechts werkt
29. STEM-cadeaus per leeftijd: een koopgids voor ouders
30. Van speelgoed naar prototype: wat leert reverse engineering kinderen

Anahtar kelime havuzu (her makalede konusuna uygun 10-15 terim doğal biçimde kullan): robotica voor kinderen, programmeren leren kind, STEM onderwijs kinderen, coderen voor kinderen, talentontwikkeling kind, hersenontwikkeling kinderen, hersenontwikkeling 0-6 jaar, fijne motoriek ontwikkelen, grove motoriek kinderen, schoolrijpheid checklist, hoogbegaafd kind signalen, schermtijd kinderen richtlijn, technieklessen kinderen, naschoolse activiteiten kinderen, kinderfeestje robot, vakantiekamp techniek, groeimindset kinderen, 21e eeuwse vaardigheden, neurodiversiteit kinderen, meervoudige intelligentie Gardner, STEAM onderwijs, maker education, engineering voor kinderen, executieve functies kinderen, werkgeheugen kinderen, concentratie kleuters, probleemoplossend vermogen, zelfvertrouwen kinderen, doorzettingsvermogen kind, Eindhoven kinderactiviteiten, Brainport onderwijs, kleuters leren spelenderwijs, unplugged coderen, screen time kinderen Nederland.

Bu işi gerçekten bitir: 30 dosya, her biri gerçekten 2000+ kelime, hepsi /kennisbank hub sayfasından linkli, hepsi kendi route'unda çalışır durumda.

---

## SIRALAMA

1. Sorun 1 (next.config.ts + hqdefault fallback) — hızlı, önce bunu çöz
2. Sorun 2 (navigasyon linkleri) — orta, sonra bunu çöz
3. Sorun 3 (30 makale, 2000+ kelime) — en uzun sürecek, en sona bırak ama MUTLAKA bitir, yarım bırakma

En sonda:
```
npm run build
```
çalıştır, hatasız geçtiğinden emin ol. Sonra `npm run dev` başlat.

Bana şunları raporla:
- next.config.ts düzeltmesi sonrası /hoe-maak-je-het sayfasının tüm 10 görselinin gerçekten yüklendiğini doğruladın mı
- Navbar/footer'a eklenen tüm yeni linklerin listesi
- Yazılan toplam makale sayısı ve her birinin gerçek kelime sayısı (liste halinde)
- Kontrol etmem gereken URL listesi
