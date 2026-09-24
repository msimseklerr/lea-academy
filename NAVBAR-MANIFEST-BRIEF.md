# BRIEF: Navbar Sadeleştir + Manifest Blog + Ana Sayfa Vurgusu

> ÖNEMLİ: Bu brief'i onay sormadan, tek seferde, baştan sona uygula. Site dili SADECE HOLLANDACA.

Bu brief 3 iş yapar. Hepsini sırayla tamamla.

---

## İŞ 1 — NAVBAR'DAN "STEDEN" ANA BAŞLIĞINI KALDIR

- Ana navigasyon menüsünden (navbar) en üst seviyedeki **"Steden"** (şehirler) başlığını KALDIR.
- ÖNEMLİ: Şehir sayfaları ve içerikleri SİTEDE KALACAK — sadece navbar'ın en üst seviyesinde görünmeyecek. Sayfalar silinmeyecek, URL'ler çalışmaya devam edecek, sitemap'te kalacak (SEO için önemli).
- Şehir sayfalarına erişimi şu şekilde koru (üst başlık yerine):
  - Footer'da "Regio's" veya "Locaties" altında şehir linkleri kalsın/eklensin.
  - İlgili sayfalardan (bv. /voor-scholen, /programmas, homepage'deki bir bölüm) şehir sayfalarına iç link olsun.
  - İstenirse mevcut bir üst başlığın (örn. "Locaties" veya "Voor wie") altına dropdown alt-öğe olarak taşınabilir — ama en üst seviyede AYRI bir "Steden" başlığı OLMASIN.
- Amaç: navbar üst başlığı sade görünsün, ama şehir içerikleri ve SEO değeri korunur.

---

## İŞ 2 — MANİFEST METNİNİ BLOG OLARAK EKLE

Kennisbank/blog bölümüne yeni bir makale/post oluştur.

**Slug:** `/kennisbank/waarom-lea-anders-is` (veya blog yapısı neyse ona uygun)
**Titel:** "Waarom Little Engineers Academy anders is dan alle andere academies"
**Meta description:** LEA kiest niet eerst het materiaal — wij kijken eerst naar het kind. Ontdek waarom een robot bij ons geen doel is, maar een middel.

İçerik olarak AŞAĞIDAKİ metni AYNEN kullan (Hollandaca, olduğu gibi — bu kullanıcının onayladığı manifesto). Uygun H2/H3 ve tipografi ile güzelce biçimlendir; önemli zıtlıkları (bv. "geen doel / een middel") görsel olarak vurgula (blockquote veya öne çıkan stil). Metin:

---
"Welke educatieve set zullen we vandaag gebruiken?"
Nee.
De echte vraag is:
"Wat heeft dit kind vandaag nodig om zich verder te ontwikkelen?"
Dat is voor ons de belangrijkste vraag.

Een groot deel van het huidige onderwijs voor kinderen is gebaseerd op kant-en-klare materialen, kits en systemen.
Robotkits. Bricksets. Codeerplatforms. Elektronicakits. Kant-en-klare experimenteersets.

Maar laten we onszelf eens een fundamentele vraag stellen:
Krijgt uw kind les om een iPhone te leren gebruiken?
Nee.
Omdat een iPhone al ontworpen is om gebruikt te worden.
Waarom hebben kinderen dan een opleiding nodig om kant-en-klare robots, voertuigen en educatieve kits te leren gebruiken?

Natuurlijk hebben kant-en-klare materialen een plek binnen het onderwijs. Wij wijzen ze niet af.
Maar er is een belangrijk verschil:
Een educatieve set leren gebruiken is iets anders dan leren denken als een ontwerper of ingenieur.

Een robot volgens een handleiding in elkaar zetten kan waardevolle vaardigheden ontwikkelen.
Maar wat gebeurt er wanneer een kind zelf:
• een probleem formuleert,
• een oplossing bedenkt,
• een mechanisme ontwerpt,
• verschillende materialen combineert,
• fouten maakt,
• het ontwerp aanpast,
• opnieuw probeert
en uiteindelijk een eigen werkend product creëert?
Dat is een heel andere leerervaring.

Voor ons is een robot geen doel. Een robot is een middel.
LEGO is geen doel. LEGO is een middel.
Scratch is geen doel. Scratch is een middel.
Elektronica, motoren, sensoren, hydraulische systemen en andere materialen zijn allemaal middelen.
Het doel is de ontwikkeling van het kind.

Daarom kiezen we bij Little Engineers Academy niet eerst het materiaal.
We kijken eerst naar het kind.
Hoe denkt dit kind? Hoe leert het? Waar is het nieuwsgierig naar? Waar loopt het tegenaan? Wat wil het maken? Welke talenten zijn nog niet ontdekt?

Daarna kiezen we de juiste middelen.
Soms is dat een motor. Soms een stuk hout. Soms een elektronisch circuit. Soms een robot.
En soms slechts een paar materialen en een groot probleem.

Want voor ons betekent onderwijs niet: een kind leren hoe het een bestaand product gebruikt.
Het betekent: een omgeving creëren waarin een kind zijn eigen product kan bedenken, ontwerpen en bouwen.

Kant-en-klare sets kunnen onderdeel zijn van ons onderwijs. Maar ze zijn niet ons onderwijs.
Want kinderen hebben niet alleen behoefte aan meer kant-en-klare antwoorden.
Ze hebben behoefte aan: meer vragen. Meer problemen. Meer ontwerpen. Meer creëren.
En vooral: een geest die niet alleen vraagt: "Hoe maak ik dit?"
maar ook: "Hoe kan ik dit op een totaal andere manier maken?"
---

Bu makaleye JSON-LD Article schema ekle (author/publisher: Little Engineers Academy, datePublished, dateModified). İlk paragraf zaten güçlü bir kanca — speakable schema'ya dahil et. Kennisbank hub'ından ve ilgili sayfalardan link ver. Sitemap'e ekle.

---

## İŞ 3 — ANA SAYFAYA VURUCU ÖZET + LİNK

Ana sayfaya (homepage), bu manifestoyu özetleyen kısa, vurucu bir bölüm ekle. Uzun metni ana sayfaya KOYMA — sadece dikkat çeken birkaç cümle + "lees meer" linki.

Bölüm başlığı (H2): **"Wij kiezen niet eerst het materiaal. Wij kijken eerst naar het kind."**

Altına 2-3 vurucu cümle (Hollandaca), örneğin:
> "Een robot is geen doel — het is een middel. LEGO, Scratch, motoren, sensoren: allemaal middelen. Het doel is de ontwikkeling van uw kind. Daarom bouwt uw kind bij LEA niet zomaar een set na, maar bedenkt, ontwerpt en creëert het zijn eigen werkende product."

Bu bölümü görsel olarak dikkat çekici yap (mevcut tasarım dili — gradient, framer-motion). Sonuna belirgin bir buton/link:
**"Lees waarom LEA anders is →"** → `/kennisbank/waarom-lea-anders-is`

Vurgu cümlelerini `<blockquote>` ile işaretle (AI/SEO extraction).

---

## KONTROL
1. `npm run build` çalıştır, hata varsa düzelt.
2. Rapor ver:
   - Navbar'dan "Steden" üst başlığı kaldırıldı mı? Şehir sayfaları hâlâ erişilebilir mi (footer/iç link)?
   - Manifest blog oluşturuldu mu, URL ne?
   - Ana sayfaya özet bölüm + link eklendi mi?
   - build başarılı mı?

## KURALLAR
- Tüm metin HOLLANDACA.
- Şehir sayfalarını SİLME — sadece navbar üst başlığından kaldır, SEO değeri korunsun.
- Manifest metnini DEĞİŞTİRME — kullanıcının onayladığı hali aynen kullan (sadece biçimlendir).
- Mevcut tasarım dilini koru.
