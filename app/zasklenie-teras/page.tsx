import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { Footer } from "@/components/Footer";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { FinalCTA } from "@/components/FinalCTA";
import { ProductStickyCTA } from "@/components/ProductStickyCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { zasklenieFaqs } from "@/lib/faqs";
import { JsonLd, productSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Zasklenie terás - WoodSteel.sk",
  description:
    "Rámové a bezrámové zasklenie terás a balkónov. Chráni pred vetrom a dažďom, terasu využijete aj mimo sezóny.",
  alternates: { canonical: "https://woodsteel.sk/zasklenie-teras/" },
};

// Systémy zasklenia — texty a fotografie prevzaté z woodsteel.sk
const systems = [
  {
    id: "ramove-zasklenie",
    href: "/zasklenie-teras/ramove-zasklenie",
    name: "Hliníkový rámový posuvný systém",
    tag: "Rámový systém",
    claim: "Ochráni vašu terasu proti vetru a dažďu.",
    description:
      "Posuvný rámový systém je vyrobený z vysoko kvalitných hliníkových profilov doplnených nerezovými komponentmi. Ako výplň používame jednosklo alebo izolačné dvojsklo, ktoré umožňuje zaskliť priestory až do výšky 2,7 metra. Pokiaľ hľadáte priaznivý pomer cena/výkon, je rámový posuvný systém pre vás ideálnym riešením.",
    image: "/images/zasklenie-ramovy-system.jpg",
    features: [
      "chráni pred hlukom, prachom aj nepriazňou počasia",
      "prekážka proti násilnému vniknutiu",
      "poistky proti vysadeniu skiel",
      "jednoduchá montáž vďaka už skompletizovanému systému",
      "ľahké a rýchle ovládanie aj údržba",
      "voľba počtu krídiel i spôsobu otvárania",
    ],
  },
  {
    id: "bezramove-zasklenie",
    href: "/zasklenie-teras/bezramove-zasklenie",
    name: "Bezrámový posuvný systém",
    tag: "Bezrámový systém",
    claim: "Zasklenie terasy ochráni proti vetru a dažďu.",
    description:
      "Bezrámový posuvný systém predstavuje dizajnové riešenie pre náročnejších zákazníkov, ktorí hľadajú moderný a minimalistický vzhľad bez viditeľných rámov. Využíva bezpečnostné jednosklo, ktoré umožňuje zaskliť priestory až do výšky 3 metrov. Poskytuje nielen spoľahlivú ochranu pred vetrom, dažďom, snehom a nečistotami, ale aj luxusný, prémiový vzhľad.",
    image: "/images/zasklenie-bezramovy-system.jpg",
    features: [
      "zaisťuje ničím nerušený výhľad do záhrady",
      "prekážka proti násilnému vniknutiu",
      "poistky proti vysadeniu skiel",
      "ľahké a rýchle ovládanie aj údržba",
      "voľba počtu krídiel i spôsobu otvárania",
    ],
  },
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
          category: "Zasklenia",
        })}
      />
      <JsonLd data={faqSchema(zasklenieFaqs)} />
      <Header overlay />
      <main className="flex-1">
        <section className="relative min-h-[80svh] flex items-end overflow-hidden">
          <Image
            src="/images/zasklenie-teras-hero.jpg"
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
              Zasklenie terasy <span className="text-gold">podľa vašich predstáv.</span>
            </h1>
            <p className="mt-6 text-cream/90 text-lg max-w-2xl leading-relaxed">
              Vyrobíme zasklenie terasy na mieru presne podľa vašich predstáv.
              Elegantné a funkčné riešenie pre váš vonkajší priestor s vysokou
              kvalitou spracovania a odolnosťou voči poveternostným podmienkam.
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

        {/* Úvod */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-gold/60" />
              Zasklenie terasy od WoodSteel.sk
            </div>
            <h2 className="text-display-2 font-bold text-brown">
              Terasa, ktorú využijete aj mimo sezóny
            </h2>
            <p className="mt-7 text-mutedbrand text-base lg:text-lg leading-relaxed">
              Naši špecialisti vám radi pomôžu s výberom zasklenia terasy, ochotne
              poradia a vypracujú cenovú ponuku na mieru. To všetko za prijateľnú
              cenu a s profesionálnym prístupom.
            </p>
          </div>
        </section>

        {/* Systémy zasklenia — detail má každý na vlastnej stránke */}
        <section className="py-16 sm:py-20 lg:py-28 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionHeader eyebrow="Systémy" title="Dva systémy, dva rozdielne výsledky" />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {systems.map((sys) => (
                <Link
                  key={sys.name}
                  href={sys.href}
                  id={sys.id}
                  className="group scroll-mt-28 bg-white rounded-2xl overflow-hidden border border-cream hover:border-gold/40 transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                    <Image
                      src={sys.image}
                      alt={sys.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 lg:p-8">
                    <div className="text-eyebrow text-gold">{sys.tag}</div>
                    <h3 className="mt-3 font-display font-bold text-xl lg:text-2xl text-brown">
                      {sys.name}
                    </h3>
                    <p className="mt-3 font-display italic text-brown/80">{sys.claim}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                      Zobraziť systém
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Process />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ProductStickyCTA productName="Zasklenie terás" />
    </>
  );
}
