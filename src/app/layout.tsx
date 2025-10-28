import { Header } from "@/components/Header";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bellefair",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Space Tourism Website",
  icons: { icon: "/favicon-32x32.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = [barlowCondensed.variable, barlow.variable, bellefair.variable].join(" ");
  return (
    <html lang="en">
      <body className={cn(fonts, "relative flex min-h-screen flex-col")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
