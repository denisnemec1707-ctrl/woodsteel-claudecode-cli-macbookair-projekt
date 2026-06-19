import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";
import { blogPosts, getBlogPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[55svh] flex items-end overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/95 via-brown/55 to-brown/20" />
          <div className="relative z-10 max-w-4xl mx-auto w-full px-5 lg:px-8 pb-14 pt-32">
            <Link
              href="/clanky"
              className="inline-flex items-center gap-2 text-xs text-eyebrow text-gold mb-5 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} /> Všetky články
            </Link>
            <div className="text-eyebrow text-cream/80 mb-3">{post.category}</div>
            <h1 className="text-display-2 font-extrabold text-white">
              {post.title}
            </h1>
            <div className="mt-5 inline-flex items-center gap-2 text-cream/75 text-sm">
              <Calendar size={14} />
              {formatDate(post.date)}
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="py-16 lg:py-24 bg-white">
          <div className="max-w-2xl mx-auto px-5 lg:px-8">
            <p className="text-lg text-charcoal leading-relaxed font-medium">
              {post.excerpt}
            </p>
            <div className="mt-10 space-y-6 text-charcoal/90 leading-[1.8] text-[17px]">
              <p>
                Téma <strong className="text-brown">{post.title.toLowerCase()}</strong>{" "}
                je u našich zákazníkov jedna z najčastejších. V tomto článku ju rozoberáme
                z praktického pohľadu — bez teórie z učebnice, s konkrétnymi
                odporúčaniami zo skúsenosti.
              </p>
              <p>
                Plné znenie článku spolu s detailnými technickými parametrami
                pripravujeme. Medzitým si pozrite naše realizácie alebo nás kontaktujte
                — radi vám vysvetlíme všetko priamo nad konkrétnym riešením pre váš dom.
              </p>
              <div className="my-12 p-6 lg:p-8 rounded-2xl bg-cream/50 border border-cream">
                <div className="text-eyebrow text-gold mb-2">Praktická rada</div>
                <p className="font-display font-semibold text-lg text-brown leading-snug">
                  Najlepší čas na rozhodnutie o pergole alebo zimnej záhrade je
                  jeseň alebo skorá zima — montáž potom prebehne na jar v ideálnych
                  podmienkach.
                </p>
              </div>
              <p>
                Pýtajte sa nás. Cenová ponuka do 24-48 hodín, bezplatná obhliadka u vás
                doma a vizualizácia podľa vašich potrieb.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-cream flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <Link
                href="/clanky"
                className="inline-flex items-center gap-2 text-mutedbrand hover:text-gold font-semibold text-sm"
              >
                <ArrowLeft size={14} />
                Všetky články
              </Link>
              <Link
                href="/akcna-cenova-ponuka"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold text-sm rounded-full transition-all"
              >
                Vyžiadať cenovú ponuku <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 lg:py-20 bg-cream/40">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-brown mb-10">
                Ďalšie články z kategórie {post.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
                {related.map((p) => (
                  <Link key={p.slug} href={`/clanky/${p.slug}`} className="group">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream mb-4">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brown group-hover:text-gold transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs text-mutedbrand">
                      <Calendar size={12} />
                      {formatDate(p.date)}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}
