import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionHeader } from "@/components/SectionHeader";
import { team, stats } from "@/lib/data";

const values = [
  {
    title: "Vlastná výroba",
    description:
      "Žiadny subdodávateľ medzi nami a vami. Konštrukcie vyrábame vo vlastnej dielni na Slovensku — od skrutky po finálnu povrchovú úpravu.",
  },
  {
    title: "Vlastný montážny tím",
    description:
      "Tí istí ľudia, ktorí vám robili meranie, k vám prídu aj postaviť pergolu alebo zimnú záhradu. Žiadne prekvapenia, jeden zodpovedný tím.",
  },
  {
    title: "Komplexný proces",
    description:
      "Od prvej obhliadky cez vizualizáciu, výrobu, dopravu, montáž až po servis. Vy si pripravíte miesto, my robíme zvyšok.",
  },
  {
    title: "Bezstarostnosť",
    description:
      "Cena z ponuky je cena na faktúre. Termíny dodržiavame. Pri reklamácii reagujeme do 48 hodín. To je celá filozofia.",
  },
];

export default function ONasPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[60svh] flex items-end overflow-hidden">
          <Image
            src="https://newdev.woodsteel.sk/wp-content/uploads/2026/03/zimna-zahrada-hamuliakovo.jpeg"
            alt="WoodSteel — náš príbeh"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/95 via-brown/60 to-brown/20" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 pb-16 pt-32">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">WoodSteel</Link>
              <span>/</span>
              <span className="text-white">O nás</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-white max-w-3xl">
              Slovenská firma, ktorá <span className="text-gold">tvorí outdoor priestor</span>.
            </h1>
          </div>
        </section>

        {/* Brand story */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-gold/60" /> Náš príbeh
            </div>
            <h2 className="text-display-2 font-bold text-brown">
              Komunikujeme proces od&nbsp;A&nbsp;po&nbsp;Z
            </h2>
            <p className="mt-7 text-lg text-charcoal leading-relaxed">
              WoodSteel je slovenská spoločnosť, ktorá sa zameriava na realizáciu
              exteriérových konštrukcií z dreva a hliníka — pergoly, zimné záhrady
              a zasklenia terás. Klientom poskytujeme komplexné služby od návrhu
              projektu až po samotnú realizáciu.
            </p>
            <p className="mt-5 text-mutedbrand leading-relaxed">
              Pristupujeme profesionálne, s rešpektom a so záväzkom k riešeniam
              šitým na mieru. Zákazník si u nás nekupuje len kus dreva alebo
              ocele — kupuje si bezstarostný pokoj na vlastnej terase.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-br from-brown via-brown to-wood">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-extrabold text-4xl lg:text-6xl text-gold leading-none">{s.value}</div>
                  <div className="mt-2 text-eyebrow text-cream/85">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionHeader eyebrow="Naše hodnoty" title="Štyri princípy, podľa ktorých pracujeme" />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-8 lg:p-10 border border-cream">
                  <h3 className="font-display font-bold text-xl text-brown">{v.title}</h3>
                  <p className="mt-4 text-mutedbrand leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionHeader eyebrow="Náš tím" title="Ľudia, ktorí stoja za vašou stavbou" subtitle="25+ zamestnancov, vlastná výroba aj montáž. Tím, ktorý sa vám venuje od prvého dopytu až po odovzdanie kľúčov." />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {team.map((m) => (
                <article key={m.name} className="bg-white rounded-2xl p-7 text-center shadow-[0_4px_24px_rgba(63,34,17,0.05)] border border-cream hover:shadow-[0_16px_40px_rgba(63,34,17,0.1)] hover:-translate-y-1 transition-all">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden bg-cream ring-4 ring-cream">
                    <Image src={m.photo} alt={m.name} fill sizes="160px" className="object-cover" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg text-brown">{m.name}</h3>
                  <div className="text-eyebrow text-gold mt-1">{m.role}</div>
                  <p className="mt-4 text-sm italic text-mutedbrand leading-relaxed">„{m.quote}"</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}
