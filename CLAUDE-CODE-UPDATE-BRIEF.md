# CLAUDE CODE GÜNCELLEME BRIEF — Little Engineers Academy v2

Bu dosya mevcut siteyi düzeltmek ve genişletmek için. Önceki CLAUDE-CODE-BRIEF.md'nin üzerine bunu uygula. Aşağıdaki 5 sorunu sırayla çöz. Her adım bitince `npm run build` çalıştır, hata varsa düzelt, sonra sıradakine geç.

---

## SORUN 1 — DİL: SADECE HOLLANDACA OLACAK

Site şu an İngilizce çıkmış. Bunu düzelt: siteye giren HER metni Hollandaca'ya çevir. İngilizce hiçbir görünür metin kalmayacak (kod/yorum/değişken adı hariç). İkinci dil şimdilik AÇMA — tek dilli site, /en/ route'u yok, dil değiştirici yok. Sebep: hedef kitle (Hollandalı veliler, okullar, belediyeler) için karışık dil hem SEO'yu zayıflatır hem güven kırar. html lang="nl" olarak kalsın, tüm metadata Hollandaca yazılsın.

Mevcut tüm sayfaları tara, İngilizce kalan her cümleyi, buton metnini, meta description'ı, alt text'i, schema içindeki description alanlarını Hollandaca'ya çevir.

---

## SORUN 2 — MAKALELER ÇOK KISA, TOPİK OTORİTESİ YOK

Mevcut kennisbank makaleleri yetersiz derinlikte. Google'da "topic expert" olarak görünmek ve LLM'ler tarafından kaynak gösterilmek asıl hedef. Bunun için:

### 2.1 Makale uzunluğu
Her makale minimum 1800, ideal 2200-2800 kelime olacak (mevcut 800 kelimelik hedefi unut, çok düşükmüş). Yüzeysel doldurma değil, gerçek derinlik: alt başlıklar, tablolar, listeler, örnekler, adım adım açıklamalar.

Her makale şu iskeleti takip etsin:
- Giriş: 60-80 kelimelik direkt cevap paragrafı (soruyu hemen yanıtla, AI Overview/LLM extraction için)
- 5-8 H2 alt başlık, her biri soru formatında, her biri 200-400 kelime
- En az 1 karşılaştırma/veri tablosu (HTML table)
- En az 1 numaralı liste veya checklist
- "Praktijkvoorbeeld" veya "Wat wij bij LEA zien" kutusu (gerçekçi gözlem/deneyim anlatımı)
- 3-5 SSS (FAQ), schema'ya da yansıyacak
- Sonda ilgili programa CTA + 2-3 iç link (kardeş makale + program sayfası)

### 2.2 Makale sayısını artır
6 makale yetersiz. Şu 24 makaleye çıkar (6 kategori × 4 makale), her biri anahtar kelime havuzundan doğal şekilde besleniyor:

**Kategori: Hersenontwikkeling & Vroege Jaren**
1. Op welke leeftijd kan een kind leren programmeren? (mevcut, uzat)
2. Schermvrij coderen: unplugged activiteiten voor kleuters (mevcut, uzat)
3. Fijne motoriek ontwikkelen: van bouwblokken tot schroevendraaier (mevcut, uzat)
4. Hersenontwikkeling 0-6 jaar: wat elke ouder moet weten (yeni)

**Kategori: Robotica & Techniek**
5. Robotica voor kinderen: de complete gids (mevcut, uzat)
6. Wat is STEM/STEAM onderwijs en waarom is het belangrijk? (yeni)
7. Van Scratch naar Python: de programmeerladder per leeftijd (yeni)
8. micro:bit en Arduino voor kinderen: waar begin je? (yeni)

**Kategori: Talent & Ontwikkeling**
9. Is mijn kind hoogbegaafd? Signalen per leeftijd (mevcut, uzat)
10. Meervoudige intelligentie: waarom "hoe slim" de verkeerde vraag is (yeni)
11. Neurodiversiteit en talent: ADHD en autisme als kracht, niet beperking (yeni — Sorun 4'teki sosyal etki içeriğiyle bağlantılı)
12. Growth mindset bij kinderen: hoe bouw je doorzettingsvermogen op (yeni)

**Kategori: Schermtijd & Digitale Opvoeding**
13. Schermtijd per leeftijd: een realistische richtlijn (mevcut, uzat)
14. Consumeren vs creëren: de enige schermtijd-vraag die ertoe doet (yeni)
15. Gamen en leren: wanneer is het gezond, wanneer niet? (yeni)
16. AI en kinderen: hoe leg je ChatGPT uit aan een 8-jarige? (yeni)

**Kategori: Schoolkeuze & Praktisch**
17. Schoolrijpheid checklist: is mijn kind klaar voor groep 3? (yeni)
18. Naschoolse activiteiten kiezen: STEM, sport of muziek? (yeni)
19. Wat kost een STEM-cursus voor kinderen? Een eerlijk overzicht (yeni)
20. 10 vragen die je moet stellen voordat je een cursus kiest (yeni)

**Kategori: Toekomstvaardigheden**
21. 21e-eeuwse vaardigheden: wat moet mijn kind echt leren? (yeni)
22. Welke banen bestaan over 15 jaar nog? Kinderen voorbereiden op de toekomst (yeni)
23. Meisjes en techniek: hoe stimuleer je interesse in STEM? (yeni)
24. Van hobby naar carrière: techniekberoepen uitgelegd aan kinderen (yeni)

### 2.3 Anahtar kelime havuzu (doğal entegre et, ASLA stuffing yapma)
robotica voor kinderen, programmeren leren kind, STEM onderwijs, coderen kinderen, talentontwikkeling kind, hersenontwikkeling kinderen, fijne motoriek, schoolrijpheid, hoogbegaafd kind, schermtijd kinderen, technieklessen, naschoolse activiteiten, kinderfeestje robot, vakantiekamp techniek, groeimindset, 21e eeuwse vaardigheden, neurodiversiteit, meervoudige intelligentie, STEAM onderwijs, maker education, engineering voor kinderen, Eindhoven kinderactiviteiten, Brainport, kleuters leren, executieve functies.

Her makale kendi konusuna uygun 8-15 terimi doğal cümleler içinde kullansın, listeyi mekanik doldurma değil.

### 2.4 Kennisbank hub sayfası
/kennisbank hub'ını 6 kategori kartına göre yeniden düzenle, her kategori kendi altında 4 makaleyi listelesin, kategori açıklaması 100-150 kelime.

---

## SORUN 3 — İSTATİSTİK SAYAÇLARI ÇALIŞMIYOR

StatCounter component'i animasyonu tetiklemiyor. Kontrol et ve düzelt:
- framer-motion `useInView` hook'u doğru ref'e bağlı mı kontrol et
- `once: true` ve uygun `margin`/`threshold` değeri ile viewport tespiti garantiye al
- Sayı animasyonu için `useMotionValue` + `useTransform` veya basit `useEffect` + `setInterval` ile 0'dan hedef değere say (1200-1600ms süre, ease-out)
- Component client component olmalı (`"use client"` directive eksikse ekle)
- Test: sayfa yenilendiğinde stats bandına scroll edildiğinde sayılar 0'dan başlayıp hedefe ulaşmalı, sayfa ilk yüklendiğinde (viewport dışındaysa) hemen saymamalı

---

## SORUN 4 — RANDEVU SİSTEMİ EKSİK (ÖNEMLİ, DAHA ÖNCE ATLANDI)

Şu an CTA butonları sadece mailto/tel'e gidiyor. Gerçek bir randevu alma deneyimi lazım.

### 4.1 Calendly entegrasyonu (backend kurmadan en hızlı çözüm)
- Calendly inline embed widget kullan (react-calendly paketi: `npm install react-calendly`)
- Placeholder Calendly URL kullan: `https://calendly.com/lea-academy/proefles` — gerçek hesap açılınca değiştirilecek şekilde tek bir constants dosyasında (lib/constants.ts) tanımla, hardcode etme
- İki ayrı randevu tipi/URL placeholder'ı: `CALENDLY_URL_PROEFLES` (veliler için deneme dersi/talent analizi) ve `CALENDLY_URL_SCHOOL` (okul/belediye/kurumsal ziyaret için)
- Embed'i modal içinde aç (buton tıklanınca popup/dialog, sayfa yönlendirmesi değil) — react-calendly'nin `PopupWidget` veya `InlineWidget` kullan, modal versiyonu tercih et
- Randevu widget'ı /programmas/proefles sayfasında inline olarak da gömülü dursun (sayfanın en altında, büyük başlıkla: "Plan direct je gratis proefles")

### 4.2 Randevu CTA'larının ayrımı (4 hedef kitleye göre)
Sitede artık TEK bir CTA yerine 2 net CTA tipi olacak, her yerde doğru olanı kullan:
- **Veliler için:** "Gratis proefles boeken" → Calendly proefles popup
- **Okul/Belediye/AB için:** "Vraag een samenwerking aan" → ayrı bir form sayfasına gider (aşağıda 5.4) veya Calendly school popup

### 4.3 Navbar CTA güncelle
Navbar'daki tek CTA butonunu ikiye çıkar (masaüstünde): "Voor scholen" (outline, küçük) + "Gratis proefles" (dolu, öne çıkan). Mobilde hamburger menüde ikisi de görünsün.

---

## SORUN 5 — YENİ İÇERİK YAPISI: 4 HEDEF KİTLE + YENİ SAYFALAR

Aşağıdaki içerik doğrultusunda mevcut yapıyı genişlet. Rakamları (64 parametre, 300.000 veri noktası, 200+ atölye, 12+ ülke, 150+ kurumsal ortak, 10.000+ mezun) SİTE GENELİNDE TUTARLI kullan — StatCounter'larda, hero'da, ilgili sayfalarda hep aynı sayılar geçsin, çelişki olmasın.

### 5.1 Homepage güncelleme
- H1'i değiştir: "Van passieve consumenten naar de actieve makers van morgen." (Hollandaca çeviri, orijinal Türkçe'nin anlamını koru)
- Alt başlık: "Vanuit Brainport Eindhoven biedt LEA voor kinderen van 3 tot 17 jaar 200+ originele engineering-workshops — 80% schermvrij — en een wetenschappelijke talentanalyse op basis van 64 parameters."
- Stats bandını güncelle: 12+ Landen | 150+ Partnerorganisaties | 10.000+ Afgestudeerde Leerlingen | 300.000+ Geanalyseerde Datapunten
- İki CTA buton: "Boek een gratis proefles" (dolu, veliler için) + "Vraag samenwerking aan" (outline, kurumsal için)
- Yeni bölüm ekle: "Wat kan een LEA-leerling?" — Türkçe paragrafın Hollandaca çevirisini bu bölümde büyük, görsel destekli şekilde kullan (aşağıda 5.5'te tam metin var). Bu bölüm homepage'de hero'dan hemen sonra VEYA program kartlarından hemen sonra, göze çarpan bir yerde olacak.
- Yeni bölüm: 4 hedef kitle seçici (kart grid: Ouders / Scholen / Gemeenten / EU & Techpartners), her kart kendi sayfasına link veriyor

### 5.2 /talentanalyse sayfasını "TalentLAB" olarak güçlendir
- Sayfa başlığını güçlendir: "TalentLAB: Wetenschappelijke Talentanalyse op 64 Parameters"
- Süreç açıklaması ekle: workshoplar sıradan oyun alanı değil, sürekli zorlaşan, çocuğun kendi motivasyonuyla ilerlediği bir kurgu; mühendisler arka planda her davranışı değerlendiriyor (Hollandaca çevirisiyle)
- Büyük vaat cümlesi: "Aan het einde ontvangt u een uitgebreid ontwikkelingsrapport dat laat zien waarin uw kind uitblinkt, waar het zelfvertrouwen het grootst is, en hoe u het beschermt tegen manipulatie." (Hollandaca)
- 64 parametrenin nasıl çalıştığını gösteren bir infografik/grafik bölümü (gerçek 64 madde listeleme, 8 kategori × 8 alt parametre gibi mantıklı bir gruplama kurgula: örn. probleemoplossing (8), creativiteit (8), samenwerking (8), concentratie (8), motoriek (8), taal (8), zelfvertrouwen (8), doorzettingsvermogen (8))
- Örnek rapor görseli/mock-up bölümü
- Sayfanın altına Calendly proefles/analiz randevu widget'ı göm

### 5.3 Yeni sayfa: /sociale-impact (Sosyal Etki ve Kapsayıcılık)
Belediyeler ve AB kurumları için kritik sayfa. İçerik:
- Nöroçeşitlilik bölümü: "Neurodiversiteit (Autisme & ADHD)" — mental zorluk yaşayan çocukların güçlü yönlerini tespit ettiklerini, özgüvenle topluma kazandırdıklarını anlat
- Mülteci & göçmen programları bölümü: dil bariyeri olmadan el becerisine dayalı yetenek keşfi
- Uluslararası TalentLAB bölümü: farklı ülkelerden öğrencilerin potansiyelini haritalama, yerel adaptasyonu hızlandırma
- Her bölüm 250-350 kelime, gerçekçi ve saygılı bir dille (istismarcı/abartılı pazarlama dili değil — bu hassas bir konu, samimi ve kanıta dayalı ton kullan)

### 5.4 Yeni sayfa: /voor-scholen genişlet + /voor-gemeenten ayır
Mevcut /voor-scholen sayfasını sadece okullara odakla:
- Okul içi STEAM/maker alanları kurulumu
- Müfredat destekleri (W&T kerndoelen)
- %90 özgün, başka yerde bulunmayan hands-on içerik vurgusu
- CTA: "Vraag een schoolbezoek aan" → kurumsal randevu formu/Calendly

Yeni ayrı sayfa /voor-gemeenten oluştur (belediyeler için):
- "Talentanalyse Centra" kurulum modeli anlatımı
- Yerel genç istihdamını artırma, kalkınma odaklı merkez konsepti
- Sosyal etki verileriyle bağlantı (5.3'e link)
- CTA: "Vraag een gesprek aan" → kurumsal randevu formu

Kurumsal randevu formu: basit bir sayfa/bölüm, alanlar: Organisatie, Contactpersoon, E-mail, Type samenwerking (dropdown: School / Gemeente / EU-project / Anders), Bericht. Submit → mailto fallback (backend yok).

### 5.5 Yeni sayfa: /eu-projecten (AB Projeleri & Horizon)
Mevcut /onderzoek sayfasını bu içerikle genişlet veya ayrı sayfa yap:
- "Wie zijn wij?" — Brainport Eindhoven ekosisteminde konumlanmış güçlü teknoloji ve saha ortağı olarak tanıt
- "Onze rol in consortia" — proje çıktılarını sahaya yansıtma, gamification, mobil uygulama geliştirme, akademik veriyi pratik çıktıya dönüştürme yetkinliği
- Erasmus+ mevcut projeler (KA220, KA210) + Horizon/CERV/CREA'ya açık olduğunu belirt
- CTA: "Vraag een partnerschapsvoorstel aan" → ayrı, AB koordinatörlerine özel form (Organisatie, Land, Project/Call referentie, Bericht alanları)

### 5.6 "Wat kan een LEA-leerling?" tam metin (Hollandaca çeviri — bunu kullan)
Bu paragrafı homepage'de VE /methode sayfasında (görünür, öne çıkan bir kutuda, büyük punto veya alıntı stiliyle) kullan:

"Bij Little Engineers Academy luisteren kinderen niet alleen naar theorie — zij zetten hun ideeën om in tastbare, werkende creaties. Onze leerlingen kunnen met één enkele motor 40 verschillende robots ontwerpen, hun eigen animaties maken en hun eigen digitale spellen programmeren. Ze bouwen niet alleen hun eigen speelgoedauto's, maar ook echte elektrische voertuigen waar ze zelf veilig op kunnen rijden. De werkende mechanische modellen van kranen, graafmachines, vliegtuigen en helikopters die ze om zich heen zien; hydraulische bruggen en bewegende dierfiguren — ze bouwen het allemaal vanaf nul. Ze bereiken zelfs de technische vaardigheid en het unieke creatieve zelfvertrouwen om een werkende klok, een nachtlampje of een origineel, op engineering gebaseerd cadeau voor Moederdag of Vaderdag te ontwerpen voor hun eigen kamer."

Bu paragraf hem velilere hem okullara hem belediyelere "çocuğum/öğrencilerim burada tam olarak ne kazanacak" sorusunun en somut cevabı, o yüzden gizli kalmasın — homepage'de göze çarpan, görsel destekli (mümkünse ilgili görsellerle: robot, araç, köprü maketi fotoğrafları) bir bölüm olsun.

### 5.7 Navbar & sitemap güncelle
Yeni sayfaları navbar'a ve footer'a ekle: Talentanalyse (TalentLAB olarak), Voor scholen, Voor gemeenten, EU-projecten, Sociale impact. Navbar kalabalıklaşırsa "Voor organisaties" dropdown'ı altında Scholen/Gemeenten/EU-projecten/Sociale impact grupla. app/sitemap.ts'i yeni route'larla güncelle.

---

## UYGULAMA SIRASI

1. Sorun 1 (dil) — tüm siteyi tara, İngilizce'yi temizle
2. Sorun 3 (sayaç animasyonu) — hızlı teknik düzeltme
3. Sorun 4 (Calendly randevu sistemi) — react-calendly kur, constants dosyası, modal component, tüm CTA'ları bağla
4. Sorun 5 (yeni sayfalar ve homepage güncellemesi) — sırayla 5.1'den 5.7'ye
5. Sorun 2 (makale genişletme ve çoğaltma) — en son, en uzun süren iş; önce mevcut 6 makaleyi uzat, sonra yeni 18 makaleyi ekle
6. `npm run build` — sıfır hata

## BİTİŞ KONTROLÜ
- [ ] Sitede tek bir İngilizce kelime yok, html lang="nl"
- [ ] 24 kennisbank makalesi, her biri 1800+ kelime, tablo+liste+FAQ içeriyor
- [ ] Stats sayaçları scroll ile tetiklenip 0'dan hedefe animasyonlu sayıyor
- [ ] Calendly randevu widget'ı çalışıyor (proefles + school ayrı URL'ler, constants dosyasında)
- [ ] /sociale-impact, /voor-gemeenten, /eu-projecten sayfaları canlı ve navbar'da
- [ ] "Wat kan een LEA-leerling?" paragrafı homepage + methode sayfasında görünür
- [ ] Tüm rakamlar (64 parametre, 300.000 veri noktası, 200+ atölye, 12+ ülke, 150+ ortak, 10.000+ mezun) site genelinde tutarlı
- [ ] build hatasız geçiyor
