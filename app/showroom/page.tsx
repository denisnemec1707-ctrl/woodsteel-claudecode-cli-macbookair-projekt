import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapEmbed } from "@/components/MapEmbed";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ShowroomBooking } from "@/components/ShowroomBooking";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Showroom - WoodSteel.sk",
  description:
    "Navštívte náš showroom v Rovinke. Zimné záhrady, pergoly a zasklenia terás si pozriete naživo, v originálnej veľkosti. Návšteva je bezplatná — stačí sa vopred ohlásiť.",
  alternates: { canonical: "https://woodsteel.sk/showroom/" },
};

/** Videá prevzaté zo sekcie Showroom na woodsteel.sk */
const videos = [
  {
    id: "3Np7U4NERZc",
    title: "Hliníková zimná záhrada v striebornej farbe s izolačnými dvojsklami",
    poster: "/images/yt-3Np7U4NERZc.jpg",
    caption:
      "Strieborný hliníkový profil s izolačnými dvojsklami — presne takú konštrukciu si u nás pozriete naživo.",
  },
  {
    id: "ZYtCChJLp4s",
    title: "Hliníková zimná záhrada Woodsteel.sk",
    poster: "/images/yt-ZYtCChJLp4s.jpg",
    caption:
      "Prehliadka dokončenej hliníkovej zimnej záhrady vrátane posuvných systémov.",
  },
];

const reasons = [
  "Konštrukcie v originálnej veľkosti — nie na fotke, ale naživo",
  "Vyskúšate mechaniku posuvných systémov a bioklimatických lamiel",
  "Porovnáte hliník a drevo vedľa seba, chytíte si povrchovú úpravu",
  "Vzorkovník farieb a skiel — uvidíte reálny odtieň, nie render",
  "Obchodník s vami prejde rozmery, cenu aj termín priamo na mieste",
];

export default function ShowroomPage() {
  return (
    <>
      <Header overlay />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[60svh] flex items-end overflow-hidden">
          <Image
            src="/images/showroom-rovinka.jpeg"
            alt="WoodSteel Showroom Rovinka"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/95 via-brown/60 to-brown/20" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 pb-16 pt-32">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-white">WoodSteel</Link>
              <span>/</span>
              <span className="text-white">Showroom</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-white max-w-4xl">
              Navštívte náš showroom <span className="text-gold">v Rovinke</span>
            </h1>
            <p className="mt-6 text-cream/90 text-lg max-w-2xl">
              Fotka nikdy neukáže, aký pevný je profil ani ako ticho beží posuvný
              systém. Príďte sa presvedčiť o kvalite našej práce naživo — radi vás
              privítame.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#obhliadka"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold rounded-full transition-all shadow-[0_4px_16px_rgba(203,171,88,0.4)]"
              >
                Dohodnúť obhliadku
              </Link>
              <a
                href="tel:+421904473111"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white font-semibold backdrop-blur-sm transition-colors hover:bg-white hover:text-brown"
              >
                <Phone size={18} />
                +421 904 473 111
              </a>
            </div>
          </div>
        </section>

        {/* Prečo prísť + kontakt + mapa */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="text-eyebrow text-gold mb-4">Showroom Rovinka</div>
              <h2 className="text-display-2 font-bold text-brown">
                Reálne konštrukcie. Reálne materiály.
              </h2>
              <p className="mt-6 text-mutedbrand leading-relaxed">
                Naša výstavná zimná záhrada sa nachádza v Rovinke, na dosah od
                Bratislavy. Na jednom mieste si pozriete hliníkové aj drevené pergoly,
                zimné záhrady a zasklenia terás — v takej veľkosti a kvalite, v akej
                ich staviame u zákazníkov.
              </p>

              <ul className="mt-8 space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Check size={14} className="text-gold" strokeWidth={3} />
                    </span>
                    <span className="text-mutedbrand leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-eyebrow text-mutedbrand">Adresa</div>
                    <div className="font-display font-bold text-brown">
                      Rovinka, okres Senec
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-eyebrow text-mutedbrand">Otváracie hodiny</div>
                    <div className="font-display font-bold text-brown">Po–Pi 8:00 – 17:00</div>
                    <div className="text-sm text-mutedbrand">Sobota po dohode</div>
                  </div>
                </div>
                <a href="tel:+421904473111" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gold/15 group-hover:bg-gold flex items-center justify-center shrink-0 transition-colors">
                    <Phone size={20} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-eyebrow text-mutedbrand">Pred návštevou zavolajte</div>
                    <div className="font-display font-bold text-brown group-hover:text-gold transition-colors">
                      +421 904 473 111
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:info@woodsteel.sk?subject=Objednanie%20n%C3%A1v%C5%A1tevy%20showroomu%20Rovinka"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/15 group-hover:bg-gold flex items-center justify-center shrink-0 transition-colors">
                    <Mail size={20} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-eyebrow text-mutedbrand">Alebo napíšte</div>
                    <div className="font-display font-bold text-brown group-hover:text-gold transition-colors">
                      info@woodsteel.sk
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream">
                <Image
                  src="/images/showroom-rovinka.jpeg"
                  alt="Showroom Rovinka"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <MapEmbed title="Showroom Rovinka" height="300px" />
            </div>
          </div>
        </section>

        {/* Videá */}
        <section className="py-16 sm:py-20 lg:py-28 bg-cream/30">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionHeader
              eyebrow="Video"
              title="Pozrite si našu prácu vo videu"
              subtitle="Kým prídete osobne, urobte si predstavu. Videá sú z realizácií, aké na vlastné oči uvidíte aj v showroome."
            />
            <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {videos.map((v) => (
                <VideoEmbed
                  key={v.id}
                  id={v.id}
                  title={v.title}
                  poster={v.poster}
                  caption={v.caption}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Dohodnutie obhliadky */}
        <ShowroomBooking />

        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}
