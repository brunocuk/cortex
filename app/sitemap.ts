import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cortex.hr";
  const lastModified = new Date("2026-10-26");

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/usluge`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/analiza`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/o-nama`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
