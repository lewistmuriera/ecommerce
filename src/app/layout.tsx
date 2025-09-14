import type { Metadata } from "next";
import { Jost} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Nike",
  description: "An e-commerce platform for nike shoes  .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
