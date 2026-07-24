# CLAUDE CODE GÜNCELLEME BRIEF v3 — Little Engineers Academy

Bu dosyayı oku ve A'dan E'ye kadar 5 maddeyi sırayla, ARA VERMEDEN, onay sormadan uygula. Her madde bitince ilgili build/lint kontrolünü kendin yap ve hatasız hale getir. Tüm işler bitince en son tek seferde `npm run build` çalıştır, hatasız geçene kadar düzelt. En sonda bana localde hangi URL'lere gidip neyi kontrol edeceğimi maddeler halinde özetle.

---

## A — GALERİ SAYFASI (/galerij)

Modern, animasyonlu bir masonry/grid galeri sayfası oluştur.

- Route: app/(routes)/galerij/page.tsx
- Görsel kaynağı: content/gallery/images.ts adında bir data dosyası oluştur, görsel listesini oradan çeksin (hardcode etme, tek yerden yönetilsin)
- Bu data dosyasında her görsel için: `{ src, alt, category, width, height }` yapısı olsun. Kategori örnekleri: "workshops", "robotica", "vakantiekamp", "kinderfeestje", "locaties"
- ŞİMDİLİK yer tutucu olarak Unsplash'ten STEM/çocuk/atölye temalı 12-16 örnek görsel kullan (images.unsplash.com üzerinden, next/image ile, gerçek çalışan URL'ler)
- Galeri özellikleri:
  - Masonry veya responsive grid layout (kartlar farklı yüksekliklerde olabilir, Pinterest tarzı)
  - Kategori filtre butonları üstte (Alle / Workshops / Robotica / Vakantiekamp / Kinderfeestje / Locaties) — tıklanınca framer-motion layout animasyonuyla filtrelenmiş görseller yeniden dizilsin (AnimatePresence + layout prop)
  - Görsele hover'da hafif zoom + overlay (alt text/başlık görünür)
  - Görsele tıklayınca lightbox açılsın (büyük görsel, ok tuşlarıyla ileri/geri, ESC ile kapat, framer-motion fade+scale ile açılış animasyonu) — harici paket kurmadan kendi basit lightbox component'ini yaz
  - Sayfa girişinde görseller stagger'lı fade-up ile belirsin
  - Mobilde tek kolon, tablet 2 kolon, desktop 3-4 kolon

### Kullanıcının kendi görsellerini ekleyebilmesi için

`content/gallery/images.ts` dosyasının en üstüne büyük bir yorum bloğu ekle, şunu açıkça anlat (Türkçe yaz bu yorumu, çünkü site sahibi için talimat):

```
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
 */
```

Ayrıca proje kök dizininde `GORSEL-EKLEME-TALIMATI.md` adında ayrı bir dosya da oluştur, aynı talimatı biraz daha detaylı, örnekli şekilde tekrarla — kullanıcı kod açmadan sadece bu dosyayı okusun yeterli olsun.

- Sayfa metadata + JSON-LD ImageObject listesi + Hollandaca başlık/açıklama ekle ("Galerij | Little Engineers Academy")
- Navbar ve footer'a /galerij linkini ekle

---

## B — SOSYAL MEDYA İKONLARI (Header veya Footer)

- lucide-react'te Instagram ve Youtube ikonları var, onları kullan
- Footer'a (tercihen, header kalabalıklaşmasın) bir sosyal medya satırı ekle: Instagram + YouTube ikonları, yan yana, hover'da renk geçişi/scale animasyonu
- Linkler:
  - Instagram: https://www.instagram.com/little_engineers_academy/
  - YouTube: https://www.youtube.com/@kucukmuhendisleratolyesi4776
- `target="_blank" rel="noopener noreferrer"` ekle
- Bu linkleri de lib/constants.ts içine sabit olarak tanımla (SOCIAL_LINKS objesi), footer component'i oradan çeksin
- Organization JSON-LD schema'daki `sameAs` array'ine bu iki linki de ekle (şu ana kadar boştu, doldur)

---

## C — STICKY WHATSAPP BUTONU

- Tüm sitede, tüm sayfalarda sağ alt köşede sabit (fixed position, z-index yüksek) yeşil yuvarlak WhatsApp butonu
- lucide-react'te whatsapp ikonu yoksa basit bir SVG ikon kullan veya `MessageCircle` ikonunu WhatsApp yeşiliyle (#25D366) kullan
- Link: `https://wa.me/31685485534` (numarayı uluslararası formatta, boşluksuz, + işaretsiz yaz: 31685485534)
- Tıklanınca yeni sekmede WhatsApp'a yönlendirsin
- Hover'da hafif scale + gölge büyümesi animasyonu, sayfa yüklenirken hafif bounce-in animasyonu (framer-motion)
- Mobilde de görünür olsun ama sayfa içeriğini kapatmayacak şekilde konumlandır (sağ alt, örn. bottom-6 right-6, mobilde bottom-4 right-4)
- Bunu app/layout.tsx içine, tüm sayfalarda görünecek şekilde global component olarak ekle (components/StickyWhatsApp.tsx oluştur)
- Numarayı lib/constants.ts içine sabit tanımla (WHATSAPP_NUMBER)

---

## D — "HOE MAAK JE HET" SAYFASI (/hoe-maak-je-het)

Yeni sayfa: DIY/maker projelerini YouTube videolarına yönlendiren bir galeri/liste sayfası.

- Route: app/(routes)/hoe-maak-je-het/page.tsx
- Başlık (Hollandaca): "Hoe Maak Je Het? — Bouw Zelf Deze STEM Projecten"
- Giriş metni (100-150 kelime, Hollandaca): bu projelerin geri dönüştürülmüş malzemelerle evde/atölyede yapılabilecek STEM projeleri olduğunu, LEA'nın felsefesiyle (yaparak öğrenme) bağlantısını anlat
- Her video için bir kart: thumbnail (YouTube video ID'sinden otomatik thumbnail çek: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`), başlık (Hollandaca başlığı öne çıkar), kategori badge'i (MAKER / STEM / MAKER STEM), tıklanınca yeni sekmede YouTube linkine gitsin
- Kart hover'da play ikonu overlay + hafif zoom animasyonu
- Grid layout: mobilde 1, tablet 2, desktop 3 kolon, stagger fade-up giriş animasyonu

İçerik listesi (data dosyası: content/how-to-make/projects.ts içinde tanımla, video ID'lerini URL'lerden kendin çıkar):

1. Titel: "Hoe maak je een vliegtuig dat echt vliegt?" — Kategori: MAKER STEM — Açıklama: geri dönüştürülmüş malzemelerle gerçekten uçan bir uçak yapımı — YouTube: https://www.youtube.com/watch?v=RcbjPoeJVMc
2. Titel: "Windmolen bouwen: hernieuwbare energie voor kinderen" — Kategori: MAKER STEM — YouTube: https://www.youtube.com/watch?v=p58fj4VdFCs
3. Titel: "Bouw je eigen motorfiets — STEM voor kinderen" — Kategori: STEM — YouTube: https://www.youtube.com/watch?v=aif1gu061PQ
4. Titel: "Bouw een snelle raceauto van gerecyclede materialen" — Kategori: MAKER — YouTube: https://www.youtube.com/watch?v=piTmKZ6hR6I
5. Titel: "Bouw je eigen mini-schip van gerecycled materiaal" — Kategori: MAKER — YouTube: https://www.youtube.com/watch?v=IkcaPWvElrg
6. Titel: "Bouw een kruipende spinrobot" — Kategori: STEM MAKER — YouTube: https://www.youtube.com/watch?v=HKZknC-JbBY
7. Titel: "Bouw een snelle Formule 1-auto" — Kategori: STEM MAKER — YouTube: https://www.youtube.com/watch?v=CinqhfdyX84
8. Titel: "Maak je eigen tractor van gerecycled materiaal" — Kategori: STEM MAKER — YouTube: https://www.youtube.com/watch?v=CyzTa8fRzxc
9. Titel: "Maak een schildermachine met een draaitafel" — Kategori: STEM MAKER — YouTube: https://www.youtube.com/watch?v=Xs5ZhP4yjxc
10. Titel: "Maak een insectenrobot die met zijn poten beweegt" — Kategori: STEM MAKER — YouTube: https://www.youtube.com/watch?v=nYtdG3nOwSM

- Sayfa metadata + JSON-LD: her video için VideoObject schema (name, thumbnailUrl, embedUrl, description Hollandaca 1-2 cümle) + sayfa için CollectionPage schema
- Navbar ve footer'a /hoe-maak-je-het linkini ekle (Kennisbank yakınına koyabilirsin)
- Kennisbank makalelerinden bazılarına (özellikle robotica/maker konulu olanlara) bu sayfaya 1 iç link ekle

---

## E — BLOG/MAKALE SAYISI VE UZUNLUĞUNU ARTIRMA

Önceki brief'te 24 makaleye çıkarma talimatı verilmişti — eğer o adım tamamlanmadıysa veya makaleler hâlâ kısaysa, şimdi kesin olarak şunu uygula:

### E.1 Uzunluk
Her kennisbank makalesi 2000-2800 kelime aralığında olacak (Google'ın bilgi-yoğun/YMYL-yakın sağlık-gelişim içeriğinde iyi performans gösteren rakip içeriklerin ortalama uzunluğu bu aralıkta). Yüzeysel doldurma yasak, her paragraf gerçek bilgi taşımalı.

Her makale zorunlu iskelet:
- Giriş: 60-80 kelimelik direkt cevap (LLM/AI Overview extraction için ilk paragrafta soru direkt yanıtlanır)
- 6-9 H2 alt başlık, soru formatında ("Vanaf welke leeftijd kan een kind..." gibi), her biri 250-400 kelime
- En az 2 tablo veya karşılaştırma (HTML table, örn. yaşa göre gelişim tablosu)
- En az 1 numaralı liste/checklist
- "Wat wij bij LEA zien" pratik gözlem kutusu (150-200 kelime, gerçekçi anlatım)
- 5-6 SSS (FAQ, schema'ya da yansıtılacak)
- "Verder lezen" bölümü: 3 iç link (kardeş makaleler + ilgili program sayfası)

### E.2 Sayı
Toplamda en az 30 makale olacak (önceki 24'lük listeye ek olarak 6 makale daha ekle, aşağıdaki yeni konularla):

25. "Wat is executieve functie en waarom is het belangrijker dan IQ?"
26. "Buitenspelen en hersenontwikkeling: waarom risicovol spel slim maakt"
27. "Ruimtelijk inzicht bij kinderen: de onderschatte vaardigheid achter wiskunde"
28. "Motivatie bij kinderen: waarom belonen vaak averechts werkt"
29. "STEM-cadeaus per leeftijd: een koopgids voor ouders"
30. "Van speelgoed naar prototype: wat leert reverse engineering kinderen"

### E.3 Anahtar kelime stratejisi (Hollanda'da veliler ve LLM/Google araması için)
Her makale, konusuna uygun olarak şu havuzdan doğal biçimde (mekanik tekrar değil, cümle içine organik yedirilmiş) 10-15 terim kullansın:

Ana havuz: robotica voor kinderen, programmeren leren kind, STEM onderwijs kinderen, coderen voor kinderen, talentontwikkeling kind, hersenontwikkeling kinderen, hersenontwikkeling 0-6 jaar, fijne motoriek ontwikkelen, grove motoriek kinderen, schoolrijpheid checklist, hoogbegaafd kind signalen, schermtijd kinderen richtlijn, technieklessen kinderen, naschoolse activiteiten kinderen, kinderfeestje robot, vakantiekamp techniek, groeimindset kinderen, 21e eeuwse vaardigheden, neurodiversiteit kinderen, meervoudige intelligentie Gardner, STEAM onderwijs, maker education, engineering voor kinderen, executieve functies kinderen, werkgeheugen kinderen, concentratie kleuters, probleemoplossend vermogen, zelfvertrouwen kinderen, doorzettingsvermogen kind, Eindhoven kinderactiviteiten, Brainport onderwijs, kleuters leren spelenderwijs, unplugged coderen, screen time kinderen Nederland, kind leert programmeren welke leeftijd.

Bu terimler her makalenin H1/H2 başlıklarına, giriş paragrafına ve meta description'ına da doğal şekilde dağıtılsın (keyword stuffing değil, gerçek cümle akışı içinde).

### E.4 Uygulama notu
Bu iş en uzun süren adım. Sırayla: önce mevcut kısa makaleleri 2000+ kelimeye genişlet, sonra eksik olan 25-30 arası yeni makaleleri yaz. Her makale bittiğinde bir sonrakine geç, hepsini aynı kalitede tut.

---

## SIRALAMA VE BİTİŞ

Sıra: A → B → C → D → E (E en uzun sürer, en sona bırakıldı ama atlanmayacak).

Hiçbir adımda onay sorma, hepsini tek seferde tamamla. Sadece gerçekten çözülemeyen bir teknik hata olursa (örn. paket kurulamıyor) o zaman durup bana bildir.

En sonda `npm run build` çalıştır, hatasız geçtiğinden emin ol, sonra `npm run dev` ile local sunucuyu başlat ve bana şu formatta bir özet ver:

- Kontrol edilecek URL listesi (localhost:3000/... formatında, her yeni/değişen sayfa için)
- Görsel eklemem gereken klasör yolu ve dosya adlandırma kuralı (Madde A'dan)
- Toplam kaç makale yazıldığı ve ortalama kelime sayısı
- Değiştirdiğin/eklediğin dosyaların kısa listesi
