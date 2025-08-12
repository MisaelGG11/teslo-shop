import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s - Teslo | Shop",
    default: "Home -Teslo | Shop",
  },
  description: "The best shop for all your needs",
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
        {children}
      </body>
    </html>
  );
}
