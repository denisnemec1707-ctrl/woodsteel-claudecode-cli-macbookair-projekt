"use client";

import { useState, type FormEvent } from "react";
import { FileText, Download, Check, Mail } from "lucide-react";

export function CatalogDownload() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-brown via-brown to-wood">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="text-white">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <FileText size={14} /> Katalóg 2026
            </div>
            <h2 className="text-display-2 font-bold text-white">
              Kompletný PDF katalóg.<br />
              <span className="text-gold">Zdarma na e-mail.</span>
            </h2>
            <p className="mt-5 text-cream/85 text-base lg:text-lg leading-relaxed">
              24 strán o pergolách, zimných záhradách a zasklenia terás. Materiály,
              rozmery, doplnky, orientačné ceny a reálne realizácie.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-gold mt-0.5 shrink-0" />
                Všetky kategórie + varianty
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-gold mt-0.5 shrink-0" />
                Technické parametre a rozmery
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-gold mt-0.5 shrink-0" />
                Orientačné cenníky pre rok 2026
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-gold mt-0.5 shrink-0" />
                Galéria 30+ realizácií
              </li>
            </ul>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-3xl p-7 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.2)]">
            {status === "success" ? (
              <div className="text-center py-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center">
                  <Mail size={28} className="text-gold" />
                </div>
                <h3 className="mt-5 text-display-3 font-bold text-brown">
                  Skontrolujte si e-mail
                </h3>
                <p className="mt-3 text-mutedbrand">
                  Katalóg už máme v príprave na ceste — zvyčajne do 5 minút.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center">
                    <FileText size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brown">
                      Stiahnuť PDF katalóg
                    </h3>
                    <p className="text-xs text-mutedbrand">
                      24 strán · zdarma · žiadne nevyžiadané e-maily
                    </p>
                  </div>
                </div>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brown mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="vase@meno.sk"
                      className="w-full px-4 py-3 border border-cream rounded-xl text-charcoal placeholder:text-mutedbrand/60 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all"
                    />
                  </div>
                  <label className="flex items-start gap-3 text-xs text-mutedbrand cursor-pointer">
                    <input type="checkbox" required className="mt-1 accent-[#cbab58]" />
                    <span>
                      Súhlasím so spracovaním e-mailu na zaslanie katalógu a
                      príležitostné novinky (max 1× za mesiac).
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full inline-flex justify-center items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold rounded-full transition-all shadow-[0_8px_24px_rgba(203,171,88,0.4)] hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      "Odosielame…"
                    ) : (
                      <>
                        <Download size={16} />
                        Stiahnuť katalóg zdarma
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
