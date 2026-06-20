import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { zimnaZahradaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Drevené zimné záhrady - WoodSteel.sk",
  description:
    "Drevené zimné záhrady z BSH dreva. Teplo a charakter klasiky, izolačné dvojsklo, garancia 5+ rokov, vlastná SK výroba.",
  alternates: { canonical: "https://woodsteel.sk/zimne-zahrady/drevene-zimne-zahrady/" },
};

export default function DreveneZimneZahradyPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Zimné záhrady", parentHref: "/zimne-zahrady" }}
      hero={{
        eyebrow: "Drevené zimné záhrady",
        title: (
          <>
            Drevené zimné záhrady s <span className="text-gold">prirodzeným teplom.</span>
          </>
        ),
        subtitle:
          "Lepené BSH drevo dodáva priestoru teplo a charakter klasiky. Konštrukcia z tvarovo stálych profilov, garantovaná dlhá životnosť.",
        image:
          "https://newdev.woodsteel.sk/wp-content/uploads/2024/11/drevena-zimna-zahrada5.jpg",
        priceFrom: "14 990 €",
      }}
      intro={{
        title: "Drevo ako obytný materiál",
        body:
          "Drevené zimné záhrady prinášajú do interiéru teplo, ktoré hliník nikdy nedosiahne. Vhodné pre rodinné domy s drevenými alebo prírodnými prvkami. Pri správnej impregnácii vydrží konštrukcia generácie.",
      }}
      features={[
        "Lepené BSH drevo (Brettschichtholz)",
        "Izolačné dvojsklo Ug ≤ 1.0",
        "Sliding posuvné systémy",
        "Príprava na vykurovanie / klimatizáciu",
        "Voliteľné automatizované tienenie",
        "Garancia 5+ rokov",
        "Vlastná SK výroba",
        "Impregnácia proti UV a vlhkosti",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("drevená zimná") || c.toLowerCase().includes("zimná")}
      faqs={zimnaZahradaFaqs.slice(0, 5)}
      stickyName="Drevená zimná záhrada"
      stickyPriceFrom="14 990 €"
    />
  );
}
