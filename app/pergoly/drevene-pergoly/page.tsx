import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { pergolaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Drevené pergoly - WoodSteel.sk",
  description:
    "Drevené pergoly na mieru z lepeného dreva. Prirodzené teplo, tvarová stálosť a príprava na neskoršie zasklenie. Vlastná SK výroba.",
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
          "Prirodzený materiál, ktorý priestoru dodá teplo a časom získa patinu. Sadne k tradičnej fasáde rovnako ako k novostavbe.",
        image:
          "/images/drevena-pergola-hero.jpg",
      }}
      intro={{
        title: "Prírodné drevo, ktoré vydrží",
        body:
          "Používame lepené drevo — vrstvenú konštrukciu, ktorá nepraská ani sa nekrúti a udrží tvar aj po rokoch. Povrchová úprava ju chráni pred slnkom a vlhkosťou, takže pergola starne pomaly a pekne.",
      }}
      features={[
        "Lepené drevo, ktoré nepraská ani sa nekrúti",
        "Povrchová úprava proti slnku a vlhkosti",
        "Integrované odvodnenie konštrukcie",
        "Pripravená na neskoršie zasklenie",
        "Voliteľné LED osvetlenie a bočné screen rolety",
        "Voľba základných a prémiových strešných krytín",
        "Záruka 5+ rokov",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("drevená pergola")}
      faqs={pergolaFaqs.slice(0, 5)}
      stickyName="Drevená pergola"
    />
  );
}
