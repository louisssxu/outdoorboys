import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

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
      <Analytics />
      <SpeedInsights />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NavBar />
          <div className="  h-max">{children}</div>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
