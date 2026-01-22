import type { Metadata } from "next";
import {  Climate_Crisis, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const display = Climate_Crisis({
  variable: "--font-display",
  subsets: ["latin"],
  weight:  ['400']
})

const poppins = Inter({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team Mango — Reliable software systems, thoughtfully built",
  description: "Team Mango is a Brisbane-based software studio designing and building custom web, mobile, and SaaS systems. We focus on clarity, reliability, and software that continues to work well over time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark ">
      <body
        className={`${poppins.variable} ${geistMono.variable} ${display.variable} antialiased relative`}
      >
        <Header />
        
        {children}
        <Footer />
        <div className="-z-10  h-34 overflow-hidden text-center fixed bottom-0  w-full bg-dark text-secondary ">
        <p className="text-[clamp(4rem,20vw,14rem)]   sm:-mt-12 lg:-mt-32 font-display ">mango</p>
      </div>
      </body>
    </html>
  );
}
