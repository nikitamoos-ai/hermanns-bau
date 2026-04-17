"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="9" width="4" height="4" rx="0.5" /><rect x="10" y="9" width="4" height="4" rx="0.5" /><rect x="17" y="9" width="4" height="4" rx="0.5" />
        <rect x="3" y="15" width="4" height="4" rx="0.5" /><rect x="10" y="15" width="4" height="4" rx="0.5" /><rect x="17" y="15" width="4" height="4" rx="0.5" />
        <line x1="3" y1="3" x2="21" y2="3" strokeWidth="2" /><line x1="3" y1="21" x2="21" y2="21" strokeWidth="2" />
      </svg>
    ),
    title: "Mauerwerk & Rohbau",
    desc: "Neubau und Erweiterungen in massiver Bauweise – standfest und langlebig ausgeführt nach aktuellen Normen.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 21h18M3 10l9-7 9 7M5 21V10M19 21V10M9 21v-4h6v4" />
        <path d="M9 14h6" strokeDasharray="2 1" />
      </svg>
    ),
    title: "Altbausanierung",
    desc: "Kompetente Sanierung von Bestandsgebäuden: Fassaden, Keller, Strukturen – werterhaltend und fachgerecht.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" />
        <path d="M12 6v6l4 2" />
        <path d="M18 2l2 4-4 2" />
        <circle cx="12" cy="12" r="3" strokeWidth="1" />
      </svg>
    ),
    title: "Bauwerksabdichtung",
    desc: "Zuverlässiger Schutz vor Feuchtigkeit und Wasser – für Keller, Fundamente und erdberührte Bauteile.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2 20h20M4 20V12l3-6h10l3 6v8" />
        <path d="M9 20v-5h6v5" />
        <circle cx="12" cy="9" r="2" />
        <path d="M6 14h12" />
      </svg>
    ),
    title: "Erdarbeiten",
    desc: "Aushub, Planierung und Verdichtung – präzise Erdarbeiten als Grundlage für jedes Bauprojekt.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 18c3-3 5-5 9-5s6 2 9 5" />
        <path d="M3 12c2-2 4-3 6-3" />
        <path d="M16 7c1-1 3-2 5-2" />
        <rect x="6" y="14" width="3" height="4" rx="0.5" />
        <rect x="15" y="12" width="3" height="6" rx="0.5" />
        <line x1="3" y1="22" x2="21" y2="22" strokeWidth="2" />
      </svg>
    ),
    title: "Außenanlagen",
    desc: "Pflasterarbeiten, Einfahrten, Wege und Stützmauern – Ihr Außenbereich in besten Händen.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 20h16" strokeWidth="2" />
        <path d="M4 20V8l8-5 8 5v12" />
        <path d="M4 12h16M4 16h16" strokeDasharray="3 2" />
        <path d="M9 20v-8h6v8" />
      </svg>
    ),
    title: "Putz, Estrich & Trockenbau",
    desc: "Innenausbau vom Estrich bis zum Putz – sauber ausgeführt, termingerecht fertiggestellt.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 bg-[#f0ede8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[#c8830a] font-bold uppercase tracking-widest text-sm"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>
            Was wir für Sie tun
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-2 uppercase"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Unsere Leistungen
          </h2>
          <div className="w-16 h-1 bg-[#c8830a] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white p-8 border border-gray-200 group hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <div className="text-[#c8830a] group-hover:text-[#c8830a] mb-5">
                {s.icon}
              </div>
              <h3
                className="text-lg font-bold text-[#1a1a1a] group-hover:text-white mb-3 uppercase tracking-wide transition-colors"
                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
              >
                {s.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="tel:024851246"
            className="inline-block bg-[#1a1a1a] hover:bg-[#c8830a] text-white font-bold px-10 py-4 text-lg uppercase tracking-wide transition-colors"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Kostenloses Angebot: 02485 / 1246
          </a>
        </motion.div>
      </div>
    </section>
  );
}
