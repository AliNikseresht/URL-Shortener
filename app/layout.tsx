import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Free URL Shortener - Simple & Fast",
  description:
    "Create shortened URLs quickly and easily with this URL Shortener. It's completely free for everyone to use.",
  keywords:
    "url shortener free, url shortener ,URL Shortener, URL shortening, fast URL shortening, free URL shortener",
  authors: [
    {
      name: "Ali Nikseresht",
      url: "https://url-shortener-theta-wine.vercel.app/",
    },
  ],
  openGraph: {
    title: "Best Free URL Shortener - Simple & Fast",
    description:
      "Create shortened URLs quickly and easily with this URL Shortener. It's completely free for everyone to use.",
    url: "https://url-shortener-theta-wine.vercel.app/",
    images: "/open-graph-image.png",
    siteName: "URL Shortener",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Free URL Shortener - Simple & Fast",
    description:
      "Create shortened URLs quickly and easily with this URL Shortener. It's completely free for everyone to use.",
    images: "/open-graph-image.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
