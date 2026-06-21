import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";

export const metadata: Metadata = {
  title: "Prístrešky na auto - WoodSteel.sk",
  description:
    "Hliníkové alebo drevené prístrešky na auto. Ochrana pred slnkom, snehom a krupobitím. Jedno alebo dvojstojiskové prevedenia.",
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
            Prístrešky na auto. <span className="text-gold">Roky bez údržby.</span>
          </>
        ),
        subtitle:
          "Hliníkové alebo drevené konštrukcie chrániace auto pred slnkom, snehom a krupobitím. Jedno alebo dvojstojiskové prevedenia s integrovaným odvodnením.",
        image:
          "/images/IMG_5562.jpg",
        priceFrom: "3 490 €",
      }}
      intro={{
        title: "Pevnosť pre slovenské počasie",
        body:
          "Naše prístrešky sú dimenzované pre slovenské zaťaženie snehom (do 2 kN/m²) a vetrom. Hliníkové prevedenie je bezúdržbové, drevené pôsobí prirodzene a hodí sa k starším rodinným domom.",
      }}
      features={[
        "Hliník alebo drevo na výber",
        "Jedno alebo dvojstojisko",
        "Plech, polykarbonát alebo lamely",
        "Statický výpočet pre vašu lokalitu",
        "Integrovaný odvodňovací systém",
        "Voliteľné LED osvetlenie",
        "Garancia 5+ rokov",
        "Bez stavebného povolenia (drobná stavba)",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("prístrešok") || c.toLowerCase().includes("carport")}
      stickyName="Prístrešok na auto"
      stickyPriceFrom="3 490 €"
    />
  );
}
