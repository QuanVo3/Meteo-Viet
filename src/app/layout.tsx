import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";
import Header from "@/src/components/header";

export const metadata: Metadata = {
  title: "Foso",
  description: "Built with nextjs",
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${raleway.className} antialiased bg-white pb-28`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
