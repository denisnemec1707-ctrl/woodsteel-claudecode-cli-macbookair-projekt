import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizácie - Hliníkové pergoly - WoodSteel.sk",
  description: "Naše dokončené realizácie hliníkových pergol — bioklimatické konštrukcie s lamelami.",
  alternates: { canonical: "https://woodsteel.sk/realizacie/realizacie-hlinikove-pergoly/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizácie — <span className="text-gold">hliníkové pergoly</span>.</>}
      subtitle="Bioklimatické pergoly s nastaviteľnými lamelami z Bratislavy, Senca, Trenčína a ďalších lokalít."
      filter={(c) => c.toLowerCase().includes("hliníková pergola")}
    />
  );
}
