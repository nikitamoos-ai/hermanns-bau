"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 bg-[#2c2c2c] text-white rounded-xl shadow-2xl p-5 border border-gray-700">
      <p className="text-sm leading-relaxed mb-4">
        🍪 Wir nutzen Cookies für eine bessere Nutzererfahrung.{" "}
        <a href="/datenschutz" className="text-[#d4900a] underline">Mehr erfahren</a>
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 bg-[#d4900a] hover:bg-[#b87a08] text-white text-sm font-semibold py-2 rounded-lg transition-colors"
        >
          Alle akzeptieren
        </button>
        <button
          onClick={decline}
          className="flex-1 border border-gray-600 hover:border-gray-400 text-gray-300 text-sm py-2 rounded-lg transition-colors"
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
