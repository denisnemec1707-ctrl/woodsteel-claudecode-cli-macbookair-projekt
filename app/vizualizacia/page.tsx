import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, MousePointerClick, Palette, Camera, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Vizualizator } from "@/components/Vizualizator";
import { UkazkaPredPo } from "@/components/UkazkaPredPo";

export const metadata: Metadata = {
  title: "AI vizualizácia pergoly a zimnej záhrady zadarmo — WoodSteel",
  description:
    "Vyberte produkt a farbu a umelá inteligencia vám počas chvíľky vytvorí fotorealistickú vizualizáciu. Zadarmo, nezáväzne, podľa našich skutočných realizácií.",
  alternates: { canonical: "https://woodsteel.sk/vizualizacia/" },
};

const KROKY = [
  {
    ikona: MousePointerClick,
    titulek: "Vyberte produkt",
    text: "Pergola, zimná záhrada, zasklenie terasy alebo prístrešok na auto.",
  },
  {
    ikona: Palette,
    titulek: "Zvoľte farbu",
    text: "Šesť prevedení, ktoré u nás reálne vyrábame — od antracitu po drevo.",
  },
  {
    ikona: Camera,
    titulek: "Pridajte svoj dom",
    text: "Nepovinné. S vlastnou fotkou uvidíte konštrukciu priamo u seba doma.",
  },
  {
    ikona: Sparkles,
    titulek: "Máte vizualizáciu",
    text: "Počas necelej minúty, zadarmo a bez akéhokoľvek záväzku.",
  },
];

export default function VizualizaciaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hlavička ─────────────────────────────────────────────── */}
        {/* Tmavý pás zámerne: biely konfigurátor pod ním potom „vystúpi".
            Fotka je len textúra — text musí ostať čitateľný aj bez nej. */}
        <section className="relative overflow-hidden bg-brown pt-32 lg:pt-40 pb-16 lg:pb-24">
          <Image
            src="/images/zimna-zahrada-hero.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.18] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown via-brown/88 to-brown" />
          {/* mäkká zlatá žiara za nadpisom */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-[90px]"
            style={{ background: "radial-gradient(closest-side, rgba(203,171,88,0.30), transparent)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold/70 mb-6">
              <Link href="/" className="hover:text-gold transition-colors">WoodSteel</Link>
              <span className="opacity-40 mx-2">/</span>
              <span className="text-cream/50">Vizualizácia</span>
            </div>

            <div className="mb-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-cream ring-1 ring-gold/35 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70 [animation-duration:2.4s]" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                Novinka · vizualizácia umelou inteligenciou
              </span>
            </div>

            <h1 className="text-display-1 font-extrabold text-white">
              Pozrite sa na to{" "}
              <span className="relative inline-block text-gold">
                skôr, než to postavíme.
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent"
                />
              </span>
            </h1>

            <p className="mt-6 text-cream/75 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Vyberte produkt a farbu — umelá inteligencia vám podľa našich skutočných
              realizácií vytvorí fotorealistický návrh.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-cream/60">
              {["Zadarmo a nezáväzne", "Hotové do minúty"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Check size={13} className="text-gold" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Konfigurátor ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cream/50 via-white to-white pb-16 lg:pb-24 pt-12 lg:pt-16">
          {/* mäkké svetlo zhora, nech plocha nie je plochá */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[110px]"
            style={{ background: "radial-gradient(closest-side, rgba(203,171,88,0.18), transparent)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
            <Vizualizator />
          </div>
        </section>

        {/* ── Ukážka pred / po ─────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
              <p className="text-eyebrow text-gold mb-4">Pred a po</p>
              <h2 className="text-display-2 font-bold text-brown">
                Z prázdnej terasy{" "}
                <span className="text-gold">obytný priestor.</span>
              </h2>
              <p className="mt-4 text-mutedbrand text-base lg:text-lg leading-relaxed">
                Pretiahnite posuvník a uvidíte presne to, čo nástroj urobí s fotkou
                vášho domu — rovnaké svetlo, rovnaká záhrada, navyše pergola.
              </p>
            </div>

            <UkazkaPredPo />
          </div>
        </section>

        {/* ── Jak to funguje ───────────────────────────────────────── */}
        {/* Časová os, nie štyri boxy — menej rámčekov, viac rytmu. */}
        <section className="py-16 lg:py-24 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <p className="text-eyebrow text-gold text-center mb-12">Ako to funguje</p>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
              {/* spojnica medzi krokmi — len na širokej obrazovke */}
              <div
                aria-hidden
                className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
              />

              {KROKY.map((k, i) => {
                const Ikona = k.ikona;
                return (
                  <div key={k.titulek} className="relative text-center lg:px-3">
                    <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-gold/25 shadow-[0_4px_16px_rgba(63,34,17,0.06)]">
                      <Ikona size={19} className="text-gold" />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brown text-[10px] font-bold text-cream">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold text-brown">
                      {k.titulek}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mutedbrand max-w-[15rem] mx-auto">
                      {k.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
