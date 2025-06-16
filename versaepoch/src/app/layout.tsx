import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import VercelAnalyticsClient from "@/components/AnalyticsClient";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VersaEpoch - Explore Evolution of ChatGPT, Claude & Gemini",
  description: "Interactive evolution timelines, LLMs Directory - 30+ best LLMs, Prompts Directory 300+ prompts, stay ahead in the AI Era",
  openGraph: {
    url: "https://versaepoch.com",
    type: 'website'  
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} rootContainer antialiased`}
      >
        <ScrollToTop />
        <Header />
        {children}
        <VercelAnalyticsClient />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
