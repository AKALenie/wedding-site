import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import ClientRoot from "./ClientRoot"; // ← client wrapper

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-garamond" });

export const metadata: Metadata = {
  title: "Wedding",
  description: "Laura & Bryce",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${garamond.variable}`}>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
