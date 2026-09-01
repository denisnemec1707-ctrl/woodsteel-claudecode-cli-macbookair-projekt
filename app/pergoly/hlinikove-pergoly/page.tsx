import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { pergolaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Hliníkové pergoly - WoodSteel.sk",
  description:
    "Hliníkové pergoly na mieru s integrovaným žľabom a prípravou na neskoršie zasklenie. Odolné voči počasiu, ľahké na údržbu, s modernými líniami.",
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
            Hliníková pergola <span className="text-gold">podľa vašich predstáv</span>.
          </>
        ),
        subtitle:
          "Odolná voči poveternostným vplyvom, ľahká na údržbu a s moderným vzhľadom. Cenovo dostupný systém s integrovaným žľabom a rôznymi možnosťami strešnej krytiny.",
        image:
          "/images/hlinikova-pergola-senec.jpeg",
      }}
      intro={{
        title: "Pergola, ktorá rastie s vami",
        body:
          "Rozmery, odtieň aj strešnú krytinu volíme podľa vášho domu. Kedykoľvek ju doplníte o bočné screen rolety proti slnku a vetru — a neskôr aj o zasklenie.",
      }}
      features={[
        "Povrchová úprava hliníka komaxit",
        "Príprava na neskoršie zasklenie",
        "Integrované LED osvetlenie ako voliteľný doplnok",
        "Možnosť osadenia tieniacej techniky (screenové rolety)",
        "Integrovaný žľab v konštrukcii",
        "Voľba základných a prémiových strešných krytín",
        "Záruka 5+ rokov",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("hliníková pergola") || c.toLowerCase().includes("pergola")}
      faqs={pergolaFaqs.slice(0, 5)}
      stickyName="Hliníková pergola"
    />
  );
}
