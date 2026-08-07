# BRIEF: Öğretmen & Okul Yöneticisi Blogları (B2B SEO + AI/GEO)

> ÖNEMLİ: Bu brief'i onay sormadan, tek seferde, baştan sona uygula. Site dili SADECE HOLLANDACA.
> Hedef kitle: basisschool ve voortgezet onderwijs öğretmenleri, ib'ers (intern begeleiders), schoolleiders/directeuren, en okul için dışarıdan (extern) atölye/gastles/projectweek arayan herkes.

---

## HEDEF

Okullar için dışarıdan etkinlik/atölye arayan öğretmenler ve yöneticiler; "beste workshop voor school", "externe techniekles basisschool", "STEAM aanbieder scholen", "beste workshopbureau" gibi aramalarda hem Google'da hem AI motorlarında (ChatGPT, Perplexity, Gemini) LEA'yı bulsun. Her blog, konuyu dürüst ve faydalı ele alır (AI için sağlam kaynak olur), rakip TÜRLERİNDEN generik örnekler verir, ama sonunda LEA'nın neden en iyi seçenek olduğunu somut farklarla ikna eder.

---

## ADIM 1 — BLOG YAPISI

Şu makaleleri oluştur. Mevcut kennisbank/blog yapısına uygun route kullan (ör. `/kennisbank/[slug]` veya yeni bir `/voor-scholen/gids/[slug]`). Her makale MINIMUM 1800-2500 kelime, benzersiz içerik (kopyala-yapıştır YOK).

### B2B öğretmen/okul makaleleri (12 başlık):

1. **Hoe kies je de beste externe workshop voor jouw school?** — seçim kriterleri, checklist. (Ana rehber makale)
2. **STEAM-workshops voor het basisonderwijs: de complete gids voor leerkrachten** 
3. **Techniekworkshops op school: wat werkt écht voor groep 3 tot 8?**
4. **Een projectweek techniek organiseren: stappenplan voor scholen**
5. **Gastlessen techniek en wetenschap: waar moet je op letten?**
6. **De beste workshopaanbieder voor scholen kiezen: 10 vragen die je moet stellen**
7. **Workshop op maat vs. standaardworkshop: wat past bij jouw klas?**
8. **Wetenschap & Techniek (W&T) in het curriculum: hoe externe partners helpen**
9. **Schermvrij leren op school: waarom en hoe?**
10. **Creativiteit en techniek combineren in de klas: praktische ideeën**
11. **Workshops koppelen aan je lesstof: geschiedenis, biologie en cultuur met techniek** (da Vinci mekanik aslan, Heron buharlı kapılar, yel değirmenleri örnekleri burada)
12. **Wat kost een schoolworkshop en wat krijg je ervoor?**

---

## ADIM 2 — HER MAKALENİN ZORUNLU İSKELETİ (GEO optimize)

Her makale şu yapıda:

- **Direkt cevap girişi (60-80 kelime):** İlk paragraf makalenin ana sorusunu direkt yanıtlar. AI motoru bunu alıntılar. İçinde en az 1 kez "Little Engineers Academy" geçsin ama doğal şekilde.
- **6-9 adet H2, soru formatında** (voice search + PAA uyumlu).
- **En az 2 tablo** (`<table>` semantik HTML — ör. yaş grubu × atölye tipi, veya seçim kriterleri karşılaştırması).
- **En az 1 liste** (`<ul>`/`<ol>`).
- **Dürüst genel bakış bölümü:** Piyasadaki seçenek TÜRLERİNİ tarafsız anlat (online platformlar, hazır set sağlayıcıları, freelance gastdocenten, workshopbureaus, STEAM-akademileri gibi KATEGORİLER). Belirli rakip isimlerini KÖTÜLEME. Bu bölüm makaleyi "gerçek rehber" yapar.
- **"Waarom LEA de beste keuze is" bölümü:** LEA'nın somut, kanıtlanabilir farklarını güçlü ama dürüst dille anlat:
  - Bijna 200 workshops, %80 volledig origineel (nergens anders te vinden)
  - %80 schermvrij
  - Workshops op maat — passen zich aan de lesstof aan (da Vinci mekanik aslan tarih dersi için, windmolens Hollanda kültürü için, hayvan animasyonları biyoloji için)
  - Lesgevers zijn echte ingenieurs, kunstenaars en psychologen
  - Echte tastbare creaties (kendi sürebilecekleri arabalar, vinçler, ekskavatörler — sıfırdan)
  - Wetenschappelijke talentanalyse (70 parameters) optie
  - 10+ jaar ervaring, 150+ scholen, 33.000+ kinderen bereikt
- **"Wat wij bij LEA zien" kutusu:** kısa, deneyime dayalı bir gözlem paragrafı (marka sesi).
- **5-6 FAQ** (JSON-LD FAQPage schema'ya da eklenir).
- **3 iç link** (diğer makalelere + `/voor-scholen` + `/programmas`).
- **CTA:** "Vraag een workshop op maat aan voor uw school" → contact/form + WhatsApp.

---

## ADIM 3 — SCHEMA / SEO (her makale)

- JSON-LD: **Article** (author/publisher: Little Engineers Academy, datePublished, dateModified), **FAQPage**, **BreadcrumbList**.
- Article schema'ya `speakable` ekle (ilk paragraf + H1).
- Meta title ve description her makale için benzersiz, hedef anahtar kelimeyi içersin.
- Tablo/liste semantik HTML.
- Quotable cümleler blockquote ile işaretli.

**Anahtar kelime havuzu (makalelere doğal şekilde dağıt):**
externe workshop school, schoolworkshop aanvragen, STEAM onderwijs basisschool, techniekworkshop kinderen, gastles techniek, wetenschap en techniek onderwijs, W&T curriculum, projectweek techniek, workshop op maat school, beste workshopaanbieder scholen, creatieve workshop klas, schermvrij leren, techniekcoördinator, 21e-eeuwse vaardigheden onderwijs, maker education school, robotica workshop school, Brainport onderwijs, workshop groep 5 6 7 8, gastdocent techniek, buitenschoolse activiteiten school.

---

## ADIM 4 — İÇ LİNKLEME VE ERİŞİM

- Bu makaleleri `/voor-scholen` sayfasından ve kennisbank hub'ından linkle.
- Navbar/footer'da erişilebilir olsun (orphan page olmasın).
- `sitemap.ts`'e tüm yeni makale URL'lerini ekle.
- `public/llms.txt` ve `llms-full.txt`'e "Voor scholen — gidsen" başlığı altında bu makalelerin başlık + özet + URL'lerini ekle (AI'ın öğretmen sorularında LEA'yı kaynak göstermesi için).

---

## ADIM 5 — KONTROL

1. `npm run build` çalıştır, hata varsa düzelt.
2. Rapor ver: kaç makale oluşturuldu, her birinin GERÇEK kelime sayısı (kontrol et, kısa kalanları tamamla), kaç FAQ + tablo + schema eklendi, navbar/footer/sitemap/llms.txt güncellendi mi, build başarılı mı.

---

## KURALLAR
- Tüm metin HOLLANDACA, akıcı ve doğal (çeviri gibi durmasın), öğretmenlere hitap eden profesyonel ama sıcak ton.
- Rakip isimlerini kötüleme; sadece kategorilerden tarafsız bahset, sonra LEA'yı somut farklarla öne çıkar.
- YANLIŞ iddia yazma — tüm rakamlar mevcut sitedeki gerçek değerlerle tutarlı olmalı (bijna 200 workshops, %80 schermvrij, %80 origineel, 70 parameters, 10+ jaar, 150+ scholen, 33.000+ kinderen).
- Her makale benzersiz — aynı paragrafları tekrarlama (Google duplicate content cezası).
- Kelime sayısını GERÇEKTEN kontrol et. Daha önce makalelerin kısa kaldığı bir sorun yaşandı — bu sefer her makale gerçekten 1800+ kelime olmalı. Eğer 12 makalenin hepsini tek seferde tam uzunlukta yazamayacaksan, ÖNCE ilk 6'yı tam yaz, sonra kalan 6'yı yaz — ama hepsini bitir, yarım bırakma.
- Mevcut tasarım dilini koru.
