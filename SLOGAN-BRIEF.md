# BRIEF: Hero Sloganı + Marka Cümlelerini Siteye Dağıt

> ÖNEMLİ: Bu brief'i onay sormadan, tek seferde, baştan sona uygula. Site dili SADECE HOLLANDACA.

---

## HEDEF

Ana sayfa hero başlığını yeni slogan ile değiştir. Diğer 3 marka cümlesini sitenin farklı yerlerine, uygun bağlamlara yerleştir. Hepsi AI/SEO için `<blockquote>` ile işaretlenecek.

---

## ADIM 1 — HERO SLOGANI DEĞİŞTİR (Homepage)

Ana sayfadaki (app/page.tsx veya hero bileşeni) mevcut hero başlığını:
`"Van passieve consumenten naar de actieve makers van morgen."`
şu cümle ile DEĞİŞTİR (H1):

> **"Wij vragen niet hoe slim je kind is. Wij ontdekken hóé je kind slim is."**

- Bu H1 olsun, büyük ve etkileyici.
- "hóé" kelimesindeki accent (é) korunsun — vurgu önemli.
- Mevcut alt başlık (subtitle) paragrafını koru (Brainport, 3-17 jaar, 200+ workshops, 80% schermvrij, 70 parameters açıklaması). Gerekirse hafifçe uyarla ama bilgiyi silme.
- Hero'nun altındaki mevcut ikincil blockquote ("Elke vis verdient het om te zwemmen...") varsa onu da koru.

---

## ADIM 2 — DİĞER 3 CÜMLEYİ DAĞIT

Aşağıdaki 3 cümleyi belirtilen sayfalara, uygun bir bölüme, dikkat çekici bir `<blockquote cite="https://littleengineersacademy.com">` olarak yerleştir (mevcut tasarımda blockquote'lar nasıl görünüyorsa o stille — italik, vurgulu, gradient accent vs.).

### Cümle A → /methode ve/veya homepage'de "schermvrij" bölümü
> **"In een wereld vol schermen leren kinderen bij ons weer met hun handen denken."**
Bağlam: %80 ekransız (schermvrij) yaklaşımının anlatıldığı yere. Bu cümle ekran endişesine dokunuyor, ekransız öğrenme mesajının yanına mükemmel oturur.

### Cümle B → /programmas hub sayfası veya "Wat kan een LEA-leerling?" bölümünün yanı
> **"Met één motor 40 robots. Echte auto's om in te rijden. Dit is geen speelgoed — dit is engineering."**
Bağlam: somut çıktıların/becerilerin anlatıldığı yer. "Wat kan een LEA-leerling?" paragrafının hemen üstüne veya altına güçlü bir vurgu olarak.

### Cümle C → /voor-scholen veya /voor-gemeenten (gelecek/vizyon bölümü)
> **"Wij bereiden kinderen niet voor op de toets van morgen, maar op de wereld van morgen."**
Bağlam: 21e-eeuwse vaardigheden / gelecek becerileri / eğitim vizyonu anlatılan yer. Okullar ve belediyeler için vizyoner mesaj.

---

## ADIM 3 — SEO / AI

- Tüm bu cümleler `<blockquote>` semantik elementi içinde olsun (div değil) — AI motorları alıntılanabilir cümleleri buradan çeker.
- Hero H1'i speakable schema'ya dahil et (varsa).
- Hero değişikliğinin meta title/description'ı bozmadığından emin ol; gerekirse meta description'ı yeni slogana uyumlu güncelle ama anahtar kelimeleri koru.

---

## ADIM 4 — KONTROL
1. `npm run build` çalıştır, hata varsa düzelt.
2. Rapor ver: hero H1 değişti mi, 3 cümle hangi sayfalara eklendi, hepsi blockquote mu, build başarılı mı.

## KURALLAR
- Tüm metin HOLLANDACA, accent karakterler (hóé) korunacak.
- Mevcut tasarım dilini ve bilgi içeriğini bozma — sadece slogan değişimi ve cümle ekleme yap.
- Aynı cümleyi birden fazla sayfaya kopyalama (her cümle kendi sayfasında bir kez).
