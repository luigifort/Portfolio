import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/_components/Header";

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
      <body className="min-h-full flex flex-col layout">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
