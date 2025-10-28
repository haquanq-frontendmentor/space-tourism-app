import { Header } from "@/components/Header";
import { appConfigs } from "@/constants/appConfigs";
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
  icons: { icon: appConfigs.basePath + "/favicon-32x32.png" },
  alternates: {
    canonical: "https://haquanq-frontendmentor.github.io/space-tourism-app",
  },
  openGraph: {
    title: "Frontend Mentor | Space Tourism Website",
    description:
      "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
    url: "https://haquanq-frontendmentor.github.io/space-tourism-app",
    locale: "en_US",
  },
  twitter: {
    title: "Frontend Mentor | Space Tourism Website",
    card: "summary_large_image",
  },
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
