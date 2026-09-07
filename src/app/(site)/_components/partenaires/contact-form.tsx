"use client";

import { type SubmitEvent, useState } from "react";
import { nousRejoindre } from "@/content/pages/nous-rejoindre";
import { site } from "@/content/site";

const copy = nousRejoindre.form;

function champ(label: string, name: string, value: string, required?: boolean) {
  return (
    <label className="block border-b border-rl-line py-4">
      <span className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
        {label}
        {required ? <span className="text-rl-red"> *</span> : null}
      </span>
      <input
        name={name}
        type={
          name === "email" ? "email" : name === "telephone" ? "tel" : "text"
        }
        required={required}
        defaultValue={value}
        autoComplete={
          name === "email"
            ? "email"
            : name === "nom"
              ? "name"
              : name === "entreprise"
                ? "organization"
                : name === "telephone"
                  ? "tel"
                  : name === "fonction"
                    ? "organization-title"
                    : "off"
        }
        className="mt-2 w-full bg-transparent text-[16px] text-white outline-none placeholder:text-[#444444]"
      />
    </label>
  );
}

export function ContactPartenaireForm() {
  const [ouvert, setOuvert] = useState(false);

  function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const entreprise = String(data.get("entreprise") ?? "").trim();
    const nom = String(data.get("nom") ?? "").trim();
    const fonction = String(data.get("fonction") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telephone = String(data.get("telephone") ?? "").trim();
    const apport = String(data.get("apport") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const apportLabel =
      copy.apports.find((item) => item.value === apport)?.label ?? apport;

    const corps = [
      `Entreprise : ${entreprise}`,
      `Nom : ${nom}`,
      fonction ? `Fonction : ${fonction}` : null,
      `E-mail : ${email}`,
      telephone ? `Téléphone : ${telephone}` : null,
      `Apport : ${apportLabel}`,
      "",
      message,
    ]
      .filter((ligne) => ligne !== null)
      .join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${copy.sujet} - ${entreprise}`,
    )}&body=${encodeURIComponent(corps)}`;

    setOuvert(true);
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="max-w-[52ch]">
      {champ(copy.entreprise, "entreprise", "", true)}
      {champ(copy.nom, "nom", "", true)}
      {champ(copy.fonction, "fonction", "")}
      {champ(copy.email, "email", "", true)}
      {champ(copy.telephone, "telephone", "")}

      <fieldset className="border-b border-rl-line py-5">
        <legend className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
          {copy.apport}
          <span className="text-rl-red"> *</span>
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {copy.apports.map((item) => (
            <label
              key={item.value}
              className="cursor-pointer border border-rl-line px-3 py-2 font-mono text-[10px] tracking-[0.14em] text-[#888888] uppercase has-[:checked]:border-white has-[:checked]:text-white"
            >
              <input
                type="radio"
                name="apport"
                value={item.value}
                required
                className="sr-only"
                defaultChecked={item.value === "financier"}
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block border-b border-rl-line py-4">
        <span className="font-mono text-[10px] tracking-[0.22em] text-[#666666]">
          {copy.message}
          <span className="text-rl-red"> *</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={copy.messagePlaceholder}
          className="mt-3 w-full resize-y bg-transparent text-[16px] leading-[1.6] text-white outline-none placeholder:text-[#444444]"
        />
      </label>

      <div className="mt-10">
        <button
          type="submit"
          className="inline-flex items-center gap-2 border border-white px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors duration-300 hover:bg-white hover:text-[#0d0d0d] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {copy.submit}
        </button>
        <p className="mt-4 max-w-[46ch] text-[13px] leading-[1.65] text-[#666666]">
          {ouvert
            ? `Si rien ne s'ouvre, écrivez directement à ${site.email}.`
            : copy.note}
        </p>
      </div>
    </form>
  );
}
