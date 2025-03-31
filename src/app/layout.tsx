// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Global styles, including TailwindCSS

// Import Sidebar component
import Sidebar from "../../components/Sidebar"; // Import Sidebar from components folder

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog site built with Next.js, TypeScript, and TailwindCSS",
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
        <div className="flex h-screen">
          {/* Sidebar Component */}
          <Sidebar />
          
          {/* Main Content */}
          <main className="flex-1 p-4 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
