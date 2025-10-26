import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AppDev@MIT",
    template: "%s | AppDev@MIT",
  },
  description:
    "MIT's fastest-growing software development student organization. Building web and mobile applications to serve students, campus groups, and local businesses while fostering practical skills in full-stack development.",
  keywords: [
    "mit app dev",
    "mit web development club",
    "mit app development club",
    "mit mobile app club",
    "mit web app club",
    "mit programming club",
    "mit coding club",
    "mit software student organization",
    "mit software club",
    "mit full stack club",
  ],
  authors: [{ name: "AppDev@MIT" }],
  creator: "AppDev@MIT",
  publisher: "AppDev@MIT",
  metadataBase: new URL('https://www.mitappdev.com'),
  alternates: {
    canonical: 'https://www.mitappdev.com',
  },
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
