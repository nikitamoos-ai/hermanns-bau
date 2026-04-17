import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-8" style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>
          Impressum
        </h1>
        <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="font-bold text-[#1a1a1a]">Angaben gemäß § 5 TMG</h2>
            <p>
              Manfred Hermanns Bauunternehmung GmbH<br />
              Sievertsstr. 25<br />
              53937 Schleiden-Harperscheid<br />
              Deutschland
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#1a1a1a]">Vertreten durch</h2>
            <p>Geschäftsführer: Manfred Hermanns</p>
          </section>
          <section>
            <h2 className="font-bold text-[#1a1a1a]">Kontakt</h2>
            <p>
              Telefon: <a href="tel:024851246" className="text-[#c8830a]">02485 / 1246</a><br />
              Fax: 02485 / 1202<br />
              E-Mail: <span className="text-gray-400">[PLATZHALTER – bitte ergänzen]</span>
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#1a1a1a]">Registereintrag</h2>
            <p>
              Eingetragen im Handelsregister.<br />
              Registergericht: Amtsgericht Düren<br />
              Registernummer: HRB 5841
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#1a1a1a]">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              <span className="text-gray-400">[PLATZHALTER – bitte ergänzen]</span>
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#1a1a1a]">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Manfred Hermanns<br />
              Sievertsstr. 25, 53937 Schleiden-Harperscheid
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#1a1a1a]">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" className="text-[#c8830a]" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-[#c8830a] hover:underline text-sm">← Zurück zur Startseite</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
