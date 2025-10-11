import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commishly - Commission Management for Food & Beverage Brands",
  description: "Automate your broker commission tracking and payments. Built for food and beverage brands working with sales brokers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
