# Galerij — Kendi Görsellerinizi Ekleme Talimatı

Bu dosyayı okuyarak siteye kolayca kendi fotoğraflarınızı ekleyebilirsiniz.  
Kod bilgisi gerekmez — sadece dosya kopyalayıp bir satır eklemeniz yeterli.

---

## Adım 1 — Klasörü Kontrol Edin

Proje klasöründe şu dizin olmalı:

```
public/
  images/
    gallery/        ← Fotoğraflarınız buraya gelecek
```

Klasör yoksa elle oluşturun: `public/images/gallery/`

---

## Adım 2 — Dosyayı Kopyalayın

Fotoğrafınızı `public/images/gallery/` klasörüne kopyalayın.

**Dosya adlandırma kuralı:** `kategori-aciklama-numara.jpg`

Örnekler:
```
workshops-robot-bouwen-01.jpg
robotica-arduino-project-02.jpg
vakantiekamp-zomer-2025-01.jpg
kinderfeestje-verjaardag-05.jpg
locaties-eindhoven-buiten-01.jpg
```

Desteklenen formatlar: `.jpg`, `.jpeg`, `.png`, `.webp`

---

## Adım 3 — Listeye Ekleyin

`content/gallery/images.ts` dosyasını açın ve `galleryImages` array'ine yeni bir satır ekleyin:

```typescript
{
  src: "/images/gallery/DOSYA-ADINIZ.jpg",
  alt: "Kinderen bouwen een robot tijdens een workshop bij LEA",
  category: "workshops",
  width: 1200,
  height: 800,
  title: "Robot bouwen",
},
```

### Alanların Açıklaması

| Alan | Açıklama | Örnek |
|------|----------|-------|
| `src` | Dosya yolu (`/images/gallery/` ile başlar) | `"/images/gallery/workshops-01.jpg"` |
| `alt` | Görseli tanımlayan Hollandaca metin (SEO için önemli) | `"Kinderen programmeren een robot"` |
| `category` | Kategori (aşağıdaki listeden seçin) | `"workshops"` |
| `width` | Görselin genişliği (piksel) | `1200` |
| `height` | Görselin yüksekliği (piksel) | `800` |
| `title` | Hover'da görünen kısa başlık (isteğe bağlı) | `"Robotworkshop"` |

### Geçerli Kategoriler

```
"workshops"       → Workshops
"robotica"        → Robotica
"vakantiekamp"    → Vakantiekamp
"kinderfeestje"   → Kinderfeestjes
"locaties"        → Locaties
```

---

## Adım 4 — Kaydedin ve Yenileyin

Dosyayı kaydedin, tarayıcıda `localhost:3000/galerij` adresine gidin.  
Görseliniz otomatik olarak galeri sayfasında görünecektir.

---

## Genişlik ve Yükseklik Nasıl Öğrenirim?

- **Windows:** Dosyaya sağ tıklayın → Özellikler → Ayrıntılar sekmesi
- **Mac:** Dosyaya sağ tıklayın → Bilgi Al → Daha Fazla Bilgi
- **Online araç:** squoosh.app veya imageresizer.com üzerinden yükleyip bakabilirsiniz

Boyutları yaklaşık girmeniz de yeterlidir — sitenin düzeni bozulmaz, sadece kart oranı hafif değişir.

---

## Toplu Görsel Ekleme

Çok sayıda görsel eklemek istiyorsanız, birden fazla satırı arka arkaya ekleyin:

```typescript
export const galleryImages: GalleryImage[] = [
  // ... mevcut görseller ...

  // Yeni eklenenler:
  {
    src: "/images/gallery/workshops-robot-01.jpg",
    alt: "Kinderen bouwen een robot",
    category: "workshops",
    width: 1200,
    height: 800,
    title: "Robotworkshop",
  },
  {
    src: "/images/gallery/vakantiekamp-zomer-01.jpg",
    alt: "Kinderen in het zomervakantiekamp van LEA",
    category: "vakantiekamp",
    width: 1600,
    height: 1067,
    title: "Zomervakantiekamp 2025",
  },
];
```

---

*Sorun yaşarsanız `info@littleengineersacademy.com` adresine yazın.*
