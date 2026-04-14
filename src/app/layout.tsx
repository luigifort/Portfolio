import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./../_sections/Experience/timeline.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luigi Forte - Portfolio",
  description:
    "Il portfolio di Luigi Forte, sviluppatore software con esperienza in React, Next.js e TypeScript. Scopri i progetti, le competenze e l'esperienza professionale di Luigi Forte nel campo dello sviluppo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="layout">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
