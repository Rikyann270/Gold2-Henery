import type { Metadata } from "next";
import { Work_Sans, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { SITE } from "./data";
import { cn } from "@/lib/utils";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | Buy Certified Investment Gold Bars Online`,
  description: `Buy certified investment gold bars from 1g to 1kg. Insured worldwide delivery, secure vault storage and a buy-back guarantee from ${SITE.name}.`,
  openGraph: {
    title: `${SITE.name} | Certified Gold Bars`,
    description:
      "Certified investment gold bars with insured delivery, secure vaulting and buy-back guarantee.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(workSans.variable, playfair.variable, "font-sans", geist.variable)}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
