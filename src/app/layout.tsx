import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import NavbarPage from "../components/NavbarPage/NavbarPage";
import FooterPage from "../components/FooterPage/FooterPage";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${inter.className} antialiased bg-gradient-to-b from-gray-500 via-white via-95% to-white`}
      >
        <NavbarPage />
        <main className="relative min-h-screen mx-auto container border-solid border-2">
          {children}
        </main>
        <FooterPage />
      </body>
    </html>
  );
}
