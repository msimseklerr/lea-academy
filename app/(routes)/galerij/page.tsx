import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";
import { galleryImages } from "@/content/gallery/images";

export const metadata: Metadata = {
  title: "Galerij | Little Engineers Academy",
  description:
    "Bekijk foto's van onze STEM-workshops, roboticaprojecten, vakantiekampen en kinderfeestjes bij Little Engineers Academy in Eindhoven en Eersel.",
  openGraph: {
    title: "Galerij | Little Engineers Academy",
    description:
      "Bekijk foto's van onze STEM-workshops, roboticaprojecten, vakantiekampen en kinderfeestjes bij Little Engineers Academy in Eindhoven en Eersel.",
  },
};

const imageObjects = galleryImages.map((img) => ({
  "@type": "ImageObject",
  contentUrl: img.src.startsWith("http")
    ? img.src
    : `https://littleengineersacademy.com${img.src}`,
  name: img.title ?? img.alt,
  description: img.alt,
}));

const schema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galerij Little Engineers Academy",
  description:
    "Foto's van STEM-workshops, robotica, vakantiekampen en kinderfeestjes bij Little Engineers Academy.",
  url: "https://littleengineersacademy.com/galerij",
  associatedMedia: imageObjects,
};

export default function GalerijPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
            Galerij
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
            Onze mooiste momenten
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Van roboticaprojecten tot vakantiekampen — hier zie je kinderen in hun element bij Little Engineers Academy.
          </p>
        </div>
        <GalleryClient />
      </section>
    </>
  );
}
