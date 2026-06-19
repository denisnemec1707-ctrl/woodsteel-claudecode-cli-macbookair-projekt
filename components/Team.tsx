import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { team } from "@/lib/data";

export function Team() {
  return (
    <section id="team" className="py-16 sm:py-20 lg:py-32 bg-cream/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="Náš tím"
          title="Ľudia, ktorí stoja za vašou stavbou"
          subtitle="25+ zamestnancov, vlastná výroba aj montáž. Tím, ktorý sa vám venuje od prvého dopytu až po odovzdanie kľúčov."
        />

        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {team.map((m) => (
            <article
              key={m.name}
              className="bg-white rounded-2xl p-6 sm:p-7 text-center shadow-[0_4px_24px_rgba(63,34,17,0.05)] hover:shadow-[0_16px_40px_rgba(63,34,17,0.1)] hover:-translate-y-1 transition-all"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden bg-cream ring-4 ring-cream">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 160px, 144px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 sm:mt-5 font-display font-bold text-lg text-brown">{m.name}</h3>
              <div className="text-eyebrow text-gold mt-1">{m.role}</div>
              <p className="mt-3 sm:mt-4 text-sm italic text-mutedbrand leading-relaxed">
                „{m.quote}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
