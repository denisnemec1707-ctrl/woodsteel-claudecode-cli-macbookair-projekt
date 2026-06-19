import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { realizations } from "@/lib/data";

export function Realizations() {
  return (
    <section id="realizations" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="Realizácie"
          title="Inšpirujte sa našimi projektami"
          subtitle="Z 250+ dokončených realizácií sme vybrali zopár, ktoré rozprávajú za nás. Z celého Slovenska aj zo zahraničia."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {realizations.slice(0, 9).map((r) => (
            <article
              key={r.image}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream"
            >
              <Image
                src={r.image}
                alt={`${r.category} — ${r.location}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 text-white">
                <div className="text-eyebrow text-gold/95 mb-1">{r.category}</div>
                <div className="flex items-center gap-1.5 font-display font-semibold text-base sm:text-lg">
                  <MapPin size={14} className="opacity-80" />
                  {r.location}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/realizacie"
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-brown/15 hover:border-gold text-brown hover:text-gold font-semibold text-sm rounded-full transition-colors"
          >
            Pozrieť všetky realizácie
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
