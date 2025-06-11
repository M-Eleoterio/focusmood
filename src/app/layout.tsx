import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Sider } from "@/components/sider/sider";
import { MenuTopbar } from "@/components/menu-topbar/menu-topbar";

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
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="bg-black/50 w-screen h-screen fixed top-0 left-0 backdrop-blur-md z-[-1]" />
          <Image
            width={1920}
            height={1080}
            src="/background.jpg"
            alt="FocusMood"
            className="backdrop-blur-md h-screen w-screen fixed top-0 left-0 z-[-2]"
          />
          <div className="flex p-10 justify-between w-full">
            <MenuTopbar />
            <ThemeToggle />
          </div>
          <div className="flex gap-10">
            <Sider />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
