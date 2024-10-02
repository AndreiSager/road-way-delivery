import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Road Way Delivery",
  description: "A create next app that only features front-end functionality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full justify-center">
          <div className="flex w-full flex-col">
            <Navbar />
            <main className="w-full">{children}</main>
            <NewsletterBanner />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
