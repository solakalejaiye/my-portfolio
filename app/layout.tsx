import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olusola Kalejaiye — Product Designer",
  description: "Product designer creating high-trust fintech and operational products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
