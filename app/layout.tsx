import type { Metadata, Viewport } from "next";
import "./globals.css";

const socialTitle = "Agents of Business — Human + AI Growth";
const socialDescription =
  "A global network of human and AI agents helping ambitious businesses unlock nonlinear growth across sales, partnerships, M&A, and innovation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agentsofbusiness.com"),
  title: socialTitle,
  description: socialDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: "/",
    siteName: "Agents of Business",
    images: [
      {
        url: "/images/og-agents-of-business.png",
        width: 1200,
        height: 630,
        alt: "Agents of Business — Human × AI × Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: ["/images/og-agents-of-business.png"],
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
