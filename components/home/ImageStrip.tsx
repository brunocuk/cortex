"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const photos = [
  {
    src: "/img/sank.jpg",
    alt: "Priprema espressa na šanku modernog caffe bara",
    caption: "Šank: svaka doza i gramatura kave pod kontrolom",
  },
  {
    src: "/img/kuhinja.jpg",
    alt: "Izlaganje jela na pasu profesionalne kuhinje",
    caption: "Kuhinja: normativi koji prate stvarnu pripremu",
  },
  {
    src: "/img/skladiste.jpg",
    alt: "Uredno složeno skladište ugostiteljskog objekta",
    caption: "Skladište: stanje poznato do zadnjeg grama",
  },
];

function ParallaxPhoto({
  src,
  alt,
  caption,
  index,
}: {
  src: string;
  alt: string;
  caption: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <figure
      ref={ref}
      className={`group relative ${index === 1 ? "lg:mt-14" : ""}`}
    >
      <div className="overflow-hidden rounded-2xl">
        <motion.div style={reduced ? undefined : { y }} className="-my-10">
          <Image
            src={src}
            alt={alt}
            width={1536}
            height={1024}
            className="h-[300px] w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-[1.16] sm:h-[340px]"
          />
        </motion.div>
      </div>
      <figcaption className="font-mono mt-4 text-xs uppercase tracking-[0.14em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function ImageStrip() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-3">
          {photos.map((photo, i) => (
            <ParallaxPhoto key={photo.src} {...photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
