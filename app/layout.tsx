import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noora Shop",
  description: "An Online Shop",
};


export default async function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{


  return (
    <html lang="en" data-theme="forest">
      <body className={`${inter.className}`}>
          {children!}
      </body>
    </html>
  );
}
