import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { BacklitSign } from "@/components/BacklitSign";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionHeader } from "@/components/SectionHeader";
import { Team } from "@/components/Team";
import { CoverageMap } from "@/components/CoverageMap";
import { CounterStat } from "@/components/CounterStat";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "O nás - WoodSteel.sk",
  description:
    "Vlastná slovenská výroba a montáž od roku 2021. Showroom v Rovinke a tím, ktorý vedie zákazku od návrhu po odovzdanie.",
  alternates: { canonical: "https://woodsteel.sk/o-nas/" },
};

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
      <Header overlay />
      <main className="flex-1">
        <section className="relative min-h-[60svh] flex items-end overflow-hidden">
          <BacklitSign />
          {/* Spodok stmavíme kvôli čitateľnosti nadpisu, hore necháme svietiť nápis */}
          <div className="absolute inset-0 z-[3] bg-gradient-to-t from-brown/95 via-brown/25 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 pb-16 pt-32">
            <h1 className="text-display-1 font-extrabold text-white max-w-3xl">
              Dávame priestoru <span className="text-gold">nový rozmer</span>.
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
        <section className="ws-sweep relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-brown via-brown to-wood">
          {/* Pomaly plávajúce zlaté svetlo */}
          <div
            aria-hidden
            className="ws-drift pointer-events-none absolute -top-28 left-[15%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(203,171,88,0.20),transparent_70%)] blur-3xl"
          />
          <div
            aria-hidden
            className="ws-drift-slow pointer-events-none absolute -bottom-36 right-[12%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(203,171,88,0.13),transparent_70%)] blur-3xl"
          />
          {/* Vlasové zlaté linky na hranách pásu */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
          />
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
          />
          {/* Svetlo, ktoré neustále putuje po hornej hrane */}
          <span
            aria-hidden
            className="ws-trace pointer-events-none absolute top-0 h-px w-[25%] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_10px_rgba(203,171,88,0.8)]"
          />

          <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 110}>
                  <div
                    className={cn(
                      "group relative transition-transform duration-500 hover:-translate-y-1.5",
                      i % 2 === 1 && "border-l border-cream/10",
                      i === 2 && "lg:border-l lg:border-cream/10",
                      i >= 2 && "border-t border-cream/10 lg:border-t-0"
                    )}
                  >
                    <CounterStat value={s.value} label={s.label} invert />
                    {/* Zlatá linka, ktorá sa pri prejdení myšou roztiahne */}
                    <span
                      aria-hidden
                      className="absolute bottom-3 left-1/2 h-px w-8 -translate-x-1/2 bg-gold/30 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-gold group-hover:shadow-[0_0_10px_rgba(203,171,88,0.7)]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CoverageMap />

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

        {/* Team — zdieľaný komponent */}
        <Team bgClass="bg-white" />

        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
