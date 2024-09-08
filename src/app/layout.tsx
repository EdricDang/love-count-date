import type { Metadata } from "next";
import { Shantell_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/main.css";
import "@/styles/helper.css";
import Header from "@/components/layouts/header";
import FallingHearts from "@/components/bases/FallingHearts";
import CanvasAnimation from "@/components/bases/CanvasAnimation";

const shantell_sans = Shantell_Sans({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Thịnh ❤️ Linh",
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
      <body className={shantell_sans.className}>
        <FallingHearts />
        <CanvasAnimation />
        <Header />
        {children}
      </body>
    </html>
  );
}
