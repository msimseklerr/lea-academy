# BRIEF: Rakamları Tüm Sitede Güncelle (12.000 öğrenci / 33.000 robot)

> ÖNEMLİ: Bu brief'i onay sormadan, tek seferde, baştan sona uygula. Site dili SADECE HOLLANDACA.

---

## HEDEF

Yetenek/başarı rakamları kesinleşti. Tüm sitede eski değerleri yenileriyle değiştir. Tutarlılık kritik — tek bir yer bile eski değerde kalmamalı.

**Eski → Yeni:**
- Ulaşılan çocuk/öğrenci sayısı: **33.000+ kinderen → 12.000+ leerlingen**
- Üretilen robot sayısı: **9.300+ robots → 33.000+ robots**

DİKKAT — KRİTİK: Eskiden "33.000" ULAŞILAN ÇOCUK sayısıydı. Şimdi "33.000" ROBOT sayısı oluyor. Yani her "33.000" geçen yeri, BAĞLAMINA bakarak düzelt:
- Eğer "33.000" çocuk/kinderen/leerlingen bağlamındaysa → "12.000 leerlingen" yap.
- Eğer yeni robot değeri yazılıyorsa → "33.000 robots".
Kör bir bul-değiştir YAPMA; her "33.000" ve "9.300" geçen yeri bağlamıyla oku ve doğru dönüştür.

---

## ADIM 1 — TÜM ESKİ REFERANSLARI BUL

Şu aramaları yap (tüm .ts, .tsx, .js, .jsx, .md, .txt dosyalarında) ve her sonucu bağlamıyla listele:
- "33.000" ve "33000" ve "33 000"
- "9.300" ve "9300" ve "9.300+"
- "10.000" (varsa — eski "10.000 mezun" ifadesi de olabilir)
- "kinderen bereikt", "leerlingen bereikt", "kinderen bereikt"
- "robots gebouwd", "zelfgemaakte robots", "robots gemaakt"

## ADIM 2 — DOĞRU DEĞERLERE GÜNCELLE

- Çocuk/öğrenci ulaşım sayısı geçen her yer: **"12.000+ leerlingen"** (Hollandaca bağlama göre "12.000+ leerlingen bereikt" / "meer dan 12.000 kinderen")
- Robot sayısı geçen her yer: **"33.000+ robots"** (ör. "33.000+ zelfgemaakte robots")
- Varsa eski "10.000 mezun/afgestudeerde" ifadesini de "12.000+ leerlingen" ile uyumlu hale getir veya kaldır.

## ADIM 3 — BİLİNEN YERLERİ ÖZELLİKLE KONTROL ET

Şu dosya/sayfaları mutlaka kontrol et:
- Homepage (hero + istatistik sayaçları / StatCounter)
- `public/llms.txt` ve `public/llms-full.txt`
- `/over-ons` (bu ayrı brief ile de güncelleniyor, çakışma olmasın — son değerler tutarlı olsun)
- `/talentanalyse`, `/methode`, `/voor-scholen`, `/voor-gemeenten`, `/sociale-impact`, `/eu-projecten`
- Şehir sayfaları (`/steden/*`)
- Öğretmen blogları / kennisbank makaleleri (rakam geçen her makale)
- Tüm JSON-LD schema açıklamaları ve meta description'lar
- `lib/constants.ts` veya sabit dosyaları (varsa — rakamlar merkezi bir dosyada tutuluyorsa oradan değiştir, en temizi bu)

## ADIM 4 — MERKEZİLEŞTİRME (varsa)

Eğer rakamlar kod içinde dağınık halde yazılıysa, mümkünse bunları `lib/constants.ts` içinde tek bir yerde topla (ör. `export const STATS = { leerlingen: "12.000+", robots: "33.000+", ... }`) ve sayfalar buradan çeksin. Böylece gelecekte tek yerden değiştirilir. Bu refactor riskliyse yapma, sadece mevcut değerleri düzelt.

## ADIM 5 — KONTROL

1. `grep -rn "33.000"` ve `grep -rn "9.300"` ve `grep -rn "10.000"` çalıştır. Kalan her sonucu bağlamıyla doğrula — çocuk sayısı yanlış yerde 33.000 kalmışsa düzelt.
2. `npm run build` çalıştır, hata varsa düzelt.
3. Rapor ver: kaç yerde değişiklik yapıldı, hangi dosyalarda, hâlâ tutarsız kalan var mı, build başarılı mı.

## KURALLAR
- Bağlamı oku — kör bul-değiştir YAPMA. "33.000" hem eski çocuk sayısı hem yeni robot sayısı olduğu için tehlikeli.
- Yetenek/başarı bağlamı dışındaki sayılara (adres, telefon, yıl, fiyat) DOKUNMA.
- Tüm metin Hollandaca kalacak.
- Tasarımı bozma.
