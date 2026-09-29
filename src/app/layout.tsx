import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIAUS INVESTMENTS - Bridging Australia & Vietnam",
  description:
    "VIAUS INVESTMENTS is an Australian investment company connecting capabilities, technologies and quality products between Australia and Vietnam.",
  keywords: [
    "VIAUS",
    "investments",
    "Australia",
    "Vietnam",
    "pharmaceuticals",
    "technology transfer",
    "import export",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
