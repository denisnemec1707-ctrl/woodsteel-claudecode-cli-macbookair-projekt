export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: "Pergoly" | "Zimné záhrady" | "Zasklenia" | "Všeobecné";
};

const PLACEHOLDER_IMG =
  "https://newdev.woodsteel.sk/wp-content/uploads/2026/03/zimna-zahrada-rovinka.jpeg";

export const blogPosts: BlogPost[] = [
  {
    slug: "ako-spravne-kotvit-pergolu-do-fasady-domu",
    title: "Ako správne kotviť pergolu do fasády domu",
    date: "2026-03-03",
    image:
      "https://woodsteel.sk/wp-content/uploads/2026/03/ako-spravne-kotvit-pergolu.jpg",
    excerpt:
      "Pripojenie pergoly k stene domu sa zdá byť jednoduché — ale spravený detail rozhoduje o desaťročiach bezproblémovej prevádzky. Aké sú najčastejšie chyby a ako sa im vyhnúť.",
    category: "Pergoly",
  },
  {
    slug: "home-office-pod-pergolou-praca-na-cerstvom-vzduchu-bez-kompromisov",
    title: "Home office pod pergolou: práca na čerstvom vzduchu bez kompromisov",
    date: "2026-03-03",
    image:
      "https://woodsteel.sk/wp-content/uploads/2026/03/home-office-pod-pergolou.jpg",
    excerpt:
      "Stabilná wi-fi, tieň, ochrana pred slnkom aj dažďom — pergola je dnes plnohodnotný outdoor pracovný priestor. Pozrime sa na praktické tipy.",
    category: "Pergoly",
  },
  {
    slug: "ako-vyuzit-pergolu-naplno-pocas-celeho-roka",
    title: "Ako využiť pergolu naplno počas celého roka",
    date: "2026-03-03",
    image:
      "https://woodsteel.sk/wp-content/uploads/2026/03/ako-vyuzit-pergolu.jpg",
    excerpt:
      "Bočné screen rolety, infražiariče, LED osvetlenie a textílie — niekoľko doplnkov premení pergolu z letného doplnku na celoročnú obľúbenú zónu.",
    category: "Pergoly",
  },
  {
    slug: "ako-zladit-pergolu-alebo-zimnu-zahradu",
    title: "Ako zladiť pergolu alebo zimnú záhradu s vašim domom",
    date: "2025-11-06",
    image:
      "https://woodsteel.sk/wp-content/uploads/2025/11/ako-zladit-zimnu-zahradu.jpg",
    excerpt:
      "Materiál, farba, profilácia — výber detailov rozhoduje o tom, či vyzerá konštrukcia ako prirodzené pokračovanie domu alebo ako prilepený doplnok.",
    category: "Všeobecné",
  },
  {
    slug: "ako-vyuzit-zimnu-zahradu",
    title: "Ako využiť zimnú záhradu naplno",
    date: "2025-11-06",
    image:
      "https://woodsteel.sk/wp-content/uploads/2025/11/vyuzitie-zimnej-zahrady.jpg",
    excerpt:
      "Obývačka, jedáleň, zimné herbárium alebo úplne nový obytný priestor — možnosti využitia zimnej záhrady sú širšie ako sa zdá.",
    category: "Zimné záhrady",
  },
  {
    slug: "udrzba-hlinikovej-pergoly",
    title: "Údržba hliníkovej pergoly",
    date: "2025-11-06",
    image:
      "https://woodsteel.sk/wp-content/uploads/2025/11/udrzba-hlinikovej-pergoly.jpg",
    excerpt:
      "Hliník je bezúdržbový — ale niekoľko jednoduchých krokov ročne predĺži životnosť a estetiku vašej pergoly o desaťročia.",
    category: "Pergoly",
  },
  {
    slug: "zimna-zahrada-alebo-pergola-co-je-vhodnejsie",
    title: "Zimná záhrada alebo pergola — čo je vhodnejšie?",
    date: "2025-09-28",
    image: PLACEHOLDER_IMG,
    excerpt:
      "Investícia do outdoor priestoru — porovnanie dvoch najobľúbenejších riešení podľa rozpočtu, lokality, štýlu domu aj plánovaného využitia.",
    category: "Všeobecné",
  },
  {
    slug: "premena-terasy-na-zimnu-zahradu",
    title: "Premena terasy na zimnú záhradu",
    date: "2025-06-07",
    image: PLACEHOLDER_IMG,
    excerpt:
      "Aké možnosti máte pri premene existujúcej terasy na plne uzatvárateľnú zimnú záhradu — od jednoduchého zasklenia po kompletnú konštrukciu.",
    category: "Zimné záhrady",
  },
  {
    slug: "zimna-zahrada-ako-investicia",
    title: "Zimná záhrada ako investícia",
    date: "2025-06-07",
    image: PLACEHOLDER_IMG,
    excerpt:
      "Ako sa zvýši hodnota nehnuteľnosti s pridanou zimnou záhradou? Pohľad na návratnosť investície z viacerých uhlov.",
    category: "Zimné záhrady",
  },
  {
    slug: "zasklenie-terasy-a-jej-vyhody",
    title: "Zasklenie terasy a jej výhody",
    date: "2025-04-14",
    image: PLACEHOLDER_IMG,
    excerpt:
      "Posuvné systémy umožňujú mať otvorenú terasu v lete a uzavretý priestor v zime. Aké systémy existujú a ktorý si vybrať.",
    category: "Zasklenia",
  },
  {
    slug: "poistenie-zimnej-zahrady",
    title: "Poistenie zimnej záhrady — na čo si dať pozor",
    date: "2025-01-21",
    image: PLACEHOLDER_IMG,
    excerpt:
      "Krupobitie, víchor, vandalizmus — aké riziká pokrýva štandardné poistenie nehnuteľnosti a kedy je potrebné dopoistenie.",
    category: "Zimné záhrady",
  },
  {
    slug: "ako-si-vybrat-zimnu-zahradu",
    title: "Ako si vybrať zimnú záhradu?",
    date: "2024-11-29",
    image: PLACEHOLDER_IMG,
    excerpt:
      "Hliník vs. drevo, celoročná vs. sezónna, na mieru vs. typová — sprievodca rozhodovaním podľa vašich potrieb a rozpočtu.",
    category: "Zimné záhrady",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("sk-SK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
