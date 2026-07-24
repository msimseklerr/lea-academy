"use client";
import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
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
      { threshold: 0.3 }
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
