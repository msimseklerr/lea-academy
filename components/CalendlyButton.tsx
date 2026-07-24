"use client";
import { useEffect } from "react";

interface Props {
  url: string;
  label: string;
  className?: string;
}

export default function CalendlyButton({ url, label, className = "" }: Props) {
  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const openCalendly = () => {
    if (
      typeof window !== "undefined" &&
      (window as unknown as { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly
    ) {
      (
        window as unknown as { Calendly: { initPopupWidget: (opts: { url: string }) => void } }
      ).Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <button onClick={openCalendly} className={className}>
        {label}
      </button>
    </>
  );
}
