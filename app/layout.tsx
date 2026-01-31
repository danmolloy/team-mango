import type { Metadata } from "next";
import {  Climate_Crisis, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FooterBranding from "@/components/footerBranding";
import FooterBrandingMob from "@/components/footerBrandingMob";
import FooterBrandingLG from "@/components/footerBrandingLg";

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
        <Footer />{/* 
        <FooterBrandingMob />
        <FooterBranding />
        <FooterBrandingLG /> */}
      </body>
    </html>
  );
}
