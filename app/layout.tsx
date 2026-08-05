import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agentsofbusiness.com"),
  title: "Welcome to the AI-powered Economy 🤖 🛍️",
  description: "This Way to Digital Growth 🚀",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Welcome to the AI-powered Economy 🤖 🛍️",
    description: "This Way to Digital Growth 🚀",
    url: "/",
    siteName: "Welcome to the AI-powered Economy 🤖 🛍️",
    images: [{ url: "/images/card.jpg", width: 1280, height: 800 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to the AI-powered Economy 🤖 🛍️",
    description: "This Way to Digital Growth 🚀",
    images: ["/images/card.jpg"],
  },
  icons: { icon: "/images/image03.jpg", shortcut: "/images/image03.jpg" },
};

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: "#101827",
  viewportFit: "cover",
  width: "device-width",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
