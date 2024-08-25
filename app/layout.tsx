import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { APP_NAME } from "@/constants/TextConsts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grid Connect - A Community of your interests",
  description:
    `Explore diverse communities tailored to variouswith ${APP_NAME} - A Community of your interests. Experience the power of community with ${APP_NAME}. Be a part of something bigger.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark select-none" lang="en">
      <link rel="shortcut icon" href="grid-icon.svg" type="image/svg" />
      <body className={inter.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
