"use client";

export default function EuPartnerForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const organisatie = data.get("organisatie") as string;
    const land = data.get("land") as string;
    const contactpersoon = data.get("contactpersoon") as string;
    const email = data.get("email") as string;
    const project = data.get("project") as string;
    const bericht = data.get("bericht") as string;

    const subject = encodeURIComponent(`EU-partnerverzoek: ${organisatie} (${land})`);
    const body = encodeURIComponent(
      `Organisatie: ${organisatie}\nLand: ${land}\nContactpersoon: ${contactpersoon}\nE-mail: ${email}\nProject/Call: ${project}\n\n${bericht}`
    );
    window.location.href = `mailto:info@littleengineersacademy.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Organisatie</label>
          <input name="organisatie" required placeholder="Universiteit van Oslo" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Land</label>
          <input name="land" required placeholder="Noorwegen" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Contactpersoon</label>
          <input name="contactpersoon" required placeholder="Uw naam" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">E-mailadres</label>
          <input name="email" type="email" required placeholder="u@organisatie.eu" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Project / Call referentie</label>
        <input name="project" placeholder="bijv. Erasmus+ KA220 2026, Horizon Europe MSCA" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Bericht</label>
        <textarea name="bericht" required rows={5} placeholder="Beschrijf uw project, de rol die u voor LEA ziet, en uw tijdlijn..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" />
      </div>
      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all hover:scale-[1.01] hover:shadow-lg">
        Partnervoorstel versturen
      </button>
    </form>
  );
}
