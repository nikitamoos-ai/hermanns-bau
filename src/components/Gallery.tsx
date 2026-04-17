"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/hero.jpg", alt: "Bauprojekt Schleiden" },
  { src: "/images/about.jpg", alt: "Mauerwerk Eifel" },
  { src: "https://placehold.co/600x400/2c2c2c/d4900a?text=Erdarbeiten", alt: "Erdarbeiten" },
  { src: "https://placehold.co/600x800/3a3a3a/ffffff?text=Sanierung", alt: "Altbausanierung" },
  { src: "https://placehold.co/600x400/d4900a/ffffff?text=Aussenanlagen", alt: "Außenanlagen" },
  { src: "https://placehold.co/600x400/2c2c2c/d4900a?text=Rohbau", alt: "Rohbau" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 bg-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#d4900a] font-semibold uppercase tracking-widest text-sm">
            Einblicke
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mt-2"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Unsere Projekte
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Qualität, die man sieht – ein kleiner Einblick in unsere abgeschlossenen Arbeiten.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="break-inside-avoid relative overflow-hidden rounded-xl group cursor-pointer"
            >
              <div className="relative w-full" style={{ paddingBottom: i % 3 === 1 ? "133%" : "66%" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized={img.src.startsWith("https://placehold")}
                />
                <div className="absolute inset-0 bg-[#2c2c2c]/0 group-hover:bg-[#2c2c2c]/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
