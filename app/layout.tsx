import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Outdoorboys Gear",
  description: "See what Luke packed on his latest trip!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className=" container mx-auto px-4 h-max">{children}</div>
      </body>
    </html>
  );
}
