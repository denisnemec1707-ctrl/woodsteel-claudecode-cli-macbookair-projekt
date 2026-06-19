import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WoodSteel — Pergoly, zimné záhrady a zasklenia terás na mieru",
  description:
    "Vlastná SK výroba aj montáž. Cenová ponuka do 24 hodín, bezplatná obhliadka. 250+ realizácií, 5 rokov záruka.",
  openGraph: {
    title: "WoodSteel — Outdoor priestor, ktorý milujete celý rok",
    description:
      "Pergoly, zimné záhrady, zasklenia terás. Vlastná SK výroba a montáž od roku 2008.",
    type: "website",
    locale: "sk_SK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body className="bg-white text-charcoal min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
