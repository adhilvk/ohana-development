import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import ClientNavbar from "./components/ClientNavbar";

export const metadata: Metadata = {
  title: "Ohana Properties",
  description: "Luxury branded residences coming soon at Yas Canal, Abu Dhabi",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        {/* Remix Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body className="bg-black text-white antialiased">
        <ClientNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
