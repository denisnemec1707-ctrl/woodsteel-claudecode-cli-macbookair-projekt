"use client";

import { useState, type FormEvent } from "react";
import { Send, Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "card" | "inline";
  defaultProduct?: string;
}

export function InquiryForm({ variant = "card", defaultProduct = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [product, setProduct] = useState(defaultProduct);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate network — in production this would POST to /api/inquiry or contact-form-7
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          variant === "card" ? "bg-white rounded-3xl p-10 lg:p-12 border border-cream shadow-[0_4px_24px_rgba(63,34,17,0.06)]" : "",
          "text-center"
        )}
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center">
          <Check size={28} className="text-gold" strokeWidth={3} />
        </div>
        <h3 className="mt-6 text-display-3 font-bold text-brown">Ďakujeme!</h3>
        <p className="mt-3 text-mutedbrand max-w-sm mx-auto">
          Vašu žiadosť máme. Ozveme sa <strong className="text-brown">do hodiny</strong> v
          pracovných dňoch — najneskôr v nasledujúce ráno.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        variant === "card"
          ? "bg-white rounded-3xl p-7 lg:p-10 border border-cream shadow-[0_4px_24px_rgba(63,34,17,0.06)]"
          : ""
      )}
    >
      <div className="flex items-center gap-3 mb-7">
        <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
          <Zap size={18} className="text-gold" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-brown">
            Cenová ponuka do 24 hodín
          </h3>
          <p className="text-xs text-mutedbrand">
            Bezplatné · bez záväzkov · reagujeme do hodiny
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Meno a priezvisko *" name="name" required placeholder="Ján Novák" />
        <Field label="Telefón *" name="phone" type="tel" required placeholder="+421 901 234 567" />
        <div className="sm:col-span-2">
          <Field label="E-mail *" name="email" type="email" required placeholder="vase@meno.sk" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-brown mb-2">
            O aký produkt máte záujem?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Pergola", "Zimná záhrada", "Zasklenie", "Iné"].map((p) => (
              <label
                key={p}
                className={cn(
                  "cursor-pointer text-sm font-medium text-center px-3 py-2.5 rounded-xl border-2 transition-all",
                  product === p
                    ? "border-gold bg-gold/10 text-brown"
                    : "border-cream bg-white text-mutedbrand hover:border-gold/40"
                )}
              >
                <input
                  type="radio"
                  name="product"
                  value={p}
                  checked={product === p}
                  onChange={(e) => setProduct(e.target.value)}
                  className="sr-only"
                />
                {p}
              </label>
            ))}
          </div>
        </div>
        <Field label="Mesto" name="city" placeholder="Bratislava" />
        <Field label="PSČ" name="psc" placeholder="900 41" />
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-brown mb-2">
            Stručný popis (nepovinné)
          </label>
          <textarea
            name="message"
            rows={3}
            className="w-full px-4 py-3 border border-cream rounded-xl text-charcoal placeholder:text-mutedbrand/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
            placeholder="Napríklad: terasa 5×4 m, smer na juh, drevený dom..."
          />
        </div>
        <label className="sm:col-span-2 flex items-start gap-3 text-xs text-mutedbrand cursor-pointer">
          <input type="checkbox" required className="mt-1 accent-[#cbab58]" />
          <span>
            Súhlasím so spracovaním osobných údajov v zmysle{" "}
            <a href="/ochrana-osobnych-udajov" className="text-brown underline hover:text-gold">
              ochrany osobných údajov
            </a>
            .
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 w-full inline-flex justify-center items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold rounded-full transition-all shadow-[0_8px_24px_rgba(203,171,88,0.4)] hover:shadow-[0_16px_36px_rgba(203,171,88,0.5)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-wait disabled:translate-y-0"
      >
        {status === "sending" ? (
          "Odosielame…"
        ) : (
          <>
            Odoslať žiadosť
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium text-brown mb-2">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 border border-cream rounded-xl text-charcoal placeholder:text-mutedbrand/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
      />
    </div>
  );
}
