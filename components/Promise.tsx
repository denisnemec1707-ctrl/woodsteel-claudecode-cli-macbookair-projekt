export function Promise() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <div className="text-eyebrow text-gold mb-5 sm:mb-6 inline-flex items-center gap-2">
          <span className="w-8 h-px bg-gold/60" />
          Náš prístup
        </div>
        <h2 className="text-display-2 font-bold text-brown">
          Komunikujeme proces od&nbsp;A&nbsp;po&nbsp;Z
        </h2>
        <blockquote className="mt-8 sm:mt-10 relative">
          <span
            aria-hidden="true"
            className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 font-display font-extrabold text-[120px] sm:text-[180px] text-gold/15 leading-none pointer-events-none select-none"
          >
            “
          </span>
          <p className="relative font-display italic font-semibold text-xl sm:text-2xl lg:text-3xl text-brown leading-tight px-2">
            Zákazník si u nás nekupuje len kus dreva alebo ocele,
            <br className="hidden md:inline" />{" "}
            ale <span className="text-gold">bezstarostný pokoj na terase.</span>
          </p>
        </blockquote>
        <p className="mt-7 sm:mt-8 text-base lg:text-lg text-mutedbrand leading-relaxed max-w-2xl mx-auto">
          Od prvej obhliadky cez výrobu vo vlastnej dielni až po finálnu montáž —
          postaráme sa o všetko, vy si len pripravíte miesto pre rannú kávu.
        </p>
      </div>
    </section>
  );
}
