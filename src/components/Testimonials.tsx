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
    <section id="bewertungen" className="py-24 bg-[#f0ede8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span
            className="text-[#c8830a] font-bold uppercase tracking-widest text-sm"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Das sagen unsere Kunden
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-2 uppercase"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Bewertungen
          </h2>
          <div className="w-16 h-1 bg-[#c8830a] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 border-t-4 border-[#c8830a]"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.stars)].map((_, j) => (
                  <span key={j} className="text-[#c8830a] text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <div
                    className="font-bold text-[#1a1a1a] uppercase tracking-wide text-sm"
                    style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                  >
                    {r.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{r.source}</div>
                </div>
                <div className="w-8 h-8 bg-[#c8830a] flex items-center justify-center">
                  <span className="text-white text-lg font-bold leading-none" style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>"</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
