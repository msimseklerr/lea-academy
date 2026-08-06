# BRIEF: Okullar Sayfasına Atölye Galerisi (Workshops voor Scholen)

> ÖNEMLİ: Bu brief'i onay sormadan, tek seferde, baştan sona uygula. Site dili SADECE HOLLANDACA.

---

## HEDEF

`/voor-scholen` sayfasına, okullara sunduğumuz atölye örneklerini gösteren bir görsel galeri bölümü ekle. Okullar bu atölyelerden istediğini seçebilir. Ayrıca "200'e yakın atölyemiz var, işlemek istediğiniz dersi söyleyin, size uygun atölyeyi önerelim" mesajı ile talep toplama.

---

## ADIM 1 — GÖRSELLERİ HAZIRLA

1. `C:\Users\LEA\Downloads\lea-academy\lea-academy\workshops` klasöründeki TÜM görselleri bul (jpg, jpeg, png, webp — hepsini tara). Yaklaşık 32 görsel olmalı.
2. Hepsini `public/images/workshops/` klasörüne kopyala.
3. Dosya adlarını web-safe yap: boşlukları tire ile değiştir, Türkçe/özel karakterleri ascii yap, tümünü küçük harfe çevir. Örnek: `Windmolen Workshop.JPG` → `windmolen-workshop.jpg`
4. Bir veri dosyası oluştur (örn. `content/workshops/schoolworkshops.ts`) ve her görsel için bir kayıt ekle: dosya yolu + Hollandaca başlık + Hollandaca alt text. Başlıkları dosya adından anlamlı şekilde türet (ör. "windmolen" içeren dosya → "Windmolen bouwen"). Anlaşılamayan dosya adları için genel ama açıklayıcı Hollandaca başlık ver (ör. "STEAM-workshop voor scholen").

---

## ADIM 2 — GALERİ BÖLÜMÜ EKLE

`/voor-scholen` sayfasına yeni bir bölüm ekle: **"Voorbeelden van onze schoolworkshops"**

- 32 görseli responsive bir grid/masonry galeri olarak göster (mevcut `/galerij` sayfasındaki galeri bileşeni varsa onu tekrar kullan; yoksa framer-motion animasyonlu bir grid yap).
- Görsellere tıklayınca lightbox açılsın (büyük görünüm + başlık).
- Her görselin altında/üstünde Hollandaca başlığı görünsün.
- Mevcut tasarım dilini koru (indigo/violet gradient, hover efektleri).

Galerinin üstüne kısa bir açıklama paragrafı (Hollandaca):
"Hieronder vindt u een selectie van workshops die wij aanbieden voor scholen. Scholen kunnen kiezen uit deze voorbeelden — maar dit is slechts een greep uit ons aanbod."

---

## ADIM 3 — "OP MAAT" MESAJI (talep toplama bölümü)

Galerinin altına güçlü bir bölüm ekle. Şu mesajları Hollandaca, akıcı ve davetkar bir dille yaz:

Ana mesaj: **"Meer dan 200 workshops — en elke les kan op maat."**

Anlatılacak fikirler (Hollandaca'ya çevir ve akıcı paragraflar + örnekler yap):
- Bu galeride gördükleriniz sadece bir seçki. Toplamda 200'e yakın atölyemiz var.
- Okulunuzda işlemek istediğiniz dersi/konuyu bize bildirin, size ona uygun atölyemizi önerelim. (Talep formu / contact CTA)
- Somut örnekler ver (bunlar sayfada ilham verici örnek kutuları olarak gösterilsin):
  - **Biyoloji / hayvanlar konusu:** Her öğrenci hayvanları anlatan bir animasyon yapmayı öğrenebilir, veya hep birlikte hareketli tavşan figürleri üretebiliriz.
  - **Tarih dersi:** Leonardo da Vinci'nin mekanik aslanını, veya İskenderiyeli Heron'un buharla açılan tapınak kapılarını (Heron's automatic doors) üretiriz.
  - **Hollanda kültürü / aardrijkskunde:** Gerçek çalışan yel değirmenleri (windmolens) inşa ederiz.
- Vurgu: Atölye içeriğini okulun müfredatına ve işlediği konuya göre uyarlıyoruz — "de workshop past zich aan uw lesstof aan, niet andersom."

Bu örnekleri güzel görsel kartlar halinde göster (ikon + başlık + kısa açıklama). lucide-react ikonları kullan.

---

## ADIM 4 — CTA (talep toplama)

Bölümün sonuna belirgin bir çağrı ekle:
- **"Vertel ons welk vak of thema u behandelt — wij stellen de perfecte workshop voor."**
- Bir buton: contact sayfasına / iletişim formuna yönlendirsin. Mümkünse forma bir "Welk vak/thema wilt u behandelen?" alanı ekle (Web3Forms kullanılıyorsa o forma ekstra alan olarak).
- WhatsApp butonu da görünür olsun (+31 6 85485534, mevcut sticky WhatsApp zaten var).

---

## ADIM 5 — SEO / SCHEMA

- Bu bölümdeki başlıkları H2/H3 semantik yap.
- Örnek atölyeleri (da Vinci, Heron, windmolen vs.) bir `<ul>` liste olarak da işle (AI extraction için).
- `/voor-scholen` sayfasının FAQPage schema'sına şu soruları ekle:
  - "Kunnen jullie een workshop afstemmen op ons lesprogramma?" (Evet, op maat.)
  - "Hoeveel verschillende workshops bieden jullie aan voor scholen?" (Bijna 200.)
  - "Kunnen jullie workshops geven die aansluiten bij een specifiek vak zoals geschiedenis of biologie?" (Evet, örneklerle.)

---

## ADIM 6 — KONTROL

1. `npm run build` çalıştır, hata varsa düzelt.
2. Rapor ver: kaç görsel bulundu ve galeriye eklendi, galeri + op maat bölümü + CTA eklendi mi, kaç FAQ eklendi, build başarılı mı.

## KURALLAR
- Tüm metin HOLLANDACA.
- `workshops` klasöründe görsel yoksa veya klasör bulunamazsa, kullanıcıya "Lütfen atölye görsellerini workshops klasörüne koyun" mesajı ver ve dur.
- Mevcut tasarım dilini koru, sayfanın diğer bölümlerini bozma.
- Görselleri yeniden boyutlandırma/optimize etme, olduğu gibi kullan (next/image zaten optimize eder).
