import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { pergolaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Hliníkové pergoly - WoodSteel.sk",
  description:
    "Bioklimatické hliníkové pergoly s nastaviteľnými lamelami. Bezúdržbová konštrukcia, prirodzene odtekajúca voda, voliteľné LED a screen rolety.",
  alternates: { canonical: "https://woodsteel.sk/pergoly/hlinikove-pergoly/" },
};

export default function HlinikovePergolyPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Pergoly", parentHref: "/pergoly" }}
      hero={{
        eyebrow: "Hliníkové pergoly",
        title: (
          <>
            Bioklimatické pergoly s <span className="text-gold">nastaviteľnými lamelami</span>.
          </>
        ),
        subtitle:
          "Hliník bez údržby. Nastaviteľné lamely v streche regulujú slnko aj prúdenie vzduchu. Plne integrované LED osvetlenie a tienenie po stranách.",
        image:
          "https://newdev.woodsteel.sk/wp-content/uploads/2026/03/hlinikova-pergola-senec.jpeg",
        priceFrom: "5 990 €",
      }}
      intro={{
        title: "Bioklimatický komfort",
        body:
          "Nastaviteľné hliníkové lamely v streche umožňujú regulovať množstvo slnečného svetla aj prúdenie vzduchu. V daždi sa automaticky uzatvoria a odvádzajú vodu cez integrovaný systém v stĺpoch.",
      }}
      features={[
        "Bioklimatické nastaviteľné lamely",
        "Hliník bez údržby (eloxovaný)",
        "Príprava na neskoršie zasklenie",
        "Voliteľné motorické ovládanie cez app",
        "Integrované LED osvetlenie",
        "Screen rolety po stranách",
        "Odtokový systém v stĺpoch",
        "Garancia 5+ rokov",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("hliníková pergola") || c.toLowerCase().includes("pergola")}
      faqs={pergolaFaqs.slice(0, 5)}
      stickyName="Hliníková pergola"
      stickyPriceFrom="5 990 €"
    />
  );
}
