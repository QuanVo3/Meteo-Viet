import type { Metadata } from "next";
import { Poppins,Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";

export const metadata: Metadata = {
  title: "Meteo Viet",
  description: "Built with Next.js",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // <-- Đây là key quan trọng
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito", // <-- Đây là key quan trọng
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${nunito.variable} antialiased bg-[#ffffff]  h-full`}
      >
        {" "}
        {/* Không cần font-poppins ở đây */}
        <Header />
        {children}
      </body>
    </html>
  );
}
