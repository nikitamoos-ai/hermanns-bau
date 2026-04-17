"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const facts = [
  { value: "2010", label: "Gründungsjahr" },
  { value: "GmbH", label: "Rechtsform" },
  { value: "Eifel", label: "Heimatregion" },
  { value: "HRB 5841", label: "Handelsregister Düren" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="ueber-uns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative h-80 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.jpg"
                alt="Manfred Hermanns Bauunternehmung Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#d4900a] text-white rounded-xl px-6 py-4 shadow-lg text-center">
              <div className="text-3xl font-bold">14+</div>
              <div className="text-xs uppercase tracking-wide">Jahre Erfahrung</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ ...fadeUp, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } } }}
          >
            <span className="text-[#d4900a] font-semibold uppercase tracking-widest text-sm">
              Über uns
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] mt-2 mb-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Handwerk mit Herz –
              <br />
              verwurzelt in der Eifel
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die Manfred Hermanns Bauunternehmung GmbH steht für bodenständiges Handwerk,
              das hält was es verspricht. Seit der Gründung 2010 realisieren wir Bauprojekte
              in Schleiden-Harperscheid und der gesamten Region Kreis Euskirchen – von der
              kleinen Sanierung bis zum Neubau.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Als Handwerksbetrieb der alten Schule beraten wir Sie fair und ehrlich.
              Wir denken stets im Sinne des Kunden – auch wenn das manchmal bedeutet,
              einen kleineren Auftrag anzunehmen. Vertrauen ist unser wichtigstes Baumaterial.
            </p>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="bg-[#f5f5f5] rounded-xl p-4 border-l-4 border-[#d4900a]"
                >
                  <div className="text-xl font-bold text-[#2c2c2c]">{f.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{f.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
