"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { schoolWorkshopImages } from "@/content/workshops/schoolworkshops";

export default function SchoolWorkshopGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + schoolWorkshopImages.length) % schoolWorkshopImages.length);
  }, [lightbox]);
  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % schoolWorkshopImages.length);
  }, [lightbox]);

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

  const currentImg = lightbox !== null ? schoolWorkshopImages[lightbox] : undefined;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {schoolWorkshopImages.map((img, idx) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (idx % 8) * 0.04 }}
            className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
            onClick={() => openLightbox(idx)}
          >
            <div className="relative w-full aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-white text-xs font-semibold leading-snug">{img.title}</p>
                  <ZoomIn size={16} className="text-white shrink-0" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
              className="relative max-w-2xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-square" style={{ maxHeight: "78vh" }}>
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
              <p className="text-white font-semibold text-center mt-3">{currentImg.title}</p>
              <p className="text-white/70 text-sm text-center mt-1">{currentImg.alt}</p>

              <button onClick={closeLightbox} className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors" aria-label="Sluiten">
                <X size={20} />
              </button>
              <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors" aria-label="Vorige workshop">
                <ChevronLeft size={22} />
              </button>
              <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors" aria-label="Volgende workshop">
                <ChevronRight size={22} />
              </button>
              <p className="text-white/50 text-xs text-center mt-1">{(lightbox ?? 0) + 1} / {schoolWorkshopImages.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
