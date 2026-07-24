import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://littleengineersacademy.com"),
  title: {
    template: "%s | Little Engineers Academy",
    default: "Little Engineers Academy | STEM, Robotica & Coderen voor Kinderen",
  },
  description:
    "Little Engineers Academy biedt STEM-onderwijs voor kinderen van 3-17 jaar in Eindhoven en Eersel. Robotica, coderen, engineering en gratis talentanalyse.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Little Engineers Academy",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Little Engineers Academy",
  url: "https://littleengineersacademy.com",
  logo: "https://littleengineersacademy.com/logo.png",
  foundingDate: "2016",
  email: "info@littleengineersacademy.com",
  telephone: "+31685485534",
  sameAs: [
    "https://www.instagram.com/little_engineers_academy/",
    "https://www.youtube.com/@kucukmuhendisleratolyesi4776",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Kastanjelaan 410, Office 113",
      postalCode: "5652 LD",
      addressLocality: "Eindhoven",
      addressCountry: "NL",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Brouwer 1",
      postalCode: "5521 DK",
      addressLocality: "Eersel",
      addressCountry: "NL",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
