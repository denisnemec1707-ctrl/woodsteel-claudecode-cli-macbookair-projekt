import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingCTA } from "@/components/FloatingCTA";
import { SectionHeader } from "@/components/SectionHeader";
import { Faq } from "@/components/Faq";
import { ProductStickyCTA } from "@/components/ProductStickyCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { zasklenieFaqs } from "@/lib/faqs";
import { JsonLd, productSchema, faqSchema } from "@/lib/schema";

const features = [
  "Bezrámové sklenené tabule",
  "Plynulé posúvanie ručne",
  "V lete úplne otvorené",
  "V zime plne uzavretý priestor",
  "Bezpečnostné kalené sklo",
  "Vlastná SK výroba",
  "5+ rokov záruka",
  "Statický posudok zdarma",
];

export default function ZasklenieTerasPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "Zasklenie terás WoodSteel",
          description:
            "Bezrámové posuvné systémy pre zasklenie terás. V lete otvorené, v zime uzavretý priestor.",
          image:
            "/images/zimna-zahrada-horne-janiky.jpeg",
          priceFrom: "3290",
          category: "Zasklenia",
        })}
      />
      <JsonLd data={faqSchema(zasklenieFaqs)} />
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[80svh] flex items-end overflow-hidden">
          <Image
            src="/images/zimna-zahrada-horne-janiky.jpeg"
            alt="Zasklenie terasy"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/95 via-brown/60 to-brown/20" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 pb-20 pt-32 lg:pb-24 lg:pt-40">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">WoodSteel</Link>
              <span>/</span>
              <span className="text-white">Zasklenie terás</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-white max-w-3xl">
              Otvorené v lete. <span className="text-gold">Chránené v zime.</span>
            </h1>
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-md border border-gold/40 text-cream text-sm">
              <span className="font-display font-bold text-gold">od 3 290 €</span>
              <span>s DPH</span>
            </div>
            <p className="mt-6 text-cream/90 text-lg max-w-2xl leading-relaxed">
              Bezrámové posuvné systémy premenia vašu terasu na ďalšiu izbu —
              kedy potrebujete, otvorené alebo uzavreté jediným pohybom.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/akcna-cenova-ponuka" className="inline-flex justify-center items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold rounded-full transition-all shadow-[0_8px_24px_rgba(203,171,88,0.4)] hover:-translate-y-0.5">
                Cenová ponuka <ArrowRight size={18} />
              </Link>
              <a href="tel:+421904473111" className="inline-flex justify-center items-center gap-2 px-7 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-full transition-colors">
                <Phone size={18} /> +421 904 473 111
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <SectionHeader eyebrow="Ako to funguje" title="Jeden priestor, dve podoby" subtitle="Posuvné bezrámové sklo, ktoré sa pomocou koľajníc skladá k jednej stene. Plynulé, tiché, bezproblémové." />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/images/zimna-zahrada-horne-janiky.jpeg" alt="Zasklenie terasy" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-charcoal text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Process />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
