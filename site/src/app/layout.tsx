import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "FTL Scuba Diving",
    template: "%s | FTL Scuba Diving",
  },
  description: "Personalized scuba dive instruction in Fort Lauderdale, FL.",
  openGraph: {
    title: "FTL Scuba Diving",
    description: "Personalized scuba dive instruction in Fort Lauderdale, FL.",
    url: "https://ftlscubadiving.com",
    images: [{ url: "https://ftlscubadiving.com/images/main-logo.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
