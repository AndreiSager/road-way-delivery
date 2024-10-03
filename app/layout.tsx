import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://andreiportfolio.vercel.app"),
  favicon: "favicon.ico",
  title: "Roadway Delivery",
  description:
    "Roadway Delivery (RWD) - Fast, reliable delivery service connecting customers with local couriers for seamless, on-time deliveries. Available on mobile.",
  image: "/Me.png",
  openGraph: {
    image: "/Me.png",
    url: "https://andreiportfolio.vercel.app",
    siteName: "andreiportfolio.vercel.app",
    title: "Roadway Delivery",
    description:
      "Roadway Delivery (RWD) - Fast, reliable delivery service connecting customers with local couriers for seamless, on-time deliveries. Available on mobile.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    image: "/Me.png",
    card: "summary_large_image",
    title: "Roadway Delivery",
    description:
      "Roadway Delivery (RWD) - Fast, reliable delivery service connecting customers with local couriers for seamless, on-time deliveries. Available on mobile.",
  },
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
