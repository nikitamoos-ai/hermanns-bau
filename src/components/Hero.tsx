"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Hermanns Bauunternehmung Schleiden"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#c8830a] px-4 py-1.5 mb-6 text-sm text-white font-semibold uppercase tracking-widest">
            <span>Meisterbetrieb · Seit 2010 in der Eifel</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-none text-white uppercase tracking-tight mb-6"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Wir bauen.
            <br />
            <span className="text-[#c8830a]">Solide.</span>
            <br />
            Verlässlich.
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            Manfred Hermanns Bauunternehmung GmbH – Ihr regionaler Partner für Mauerwerk,
            Sanierung und Erdarbeiten im Kreis Euskirchen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="tel:024851246"
              className="bg-[#c8830a] hover:bg-[#a86c08] text-white font-bold px-8 py-4 text-lg uppercase tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
            >
              02485 / 1246 – Anrufen
            </a>
            <a
              href="#leistungen"
              className="border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 text-lg uppercase tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
            >
              Unsere Leistungen
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { value: "14+", label: "Jahre Erfahrung" },
              { value: "500+", label: "Projekte" },
              { value: "GmbH", label: "Meisterbetrieb" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-[#c8830a] pl-4">
                <div
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
