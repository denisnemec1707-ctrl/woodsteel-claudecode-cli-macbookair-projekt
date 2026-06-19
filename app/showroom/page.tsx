import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapEmbed } from "@/components/MapEmbed";

export default function ShowroomPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[60svh] flex items-end overflow-hidden">
          <Image
            src="https://newdev.woodsteel.sk/wp-content/uploads/2026/03/showroom-rovinka.jpeg"
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
            <h1 className="text-display-1 font-extrabold text-white max-w-3xl">
              Príďte sa pozrieť. <span className="text-gold">Naživo.</span>
            </h1>
            <p className="mt-6 text-cream/90 text-lg max-w-2xl">
              Pergoly, zimné záhrady a zasklenia v reálnej veľkosti. Vyskúšajte
              materiály, otestujte mechaniku, opýtajte sa na detaily.
            </p>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="text-eyebrow text-gold mb-4">Showroom Rovinka</div>
              <h2 className="text-display-2 font-bold text-brown">
                Reálne konštrukcie. Reálne materiály.
              </h2>
              <p className="mt-6 text-mutedbrand leading-relaxed">
                V našom showroome v Rovinke (okres Senec) máte možnosť si na vlastné
                oči pozrieť hliníkové aj drevené pergoly, zimné záhrady a zasklenia
                terás v originálnej veľkosti. Vyskúšajte hmotnosť, kvalitu povrchových
                úprav a mechaniku posuvných systémov.
              </p>
              <p className="mt-4 text-mutedbrand leading-relaxed">
                Náš obchodník vás vždy sprevádza a zodpovie všetky technické otázky.
                Návšteva je bezplatná, bez nátlaku.
              </p>

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
                    <Phone size={20} className="text-gold group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-eyebrow text-mutedbrand">Pred návštevou zavolajte</div>
                    <div className="font-display font-bold text-brown group-hover:text-gold transition-colors">
                      +421 904 473 111
                    </div>
                  </div>
                </a>
              </div>

              <Link
                href="/kontakt"
                className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold rounded-full transition-all shadow-[0_4px_16px_rgba(203,171,88,0.4)]"
              >
                <Calendar size={18} />
                Dohodnúť osobné stretnutie
              </Link>
            </div>

            <div className="space-y-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream">
                <Image
                  src="https://newdev.woodsteel.sk/wp-content/uploads/2026/03/showroom-rovinka.jpeg"
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

        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}
