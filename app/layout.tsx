import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/links";
import { MatrixRain } from "@/components/MatrixRain";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_TITLE = `${profile.name} (${profile.handle}) — bio`;
const SITE_DESC = profile.tagline;

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MatrixRain />
        {children}
      </body>
    </html>
  );
}
