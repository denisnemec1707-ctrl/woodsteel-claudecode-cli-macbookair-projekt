/**
 * Zdieľané dáta pre AI vizualizáciu (klient aj API route).
 *
 * Engine je prevzatý z woodsteel-pricing (`/api/visualize`), ale tento web je
 * verejný — negeneruje teda obchodník s prihlásením, ale návštevník. Preto je
 * ponuka zjednodušená (produkt + farba) a výstup zamknutý za kontaktné údaje.
 */

export type ProduktVizu = "pergola" | "zimni_zahrada" | "pristresek" | "zaskleni";

export const PRODUKTY: {
  kod: ProduktVizu;
  nazev: string;
  popis: string;
  /** Anglický opis do promptu pre model */
  en: string;
  /** Kľúčové slová názvov súborov v public/reference */
  refKeywords: string[];
}[] = [
  {
    kod: "pergola",
    nazev: "Hliníková pergola",
    popis: "Zastrešenie terasy na štíhlych stĺpoch",
    en: "aluminium terrace pergola (roof canopy on slim aluminium posts)",
    refKeywords: ["pergola"],
  },
  {
    kod: "zimni_zahrada",
    nazev: "Zimná záhrada",
    popis: "Plne presklený hliníkový priestor",
    en: "winter garden (fully glazed aluminium conservatory)",
    refKeywords: ["zimna", "zahrada"],
  },
  {
    kod: "zaskleni",
    nazev: "Zasklenie terasy",
    popis: "Posuvné zasklenie existujúcej terasy",
    en: "terrace glazing system (sliding glass panels enclosing an existing covered terrace)",
    refKeywords: ["zimna", "zahrada"],
  },
  {
    kod: "pristresek",
    nazev: "Prístrešok na auto",
    popis: "Samostatne stojaci carport",
    en: "freestanding aluminium carport (flat-roof car shelter on slim posts)",
    refKeywords: ["pergola"],
  },
];

export const FARBY: {
  kod: string;
  nazev: string;
  swatch: string;
  refKeyword?: string;
  /** Najčastejšie objednávané prevedenie — na webe dostane štítok. */
  oblibene?: boolean;
}[] = [
  { kod: "RAL 7016 — antracit, matný", nazev: "Antracit", swatch: "#383E42", refKeyword: "antracit", oblibene: true },
  { kod: "PE 7016 TD — antracit strukturovaný", nazev: "Antracit štruktúra", swatch: "#44494C", refKeyword: "antracit" },
  { kod: "RAL 9010 — biela", nazev: "Biela", swatch: "#F2F0EA", refKeyword: "biela" },
  { kod: "RAL 9006 — strieborná metalíza", nazev: "Strieborná", swatch: "#A7ABAD", refKeyword: "siva" },
  { kod: "P8017T — tmavohnedá štruktúrovaná", nazev: "Tmavohnedá", swatch: "#4A352E", refKeyword: "tmavohneda" },
  { kod: "Lepené drevo (BSH), transparentná lazúra", nazev: "Drevo", swatch: "#A9682F", refKeyword: "drevo" },
];

/** Kraje SR — pre formulár aj pre smerovanie leadu obchodníkovi. */
export const KRAJE = [
  "Bratislavský kraj",
  "Trnavský kraj",
  "Trenčiansky kraj",
  "Nitriansky kraj",
  "Žilinský kraj",
  "Banskobystrický kraj",
  "Prešovský kraj",
  "Košický kraj",
];

/** Prostredie/scéna, do ktorej sa konštrukcia zasadí, keď zákazník nenahrá fotku domu. */
export const PROSTREDI: { kod: string; nazev: string; en: string }[] = [
  {
    kod: "moderni",
    nazev: "Moderná novostavba",
    en: "a contemporary single-family house with white render, anthracite windows and a flat or low-pitched roof, on a tidy lawn terrace",
  },
  {
    kod: "klasicky",
    nazev: "Klasický rodinný dom",
    en: "a traditional Central-European family house with light plaster facade, pitched tiled roof and a paved terrace with a mature garden",
  },
  {
    kod: "bungalov",
    nazev: "Bungalov",
    en: "a single-storey bungalow with large sliding windows opening onto a paved garden terrace",
  },
];
