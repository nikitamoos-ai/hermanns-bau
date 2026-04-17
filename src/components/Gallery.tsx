"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Mauerwerk Eifel", span: "row-span-1" },
  { src: "/images/gallery-2.jpg", alt: "Rohbau Schleiden", span: "row-span-2" },
  { src: "/images/hero.jpg", alt: "Bauprojekt Euskirchen", span: "row-span-1" },
  { src: "/images/gallery-3.jpg", alt: "Altbausanierung", span: "row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Erdarbeiten", span: "row-span-1" },
  { src: "/images/about.jpg", alt: "Handwerk Eifel", span: "row-span-1" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 bg-[#1a3a8a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span
            className="text-[#cc2020] font-bold uppercase tracking-widest text-sm"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Einblicke
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mt-2 uppercase"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Unsere Projekte
          </h2>
          <div className="w-16 h-1 bg-[#cc2020] mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden group cursor-pointer ${i === 1 ? "md:row-span-2" : ""}`}
              style={{ aspectRatio: i === 1 ? "auto" : "4/3", minHeight: i === 1 ? "400px" : "220px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1a3a8a]/0 group-hover:bg-[#1a3a8a]/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span
                  className="text-white text-sm font-bold uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                >
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
