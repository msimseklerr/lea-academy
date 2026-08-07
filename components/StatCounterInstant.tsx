"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Zoals StatCounter, maar toont standaard direct de echte eindwaarde
 * (nooit 0) — de telanimatie is puur een extra visueel effect wanneer
 * de IntersectionObserver daadwerkelijk triggert. Zo blijft het cijfer
 * altijd correct, ook als de animatie om wat voor reden dan ook niet
 * afgaat (geen browserondersteuning, element nooit "intersecting", etc.).
 */
export default function StatCounterInstant({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          setCount(0);

          const duration = 1400;
          const fps = 60;
          const totalFrames = Math.round((duration / 1000) * fps);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(eased * value));

            if (frame >= totalFrames) {
              setCount(value);
              clearInterval(timer);
            }
          }, 1000 / fps);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl md:text-5xl font-extrabold text-white"
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
      >
        {count.toLocaleString("nl-NL")}
        {suffix}
      </div>
      <p className="text-indigo-200 mt-2 text-sm">{label}</p>
    </div>
  );
}
