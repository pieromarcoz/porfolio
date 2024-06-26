
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from "../components/Loader/page";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<Piero MG/>",
  description: "Folio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-oscuro relative cursor-red `}>
        <Loader/>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-8C06S6KWDV"/>
    </html>
  );
}
