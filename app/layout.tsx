import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import localFont from 'next/font/local';
import { ThemeProvider } from "@/providers/theme-provider"
 
const khand = localFont({
  src: '../public/fonts/Khand-Bold.woff2',
});

const switzer = localFont({
  src: '../public/fonts/Switzer-Regular.woff2',
});

export const metadata: Metadata = {
  title: "Odysia Hotel",
  description: "Enjoy your stay in the most luxury hotel in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={`${khand.className} ${switzer.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
