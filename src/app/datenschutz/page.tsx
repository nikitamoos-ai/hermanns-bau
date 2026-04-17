import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold text-[#2c2c2c] mb-8" style={{ fontFamily: "var(--font-playfair, serif)" }}>
          Datenschutzerklärung
        </h1>
        <div className="text-sm leading-relaxed space-y-6 text-gray-700">
          <section>
            <h2 className="font-bold text-[#2c2c2c] mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen.
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c] mb-2">2. Verantwortlicher</h2>
            <p>
              Manfred Hermanns Bauunternehmung GmbH<br />
              Sievertsstr. 25, 53937 Schleiden-Harperscheid<br />
              Tel: 02485/1246
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c] mb-2">3. Datenerfassung auf dieser Website</h2>
            <p>
              <strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zur Bearbeitung der Anfrage bei uns gespeichert (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c] mb-2">4. Cookies</h2>
            <p>
              Diese Website verwendet technisch notwendige Cookies sowie optionale Analyse-Cookies.
              Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Cookie-Banner erneut aufrufen.
            </p>
          </section>
          <section>
            <h2 className="font-bold text-[#2c2c2c] mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit und Widerspruch. Wenden Sie sich dafür an uns über die oben angegebenen
              Kontaktdaten.
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
