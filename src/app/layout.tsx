import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/main.css";
import "@/styles/helper.css";
import Header from "@/components/layouts/header";
import FallingHearts from "@/components/bases/FallingHearts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " ❤️ Linh",
  description: "Đếm ngày yêu em ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <FallingHearts />
        <Header />
        {children}
      </body>
    </html>
  );
}
