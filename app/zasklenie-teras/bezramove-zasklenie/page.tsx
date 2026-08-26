import type { Metadata } from "next";
import { GlazingSystemPage } from "@/components/GlazingSystemPage";

export const metadata: Metadata = {
  title: "Bezrámové zasklenie terás - WoodSteel.sk",
  description:
    "Bezrámový posuvný systém na zasklenie terasy. Bezpečnostné jednosklo, zasklenie až do výšky 3 metrov, minimalistický vzhľad bez viditeľných rámov.",
  alternates: { canonical: "https://woodsteel.sk/zasklenie-teras/bezramove-zasklenie/" },
};

export default function BezramoveZasklenniePage() {
  return (
    <GlazingSystemPage
      tag="Bezrámový systém"
      name="Bezrámový posuvný systém"
      claim="Zasklenie terasy ochráni proti vetru a dažďu."
      description="Bezrámový posuvný systém predstavuje dizajnové riešenie pre náročnejších zákazníkov, ktorí hľadajú moderný a minimalistický vzhľad bez viditeľných rámov. Využíva bezpečnostné jednosklo, ktoré umožňuje zaskliť priestory až do výšky 3 metrov. Poskytuje nielen spoľahlivú ochranu pred vetrom, dažďom, snehom a nečistotami, ale aj luxusný, prémiový vzhľad."
      features={[
        "zaisťuje ničím nerušený výhľad do záhrady",
        "prekážka proti násilnému vniknutiu",
        "poistky proti vysadeniu skiel",
        "ľahké a rýchle ovládanie aj údržba",
        "voľba počtu krídiel i spôsobu otvárania",
      ]}
      image="/images/zasklenie-bezramovy-system.jpg"
    />
  );
}
