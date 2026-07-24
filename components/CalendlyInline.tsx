"use client";
import { InlineWidget } from "react-calendly";
import { CALENDLY_URL_PROEFLES } from "@/lib/constants";

export default function CalendlyInline() {
  return (
    <div className="w-full">
      <InlineWidget
        url={CALENDLY_URL_PROEFLES}
        styles={{ height: "700px", minWidth: "320px" }}
      />
    </div>
  );
}
