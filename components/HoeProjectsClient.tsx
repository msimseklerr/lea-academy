"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { HowToProject } from "@/content/how-to-make/projects";

const categoryColors: Record<string, string> = {
  MAKER: "bg-emerald-100 text-emerald-700",
  STEM: "bg-indigo-100 text-indigo-700",
  "MAKER STEM": "bg-violet-100 text-violet-700",
  "STEM MAKER": "bg-violet-100 text-violet-700",
};

function ProjectThumbnail({ videoId, alt }: { videoId: string; alt: string }) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={() => setSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)}
    />
  );
}

export default function HoeProjectsClient({ projects }: { projects: HowToProject[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, idx) => (
        <motion.a
          key={p.id}
          href={p.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.06 }}
          className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 block"
        >
          <div className="relative aspect-video overflow-hidden">
            <ProjectThumbnail videoId={p.videoId} alt={p.title} />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl">
                <Play size={28} fill="white" className="text-white ml-1" />
              </div>
            </div>
            <span
              className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${categoryColors[p.category] ?? "bg-slate-100 text-slate-700"}`}
            >
              {p.category}
            </span>
          </div>
          <div className="p-5">
            <h2 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
              {p.title}
            </h2>
            <p className="text-sm text-slate-500 line-clamp-2">{p.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
