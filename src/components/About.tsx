"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const facts = [
  { value: "2010", label: "Gegründet" },
  { value: "GmbH", label: "Meisterbetrieb" },
  { value: "Eifel", label: "Heimatregion" },
  { value: "HRB 5841", label: "Handelsregister" },
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[520px] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Manfred Hermanns Bauunternehmung"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/20" />
            </div>
            <div className="absolute -bottom-0 -right-0 bg-[#c8830a] text-white px-8 py-6 text-center">
              <div
                className="text-5xl font-bold leading-none"
                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
              >
                14+
              </div>
              <div className="text-xs uppercase tracking-widest mt-1">Jahre Erfahrung</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span
              className="text-[#c8830a] font-bold uppercase tracking-widest text-sm"
              style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
            >
              Über uns
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-2 mb-4 uppercase leading-tight"
              style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
            >
              Handwerk,
              <br />
              das hält was
              <br />
              <span className="text-[#c8830a]">es verspricht.</span>
            </h2>
            <div className="w-16 h-1 bg-[#c8830a] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Die Manfred Hermanns Bauunternehmung GmbH steht für bodenständiges Handwerk,
              das hält was es verspricht. Seit der Gründung 2010 realisieren wir Bauprojekte
              in Schleiden-Harperscheid und der gesamten Region Kreis Euskirchen – von der
              kleinen Sanierung bis zum Neubau.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Als Handwerksbetrieb der alten Schule beraten wir Sie fair und ehrlich.
              Vertrauen ist unser wichtigstes Baumaterial.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="border-l-4 border-[#c8830a] bg-[#f0ede8] px-4 py-4"
                >
                  <div
                    className="text-2xl font-bold text-[#1a1a1a]"
                    style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                  >
                    {f.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">{f.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
