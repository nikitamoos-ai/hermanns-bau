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
        scrolled ? "bg-[#2c2c2c] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className="font-playfair text-lg font-bold text-white"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Hermanns Bau
          </span>
          <span className="text-[10px] text-[#d4900a] uppercase tracking-widest">
            Bauunternehmung GmbH
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-200 hover:text-[#d4900a] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:024851246"
            className="ml-4 bg-[#d4900a] hover:bg-[#b87a08] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            02485 / 1246
          </a>
        </nav>

        {/* Mobile hamburger */}
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
            className="md:hidden bg-[#2c2c2c] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-[#d4900a] transition-colors py-1 border-b border-gray-700"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:024851246"
                className="bg-[#d4900a] text-white text-center font-semibold px-4 py-2 rounded mt-2"
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
