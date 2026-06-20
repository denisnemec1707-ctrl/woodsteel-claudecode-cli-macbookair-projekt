import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizácie - Drevené pergoly - WoodSteel.sk",
  description: "Naše dokončené realizácie drevených pergol — z rodinných domov po celom Slovensku.",
  alternates: { canonical: "https://woodsteel.sk/realizacie/realizacie-drevene-pergoly/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizácie — <span className="text-gold">drevené pergoly</span>.</>}
      subtitle="BSH drevené konštrukcie z rodinných domov po celom Slovensku."
      filter={(c) => c.toLowerCase().includes("drevená pergola")}
    />
  );
}
