import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

export async function submitToWeb3Forms(form: HTMLFormElement): Promise<boolean> {
  const formData = new FormData(form);
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });
    const result = await res.json();
    return Boolean(result.success);
  } catch {
    return false;
  }
}
