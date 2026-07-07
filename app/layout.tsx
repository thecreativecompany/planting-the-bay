import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CityLight House | Editorial Church Landing Page",
  description: "A bold editorial landing page for a modern faith community built around people, purpose, and the city.",
  openGraph: {
    title: "CityLight House",
    description: "Faith, people, purpose, and the city.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
