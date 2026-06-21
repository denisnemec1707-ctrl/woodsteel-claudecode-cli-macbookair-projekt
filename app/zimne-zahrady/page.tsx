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
import { realizations } from "@/lib/data";
import { zimnaZahradaFaqs } from "@/lib/faqs";
import { JsonLd, productSchema, faqSchema } from "@/lib/schema";

const variants = [
  {
    name: "Hliníková zimná záhrada",
    tag: "Hliník",
    description:
      "Štíhle profily, izolačné dvojsklo, bezúdržbová konštrukcia s desaťročiami životnosti. Veľké presklené plochy + kvalitné tesnenie umožňujú celoročné používanie.",
    image:
      "/images/zimna-zahrada-hamuliakovo.jpeg",
  },
  {
    name: "Drevená zimná záhrada",
    tag: "Drevo",
    description:
      "Lepené BSH drevo dodáva priestoru teplo a charakter klasiky. Konštrukcia z tvarovo stálych profilov, garantovaná dlhá životnosť.",
    image:
      "/images/drevena-zimna-zahrada5.jpg",
  },
  {
    name: "Sezónna zimná záhrada",
    tag: "Sezónna",
    description:
      "Cenovo dostupnejšia varianta s ľahšou konštrukciou — vynikajúca pre jar/leto/jeseň. V zime sa odporúča vykurovaná verzia.",
    image:
      "/images/zimna-zahrada-rovinka.jpeg",
  },
];

const features = [
  "Izolačné dvojsklo s Ug ≤ 1.0",
  "Bezúdržbové hliníkové profily",
  "Posuvné sliding systémy",
  "Voliteľné kúrenie / klimatizácia",
  "Plne automatizované tienenie",
  "5+ rokov záruka",
  "Vlastná výroba na Slovensku",
  "Štatický posudok pre vašu lokalitu",
];

export default function ZimneZahradyPage() {
  const projects = realizations.filter((r) => r.category.toLowerCase().includes("zimná"));

  return (
    <>
      <JsonLd
        data={productSchema({
          name: "Zimné záhrady WoodSteel",
          description:
            "Hliníkové alebo drevené zimné záhrady na mieru. Izolačné dvojsklo, sliding systémy. Vlastná SK výroba.",
          image:
            "/images/zimna-zahrada-rovinka.jpeg",
          priceFrom: "12990",
          category: "Zimné záhrady",
        })}
      />
      <JsonLd data={faqSchema(zimnaZahradaFaqs)} />
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[80svh] flex items-end overflow-hidden">
          <Image
            src="/images/zimna-zahrada-rovinka.jpeg"
            alt="Zimná záhrada — Rovinka"
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
              <span className="text-white">Zimné záhrady</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-white max-w-3xl">
              Zimné záhrady, kde sa <span className="text-gold">leto nikdy nekončí.</span>
            </h1>
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-md border border-gold/40 text-cream text-sm">
              <span className="font-display font-bold text-gold">od 12 990 €</span>
              <span>s DPH</span>
            </div>
            <p className="mt-6 text-cream/90 text-lg max-w-2xl leading-relaxed">
              Plnohodnotná obytná zóna nezávislá od počasia. Hliník alebo drevo,
              izolačné dvojsklo, sliding systémy s plynulým otváraním.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="#variants" className="inline-flex justify-center items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold rounded-full transition-all shadow-[0_8px_24px_rgba(203,171,88,0.4)] hover:-translate-y-0.5">
                Pozrieť varianty <ArrowRight size={18} />
              </Link>
              <a href="tel:+421904473111" className="inline-flex justify-center items-center gap-2 px-7 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-full transition-colors">
                <Phone size={18} /> +421 904 473 111
              </a>
            </div>
          </div>
        </section>

        <section id="variants" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionHeader eyebrow="Varianty" title="Tri prevedenia, jeden štandard kvality" subtitle="Vyberte si materiál a režim používania — technické riešenie aj montáž zostávajú u nás." />
            <div className="mt-16 space-y-16 lg:space-y-24">
              {variants.map((v, i) => (
                <div key={v.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream">
                    <Image src={v.image} alt={v.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <div className="text-eyebrow text-gold">{v.tag}</div>
                    <h3 className="mt-3 text-display-3 font-bold text-brown">{v.name}</h3>
                    <p className="mt-5 text-mutedbrand leading-relaxed">{v.description}</p>
                    <Link href="/akcna-cenova-ponuka" className="mt-8 inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                      Vyžiadať ponuku <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-cream/50">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-eyebrow text-gold mb-4">Štandardná výbava</div>
              <h2 className="text-display-2 font-bold text-brown">Bývanie pod hviezdami, aj v zime.</h2>
              <p className="mt-6 text-mutedbrand leading-relaxed">Každá zimná záhrada od WoodSteel prejde 5-krokovým procesom — od osobného zamerania až po finálnu montáž naším tímom.</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
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
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionHeader eyebrow="Realizácie" title="Naše zimné záhrady v reálnych domácnostiach" subtitle="Z Bratislavy, Sencu, Hamuliakova aj Kittsee — pohľady na dokončené projekty." />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {projects.map((r) => (
                <article key={r.image} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream">
                  <Image src={r.image} alt={`${r.category} — ${r.location}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="text-eyebrow text-gold/90">{r.category}</div>
                    <div className="font-display font-semibold text-lg mt-1">{r.location}</div>
                  </div>
                </article>
              ))}
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
