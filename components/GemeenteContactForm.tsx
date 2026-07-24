"use client";

import { useState, type FormEvent } from "react";
import { submitToWeb3Forms } from "@/lib/web3forms";

type Status = "idle" | "loading" | "success" | "error";

export default function GemeenteContactForm() {
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
      <input type="hidden" name="subject" value="Nieuwe aanvraag via gemeente-formulier LEA-website" />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Gemeente
          </label>
          <input
            type="text"
            name="gemeente"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Gemeente Eindhoven"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Contactpersoon
          </label>
          <input
            type="text"
            name="contactpersoon"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Naam"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="naam@gemeente.nl"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Onderwerp
        </label>
        <select
          name="onderwerp"
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option>TalentLAB Centrum</option>
          <option>Wijk-programma</option>
          <option>EU-project</option>
          <option>Anders</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Bericht
        </label>
        <textarea
          name="bericht"
          rows={5}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Omschrijf kort uw wijk/doelgroep en wat u hoopt te bereiken..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-all hover:shadow-lg"
      >
        {status === "loading" ? "Versturen..." : "Verstuur aanvraag"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600 text-center font-semibold">Bedankt! Uw bericht is verzonden.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 text-center font-semibold">Er is iets misgegaan. Probeer het opnieuw.</p>
      )}
      {status === "idle" && (
        <p className="text-xs text-slate-400 text-center">
          Wij reageren binnen 2 werkdagen. Uw gegevens worden uitsluitend
          gebruikt voor deze aanvraag.
        </p>
      )}
    </form>
  );
}
