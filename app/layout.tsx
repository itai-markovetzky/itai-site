import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Itai Markovetzky — Automation Developer & AI Enthusiast",
  description:
    "Personal portfolio of Itai Markovetzky — automation developer, AI enthusiast, and builder of smart tools.",
  openGraph: {
    title: "Itai Markovetzky",
    description: "Automation Developer & AI Enthusiast",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Itai Markovetzky",
    description: "Automation Developer & AI Enthusiast",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
