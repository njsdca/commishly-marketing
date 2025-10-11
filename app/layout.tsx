import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getcommishly.com"),
  title: "Commishly — Commission Management for CPG Brands & Broker Partners",
  description: "Commishly automates broker commissions for CPG brands: configure rules, load transactions, calculate accurately, and generate clear statements—without spreadsheets.",
  keywords: [
    "broker commissions",
    "CPG",
    "consumer packaged goods",
    "sales commissions",
    "commission tracking",
    "commission management",
    "broker partners",
  ],
  authors: [{ name: "Commishly" }],
  openGraph: {
    title: "Commishly — Commission Management for CPG Brands & Broker Partners",
    description: "Commishly automates broker commissions for CPG brands: configure rules, load transactions, calculate accurately, and generate clear statements—without spreadsheets.",
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
