import type { Metadata } from "next";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { limelight, lora } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Córrego da Laranja Azeda",
  description: "Palhaçadaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${limelight.variable} ${lora.variable} antialiased h-full`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
