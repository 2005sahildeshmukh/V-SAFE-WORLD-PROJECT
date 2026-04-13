import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import ScrollReveal from "@/components/layout/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "V-Safe World – One-Stop Shop for EHS Training & Safety Solutions",
    template: "%s | V-Safe World",
  },
  description:
    "V-Safe World Pvt Ltd provides comprehensive EHS training, safety audits, fire safety, industrial safety training, PPE equipment, and consultancy services across the globe.",
  keywords: [
    "EHS training",
    "safety audits",
    "fire safety training",
    "industrial safety",
    "PPE equipment",
    "safety consultancy",
    "workplace safety",
    "V-Safe World",
  ],
  authors: [{ name: "V-Safe World Pvt Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "V-Safe World",
    title: "V-Safe World – One-Stop Shop for EHS Training & Safety Solutions",
    description:
      "Comprehensive EHS training, safety audits, fire safety, industrial safety, PPE equipment, and consultancy services.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <ScrollReveal />
      </body>
    </html>
  );
}
