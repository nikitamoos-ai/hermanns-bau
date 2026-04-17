"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#galerie", label: "Galerie" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a3a8a] shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className="text-xl font-bold text-white uppercase tracking-wide"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            Hermanns Bau
          </span>
          <span className="text-[10px] text-[#cc2020] uppercase tracking-widest">
            Bauunternehmung GmbH
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-gray-300 hover:text-[#cc2020] uppercase tracking-widest transition-colors"
              style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:024851246"
            className="ml-2 bg-[#cc2020] hover:bg-[#a81818] text-white text-xs font-bold px-5 py-2.5 uppercase tracking-widest transition-colors"
            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
          >
            02485 / 1246
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#1a3a8a] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-[#cc2020] uppercase tracking-widest text-sm transition-colors py-1 border-b border-gray-800"
                  style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:024851246"
                className="bg-[#cc2020] text-white text-center font-bold px-4 py-3 uppercase tracking-widest mt-2"
                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
              >
                02485 / 1246
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
