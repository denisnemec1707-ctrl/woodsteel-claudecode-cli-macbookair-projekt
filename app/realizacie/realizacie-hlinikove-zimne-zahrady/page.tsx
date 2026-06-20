import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizácie - Hliníkové zimné záhrady - WoodSteel.sk",
  description: "Naše dokončené realizácie hliníkových zimných záhrad — štíhle profily, izolačné dvojsklo.",
  alternates: { canonical: "https://woodsteel.sk/realizacie/realizacie-hlinikove-zimne-zahrady/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizácie — <span className="text-gold">hliníkové zimné záhrady</span>.</>}
      subtitle="Štíhle hliníkové profily s veľkými presklenými plochami v reálnych domácnostiach."
      filter={(c) => c.toLowerCase().includes("hliníková zimná") || (c.toLowerCase().includes("zimná") && !c.toLowerCase().includes("drevená"))}
    />
  );
}
