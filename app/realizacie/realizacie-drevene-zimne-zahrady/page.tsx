import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizácie - Drevené zimné záhrady - WoodSteel.sk",
  description: "Naše dokončené realizácie drevených zimných záhrad — BSH drevené konštrukcie.",
  alternates: { canonical: "https://woodsteel.sk/realizacie/realizacie-drevene-zimne-zahrady/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizácie — <span className="text-gold">drevené zimné záhrady</span>.</>}
      subtitle="Drevené BSH zimné záhrady, ktoré priniesli teplo a charakter do reálnych domácností."
      filter={(c) => c.toLowerCase().includes("drevená zimná")}
    />
  );
}
