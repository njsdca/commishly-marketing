import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getcommishly.com"),
  title: "Commishly - Commission Management for Food & Beverage Brands",
  description: "Automate your broker commission tracking and payments. Built for food and beverage brands working with sales brokers.",
  keywords: [
    "broker commissions",
    "CPG",
    "food and beverage",
    "sales commissions",
    "commission tracking",
    "commission management",
  ],
  authors: [{ name: "Commishly" }],
  openGraph: {
    title: "Commishly - Commission Management for Food & Beverage Brands",
    description: "Automate your broker commission tracking and payments. Built for food and beverage brands.",
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "Commishly",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1EB5A9" }],
  },
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
