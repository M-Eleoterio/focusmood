import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FocusMood",
  description: "FocusMood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased max-w-screen overflow-hidden`}
      >
        <div className="bg-black/50 w-screen h-screen fixed top-0 left-0 backdrop-blur-md z-[-1]" />
        <Image
          width={1920}
          height={1080}
          src="/background.jpg"
          alt="FocusMood"
          className="backdrop-blur-md h-screen w-screen fixed top-0 left-0 z-[-2]"
        />
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
