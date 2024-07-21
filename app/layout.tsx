import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grid Connect - A Community of your interests",
  description:
    "Explore diverse communities tailored to variouswith GridConnect - A Community of your interests. Experience the power of community with GridConnect. Be a part of something bigger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <link rel="shortcut icon" href="grid-icon.svg" type="image/svg" />
      <body className={inter.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
