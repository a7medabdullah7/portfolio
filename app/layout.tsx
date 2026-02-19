import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Abdullah Ibrahim | AI Engineer",
  description:
    "AI Engineer specializing in Machine Learning, Deep Learning, NLP, and Computer Vision. Building scalable intelligent systems.",
  openGraph: {
    title: "Ahmed Abdullah Ibrahim | AI Engineer",
    description:
      "AI Engineer specializing in Machine Learning, Deep Learning, NLP, and Computer Vision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} font-sans`}
    >
      <body className="min-h-screen bg-dark-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
