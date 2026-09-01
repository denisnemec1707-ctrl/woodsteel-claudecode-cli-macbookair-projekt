import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";

export const metadata: Metadata = {
  title: "Prístrešky na auto - WoodSteel.sk",
  description:
    "Hliníkové prístrešky na auto na mieru — kotvené do domu alebo samostatne stojace. Odvodnenie skryté v konštrukcii, vlastná SK výroba.",
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
          "Každý prístrešok navrhujeme podľa snehovej oblasti a zaťaženia vetrom v mieste stavby — nie podľa katalógu. Hliníkové prevedenie je štíhle a bezúdržbové — prístrešok môže byť kotvený do domu alebo samostatne stojaci v priestore.",
      }}
      features={[
        "Kotvené do domu alebo samostatne stojace v priestore",
        "Povrchová úprava hliníka komaxit",
        "Príprava na neskoršie zasklenie",
        "Integrované LED osvetlenie ako voliteľný doplnok",
        "Možnosť osadenia tieniacej techniky (screenové rolety)",
        "Integrovaný žľab v konštrukcii",
        "Voľba základných a prémiových strešných krytín",
        "Záruka 5+ rokov",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("prístrešok") || c.toLowerCase().includes("carport")}
      stickyName="Prístrešok na auto"
    />
  );
}
