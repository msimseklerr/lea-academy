# CLAUDE CODE BUILD BRIEF — Little Engineers Academy Website

Bu dosyayı oku ve siteyi baştan sona kendin inşa et. Soru sorma, varsayım gerektiğinde bu dosyadaki kurallara göre karar ver. Bittiğinde `npm run build` hatasız geçmeli.

---

## 0. MUTLAK KURALLAR (İHLAL EDİLEMEZ)

1. SİTENİN TÜM GÖRÜNÜR METNİ %100 HOLLANDACA (Nederlands) OLACAK. Tek kelime Türkçe veya İngilizce görünür metin OLMAYACAK. (Kod, değişken adları, yorumlar İngilizce olabilir.) Yazım hatasız, doğal, anadili Hollandaca olan bir eğitimci tarafından yazılmış gibi. "ı" gibi Türkçe karakter sızıntısı ASLA olmayacak.
2. Tasarım modern ve premium olacak. 2026 standardı: bol beyaz alan, büyük tipografi, yumuşak gölgeler, gradient accent'ler, mikro-animasyonlar. Referans kalite: linear.app, stripe.com, framer.com landing sayfaları — ama sıcak, çocuk-eğitim temasına uyarlanmış (oyuncu ama profesyonel, asla çocuksu/palyaço değil).
3. Her sayfa gerçek, dolu içerikle yazılacak. Lorem ipsum, placeholder metin, "coming soon" YASAK. İçerik bilgileri Bölüm 2'de.
4. `npm run build` sıfır hata, sıfır TypeScript hatası ile geçecek. Lighthouse hedefi: Performance 95+, SEO 100, Accessibility 95+.
5. Her görsel için Bölüm 6'daki image SEO kuralları uygulanacak.

---

## 1. TEKNİK STACK

- Next.js 15+ App Router, TypeScript, Tailwind CSS (create-next-app zaten kurulu, mevcut projede çalış)
- Animasyon: framer-motion (npm install framer-motion)
- İkonlar: lucide-react (npm install lucide-react)
- Font: next/font/google ile "Plus Jakarta Sans" (headings) + "Inter" (body). Latin subset, display: swap.
- Görseller: next/image, tüm remote görseller için next.config.ts'de images.unsplash.com remotePatterns tanımla
- Deployment hedefi: Vercel (statik/SSG, hiçbir sayfada server-side veri gerekmez)
- Form: sadece client-side görünüm + mailto/tel fallback; backend kurma. CTA butonları /contact sayfasına veya tel:+31 linkine gitsin.
- package.json script'leri değiştirme.

---

## 2. İŞLETME BİLGİLERİ (İÇERİĞİN KAYNAĞI — BUNLARI KULLAN)

- İsim: Little Engineers Academy (kısaltma: LEA)
- Ne: Çocuklar için STEM akademisi. Robotik, kodlama, mühendislik atölyeleri, yetenek analizi.
- Yaş: 3-17 (dört grup: 3-6 Kleine Uitvinders, 6-9 Jonge Makers, 9-12 Slimme Bouwers, 12-17 Toekomstige Ingenieurs)
- Lokasyonlar: Kastanjelaan 410, Office 113, 5652 LD Eindhoven ve Brouwer 1, 5521 DK Eersel
- Telefon placeholder: +31 40 123 4567 (görünür yerde kullan, sonra değiştirilecek)
- E-mail: info@littleengineersacademy.com
- Rakamlar (kanıt bandında kullan): 10+ jaar ervaring, 33.000+ kinderen begeleid, 150 scholen, 9.300+ zelfgebouwde robots, 295.000+ observatiedatapunten, 150+ workshopformats
- Pedagoji: Montessori + Waldorf + Dalton esintili, yaparak öğrenme (leren door maken). Metod adı: "De LEA Methode: Ontdekken, Maken, Meesteren" (3 aşama).
- Slogan/quotable (hero veya talent sayfasında birebir kullan): "Wij vragen niet hoe slim je kind is. Wij ontdekken hóé je kind slim is."
- İkinci motto (footer veya about'ta): "Elke vis verdient het om te zwemmen. Wij vinden zijn oceaan."
- Farklılaştırıcı: Gratis talentanalyse — atölyede gözlem yoluyla çocuğun problem çözme, konsantrasyon, yaratıcılık, işbirliği ve azim profili çıkarılır, veliye rapor verilir.
- EU güvenilirlik: Erasmus+ KA220 projesi "Brain Development, Coding and Algorithm in Early Childhood" (İsveç, Almanya, Türkiye, Hırvatistan, Portekiz, Hollanda partnerleriyle); KA210 "Inclusive Art Education"; 2022 ulusal proje yarışmasında 2.lik.
- B2B: Okullara teknik dersler (wetenschap & technologie), BSO'lara atölye programları, belediye projeleri.
- Formatlar: haftalık kurslar, workshops, vakantiekampen, kinderfeestjes (robot doğum günü partileri), proefles (ücretsiz deneme dersi).

Her sayfanın Hollandaca metnini bu bilgilerden SEN yaz. Eğitimci tonunda: sıcak, bilgili, veli endişelerini ciddiye alan, abartısız. Her sayfada en az 300-600 kelime gerçek metin olsun (kennisbank makaleleri 800+).

---

## 3. TASARIM SİSTEMİ

### Renkler (tailwind config veya CSS vars)
- Primary: indigo-600 (#4F46E5) — butonlar, linkler
- Accent gradient: indigo-600 → violet-600 → fuchsia-500 (hero başlıklarında bg-clip-text ile)
- Yaş grubu renkleri: 3-6 amber-500, 6-9 emerald-500, 9-12 sky-500, 12-17 violet-500 (kartlarda, badge'lerde tutarlı kullan)
- Nötr: slate paleti. Arka planlar: white, slate-50, gradient-to-b from-indigo-50/50
- Dark section: slate-900 (stats bandı, footer)

### Tipografi
- H1: text-5xl md:text-7xl font-extrabold tracking-tight, satır aralığı sıkı
- H2: text-3xl md:text-5xl font-bold
- Body: text-lg text-slate-600 leading-relaxed
- Eyebrow label'lar: text-sm font-semibold uppercase tracking-widest text-indigo-600

### Bileşenler (components/ altında yeniden kullanılabilir yaz)
- Navbar: sticky, blur backdrop (bg-white/80 backdrop-blur-md), logo solda, linkler ortada, sağda CTA butonu "Gratis proefles". Mobilde hamburger menü (animate açılır).
- Footer: 4 kolon (Programma's, Academie, Kennisbank, Contact+NAP her iki lokasyon), altta copyright + KvK placeholder.
- Button: primary (indigo dolu, hover'da hafif scale + shadow), secondary (outline), boyut varyantları.
- SectionHeading: eyebrow + başlık + alt açıklama, ortalanmış varyant.
- ProgramCard: yaş badge'i, ikon, başlık, açıklama, "Meer info" linki, hover'da yükselme (translate-y + shadow-xl transition).
- StatCounter: framer-motion useInView ile 0'dan sayıya animasyonlu sayan istatistik.
- TestimonialCard: alıntı, isim, rol.
- FAQAccordion: framer-motion ile açılır/kapanır, AMA içerik SEO için DOM'da her zaman render edilmiş olmalı (display toggle, conditional render değil).
- CTASection: gradient arka planlı, büyük başlık + buton, her sayfanın sonunda.
- AnimatedSection: framer-motion whileInView fade-up wrapper (tüm section'ları sar, viewport={{ once: true }}, duration 0.5, y: 24).

### Animasyon kuralları
- Sayfa girişlerinde stagger'lı fade-up (hero elemanları sırayla)
- Kartlarda hover lift, butonlarda subtle scale (1.02)
- Hero'da yavaş hareket eden dekoratif blur blob'lar (absolute, animate-pulse veya framer ile, aria-hidden)
- prefers-reduced-motion'a saygı göster
- Abartma: her şey 0.3-0.6s, ease-out. Dönen/zıplayan şeyler yok.

---

## 4. SAYFA HARİTASI VE HER SAYFANIN İÇERİĞİ

Tüm route'lar app/ altında. Her sayfada: unique metadata (title ≤60 karakter, description 140-160 karakter, Hollandaca), OG tags, canonical, JSON-LD (Bölüm 5), breadcrumb (home hariç), sonda CTASection, FAQAccordion (3-5 soru, sayfaya özgü).

### / (Homepage)
Sıra: Hero (başlık: "Waar kinderen leren denken als ingenieurs" + alt metin + 2 CTA: Gratis proefles / Ontdek onze programma's + hero görseli) → Sosyal kanıt logo/rakam şeridi → 4 yaş grubu ProgramCard grid → "De LEA Methode" 3 adım (Ontdekken/Maken/Meesteren, ikonlu, çizgiyle bağlı) → Talentanalyse teaser (quotable cümle büyük puntoyla) → Stats dark bandı (4 StatCounter) → Voor scholen & BSO bandı → 3 testimonial → Erasmus+ onderzoek bandı (EU yıldız ikonu + proje adı) → FAQ (4 soru) → CTASection.
Title: "Little Engineers Academy | STEM, Robotica & Coderen voor Kinderen"

### /programmas
Hub: giriş metni + 4 yaş grubu detaylı kart + formatlar grid'i (wekelijkse cursussen, workshops, vakantiekampen, kinderfeestjes, proefles — her biri kendi sayfasına link) + karşılaştırma tablosu (HTML table: leeftijd, groepsgrootte max 8, duur, focus).

### /programmas/kleine-uitvinders-3-6
En önemli program sayfası. İçerik: spelend leren, fijne motoriek, unplugged coderen (schermvrij!), vroege gecijferdheid, schoolrijpheid. "Wat leert je kind per leeftijd" tablosu (3/4/5-6 jaar satırları). Veli endişeleri FAQ: "Is 3 jaar niet te jong?", "Gebruiken jullie schermen?" (antwoord: nee, volledig schermvrij bij deze leeftijd), "Hoe gaan jullie om met verlegenheid?".

### /programmas/jonge-makers-6-9
ScratchJr→Scratch, eerste robots, engineering design process. Haftalık ders akışı örneği.

### /programmas/slimme-bouwers-9-12
Scratch mastery, micro:bit, 3D-ontwerp, robotica teams, wedstrijden.

### /programmas/toekomstige-ingenieurs-12-17
Python, geavanceerde robotica, portfolio projecten, profielkeuze begeleiding.

### /programmas/vakantiekampen — okul tatili kampları, dag programı örneği
### /programmas/kinderfeestjes — robot verjaardagsfeest, 2 pakket (Bouwfeest / Codefeest), süreç adımları
### /programmas/proefles — deneme dersi: ne beklemeli, 3 adımda süreç, güçlü CTA. Tüm "Gratis proefles" butonları buraya gelir.

### /talentanalyse
Flagship sayfa. Quotable cümle hero'da büyük. Ne ölçülür (5 alan: probleemoplossing, concentratie, creativiteit, samenwerking, doorzettingsvermogen — ikonlu grid), nasıl (4 adımlı süreç diyagramı: workshop → observatie → analyse → oudergesprek + rapport), 295.000 datapunt vurgusu, "geen test die je kind kan falen" güvencesi, GDPR/privacy paragrafı. FAQ: IQ-test mi değil mi (değil, farkını dürüstçe açıkla), süre, ücret (gratis), rapor içeriği.

### /methode
De LEA Methode white-paper sayfası: 3 aşama detaylı, Montessori/Waldorf/Dalton'dan ne alındığı (3 kolonlu karşılaştırma), constructionisme referansı (Seymour Papert, Mitchel Resnick — Lifelong Kindergarten'a isimle atıf), yaş adaptasyonları, değerlendirme döngüsü. En uzun metinli sayfa (1000+ kelime).

### /voor-scholen
B2B hub: basisscholen (W&T kerndoelen uyumu), BSO & kinderopvang (kant-en-klare activiteitenblokken), gemeenten (7 wijken STEAM case, Oekraïense jeugd programma). 3 alt bölüm tek sayfada, her biri kendi CTA'sı "Vraag de brochure aan" (mailto link). Referans logoları bandı.

### /onderzoek
Erasmus+ projeleri: 3 proje kartı (Brain Development Coding KA220 — partner ülkeler bayraklı liste; Inclusive Art Education KA210; ulusal yarışma 2.lik). Her projenin 150+ kelime Hollandaca özeti. "Waarom onderzoek?" paragrafı — LEA'nın veriye dayalı yaklaşımını anlatır.

### /over-ons
Hikaye + missie + tijdlijn (2016 oprichting → 2026, 5 milestone) + rakamlar (StatCounter tekrar) + "Ons team" placeholder bölümü (3 kart: rol + kısa açıklama, isimler "Ons team groeit — binnenkort stellen we ons voor" notuyla; sahte isim UYDURMA) + partner bandı.

### /ervaringen
3 uzun testimonial (mevcut sitedekilerden esinlen: bir veli çocuğunun özgüven kazanmasını, biri okulda sıkılan çocuğun burada açılmasını, biri talentanalyse deneyimini anlatsın — isimler: "Yuri, vader van Daan (8)" formatında, gerçekçi ama uydurma soyisim yok) + Google reviews CTA.

### /veelgestelde-vragen
Master FAQ: 15+ soru, 4 kategori (Aanmelden & kosten, Veiligheid & begeleiding, Programma & methode, Praktisch). Tamamı FAQPage schema'da.

### /tarieven
Dürüst fiyat yapısı (placeholder ama gerçekçi): Wekelijkse cursus vanaf €89/maand, Workshop vanaf €35, Vakantiekamp vanaf €195/week, Kinderfeestje vanaf €249, Proefles & talentanalyse gratis. "Wat is inbegrepen" listesi. Stichting Leergeld notu (düşük gelirli aileler için).

### /locaties/eindhoven ve /locaties/eersel
Her biri: adres, embedded Google Maps iframe (adresle), bereikbaarheid (auto/OV/parkeren paragrafları), openingstijden tablosu (Ma-Vr 13:00-19:00, Za 09:00-17:00 placeholder), o lokasyonun programları, service area cümlesi (Eindhoven: Veldhoven, Best, Waalre, Son en Breugel; Eersel: De Kempen, Bladel, Bergeijk, Veldhoven). LocalBusiness schema.

### /kennisbank
Hub + 6 gerçek makale. Hub'da kategori kartları. Makaleler app/kennisbank/[slug]/page.tsx statik sayfalar olarak (generateStaticParams ile veya düz klasör, sen seç):
1. /kennisbank/welke-leeftijd-leren-programmeren — "Op welke leeftijd kan een kind leren programmeren?" (yaş yaş cevap tablosuyla)
2. /kennisbank/schermvrij-coderen-kleuters — unplugged coding, 5 ev aktivitesi
3. /kennisbank/fijne-motoriek-activiteiten — motorik gelişim + 10 aktivite
4. /kennisbank/is-mijn-kind-hoogbegaafd — signalen per leeftijd, ne yapmalı
5. /kennisbank/schermtijd-per-leeftijd — consumeren vs creëren çerçevesi
6. /kennisbank/robotica-voor-kinderen-gids — complete oudergids
Her makale: 800+ kelime, ilk paragraf 40-60 kelimelik direkt cevap (AI Overview extraction için), soru formatında H2'ler, 1 tablo veya liste, Article + FAQPage schema, 2-3 iç link (ilgili program sayfasına + kardeş makaleye), sonda ilgili programa CTA.

### /contact
İki lokasyon kartı (NAP + maps linki), iletişim formu görünümü (isim/email/bericht + onderwerp dropdown: Proefles/Talentanalyse/School of BSO/Anders — submit mailto:info@... aç), telefon ve WhatsApp butonu (wa.me linki), yanıt süresi vaadi ("Binnen 1 werkdag reactie").

### Sistem dosyaları
- app/sitemap.ts: tüm route'ları listele
- app/robots.ts: allow all; GPTBot, ClaudeBot, PerplexityBot, Google-Extended açıkça allow
- public/llms.txt: organizasyon özeti (İngilizce olabilir), tüm önemli URL'ler, quotable cümle, rakamlar
- app/not-found.tsx: tasarımlı 404 (Hollandaca: "Deze pagina is nog in aanbouw — net als onze robots.")
- favicon + app/icon.tsx ile basit "LEA" harfli ikon üret

---

## 5. SEO & LLM OPTİMİZASYONU (HER SAYFADA)

### Metadata
- app/layout.tsx: metadataBase = https://littleengineersacademy.com, html lang="nl", locale nl_NL, template title "%s | Little Engineers Academy"
- Her sayfa: unique title + description Hollandaca, openGraph, canonical (alternates)

### JSON-LD (components/schemas/ altında typed component'ler, script tag dangerouslySetInnerHTML ile)
- Sitewide (layout): Organization/EducationalOrganization — name, url, logo, foundingDate 2016, sameAs boş array bırak, address her iki lokasyon
- Homepage: + WebSite
- Program sayfaları: Course (provider LEA, hasCourseInstance location'lı) 
- Talentanalyse: Service + FAQPage
- Locaties: LocalBusiness (EducationalOrganization tipi, geo koordinatlar: Eindhoven 51.4416,5.4697 civarı Kastanjelaan; Eersel 51.3583,5.3167) + openingHoursSpecification
- Kennisbank makaleleri: Article (author Organization, datePublished 2026-07, dateModified) + FAQPage
- Tarieven: Offer'lı yapı gerekmez, FAQPage yeterli
- Tüm sayfalarda BreadcrumbList
- FAQ içerikleri hem görünür DOM'da hem schema'da birebir aynı olacak

### LLM/GEO kuralları
- Her sayfanın ilk 150 kelimesi sayfanın konusunu düz dille tanımlar (kim, ne, kime, nerede)
- H2'ler veli sorusu formatında ("Vanaf welke leeftijd kan mijn kind starten?")
- Karşılaştırma ve yaş bilgileri HTML table olarak (div-grid değil)
- Quotable cümleler blockquote ile işaretli
- Internal linking: her sayfadan en az 3 kontekstüel iç link (anchor text açıklayıcı, "klik hier" yasak)

---

## 6. GÖRSELLER (IMAGE SEO)

Unsplash'in doğrudan CDN URL'lerini kullan (images.unsplash.com — ücretsiz lisans, hotlink destekli, yüksek çözünürlük). next/image ile, her görselde:
- alt: Hollandaca, açıklayıcı, 80-125 karakter (örn: "Kinderen bouwen samen een robot tijdens een LEA workshop")
- sizes prop doğru, hero'larda priority, diğerlerinde lazy (default)
- quality 80-85

Şu tarz Unsplash fotoğrafları seç (URL'leri kendin belirle, source.unsplash yerine bilinen photo ID'li images.unsplash.com/photo-... URL'leri kullan; çalıştığını varsayamıyorsan next.config remotePatterns'i doğru kur ve genel geçer, konuya uygun fotoğraflar seç):
- Hero: çocuklar LEGO/robot/elektronikle çalışırken, doğal ışık
- 3-6: küçük çocuk ahşap bloklarla/duyusal oyunla
- 6-9: çocuk bilgisayarda Scratch benzeri renkli ekran veya robot montajı
- 9-12: micro:bit/devre kartı yakın çekim, çocuk elleri
- 12-17: genç kod yazarken / 3D printer
- Talentanalyse: konsantre olmuş çocuk yüzü profili / puzzle çözen eller
- Voor scholen: sınıf ortamı, öğretmen + çocuklar
- Kennisbank makaleleri: her birine konuya uygun 1 featured görsel
Dekoratif görsellerde alt="" + aria-hidden. Görsel bulunamayan yerde gradient placeholder div kullan (kırık resim ikonu ASLA görünmesin).

---

## 7. UYGULAMA SIRASI (KENDİN TAKİP ET)

1. npm install framer-motion lucide-react
2. next.config.ts: unsplash remotePatterns
3. layout.tsx: fontlar, metadata base, Organization schema, Navbar + Footer
4. Tasarım sistemi component'leri (Bölüm 3'teki liste)
5. Schema component'leri
6. Homepage
7. Programma sayfaları (hub + 4 yaş + 3 format + proefles)
8. Talentanalyse, Methode
9. Voor-scholen, Onderzoek, Over-ons, Ervaringen
10. Tarieven, FAQ, Locaties ×2, Contact
11. Kennisbank hub + 6 makale
12. sitemap.ts, robots.ts, llms.txt, 404, icon
13. `npm run build` çalıştır, TÜM hataları düzelt, sonra bitir.

## 8. BİTİŞ KONTROLÜ
- [ ] Görünür her metin Hollandaca ve hatasız
- [ ] 25+ sayfa route çalışıyor
- [ ] Her sayfada unique metadata + JSON-LD + FAQ
- [ ] Navbar/Footer'daki her link gerçek bir sayfaya gidiyor (ölü link yok)
- [ ] Animasyonlar akıcı, mobilde her sayfa düzgün (375px test)
- [ ] build temiz geçiyor
