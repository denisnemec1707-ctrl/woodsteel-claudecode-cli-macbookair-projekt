import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { zimnaZahradaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Hliníkové zimné záhrady - WoodSteel.sk",
  description:
    "Hliníkové zimné záhrady so štíhlymi profilmi. Izolačné dvojsklo, sliding systémy, bezúdržbová konštrukcia, garancia 5+ rokov.",
  alternates: { canonical: "https://woodsteel.sk/zimne-zahrady/hlinikove-zimne-zahrady/" },
};

export default function HlinikoveZimneZahradyPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Zimné záhrady", parentHref: "/zimne-zahrady" }}
      hero={{
        eyebrow: "Hliníkové zimné záhrady",
        title: (
          <>
            Hliníkové zimné záhrady. <span className="text-gold">Maximálny výhľad.</span>
          </>
        ),
        subtitle:
          "Štíhle profily (od 50 mm), izolačné dvojsklo, bezúdržbová konštrukcia s desaťročiami životnosti. Veľké presklené plochy + kvalitné tesnenie pre celoročné používanie.",
        image:
          "/images/zimna-zahrada-hamuliakovo.jpeg",
        priceFrom: "12 990 €",
      }}
      intro={{
        title: "Štíhle profily, maximálne sklo",
        body:
          "Hliníkové profily s prerušeným tepelným mostom umožňujú vytvoriť maximalisticky veľké zasklené plochy bez kompenzácie tepelného komfortu. Konštrukcia je bezúdržbová a po elektrolytickom eloxovaní vydrží desaťročia.",
      }}
      features={[
        "Štíhle hliníkové profily (od 50 mm)",
        "Prerušený tepelný most",
        "Izolačné dvojsklo Ug ≤ 1.0",
        "Sliding posuvné systémy",
        "Voliteľné kúrenie / klimatizácia",
        "Plne automatizované tienenie",
        "Garancia 5+ rokov",
        "Vlastná SK výroba",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("hliníková zimná") || c.toLowerCase().includes("zimná")}
      faqs={zimnaZahradaFaqs.slice(0, 5)}
      stickyName="Hliníková zimná záhrada"
      stickyPriceFrom="12 990 €"
    />
  );
}
