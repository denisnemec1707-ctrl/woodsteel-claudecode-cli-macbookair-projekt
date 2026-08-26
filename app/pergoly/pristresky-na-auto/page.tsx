import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";

export const metadata: Metadata = {
  title: "Prístrešky na auto - WoodSteel.sk",
  description:
    "Prístrešky na auto na mieru — hliníkové aj drevené. Statický výpočet pre vašu lokalitu, odvodnenie skryté v konštrukcii, vlastná SK výroba.",
  alternates: { canonical: "https://woodsteel.sk/pergoly/pristresky-na-auto/" },
};

export default function PristreskyNaAutoPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Pergoly", parentHref: "/pergoly" }}
      hero={{
        eyebrow: "Prístrešky na auto",
        title: (
          <>
            Prístrešky na auto, ktoré <span className="text-gold">vydržia počasie</span>.
          </>
        ),
        subtitle:
          "Konštrukcia na mieru, ktorá ochráni auto pred slnkom, snehom aj krupobitím. Jedno- alebo dvojstojisková, s odvodnením skrytým priamo v profiloch.",
        image:
          "/images/IMG_5562.jpg",
      }}
      intro={{
        title: "Prístrešok, ktorý odolá snehu aj vetru",
        body:
          "Každý prístrešok navrhujeme podľa snehovej oblasti a zaťaženia vetrom v mieste stavby — nie podľa katalógu. Hliníkové prevedenie je štíhle a bezúdržbové, drevené pôsobí prirodzene a lepšie sadne k starším domom.",
      }}
      features={[
        "Hliníkové aj drevené prevedenie",
        "Rozmery na mieru — pre jedno aj viac vozidiel",
        "Konštrukcia dimenzovaná na miestne podmienky",
        "Odvodnenie riešené priamo v konštrukcii",
        "Povrchová úprava vo farbe podľa vzorkovníka",
        "Záruka 5+ rokov",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("prístrešok") || c.toLowerCase().includes("carport")}
      stickyName="Prístrešok na auto"
    />
  );
}
