import { SectionHeader } from "./SectionHeader";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-32 bg-cream/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="Ako postupujeme"
          title="Od prvého dopytu po odovzdanie kľúčov"
          subtitle="Päť jasných krokov. Žiadne prekvapenia, žiadny stres — vy si plánujete leto, my staviame."
        />

        <div className="mt-12 sm:mt-16 lg:mt-20 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-12 relative">
            {process.map((p) => (
              <div key={p.n} className="text-center lg:text-left relative">
                <div className="relative inline-block">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gold to-gold-hover flex items-center justify-center text-white font-display font-extrabold text-xl sm:text-2xl shadow-[0_12px_28px_rgba(203,171,88,0.4)] relative z-10">
                    {p.n}
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden sm:inline absolute -top-2 -right-6 font-display font-extrabold text-7xl text-brown/[0.04] leading-none select-none pointer-events-none"
                  >
                    {p.n}
                  </span>
                </div>

                <h3 className="mt-5 sm:mt-6 text-lg lg:text-xl font-bold text-brown">{p.title}</h3>
                <p className="mt-2 text-sm text-mutedbrand leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
