"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const hours = [
  { day: "Montag – Freitag", time: "07:00 – 17:00 Uhr" },
  { day: "Samstag", time: "Nach Vereinbarung" },
  { day: "Sonntag", time: "Geschlossen" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#c8830a] font-semibold uppercase tracking-widest text-sm">
            Sprechen wir
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mt-2"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Kontakt & Öffnungszeiten
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "📞", label: "Telefon", value: "02485 / 1246", href: "tel:024851246" },
                { icon: "📠", label: "Fax", value: "02485 / 1202", href: undefined },
                { icon: "📍", label: "Adresse", value: "Sievertsstr. 25\n53937 Schleiden-Harperscheid", href: undefined },
                { icon: "✉️", label: "E-Mail", value: "[Bitte ergänzen]", href: undefined },
              ].map((c) => (
                <div key={c.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-[#1a1a1a] hover:text-[#c8830a] transition-colors text-sm">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-[#1a1a1a] text-sm whitespace-pre-line">{c.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>
                Öffnungszeiten
              </h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-300 text-sm">{h.day}</span>
                    <span className="text-[#c8830a] font-semibold text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.5!2d6.475!3d50.529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDMxJzQ0LjQiTiA2wrAyOCczMC42IkU!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Manfred Hermanns Bauunternehmung"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>
                Kostenloses Angebot anfordern
              </h3>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-[#1a1a1a] font-semibold">Nachricht gesendet!</p>
                  <p className="text-gray-500 text-sm mt-2">Wir melden uns so schnell wie möglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: "name", label: "Ihr Name*", type: "text", placeholder: "Max Mustermann" },
                    { id: "email", label: "E-Mail-Adresse*", type: "email", placeholder: "max@beispiel.de" },
                    { id: "phone", label: "Telefon", type: "tel", placeholder: "0221 123456" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-medium text-gray-700 mb-1">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8830a] focus:border-transparent"
                        required={f.label.includes("*")}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Ihre Anfrage*
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Bauprojekt..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8830a] focus:border-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c8830a] hover:bg-[#b87a08] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                  >
                    Anfrage absenden →
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Kostenlos & unverbindlich · Antwort innerhalb von 24h
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
