import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Manfred Hermanns Bauunternehmung – Bauunternehmen Schleiden | Kreis Euskirchen",
  description: "Manfred Hermanns Bauunternehmung GmbH in Schleiden – Ihr Experte für Mauerwerk, Altbausanierung, Erdarbeiten & Außenanlagen. Über 14 Jahre Erfahrung. Kostenlose Beratung: 02485/1246.",
  keywords: ["Bauunternehmen Schleiden", "Bauunternehmer Kreis Euskirchen", "Altbausanierung Eifel", "Mauerwerk Schleiden", "Erdarbeiten Eifel", "Hermanns Bau"],
  openGraph: {
    title: "Manfred Hermanns Bauunternehmung – Schleiden",
    description: "Kompetent, flexibel und kundennah – Ihr Bauunternehmen in der Eifel.",
    images: ["/images/hero.jpg"],
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Manfred Hermanns Bauunternehmung GmbH",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sievertsstr. 25",
    addressLocality: "Schleiden",
    postalCode: "53937",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  telephone: "02485/1246",
  openingHours: ["Mo-Fr 07:00-17:00"],
  url: "https://hermanns-bauunternehmung.de",
  priceRange: "€€",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
