import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Kalimeris",
  description: "Created by Kalimeris Spyros",
  keywords: [
    "Software developer",
    "developer",
    "Kalimeris",
    "Spyros",
    "Καλημέρης",
    "Σπύρος",
    "Καλημέρης Σπύρος",
    "Kalimeris spiros",
    "Front end developer",
    "Front-end",
    "React",
    "Next js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />

      <body className={`${openSans.className}`}>{children}</body>
    </html>
  );
}
