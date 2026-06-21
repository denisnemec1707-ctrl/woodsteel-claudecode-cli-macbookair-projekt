import seoExport from "./seo-export.json";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: "Pergoly" | "Zimné záhrady" | "Zasklenia" | "Všeobecné";
  contentHtml?: string;
  contentLength?: number;
};

const PLACEHOLDER_IMG =
  "/images/zimna-zahrada-rovinka.jpeg";

type SeoEntry = {
  path: string;
  content_html?: string;
  content_text_length?: number;
};
const seoMap = new Map<string, SeoEntry>(
  (seoExport as SeoEntry[]).map((e) => [e.path.replace(/^\//, "").replace(/\/$/, ""), e])
);

function enrich(post: Omit<BlogPost, "contentHtml" | "contentLength">): BlogPost {
  const entry = seoMap.get(post.slug);
  return {
    ...post,
    contentHtml: entry?.content_html,
    contentLength: entry?.content_text_length,
  };
}

export const blogPosts: BlogPost[] = [
  enrich({
    slug: "ako-spravne-kotvit-pergolu-do-fasady-domu",
    title: "Ako správne kotviť pergolu do fasády domu",
    date: "2026-03-03",
    image: "/images/ako-spravne-kotvit-pergolu.jpg",
    excerpt: "Pripojenie pergoly k stene domu sa zdá byť jednoduché — ale spravený detail rozhoduje o desaťročiach bezproblémovej prevádzky. Aké sú najčastejšie chyby a ako sa im vyhnúť.",
    category: "Pergoly",
  }),
  enrich({
    slug: "home-office-pod-pergolou-praca-na-cerstvom-vzduchu-bez-kompromisov",
    title: "Home office pod pergolou: práca na čerstvom vzduchu bez kompromisov",
    date: "2026-03-03",
    image: "/images/home-office-pod-pergolou.jpg",
    excerpt: "Stabilná wi-fi, tieň, ochrana pred slnkom aj dažďom — pergola je dnes plnohodnotný outdoor pracovný priestor. Pozrime sa na praktické tipy.",
    category: "Pergoly",
  }),
  enrich({
    slug: "ako-vyuzit-pergolu-naplno-pocas-celeho-roka",
    title: "Ako využiť pergolu naplno počas celého roka",
    date: "2026-03-03",
    image: "/images/ako-vyuzit-pergolu.jpg",
    excerpt: "Bočné screen rolety, infražiariče, LED osvetlenie a textílie — niekoľko doplnkov premení pergolu z letného doplnku na celoročnú obľúbenú zónu.",
    category: "Pergoly",
  }),
  enrich({
    slug: "ako-zladit-pergolu-alebo-zimnu-zahradu",
    title: "Ako zladiť pergolu alebo zimnú záhradu s vašim domom",
    date: "2025-11-06",
    image: "/images/ako-zladit-zimnu-zahradu.jpg",
    excerpt: "Materiál, farba, profilácia — výber detailov rozhoduje o tom, či vyzerá konštrukcia ako prirodzené pokračovanie domu alebo ako prilepený doplnok.",
    category: "Všeobecné",
  }),
  enrich({
    slug: "ako-vyuzit-zimnu-zahradu",
    title: "Ako využiť zimnú záhradu naplno",
    date: "2025-11-06",
    image: "/images/vyuzitie-zimnej-zahrady.jpg",
    excerpt: "Obývačka, jedáleň, zimné herbárium alebo úplne nový obytný priestor — možnosti využitia zimnej záhrady sú širšie ako sa zdá.",
    category: "Zimné záhrady",
  }),
  enrich({
    slug: "udrzba-hlinikovej-pergoly",
    title: "Údržba hliníkovej pergoly",
    date: "2025-11-06",
    image: "/images/udrzba-hlinikovej-pergoly.jpg",
    excerpt: "Hliník je bezúdržbový — ale niekoľko jednoduchých krokov ročne predĺži životnosť a estetiku vašej pergoly o desaťročia.",
    category: "Pergoly",
  }),
  enrich({
    slug: "zimna-zahrada-alebo-pergola-co-je-vhodnejsie",
    title: "Zimná záhrada alebo pergola — čo je vhodnejšie?",
    date: "2025-09-28",
    image: "/images/zimna-zahrada-pergola.jpg",
    excerpt: "Investícia do outdoor priestoru — porovnanie dvoch najobľúbenejších riešení podľa rozpočtu, lokality, štýlu domu aj plánovaného využitia.",
    category: "Všeobecné",
  }),
  enrich({
    slug: "premena-terasy-na-zimnu-zahradu",
    title: "Premena terasy na zimnú záhradu",
    date: "2025-06-07",
    image: "/images/premena-terasy.jpg",
    excerpt: "Aké možnosti máte pri premene existujúcej terasy na plne uzatvárateľnú zimnú záhradu — od jednoduchého zasklenia po kompletnú konštrukciu.",
    category: "Zimné záhrady",
  }),
  enrich({
    slug: "zimna-zahrada-ako-investicia",
    title: "Zimná záhrada ako investícia",
    date: "2025-06-07",
    image: "/images/zimna-zahrada-investicia.jpg",
    excerpt: "Ako sa zvýši hodnota nehnuteľnosti s pridanou zimnou záhradou? Pohľad na návratnosť investície z viacerých uhlov.",
    category: "Zimné záhrady",
  }),
  enrich({
    slug: "zasklenie-terasy-a-jej-vyhody",
    title: "Zasklenie terasy a jej výhody",
    date: "2025-04-14",
    image: "/images/zasklenie-terasy-blog.jpg",
    excerpt: "Posuvné systémy umožňujú mať otvorenú terasu v lete a uzavretý priestor v zime. Aké systémy existujú a ktorý si vybrať.",
    category: "Zasklenia",
  }),
  enrich({
    slug: "poistenie-zimnej-zahrady",
    title: "Poistenie zimnej záhrady — na čo si dať pozor",
    date: "2025-01-21",
    image: "/images/poistenie.jpg",
    excerpt: "Krupobitie, víchor, vandalizmus — aké riziká pokrýva štandardné poistenie nehnuteľnosti a kedy je potrebné dopoistenie.",
    category: "Zimné záhrady",
  }),
  enrich({
    slug: "ako-si-vybrat-zimnu-zahradu",
    title: "Ako si vybrať zimnú záhradu?",
    date: "2024-11-29",
    image: "/images/zimna-zahrada-blog.jpg",
    excerpt: "Hliník vs. drevo, celoročná vs. sezónna, na mieru vs. typová — sprievodca rozhodovaním podľa vašich potrieb a rozpočtu.",
    category: "Zimné záhrady",
  }),
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
