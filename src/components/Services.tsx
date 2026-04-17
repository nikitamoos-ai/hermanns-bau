"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🧱",
    title: "Mauerwerk & Rohbau",
    desc: "Neubau und Erweiterungen in massiver Bauweise – standfest und langlebig ausgeführt nach aktuellen Normen.",
  },
  {
    icon: "🏚️",
    title: "Altbausanierung",
    desc: "Kompetente Sanierung von Bestandsgebäuden: Fassaden, Keller, Strukturen – werterhaltend und fachgerecht.",
  },
  {
    icon: "🔒",
    title: "Bauwerksabdichtung",
    desc: "Zuverlässiger Schutz vor Feuchtigkeit und Wasser – für Keller, Fundamente und erdberührte Bauteile.",
  },
  {
    icon: "🚜",
    title: "Erdarbeiten",
    desc: "Aushub, Planierung und Verdichtung – präzise Erdarbeiten als Grundlage für jedes Bauprojekt.",
  },
  {
    icon: "🌿",
    title: "Außenanlagen",
    desc: "Pflasterarbeiten, Einfahrten, Wege und Stützmauern – Ihr Außenbereich in besten Händen.",
  },
  {
    icon: "🪵",
    title: "Putz, Estrich & Trockenbau",
    desc: "Innenausbau vom Estrich bis zum Putz – sauber ausgeführt, termingerecht fertiggestellt.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="leistungen" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-[#d4900a] font-semibold uppercase tracking-widest text-sm">
            Was wir für Sie tun
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] mt-2"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Von der ersten Schaufel Erde bis zum fertigen Gebäude – wir begleiten Sie
            durch jeden Schritt Ihres Bauprojekts in der Region Schleiden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ ...fadeUp, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-[#2c2c2c] mb-2 group-hover:text-[#d4900a] transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <a
            href="tel:024851246"
            className="inline-block bg-[#d4900a] hover:bg-[#b87a08] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow"
          >
            Kostenloses Angebot anfordern
          </a>
        </motion.div>
      </div>
    </section>
  );
}
