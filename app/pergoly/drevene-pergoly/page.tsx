import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { pergolaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Drevené pergoly - WoodSteel.sk",
  description:
    "Drevené pergoly z lepeného BSH dreva s tvarovou stálosťou. Príprava na neskoršie zasklenie, vlastná SK výroba, 5+ rokov záruka.",
  alternates: { canonical: "https://woodsteel.sk/pergoly/drevene-pergoly/" },
};

export default function DrevenePergolyPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Pergoly", parentHref: "/pergoly" }}
      hero={{
        eyebrow: "Drevené pergoly",
        title: (
          <>
            Drevené pergoly s <span className="text-gold">charakterom klasiky</span>.
          </>
        ),
        subtitle:
          "Lepené BSH drevo s tvarovou stálosťou, voliteľná príprava na neskoršie zasklenie. Vhodné pre tradičné aj moderné fasády.",
        image:
          "/images/drevena-pergola.jpg",
        priceFrom: "4 990 €",
      }}
      intro={{
        title: "BSH drevo — pevnosť a estetika",
        body:
          "Lepené BSH drevo (Brettschichtholz) je vrstvená konštrukcia, ktorá kombinuje pevnosť ocele s teplom prírodného materiálu. Nepraská, nesúsadá a po impregnácii vydrží desaťročia.",
      }}
      features={[
        "Lepené BSH drevo (Brettschichtholz)",
        "Príprava na neskoršie zasklenie",
        "Integrovaný odvodňovací systém",
        "Voliteľné LED osvetlenie a screen rolety",
        "Garancia 5+ rokov",
        "Vlastná SK výroba a montáž",
        "Statický posudok pre vašu lokalitu",
        "Impregnácia proti UV a vlhkosti",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("drevená pergola") || c.toLowerCase().includes("pergola")}
      faqs={pergolaFaqs.slice(0, 5)}
      stickyName="Drevená pergola"
      stickyPriceFrom="4 990 €"
    />
  );
}
