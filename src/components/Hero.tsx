"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Hermanns Bauunternehmung Schleiden"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#2c2c2c]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-[#d4900a]/20 border border-[#d4900a]/50 rounded-full px-4 py-1.5 mb-6 text-sm text-[#d4900a] font-medium">
            <span>⭐⭐⭐⭐⭐</span>
            <span>Meisterbetrieb · Seit 2010 in der Eifel</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Ihr zuverlässiges
            <br />
            <span className="text-[#d4900a]">Bauunternehmen</span>
            <br />
            in der Eifel
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Kompetent, flexibel und kundennah – Manfred Hermanns Bauunternehmung GmbH
            realisiert Ihr Bauprojekt in Schleiden und der gesamten Region Kreis Euskirchen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:024851246"
              className="bg-[#d4900a] hover:bg-[#b87a08] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              📞 02485 / 1246 – Jetzt anrufen
            </a>
            <a
              href="#leistungen"
              className="border-2 border-white hover:bg-white hover:text-[#2c2c2c] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Unsere Leistungen
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { value: "14+", label: "Jahre Erfahrung" },
              { value: "500+", label: "Projekte" },
              { value: "100%", label: "Meisterbetrieb" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#d4900a]">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
