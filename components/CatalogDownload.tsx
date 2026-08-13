"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const CATALOG_FILE = "/download/woodsteel-katalog-2025.pdf";

export function CatalogDownload() {
  const [status, setStatus] = useState<"idle" | "sending" | "leaving" | "success">("idle");
  const [emailSent, setEmailSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setStatus("sending");

    let pdfUrl = CATALOG_FILE;
    try {
      const response = await fetch("/api/katalog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setEmailSent(Boolean(data?.emailSent));
      if (typeof data?.pdfUrl === "string") pdfUrl = data.pdfUrl;
    } catch {
      setEmailSent(false); // katalóg aj tak doručíme stiahnutím
    }

    // Katalóg doručíme okamžite aj do prehliadača, nech ho má používateľ hneď
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "woodsteel-katalog.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Formulár sa odsunie doprava a uvoľní miesto potvrdeniu
    setStatus("leaving");
    window.setTimeout(() => setStatus("success"), 420);
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-brown via-brown to-wood">
      {/* Svetelná atmosféra */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(203,171,88,0.22),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(203,171,88,0.14),transparent_70%)] blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Obálka katalógu */}
          <div className="group relative mx-auto w-[220px] sm:w-[260px] lg:w-full lg:max-w-[320px] [perspective:1200px]">
            {/* Naznačenie ďalších strán */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-cream/15 transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5"
            />
            <div
              aria-hidden
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-cream/25 transition-transform duration-700 group-hover:translate-x-2.5 group-hover:translate-y-2.5"
            />

            <div className="relative overflow-hidden rounded-xl shadow-[0_28px_70px_rgba(0,0,0,0.45)] transition-transform duration-700 ease-out [transform:rotate(-3deg)] group-hover:[transform:rotate(0deg)_translateY(-6px)]">
              <Image
                src="/images/katalog-cover.jpg"
                alt="Obálka PDF katalógu WoodSteel — zimné záhrady"
                width={820}
                height={1161}
                sizes="(min-width:1024px) 320px, 260px"
                className="w-full h-auto"
              />
              {/* Prelesk cez obálku */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Text a formulár */}
          <div className="text-white">
            {status === "success" ? (
              <div className="ws-slide-in rounded-3xl border border-cream/15 bg-white/[0.07] backdrop-blur-md p-8 sm:p-10 text-center">
                <div className="ws-pop mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                  <Mail size={28} className="text-gold" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  {emailSent ? "Skontrolujte si e-mail" : "Katalóg sa sťahuje"}
                </h3>
                <p className="mt-3 text-cream/80">
                  {emailSent
                    ? "Katalóg je na ceste — a medzitým sa vám už stiahol do zariadenia."
                    : "Katalóg sa práve ukladá do vášho zariadenia."}
                </p>
              </div>
            ) : (
              <div
                className={cn(
                  "transition-all duration-[420ms] ease-out",
                  status === "leaving" && "translate-x-12 opacity-0"
                )}
              >
                <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
                  <span className="w-8 h-px bg-gold/60" />
                  Katalóg
                </div>

                <h2 className="text-display-2 font-bold text-white">
                  Kompletný PDF katalóg.
                  <br />
                  <span className="text-gold">Zdarma na e-mail.</span>
                </h2>

                <p className="mt-5 max-w-md text-cream/85 text-base lg:text-lg leading-relaxed">
                  Pergoly, zimné záhrady a zasklenia terás — varianty, materiály
                  a hotové realizácie na jednom mieste.
                </p>

                <form
                  onSubmit={onSubmit}
                  className="mt-8 rounded-3xl border border-cream/15 bg-white/[0.07] backdrop-blur-md p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="vase@meno.sk"
                      aria-label="E-mail"
                      className="flex-1 min-w-0 rounded-full bg-white/95 px-5 py-3.5 text-charcoal placeholder:text-mutedbrand/60 outline-none ring-1 ring-transparent transition-all focus:ring-2 focus:ring-gold"
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold via-gold to-gold-hover px-6 py-3.5 font-semibold text-brown transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(203,171,88,0.5)] disabled:opacity-60 disabled:translate-y-0"
                    >
                      {status === "sending" ? (
                        "Odosielame…"
                      ) : (
                        <>
                          Poslať katalóg
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover/btn:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </div>

                  <label className="mt-4 flex items-start gap-2.5 text-[0.7rem] leading-relaxed text-cream/65 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 accent-[#cbab58]"
                    />
                    <span>
                      Súhlasím so zaslaním katalógu na uvedený e-mail.
                    </span>
                  </label>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
