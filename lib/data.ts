// Real assets reused from existing WoodSteel sites (prod + dev media library).

export const team = [
  {
    name: "Branislav Kmec",
    role: "Zakladateľ",
    photo: "/images/BranoKmecBG.png",
    quote:
      "Moja vízia je napredovať, držať krok s trendmi a zároveň si zachovať ľudský, proklientský prístup.",
  },
  {
    name: "Denis Nemec",
    role: "Zakladateľ",
    photo: "/images/DenisNemecBG.png",
    quote:
      "Mojou prioritou je, aby sme ako spoločnosť doručovali čo najvyššiu hodnotu našim zákazníkom.",
  },
  {
    name: "Peter Kurilla",
    role: "Riaditeľ obchodného oddelenia",
    photo: "/images/PeterKurillaBG.png",
    quote: "V obore sa pohybujem už viac než 5 rokov.",
  },
  {
    name: "Viktor Farda",
    role: "Senior obchodný manažér",
    photo: "/images/ViktorFardaBG.png",
    quote:
      "Pôsobím na pozícii senior obchodného manažéra s dlhoročnými skúsenosťami.",
  },
];

// `location` je voliteľná — pri fotkách, kde obec zatiaľ nemáme doplnenú,
// karta zobrazí len kategóriu namiesto prázdneho riadka.
export const realizations: {
  location?: string;
  category: string;
  image: string;
}[] = [
  {
    location: "BA — Vrakuňa",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola-BA-Vrakuna.jpeg",
  },
  {
    location: "Hamuliakovo",
    category: "Zimná záhrada",
    image:
      "/images/zimna-zahrada-hamuliakovo.jpeg",
  },
  {
    location: "Senec",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola-senec.jpeg",
  },
  {
    location: "Rovinka",
    category: "Zasklenie terasy",
    image:
      "/images/zimna-zahrada-rovinka.jpeg",
  },
  {
    location: "Dunajská Lužná",
    category: "Zimná záhrada",
    image:
      "/images/zimna-zahrada-dunajska-luzna.jpeg",
  },
  {
    location: "Trenčín — Soblahov",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola-trencin.jpeg",
  },
  {
    location: "Kittsee",
    category: "Zimná záhrada",
    image:
      "/images/zimna-zahrada-kittse.jpeg",
  },
  {
    location: "BA — Podunajské Biskupice",
    category: "Zimná záhrada",
    image:
      "/images/zimna-zahrada-podunajske-biskupice.jpeg",
  },
  {
    location: "Horné Janíky",
    category: "Hliníková pergola",
    image:
      "/images/zimna-zahrada-horne-janiky-1.jpeg",
  },
  // Drevené realizácie prevzaté z woodsteel.sk — konštrukcia je skutočne
  // drevená, preto majú vlastnú kategóriu a nemiešajú sa s hliníkovými.
  {
    location: "Rovinka",
    category: "Drevená zimná záhrada",
    image:
      "/images/drevena-zimna-zahrada2.jpg",
  },
  {
    location: "Rovinka",
    category: "Drevená zimná záhrada",
    image:
      "/images/drevena-zimna-zahrada3.jpg",
  },
  {
    location: "Rovinka",
    category: "Drevená zimná záhrada",
    image:
      "/images/drevena-zimna-zahrada4.jpg",
  },
  {
    location: "Rovinka",
    category: "Drevená zimná záhrada",
    image:
      "/images/drevena-zimna-zahrada5.jpg",
  },
  // Ďalšie hliníkové pergoly prevzaté z woodsteel.sk
  {
    location: "Ivanka pri Dunaji",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola2.jpg",
  },
  {
    location: "Neded",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola3.jpg",
  },
  {
    location: "Trenčín",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola4.jpg",
  },
  {
    location: "BA — Vrakuňa",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola5.jpg",
  },
  // Prístrešky na auto — vlastné fotografie zákazníka
  {
    location: "BA — Koliba",
    category: "Prístrešok na auto",
    image:
      "/images/pristresok-na-auto-2.jpg",
  },
  {
    location: "Trenčianske Teplice",
    category: "Prístrešok na auto",
    image:
      "/images/pristresok-na-auto-3.jpg",
  },
  {
    location: "Viničné",
    category: "Prístrešok na auto",
    image:
      "/images/pristresok-na-auto-4.jpg",
  },
];

// Skutočné recenzie zákazníkov. Text je prevzatý doslovne — citáty
// neupravujeme. `location` a `time` sú voliteľné, karta ich zobrazí,
// len ak sú vyplnené.
export const reviews: {
  name: string;
  text: string;
  location?: string;
  time?: string;
}[] = [
  {
    name: "Alena C.",
    text: "Zimnú záhradu od Woodsteelu vrele odporúčame. Je nad očakávanie 👌 Ak ju chcete užívať už na jar, neváhajte si ju objednať už teraz. Ďakujeme zvlášť pánovi Kurillovi za vysoko profesionálne jednanie so zákazníkom 👍",
  },
  {
    name: "Naďa G.",
    text: "Dlho sme sa rozhodovali nad firmou, ktorú si zvolíme a som nesmierne rada, že som sa rozhodla práve pre Woodsteel. Neskutočne milý a ochotný personál s promptnou komunikáciou a profesionálnym prístupom. Zimnú záhradu nám dokončili ešte pred termínom, čo nás potešilo ešte viac. Za nás určite odporúčam. :)",
  },
  {
    name: "Radka Š.",
    text: "Určite odporúčam, výborná komunikácia od začiatku až do konca, odborný a profesionálny prístup, precízna práca a vysoká kvalita. O zákazníka sa starajú. Výsledok skutočne stojí za to.",
  },
  {
    name: "Veronika H.",
    text: "Spoločnosť nám montovala hliníkovú pergolu. Od prvého kontaktu perfektná a zrozumiteľná komunikácia, rýchle dodanie a montáž prebehla bez problémov za pár hodín. Perfektná práca, ďakujeme :)",
  },
  {
    name: "Roman Z.",
    text: "Máme od nich presklenie terasy. Perfektná komunikácia s obchodným zástupcom, profesionálne zameranie a montáž. Môžem iba odporučiť. 👍",
  },
  {
    name: "Tomáš M.",
    text: "Dostal som odporúčanie od spokojného suseda a taktiež môžem len odporučiť. Boli mi vysvetlené všetky detaily, ktoré som potreboval ujasniť. Samotná realizácia behom jedného pracovného dňa. Známa skúsenosť hodná recenzie. Určite odporučím rád aj ja ďalej.",
  },
];

export const categories = [
  {
    slug: "pergoly",
    name: "Pergoly",
    description:
      "Hliníkové pergoly s moderným vzhľadom alebo klasické drevené konštrukcie z lepeného BSH dreva. Príprava na neskoršie zasklenie.",
    image:
      "/images/hlinikova-pergola-senec.jpeg",
  },
  {
    slug: "zimne-zahrady",
    name: "Zimné záhrady",
    description:
      "Plnohodnotná obytná zóna nezávislá od počasia. Izolačné dvojsklo, sliding systémy s plynulým otváraním.",
    image:
      "/images/zimna-zahrada-rovinka.jpeg",
  },
  {
    slug: "zasklenie-teras",
    name: "Zasklenie terás",
    description:
      "Premena otvorenej terasy na chránený priestor počas chladnejších mesiacov. Plne posuvné, otvorené v lete, uzavreté v zime.",
    image:
      "/images/zimna-zahrada-horne-janiky.jpeg",
  },
];

// `meta` = krátky časový alebo vecný údaj ku kroku
export const process = [
  { n: "01", title: "Dopyt", meta: "Do hodiny", description: "Zavoláte alebo napíšete." },
  { n: "02", title: "Obhliadka", meta: "Bezplatne", description: "Prídeme zamerať priestor." },
  { n: "03", title: "Cenová ponuka", meta: "Do 48 hodín", description: "Cenová ponuka na mieru." },
  { n: "04", title: "Výroba", meta: "Vlastná dielňa", description: "Vyrábame na Slovensku." },
  { n: "05", title: "Montáž", meta: "Na kľúč", description: "Postavíme a odovzdáme." },
];

// Číslo je vždy prvé — pás ho zobrazuje veľké a odpočítava od nuly,
// popis pod ním musí na číslo nadväzovať.
// Poradie sleduje to, čo zákazníka pri rozhodovaní zaujíma najviac:
// koľko toho postavíme → akú istotu dostane → kam všade chodíme →
// ako rýchlo sa ozveme. Posledný údaj vedie priamo k dopytu.
export const stats = [
  { value: "250+", label: "Realizácií ročne" },
  { value: "5+", label: "Rokov záruka" },
  { value: "5", label: "Krajín pôsobenia" },
  { value: "48h", label: "Do odoslania cenovej ponuky" },
];

// `match` = cesty, pri ktorých sa položka označí ako aktívna (prefixová zhoda).
// Ak chýba, použije sa `href`.
export const navigation = [
  {
    label: "Produkty",
    href: "/pergoly",
    match: ["/pergoly", "/zimne-zahrady", "/zasklenie-teras"],
    // Dve úrovne — kategória a jej prevedenia, rovnako ako na woodsteel.sk
    submenu: [
      {
        label: "Pergoly",
        href: "/pergoly",
        items: [
          { label: "Hliníkové pergoly", href: "/pergoly/hlinikove-pergoly" },
          { label: "Drevené pergoly", href: "/pergoly/drevene-pergoly" },
          { label: "Prístrešky na auto", href: "/pergoly/pristresky-na-auto" },
        ],
      },
      {
        label: "Zimné záhrady",
        href: "/zimne-zahrady",
        items: [
          { label: "Hliníkové zimné záhrady", href: "/zimne-zahrady/hlinikove-zimne-zahrady" },
          { label: "Drevené zimné záhrady", href: "/zimne-zahrady/drevene-zimne-zahrady" },
        ],
      },
      {
        label: "Zasklenie terás",
        href: "/zasklenie-teras",
        items: [
          { label: "Rámové zasklenie terás", href: "/zasklenie-teras/ramove-zasklenie" },
          { label: "Bezrámové zasklenie terás", href: "/zasklenie-teras/bezramove-zasklenie" },
        ],
      },
    ],
  },
  { label: "Realizácie", href: "/realizacie" },
  { label: "Showroom", href: "/showroom" },
  { label: "Články", href: "/clanky" },
  { label: "O nás", href: "/o-nas" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];
