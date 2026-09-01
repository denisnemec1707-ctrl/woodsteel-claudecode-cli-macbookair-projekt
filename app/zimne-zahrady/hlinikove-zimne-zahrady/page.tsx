import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { zimnaZahradaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Hliníkové zimné záhrady - WoodSteel.sk",
  description:
    "Hliníkové zimné záhrady na mieru. Sliding systémy, bezúdržbová konštrukcia s úpravou komaxit, garancia 5+ rokov.",
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
          "Ľahká konštrukcia a veľkorysé presklenie, ktoré do priestoru pustí maximum svetla. Čisté línie, ktoré nekonkurujú výhľadu, a priestor pripravený na celoročné využitie — v lete aj uprostred zimy.",
        image:
          "/images/zimna-zahrada-hamuliakovo.jpeg",
      }}
      intro={{
        title: "Krásny dizajn, maximum svetla",
        body:
          "Hliníková zimná záhrada poskytuje ideálny pomer cena/výkon — spravíme ju v sezónnom alebo aj celoročnom prevedení, stačí si vybrať variant. Konštrukcia je bezúdržbová a s povrchovou úpravou komaxit vydrží desaťročia.",
      }}
      features={[
        "Povrchová úprava hliníka komaxit",
        "Zasklenie rámové / bezrámové",
        "Sliding posuvné systémy",
        "Integrované LED osvetlenie ako voliteľný doplnok",
        "Možnosť osadenia tieniacej techniky (screenové rolety)",
        "Integrovaný žľab v konštrukcii",
        "Voľba základných a prémiových strešných krytín",
        "Voliteľné kúrenie / klimatizácia",
        "Záruka 5+ rokov",
        "Vlastná SK výroba",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("zimná") && !c.toLowerCase().includes("drevená")}
      faqs={zimnaZahradaFaqs.slice(0, 5)}
      stickyName="Hliníková zimná záhrada"
    />
  );
}
