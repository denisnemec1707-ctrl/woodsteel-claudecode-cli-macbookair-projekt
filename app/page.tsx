import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Categories } from "@/components/Categories";
import { Promise } from "@/components/Promise";
import { Process } from "@/components/Process";
import { Realizations } from "@/components/Realizations";
import { Team } from "@/components/Team";
import { Reviews } from "@/components/Reviews";
import { InstagramFeed } from "@/components/InstagramFeed";
import { CatalogDownload } from "@/components/CatalogDownload";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { generalFaqs } from "@/lib/faqs";
import { JsonLd, localBusinessSchema, faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema(generalFaqs)} />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Categories />
        <Promise />
        <Process />
        <Realizations />
        <Team />
        <Reviews />
        <InstagramFeed />
        <CatalogDownload />
        <Faq items={generalFaqs.slice(0, 4)} compact title="Často sa pýtate" eyebrow="FAQ" />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}
