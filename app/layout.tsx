import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Variable name eka simple 'i' walin (inter) liyamau
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
});

export const metadata: Metadata = {
  title: "JKW Technologies | Tech Repair Services",
  description: "Dependable and efficient repair and maintenance services for printers, computers, and network systems in Delgoda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Methana simple 'inter' kiyala wenas wenna oni */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}