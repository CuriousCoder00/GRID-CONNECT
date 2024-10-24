import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { APP_NAME } from "@/lib/constants/TextConsts";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grid Connect - A Community of your interests",
  description: `Explore diverse communities tailored to variouswith ${APP_NAME} - A Community of your interests. Experience the power of community with ${APP_NAME}. Be a part of something bigger.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="dark"
      lang="en"
      suppressHydrationWarning
    >
      <link rel="shortcut icon" href="grid-icon.svg" type="image/svg" />
      <body className={inter.className}>
        <NextTopLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
