"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryImages, GalleryImage, GalleryCategory } from "@/content/gallery/images";

const categories: { key: "alle" | GalleryCategory; label: string }[] = [
  { key: "alle", label: "Alle foto's" },
  { key: "workshops", label: "Workshops" },
  { key: "robotica", label: "Robotica" },
  { key: "vakantiekamp", label: "Vakantiekamp" },
  { key: "kinderfeestje", label: "Kinderfeestjes" },
  { key: "locaties", label: "Locaties" },
];

export default function GalleryClient() {
  const [active, setActive] = useState<"alle" | GalleryCategory>("alle");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "alle" ? galleryImages : galleryImages.filter(img => img.category === active);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  }, [lightbox, filtered.length]);
  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  const currentImg: GalleryImage | undefined = lightbox !== null ? filtered[lightbox] : undefined;

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => { setActive(cat.key); setLightbox(null); }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              active === cat.key
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="break-inside-avoid mb-4 group cursor-pointer relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(idx)}
            >
              <div className="relative w-full" style={{ aspectRatio: `${img.width}/${img.height}` }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-white text-sm font-semibold">{img.title ?? img.alt.slice(0, 40)}</p>
                    <ZoomIn size={18} className="text-white shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 py-16">Geen foto&apos;s gevonden in deze categorie.</p>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentImg && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: `${currentImg.width}/${currentImg.height}`, maxHeight: "80vh" }}>
                <Image
                  src={currentImg.src}
                  alt={currentImg.alt}
                  fill
                  className="object-contain rounded-xl"
                  sizes="90vw"
                  quality={85}
                  priority
                />
              </div>
              <p className="text-white/80 text-sm text-center mt-3">{currentImg.alt}</p>

              {/* Controls */}
              <button onClick={closeLightbox} className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors" aria-label="Sluiten">
                <X size={20} />
              </button>
              <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors" aria-label="Vorige foto">
                <ChevronLeft size={22} />
              </button>
              <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors" aria-label="Volgende foto">
                <ChevronRight size={22} />
              </button>
              <p className="text-white/50 text-xs text-center mt-1">{(lightbox ?? 0) + 1} / {filtered.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
