"use client";

import { useState, type FormEvent } from "react";
import { submitToWeb3Forms } from "@/lib/web3forms";

type Status = "idle" | "loading" | "success" | "error";

export default function SchoolWorkshopRequestForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const ok = await submitToWeb3Forms(form);
    if (ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="subject" value="Workshop op maat aanvraag via /voor-scholen" />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="school-naam">
            Naam
          </label>
          <input
            id="school-naam"
            name="naam"
            type="text"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Uw naam"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="school-naam-school">
            School / organisatie
          </label>
          <input
            id="school-naam-school"
            name="school"
            type="text"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Naam van de school"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="school-email">
            E-mailadres
          </label>
          <input
            id="school-email"
            name="email"
            type="email"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="naam@school.nl"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="school-telefoon">
            Telefoonnummer
          </label>
          <input
            id="school-telefoon"
            name="telefoon"
            type="tel"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="school-vak-thema">
          Welk vak of thema wilt u behandelen?
        </label>
        <input
          id="school-vak-thema"
          name="vak_thema"
          type="text"
          required
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Bijv. biologie, geschiedenis, aardrijkskunde, techniek..."
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="school-bericht">
          Extra toelichting (optioneel)
        </label>
        <textarea
          id="school-bericht"
          name="bericht"
          rows={4}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          placeholder="Vertel ons meer over uw groep, leerjaar of specifieke wensen..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.01] hover:shadow-lg"
      >
        {status === "loading" ? "Versturen..." : "Vraag de perfecte workshop aan"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600 text-center font-semibold">
          Bedankt! Wij bekijken uw aanvraag en stellen de best passende workshop voor.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 text-center font-semibold">Er is iets misgegaan. Probeer het opnieuw.</p>
      )}
      {status === "idle" && (
        <p className="text-xs text-slate-400 text-center">
          Wij reageren binnen 1 werkdag met een passend voorstel.
        </p>
      )}
    </form>
  );
}
