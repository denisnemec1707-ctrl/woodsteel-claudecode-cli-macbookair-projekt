import type { Metadata } from "next";
import { GlazingSystemPage } from "@/components/GlazingSystemPage";

export const metadata: Metadata = {
  title: "Rámové zasklenie terás - WoodSteel.sk",
  description:
    "Hliníkový rámový posuvný systém na zasklenie terasy. Jednosklo alebo izolačné dvojsklo, zasklenie až do výšky 2,7 metra, priaznivý pomer cena/výkon.",
  alternates: { canonical: "https://woodsteel.sk/zasklenie-teras/ramove-zasklenie/" },
};

export default function RamoveZasklenniePage() {
  return (
    <GlazingSystemPage
      tag="Rámový systém"
      name="Hliníkový rámový posuvný systém"
      claim="Ochráni vašu terasu proti vetru a dažďu."
      description="Posuvný rámový systém je vyrobený z vysoko kvalitných hliníkových profilov doplnených nerezovými komponentmi. Ako výplň používame jednosklo alebo izolačné dvojsklo, ktoré umožňuje zaskliť priestory až do výšky 2,7 metra. Pokiaľ hľadáte priaznivý pomer cena/výkon, je rámový posuvný systém pre vás ideálnym riešením."
      features={[
        "chráni pred hlukom, prachom aj nepriazňou počasia",
        "prekážka proti násilnému vniknutiu",
        "poistky proti vysadeniu skiel",
        "jednoduchá montáž vďaka už skompletizovanému systému",
        "ľahké a rýchle ovládanie aj údržba",
        "voľba počtu krídiel i spôsobu otvárania",
      ]}
      image="/images/zasklenie-ramovy-system.jpg"
    />
  );
}
