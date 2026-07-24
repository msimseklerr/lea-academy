"use client";

import { useState, type FormEvent } from "react";
import { submitToWeb3Forms } from "@/lib/web3forms";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
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
      <input type="hidden" name="subject" value="Nieuw bericht via contactformulier LEA-website" />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="naam">Naam</label>
          <input id="naam" name="naam" type="text" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Uw naam" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">E-mailadres</label>
          <input id="email" name="email" type="email" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="uw@email.nl" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="telefoon">Telefoonnummer</label>
        <input id="telefoon" name="telefoon" type="tel" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="06 12 34 56 78" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="onderwerp">Onderwerp</label>
        <select id="onderwerp" name="onderwerp" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">
          <option>Gratis proefles aanvragen</option>
          <option>Talentanalyse informatie</option>
          <option>School of BSO samenwerking</option>
          <option>Kinderfeestje reserveren</option>
          <option>Vakantiekamp inschrijving</option>
          <option>Tarieven & inschrijving</option>
          <option>Anders</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="bericht">Uw bericht</label>
        <textarea id="bericht" name="bericht" rows={5} required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none" placeholder="Schrijf hier uw vraag of opmerking..." />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.01] hover:shadow-lg"
      >
        {status === "loading" ? "Versturen..." : "Bericht versturen"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600 text-center font-semibold">Bedankt! Uw bericht is verzonden.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 text-center font-semibold">Er is iets misgegaan. Probeer het opnieuw.</p>
      )}
      {status === "idle" && (
        <p className="text-xs text-slate-400 text-center">
          Binnen 1 werkdag ontvangt u een reactie.
        </p>
      )}
    </form>
  );
}
