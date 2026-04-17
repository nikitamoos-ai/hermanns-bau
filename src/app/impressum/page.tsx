import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold text-[#2c2c2c] mb-8" style={{ fontFamily: "var(--font-playfair, serif)" }}>
          Impressum
        </h1>
        <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="font-bold text-[#2c2c2c]">Angaben gemäß § 5 TMG</h2>
            <p>
              Manfred Hermanns Bauunternehmung GmbH<br />
              Sievertsstr. 25<br />
              53937 Schleiden-Harperscheid<br />
              Deutschland
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c]">Vertreten durch</h2>
            <p>Geschäftsführer: Manfred Hermanns</p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c]">Kontakt</h2>
            <p>
              Telefon: <a href="tel:024851246" className="text-[#d4900a]">02485 / 1246</a><br />
              Fax: 02485 / 1202<br />
              E-Mail: <span className="text-gray-400">[PLATZHALTER – bitte ergänzen]</span>
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c]">Registereintrag</h2>
            <p>
              Eingetragen im Handelsregister.<br />
              Registergericht: Amtsgericht Düren<br />
              Registernummer: HRB 5841
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c]">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              <span className="text-gray-400">[PLATZHALTER – bitte ergänzen]</span>
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c]">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Manfred Hermanns<br />
              Sievertsstr. 25, 53937 Schleiden-Harperscheid
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c]">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" className="text-[#d4900a]" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-[#d4900a] hover:underline text-sm">← Zurück zur Startseite</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
