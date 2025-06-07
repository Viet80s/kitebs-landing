import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Font files can be colocated inside of `pages`
const myFont = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Kite Business Solutions - Voucher Site",
  openGraph: {
    siteName: "Kite Business Solutions - Voucher Site",
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "Kite Business Solutions",
    "Voucher Site",
    "Business Solutions",
    "Kite",
    "Voucher Management",
    "Corporate Vouchers",
    "Employee Benefits",
    "Workplace Solutions",
    "vouchers",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  description: "Kite Business Solutions - Voucher Site",
  manifest: "/metadata/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/metadata/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/metadata/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/metadata/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/metadata/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={myFont.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
