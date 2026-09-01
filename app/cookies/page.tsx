import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookies - WoodSteel.sk",
  description:
    "Aké súbory cookies na woodsteel.sk používame, na čo slúžia a ako svoj súhlas kedykoľvek zmeníte alebo odvoláte.",
  alternates: { canonical: "https://woodsteel.sk/cookies/" },
};

/** Kategórie zodpovedajú prepínačom v lište súhlasu (components/CookieConsent.tsx). */
const categories = [
  {
    name: "Nevyhnutné",
    state: "Vždy zapnuté",
    text: "Zabezpečujú základné fungovanie stránky — napríklad zapamätanie vašej voľby v tejto lište. Bez nich by web nefungoval, preto sa nedajú vypnúť.",
  },
  {
    name: "Analytické",
    state: "Voliteľné",
    text: "Merajú návštevnosť a to, ktoré stránky ľudí zaujímajú, aby sme web vedeli zlepšovať. Používame Google Analytics 4 a Google Tag Manager.",
  },
  {
    name: "Marketingové",
    state: "Voliteľné",
    text: "Umožňujú merať účinnosť reklamy a zobraziť vám relevantnejšie ponuky. Používame Meta Pixel a reklamné funkcie Google.",
  },
  {
    name: "Preferenčné",
    state: "Voliteľné",
    text: "Zapamätajú si vaše nastavenia, aby ste ich pri ďalšej návšteve nemuseli zadávať znova.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 lg:pt-40 pb-12 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-brown">WoodSteel</Link>
              <span className="opacity-50">/</span>
              <span className="text-mutedbrand">Cookies</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-brown">
              Súbory <span className="text-gold">cookies.</span>
            </h1>
            <p className="mt-5 text-mutedbrand text-base lg:text-lg max-w-2xl mx-auto">
              Cookies sú malé súbory, ktoré si stránka uloží vo vašom prehliadači. Nižšie nájdete,
              na čo ich používame a ako svoju voľbu kedykoľvek zmeníte.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-8">
            <div className="space-y-4">
              {categories.map((c) => (
                <div key={c.name} className="rounded-2xl border border-cream bg-white p-5 lg:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-display text-lg font-bold text-brown">{c.name}</h2>
                    <span className="shrink-0 text-xs font-semibold text-mutedbrand bg-cream/60 rounded-full px-3 py-1">
                      {c.state}
                    </span>
                  </div>
                  <p className="mt-2 text-mutedbrand leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-gold/30 bg-cream/30 p-6 lg:p-8">
              <h2 className="font-display text-xl font-bold text-brown">Zmena súhlasu</h2>
              <p className="mt-2 text-mutedbrand leading-relaxed">
                Súhlas môžete kedykoľvek zmeniť alebo úplne odvolať. Analytické a marketingové
                cookies sa načítajú až po vašom súhlase — do jeho udelenia sú zablokované.
              </p>
              <div className="mt-5">
                <CookieSettingsButton />
              </div>
            </div>

            <p className="mt-10 text-mutedbrand leading-relaxed">
              Cookies môžete spravovať aj priamo v nastaveniach svojho prehliadača, kde sa dajú
              existujúce súbory vymazať a ukladanie nových zakázať. Ako nakladáme s osobnými
              údajmi, popisuje{" "}
              <Link href="/ochrana-osobnych-udajov" className="text-gold underline">
                ochrana osobných údajov
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
