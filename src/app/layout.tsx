import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medico | Yuwell Main Distributor Singapore",
  description:
    "Quality healthcare equipment from Yuwell. CPAP, BiPAP, nebulizers, blood pressure monitors, thermometers, and more. Trusted by 30+ healthcare institutions in Singapore.",
  keywords: [
    "healthcare equipment",
    "Yuwell Singapore",
    "CPAP machine",
    "BiPAP",
    "nebulizer",
    "blood pressure monitor",
    "medical equipment Singapore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
