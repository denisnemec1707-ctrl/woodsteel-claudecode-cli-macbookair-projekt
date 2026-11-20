import seoExport from "./seo-export.json";
import { clanokSkloHtml } from "./clanok-sklo";
import { clanokVyuzitieHtml } from "./clanok-vyuzitie";
import { clanokRealizaciaHtml } from "./clanok-realizacia";
import { clanokMaterialHtml } from "./clanok-material";
import { clanokTienenieHtml } from "./clanok-tienenie";
import { clanokVizualizaciaHtml } from "./clanok-vizualizacia";
import { clanokCenaHtml } from "./clanok-cena";
import { clanokPristresokHtml } from "./clanok-pristresok";
import { clanokJesenHtml } from "./clanok-jesen";

/** Autori článkov — meno, rola a orezaná guľatá fotka. */
export const autori = {
  "denis-nemec":    { jmeno: "Denis Nemec",    role: "Zakladateľ",                  foto: "/images/autor-denis-nemec.jpg" },
  "peter-kurilla":  { jmeno: "Peter Kurilla",  role: "Riaditeľ obchodného oddelenia", foto: "/images/autor-peter-kurilla.jpg" },
  "branislav-kmec": { jmeno: "Branislav Kmec", role: "Zakladateľ",                  foto: "/images/autor-branislav-kmec.jpg" },
  "viktor-farda":   { jmeno: "Viktor Farda",   role: "Senior obchodný manažér",     foto: "/images/autor-viktor-farda.jpg" },
} as const;

export type AutorId = keyof typeof autori;

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  /** Zhrnutie do rámčeka nad článkom. Keď chýba, použije sa `excerpt`. */
  summary?: string;
  /** Kto článok napísal. Keď chýba, uvedie sa Denis Nemec. */
  author?: AutorId;
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

function enrich(post: Omit<BlogPost, "contentLength"> & { contentLength?: number }): BlogPost {
  const entry = seoMap.get(post.slug);
  return {
    ...post,
    // Vlastné HTML má prednosť — články písané tu nie sú v seo-exporte.
    contentHtml: post.contentHtml ?? entry?.content_html,
    contentLength: post.contentLength ?? entry?.content_text_length,
  };
}

export const blogPosts: BlogPost[] = [
  enrich({
    slug: "pristresok-na-auto-alebo-garaz",
    title: "Prístrešok na auto, alebo garáž? Čo z toho sa vám vyplatí",
    date: "2026-11-22",
    image: "/images/pristresok-na-auto-hero.jpg",
    author: "viktor-farda",
    excerpt:
      "Garáž rieši zabezpečenie a skladovanie, prístrešok rieši počasie. Čo prístrešok skutočne vyrieši, čo nie, aký veľký ho navrhnúť a na čo sa pri návrhu najčastejšie zabúda.",
    summary:
      "Ak auto nepotrebujete zabezpečiť ani v garáži nič skladovať, robí prístrešok väčšinu úžitku za zlomok nákladov. Spoľahlivo vyrieši sneh, námrazu v mrazivých nociach, UV žiarenie na laku a horúčavu v interiéri; nevyrieši krádež, skladovanie ani dážď vháňaný bokom. Rozmer navrhujte na používanie auta, nie na jeho dĺžku — s rezervou na otvorené dvere a nosič kolies a s výškou vyriešenou vopred. Najčastejšie sa zabúda na odtok vody, nosný podklad pre pätky, dimenzovanie na snehovú oblasť a prípravu vedenia pre osvetlenie či nabíjanie elektromobilu.",
    category: "Pergoly",
    contentHtml: clanokPristresokHtml,
  }),
  enrich({
    slug: "co-ovplyvnuje-cenu-pergoly-a-zimnej-zahrady",
    title: "Čo naozaj ovplyvňuje cenu pergoly a zimnej záhrady",
    date: "2026-11-21",
    image: "/images/co-ovplyvnuje-cenu.jpg",
    author: "peter-kurilla",
    excerpt:
      "Dve pergoly s rovnakou plochou sa môžu v cene líšiť dvojnásobne. Rozdiel nerobí marža, ale rozhodnutia o rozpone, streche a zasklení. Kde sa dá usporiť rozumne — a kde sa to nevypláca.",
    summary:
      "Cenu konštrukcie netvorí meter štvorcový, ale rozhodnutia pri návrhu. Najviac s ňou hýbe zasklenie, potom rozpon (stĺp navyše je oveľa lacnejší než silnejší nosník), typ strechy a zložitosť kotvenia a základov — položka, ktorú ponuky najčastejšie zamlčia. Materiál a farba rozhodujú menej, než sa čaká. Rozumne sa šetrí stĺpom namiesto dlhšieho rozponu, pevnou strechou a odložením doplnkov s pripraveným vedením; nešetrí sa na dimenzovaní na sneh, na vrstvenom skle v streche, na kovaní posuvov a na kotvení. Preto cenu posielame až po zameraní — do 24 hodín.",
    category: "Všeobecné",
    contentHtml: clanokCenaHtml,
  }),
  enrich({
    slug: "ako-si-predstavit-pergolu-pri-svojom-dome",
    title: "Ako si pergolu alebo zimnú záhradu predstaviť pri svojom dome",
    date: "2026-11-20",
    image: "/images/ukazka-po.jpg",
    author: "denis-nemec",
    excerpt:
      "Pergolu sa nedá vrátiť do obchodu — stojí pri dome dvadsať rokov. Tri spôsoby, ako si výsledok predstaviť ešte pred stavbou, a jedna vec, ktorú žiadny z nich nenahradí.",
    summary:
      "Predstavu o budúcej konštrukcii si možno urobiť tromi spôsobmi: z fotiek dokončených realizácií (hneď, ale bez vášho domu), vizualizáciou do fotky vášho domu (do minúty, zadarmo, umožní porovnať farby vedľa seba) alebo projektom od architekta (týždne a stovky eur, zmysel pri novostavbách a atypických zadaniach). Všetky tri riešia len vzhľad. Či konštrukcia na vašom dome vôbec ide, aké rozmery sa zmestia a koľko to bude stáť, určí až zameranie technikom — to nie je alternatíva k vizualizácii, ale ďalšia fáza. Poradie je logické: najskôr predstava, potom technik.",
    category: "Všeobecné",
    contentHtml: clanokVizualizaciaHtml,
  }),
  enrich({
    slug: "tienenie-a-prehrievanie-presklenych-priestorov",
    title: "Prečo sa presklený priestor prehrieva — a čo s tým naozaj funguje",
    date: "2026-11-19",
    image: "/images/stineni-prehrivani.jpg",
    author: "viktor-farda",
    excerpt:
      "Ľudia sa pýtajú, či nebude v zimnej záhrade v zime zima. V skutočnosti potom riešia júl. Prečo vonkajšie tienenie funguje a vnútorné žalúzie nie — a čo sa musí naplánovať vopred.",
    summary:
      "Presklený priestor sa prehrieva kvôli skleníkovému efektu: žiarenie prejde sklom dovnútra, ale teplo už von neodíde. Z toho vyplýva základné pravidlo — slnko treba zastaviť ešte pred sklom. Najúčinnejšie sú vonkajšie screen rolety, pri pergolách lamelová strecha; vnútorné žalúzie odstránia oslnenie, ale nie horúčavu. Reflexné sklo funguje trvale a bez obsluhy, hodí sa však skôr ako doplnok. Polovicu úspechu robí priečne vetranie, ktoré sa musí naplánovať pri návrhu. Najnáročnejšia je západná orientácia — nízke popoludňajšie slnko zastavia jedine svislé screeny.",
    category: "Všeobecné",
    contentHtml: clanokTienenieHtml,
  }),
  enrich({
    slug: "hlinik-alebo-drevo-material-konstrukcie",
    title: "Hliník, alebo drevo? Ako vybrať materiál konštrukcie",
    date: "2026-11-18",
    image: "/images/hlinik-nebo-drevo.jpg",
    author: "branislav-kmec",
    excerpt:
      "Hliník sa nekrúti a nepotrebuje starostlivosť, drevo má teplotu a k niektorým domom jednoducho sedí lepšie. Čím sa oba materiály líšia v praxi — a prečo pri dreve nikdy nepoužívame masívne hranoly.",
    summary:
      "Hliník je tvarovo stály, farebne stály a zvládne väčší rozpon na tenšom profile — preto sa hodí k novostavbám a všade, kde sa počíta s presklením a posuvmi. Drevo má teplotu a štruktúru a k starším či vidieckym domom sedí lepšie, ale vyžaduje obnovu lazúry po pár rokoch. Pri dreve používame výhradne lepené drevo, nie masívne hranoly: masív pracuje, krúti sa a praská. Oba materiály sa dajú kombinovať — najčastejšie drevená nosná konštrukcia s hliníkovým zasklením.",
    category: "Všeobecné",
    contentHtml: clanokMaterialHtml,
  }),
  enrich({
    slug: "ako-prebieha-realizacia-krok-za-krokom",
    title: "Ako prebieha realizácia krok za krokom: od prvého telefonátu po prevzatie",
    date: "2026-11-17",
    image: "/images/realizace-montaz.jpg",
    author: "peter-kurilla",
    excerpt:
      "Najčastejšia otázka po cenovej ponuke nie je o cene, ale o tom, ako to celé prebieha. Sedem krokov od prvého kontaktu po prevzatie, ako dlho trvajú a čo sa najčastejšie predĺži.",
    summary:
      "Realizácia má sedem krokov: prvý kontakt, bezplatné zameranie u vás doma, cenová ponuka do 24 hodín, zmluva so zálohou, výroba na mieru, montáž a prevzatie so zárukou. Zameranie je kľúčové — technik posudzuje stav fasády, spád terasy, odtok vody aj snehovú oblasť a až potom vzniká konkrétne riešenie. Montáž trvá pri pergole obvykle deň, pri zimnej záhrade dva až tri. Najdlhšia a najhoršie odhadnuteľná časť býva rozmýšľanie nad ponukou, preto s ňou počítajte, ak máte pevný termín.",
    category: "Všeobecné",
    contentHtml: clanokRealizaciaHtml,
  }),
  enrich({
    slug: "zimna-zahrada-ktora-sa-naozaj-pouziva",
    title: "Zimná záhrada, do ktorej si denne sadnete",
    date: "2026-11-16",
    image: "/images/zimni-zahrada-rano.jpg",
    excerpt:
      "Ranná káva, jedálenský stôl, pracovňa alebo miesto pre rastliny — zimné záhrady sa nakoniec využívajú inak, než si majitelia plánovali. A tri veci rozhodujú o tom, či do nej budete chodiť denne.",
    summary:
      "Zákazníci si zimnú záhradu zariaďujú kvôli jednej predstave a nakoniec ju používajú úplne inak — a viac. Najčastejšou odpoveďou je ranná káva, pretože za sklom si sadnete aj v januári. Veľa ľudí si tam presunie jedálenský stôl a do pôvodnej jedálne potom takmer nechodí. Ďalej sa objavuje pracovňa, prezimovanie rastlín, miesto pre deti počas dažďa a cvičenie. Zimné záhrady, ktoré sa naozaj používajú, majú tri veci spoločné: jeden jasný účel, pohodlné sedenie a vyriešené tienenie a svetlo.",
    category: "Zimné záhrady",
    contentHtml: clanokVyuzitieHtml,
  }),
  enrich({
    slug: "ake-sklo-do-zimnej-zahrady",
    title: "Aké sklo do zimnej záhrady: dvojsklo, trojsklo a bezpečnostné sklo v praxi",
    date: "2026-11-16",
    image: "/images/sklo-zimni-zahrada.jpg",
    excerpt:
      "Sklo tvorí väčšinu plochy aj väčšinu ceny zimnej záhrady a nedá sa neskôr vymeniť. Ako sa rozhodnúť medzi jednosklom, dvojsklom a trojsklom, prečo do strechy patrí vrstvené sklo a koľko snehu musí konštrukcia uniesť.",
    summary:
      "Zasklenie je pri zimnej záhrade najdôležitejšie a prakticky nevratné rozhodnutie. Jednosklo zastaví dážď a vietor, izolačné dvojsklo (Ug okolo 1,1) je rozumný štandard pre využívanie od jari do jesene aj s prikurovaním, trojsklo (Ug okolo 0,6) dáva zmysel len pri napojení na vykurovanie domu — je ťažšie a konštrukcia naň musí byť dimenzovaná od začiatku. Do strechy patrí vrstvené bezpečnostné sklo, pretože pri rozbití zostanú črepy na fólii. Proti letnému prehrievaniu pomáha reflexné sklo v kombinácii s vonkajším tienením. A hrúbku skla aj profilov určuje snehová oblasť.",
    category: "Zimné záhrady",
    contentHtml: clanokSkloHtml,
  }),
  enrich({
    slug: "terasa-a-zimna-zahrada-na-jesen-a-v-zime",
    title: "Terasa, ktorú používate aj v novembri",
    date: "2026-11-15",
    image: "/images/zimni-zahrada-podzim.jpg",
    author: "branislav-kmec",
    excerpt:
      "V júli sa dá sedieť vonku aj bez konštrukcie. V novembri je rozdiel najväčší — ak máte vyriešený vietor, teplo a svetlo. Čo sa musí naplánovať vopred a čo sa dá doplniť.",
    summary:
      "Zastrešenú terasu robí použiteľnou v chladnej polovici roka päť vecí: zastrešenie s dostatočným presahom, bočná ochrana proti vetru (screen alebo zasklenie), infražiarič, ktorý ohrieva ľudí a nie vzduch, teplé stmievateľné osvetlenie a funkčný odvod vody. Zastrešenie a odtok sa dodatočne nerobia, vykurovanie a svetlo sa doplniť dajú — ak sa na ne pri návrhu pripraví vedenie. Na jeseň stojí hodinu práce vyčistiť žľaby, vyskúšať odtok hadicou, vytiahnuť screeny nahor a umyť sklo. A ak chcete sedieť pod novou konštrukciou v máji, dopyt patrí do novembra, nie do apríla.",
    category: "Všeobecné",
    contentHtml: clanokJesenHtml,
  }),
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
    image: "/images/ako-vyuzit-pergolu-v2.jpg",
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
    image: "/images/vyuzitie-zimnej-zahrady-v2.jpg",
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
    image: "/images/zimna-zahrada-pergola-v2.jpg",
    excerpt: "Investícia do outdoor priestoru — porovnanie dvoch najobľúbenejších riešení podľa rozpočtu, lokality, štýlu domu aj plánovaného využitia.",
    category: "Všeobecné",
  }),
  enrich({
    slug: "premena-terasy-na-zimnu-zahradu",
    title: "Premena terasy na zimnú záhradu",
    date: "2025-06-07",
    image: "/images/premena-terasy-v2.jpg",
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

/**
 * Odhad času čítania v minútach.
 *
 * `contentLength` nesú staršie články zo seo-exportu; novšie si nesú rovno
 * HTML, takže z neho dĺžku dopočítame. 200 slov za minútu je bežný priemer.
 */
export function readingMinutes(post: BlogPost): number {
  const znaky =
    post.contentLength ??
    (post.contentHtml ? post.contentHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").length : 0);
  if (!znaky) return 3;
  return Math.max(2, Math.round(znaky / 6 / 200));
}

/** Kategórie, ktoré sa reálne vyskytujú — v poradí podľa počtu článkov. */
export function blogKategorie(): { nazev: string; pocet: number }[] {
  const mapa = new Map<string, number>();
  for (const p of blogPosts) mapa.set(p.category, (mapa.get(p.category) ?? 0) + 1);
  return [...mapa.entries()]
    .map(([nazev, pocet]) => ({ nazev, pocet }))
    .sort((a, b) => b.pocet - a.pocet);
}

/** Autor článku — s rozumným východiskovým stavom pre staršie články bez údaja. */
export function autorClanku(post: BlogPost) {
  return autori[post.author ?? "denis-nemec"];
}
