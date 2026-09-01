import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov - WoodSteel.sk",
  description:
    "Informácie o spracúvaní osobných údajov podľa čl. 13 nariadenia GDPR — prevádzkovateľ, účel, rozsah, doba uchovávania a práva dotknutej osoby.",
  alternates: { canonical: "https://woodsteel.sk/ochrana-osobnych-udajov/" },
};

/** Prevádzkovateľ podľa výpisu z obchodného registra — text prevzatý z woodsteel.sk. */
const operator = [
  ["Spoločnosť", "Woodsteel SK s.r.o."],
  ["Sídlo", "Priehon 112/37, 972 05 Sebedražie"],
  ["IČO", "53594126"],
  ["DIČ", "2121454324"],
  ["IČ DPH", "SK2121454324"],
  ["IBAN", "SK88 0900 0000 0052 0828 1887"],
];

const purposes = [
  "Kontaktovanie s cenovou ponukou záujemcovi",
  "Uzatvorenie zmluvy",
  "Archivačná a daňová povinnosť",
];

const rights = [
  "požadovať od prevádzkovateľa prístup k osobným údajom a ich prípadnú opravu alebo výmaz, prípadne obmedzenie spracovania, a vzniesť námietku proti spracovaniu,",
  "kedykoľvek požadovať informácie týkajúce sa spracovania osobných údajov v zákonnom rozsahu,",
  "preniesť osobné údaje týkajúce sa osoby klienta k inému prevádzkovateľovi,",
  "nebyť predmetom žiadneho rozhodnutia založeného výhradne na automatizovanom spracovaní, vrátane profilovania,",
  "obrátiť sa na Úrad na ochranu osobných údajov s akoukoľvek žiadosťou alebo sťažnosťou.",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-xl lg:text-2xl font-bold text-brown">{title}</h2>
      <div className="mt-3 space-y-3 text-mutedbrand leading-relaxed">{children}</div>
    </section>
  );
}

export default function OchranaOsobnychUdajovPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 lg:pt-40 pb-12 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-brown">WoodSteel</Link>
              <span className="opacity-50">/</span>
              <span className="text-mutedbrand">Ochrana osobných údajov</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-brown">
              Ochrana <span className="text-gold">osobných údajov.</span>
            </h1>
            <p className="mt-5 text-mutedbrand text-base lg:text-lg max-w-2xl mx-auto">
              V zmysle ust. čl. 13 Nariadenia EP a Rady (EÚ) č. 2016/679, všeobecného nariadenia
              o ochrane osobných údajov („Nariadenie GDPR“).
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-8">
            <Section title="Prevádzkovateľ">
              <p>Prevádzkovateľom je spoločnosť:</p>
              <dl className="rounded-2xl border border-cream bg-cream/30 p-5 lg:p-6 space-y-2">
                {operator.map(([label, value]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:gap-3">
                    <dt className="sm:w-40 shrink-0 text-sm font-semibold text-brown">{label}</dt>
                    <dd className="text-brown">{value}</dd>
                  </div>
                ))}
              </dl>
              <p>
                Osobné údaje pre prevádzkovateľa môžu spracovávať aj ďalší sprostredkovatelia,
                a to najmä poskytovatelia softvéru, v ktorom sú osobné údaje klientov evidované,
                prípadne ďalší poskytovatelia spracovateľských softvérov, služieb a aplikácií,
                ktoré v súčasnosti prevádzkovateľ ne/využíva.
              </p>
            </Section>

            <Section title="Účel spracovania osobných údajov">
              <ul className="space-y-2">
                {purposes.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Osobné údaje, ktoré uchovávame">
              <p>
                Meno, priezvisko, adresa trvalého alebo prechodného pobytu, rodné číslo, dátum
                narodenia, štátna príslušnosť, druh a číslo dokladu totožnosti, ak je klient
                fyzickou osobou alebo zástupcom klienta – právnickej osoby; u fyzickej osoby –
                podnikateľa tiež adresa miesta podnikania, označenie registra alebo inej evidencie,
                v ktorej je fyzická osoba – podnikateľ zapísaná, a číslo zápisu do tohto registra
                alebo inej evidencie.
              </p>
            </Section>

            <Section title="Doba uchovávania">
              <p>
                Kontaktné údaje v rozsahu meno, e-mailová adresa a telefón budú spracovávané po dobu
                3 rokov, ak nedošlo k uzavretiu zmluvy.
              </p>
              <p>
                Pokiaľ prišlo k uzavretiu zmluvy, osobné údaje klienta budú prevádzkovateľom
                spracúvané po dobu 10 rokov od uzavretia zmluvy medzi klientom a prevádzkovateľom.
              </p>
            </Section>

            <Section title="Poučenie o dobrovoľnosti">
              <p>
                Poskytnutie osobných údajov klienta je dobrovoľné. V rozsahu, v akom je však
                prevádzkovateľ povinný osobné údaje klientov získavať, spracovávať a uchovávať,
                je poskytnutie niektorých osobných údajov podmienkou pre poskytovanie služieb zo
                strany prevádzkovateľa. Týmito povinnými údajmi sú: všetky mená a priezviská, rodné
                číslo, trvalý alebo iný pobyt a štátne občianstvo; v prípade, že ide o fyzickú osobu
                – podnikateľa, taktiež jej obchodný názov, odlišujúci dodatok alebo ďalšie
                označenie, miesto podnikania a identifikačné číslo, druh a číslo preukazu totožnosti,
                štát, prípadne orgán, ktorý ho vydal, a doba jeho platnosti.
              </p>
              <p>
                Poskytnutie zvyšných osobných údajov je závislé výlučne od rozhodnutia klienta
                a prevádzkovateľ poskytnutím týchto údajov nepodmieňuje predaj tovaru alebo
                poskytovanie služieb.
              </p>
            </Section>

            <Section title="Informácie o právach dotknutej osoby">
              <p>
                Klient potvrdzuje, že mu boli riadne poskytnuté informácie o rozsahu spracúvaných
                osobných údajov a účele ich spracovania, a o práve klienta:
              </p>
              <ul className="space-y-2">
                {rights.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Kontakt">
              <p>
                S otázkami k spracúvaniu osobných údajov sa na nás obráťte na{" "}
                <a href="mailto:info@woodsteel.sk" className="text-gold underline">info@woodsteel.sk</a>{" "}
                alebo na čísle{" "}
                <a href="tel:+421904473111" className="text-gold underline">+421 904 473 111</a>.
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
