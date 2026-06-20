import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CatalogDownload } from "@/components/CatalogDownload";

export const metadata: Metadata = {
  title: "Na stiahnutie - WoodSteel.sk",
  description: "PDF katalógy, technické listy, montážne návody a referenčné dokumenty na stiahnutie.",
  alternates: { canonical: "https://woodsteel.sk/na-stiahnutie/" },
};

const docs = [
  { title: "Kompletný PDF katalóg 2026", size: "12 MB", note: "Všetky produkty + ceny + realizácie", action: "Vyžiadať e-mailom" },
  { title: "Technický list — Bioklimatická pergola", size: "1.8 MB", note: "Rozmery, profily, statika", action: "Stiahnuť" },
  { title: "Technický list — Hliníková zimná záhrada", size: "2.4 MB", note: "Profily, sklo, sliding systémy", action: "Stiahnuť" },
  { title: "Montážny návod (všeobecný)", size: "0.9 MB", note: "Postup prípravy základov pre montáž", action: "Stiahnuť" },
  { title: "Záručné podmienky", size: "0.3 MB", note: "5+ rokov záruka — detaily", action: "Stiahnuť" },
];

export default function NaStiahnutiePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 lg:pt-40 pb-12 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-brown">WoodSteel</Link>
              <span className="opacity-50">/</span>
              <span className="text-mutedbrand">Na stiahnutie</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-brown">
              Dokumenty <span className="text-gold">na stiahnutie.</span>
            </h1>
            <p className="mt-5 text-mutedbrand text-base lg:text-lg max-w-2xl mx-auto">
              PDF katalógy, technické listy, montážne návody a záručné podmienky.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-4">
            {docs.map((d) => (
              <article
                key={d.title}
                className="flex items-center gap-5 p-5 lg:p-6 bg-white border border-cream rounded-2xl hover:border-gold/40 hover:shadow-[0_8px_24px_rgba(63,34,17,0.06)] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                  <FileText size={20} className="text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-brown">{d.title}</div>
                  <div className="text-xs text-mutedbrand mt-1">{d.note} · PDF · {d.size}</div>
                </div>
                <button className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold text-sm rounded-full transition-all">
                  <Download size={14} />
                  {d.action}
                </button>
              </article>
            ))}
          </div>
        </section>

        <CatalogDownload />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}
