import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizácie - Prístrešky na auto - WoodSteel.sk",
  description: "Naše dokončené realizácie prístreškov na auto — hliníkové aj drevené konštrukcie.",
  alternates: { canonical: "https://woodsteel.sk/realizacie/realizacie-pristresky-na-auto/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizácie — <span className="text-gold">prístrešky na auto</span>.</>}
      subtitle="Jednostojiskové a dvojstojiskové prístrešky postavené naším tímom."
      filter={(c) => c.toLowerCase().includes("prístrešok") || c.toLowerCase().includes("carport")}
    />
  );
}
