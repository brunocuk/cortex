import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cortex.hr"),
  title: {
    default: "Cortex Business Operations | Robno poslovanje i F&B kontroling",
    template: "%s | Cortex Business Operations",
  },
  description:
    "Preuzimamo kompletno robno poslovanje, inventure, digitalizaciju procesa i kontrolu troškova hrane i pića za kafiće, restorane i hotele. Čiste brojke, zaštićena marža.",
  keywords: [
    "robno knjigovodstvo ugostiteljstvo",
    "F&B kontroling",
    "food cost",
    "beverage cost",
    "inventure restoran",
    "normativi ugostiteljstvo",
    "digitalni HACCP",
    "kontrola zaliha",
    "operativni P&L",
    "konzalting ugostiteljstvo",
  ],
  authors: [{ name: "Matej Kobaš" }],
  creator: "Cortex Business Operations",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cortex Business Operations | Robno poslovanje i F&B kontroling",
    description:
      "Robno-materijalno poslovanje, F&B kontroling i digitalizacija za kafiće, bistroe, restorane i hotele.",
    url: "https://cortex.hr",
    siteName: "Cortex Business Operations",
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Business Operations",
    description:
      "Robno poslovanje, F&B kontroling i digitalizacija za ugostiteljstvo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2545",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cortex Business Operations",
  alternateName: "CBO",
  url: "https://cortex.hr",
  logo: "https://cortex.hr/logo.png",
  image: "https://cortex.hr/opengraph-image.png",
  description:
    "Robno-materijalno poslovanje, F&B kontroling, digitalizacija i projektni konzalting za caffe barove, bistroe, restorane i hotele.",
  email: "info@cortex.hr",
  founder: {
    "@type": "Person",
    name: "Matej Kobaš",
    jobTitle: "Osnivač i glavni operativni savjetnik",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zagreb",
    addressCountry: "HR",
  },
  areaServed: { "@type": "Country", name: "Hrvatska" },
  knowsAbout: [
    "Robno knjigovodstvo",
    "F&B kontroling",
    "Food cost analiza",
    "Inventure",
    "Digitalni HACCP",
    "Operativni P&L",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
