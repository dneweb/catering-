import type { Metadata } from "next";
import { Playfair_Display, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pooja's Kitchen | Real Ingredients. Homemade Goodness. Always.",
  description:
    "At Pooja's Kitchen, we bring you the true taste of home with fresh ingredients, traditional flavors and a touch of love in every dish. Pure, authentic homestyle food and tiffins.",
  keywords: [
    "Pooja's Kitchen",
    "Homemade Food",
    "Tiffin Service",
    "Authentic Indian Food",
    "Thali",
    "Fresh Homestyle Cooking",
  ],
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${caveat.variable} ${jakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
