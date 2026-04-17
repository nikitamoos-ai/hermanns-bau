import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-playfair text-white text-xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair, serif)" }}>
              Hermanns Bau
            </div>
            <div className="text-[#d4900a] text-xs uppercase tracking-widest mb-4">Bauunternehmung GmbH</div>
            <p className="text-sm leading-relaxed">
              Kompetent, flexibel und kundennah –<br />
              Ihr Bauunternehmen in der Eifel.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>Sievertsstr. 25, 53937 Schleiden-Harperscheid</li>
              <li>
                <a href="tel:024851246" className="hover:text-[#d4900a] transition-colors">
                  📞 02485 / 1246
                </a>
              </li>
              <li>📠 02485 / 1202</li>
              <li>Mo–Fr: 07:00 – 17:00 Uhr</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#leistungen" className="hover:text-[#d4900a] transition-colors">Leistungen</a></li>
              <li><a href="#ueber-uns" className="hover:text-[#d4900a] transition-colors">Über uns</a></li>
              <li><a href="#kontakt" className="hover:text-[#d4900a] transition-colors">Kontakt</a></li>
              <li><Link href="/impressum" className="hover:text-[#d4900a] transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-[#d4900a] transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <span>© {new Date().getFullYear()} Manfred Hermanns Bauunternehmung GmbH · Schleiden</span>
          <span>
            Amtsgericht Düren · HRB 5841
          </span>
        </div>
      </div>
    </footer>
  );
}
