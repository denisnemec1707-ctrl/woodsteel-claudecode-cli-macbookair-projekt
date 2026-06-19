import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generalFaqs, pergolaFaqs, zimnaZahradaFaqs, zasklenieFaqs } from "@/lib/faqs";
import { JsonLd, faqSchema } from "@/lib/schema";

export default function FaqPage() {
  const all = [...generalFaqs, ...pergolaFaqs, ...zimnaZahradaFaqs, ...zasklenieFaqs];
  // Unique by question
  const unique = Array.from(new Map(all.map((q) => [q.question, q])).values());

  return (
    <>
      <JsonLd data={faqSchema(unique)} />
      <Header />
      <main className="flex-1">
        <section className="pt-32 lg:pt-40 pb-12 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-brown">WoodSteel</Link>
              <span className="opacity-50">/</span>
              <span className="text-mutedbrand">FAQ</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-brown">
              Často kladené otázky.
            </h1>
            <p className="mt-5 text-mutedbrand text-base lg:text-lg max-w-2xl mx-auto">
              Stručné odpovede na to, čo sa najčastejšie pýtate. Niečo chýba?
              <Link href="/kontakt" className="text-gold hover:underline ml-1">
                Napíšte nám.
              </Link>
            </p>
          </div>
        </section>

        <Faq items={generalFaqs} eyebrow="Všeobecné" title="Všeobecné otázky" />
        <div className="bg-cream/30">
          <Faq items={pergolaFaqs.slice(0, 4)} eyebrow="Pergoly" title="Otázky o pergolách" />
        </div>
        <Faq items={zimnaZahradaFaqs.slice(0, 4)} eyebrow="Zimné záhrady" title="Otázky o zimných záhradách" />
        <div className="bg-cream/30">
          <Faq items={zasklenieFaqs.slice(0, 3)} eyebrow="Zasklenia" title="Otázky o zasklení terás" />
        </div>

        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}
