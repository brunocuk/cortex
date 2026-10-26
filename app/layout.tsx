import type { Metadata } from "next";
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
  openGraph: {
    title: "Cortex Business Operations",
    description:
      "Robno-materijalno poslovanje, F&B kontroling i digitalizacija za ugostiteljstvo.",
    locale: "hr_HR",
    type: "website",
  },
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
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
