"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Thomas K.",
    stars: 5,
    text: "Ein Bauunternehmer der alten Schule im besten Sinne. Herr Hermanns hat uns ehrlich und kompetent beraten – auch wenn das für ihn einen kleineren Auftrag bedeutete. Absolute Weiterempfehlung!",
    source: "Golocal",
  },
  {
    name: "Familie Müller",
    stars: 5,
    text: "Unsere Altbausanierung wurde pünktlich und sauber abgeschlossen. Das Team war immer erreichbar und hat alle unsere Fragen geduldig beantwortet. Tolle Arbeit!",
    source: "Empfehlung",
  },
  {
    name: "Peter S.",
    stars: 5,
    text: "Erdarbeiten für unsere neue Einfahrt wurden schnell und professionell erledigt. Fairer Preis, freundlicher Kontakt. Gerne wieder!",
    source: "Empfehlung",
  },
];

export default function Testimonials() {
  return (
    <section id="bewertungen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#d4900a] font-semibold uppercase tracking-widest text-sm">
            Das sagen unsere Kunden
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] mt-2"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Bewertungen
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#d4900a] text-2xl">★</span>
            ))}
            <span className="ml-2 text-gray-600 text-sm">5,0 / 5 – Meisterbetrieb</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#f5f5f5] rounded-xl p-6 border border-gray-100 relative"
            >
              <div className="text-4xl text-[#d4900a] mb-3 leading-none">"</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{r.text}</p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="font-semibold text-[#2c2c2c] text-sm">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.source}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(r.stars)].map((_, j) => (
                    <span key={j} className="text-[#d4900a] text-sm">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
