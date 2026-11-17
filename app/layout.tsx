import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./contact.css";
import "./motion.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cottaway.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cottaway Private Limited | Technology that keeps businesses moving",
    template: "%s | Cottaway",
  },
  description:
    "Cottaway Private Limited builds practical software for ambitious businesses. Meet Gymatrix, modern gym management software for growing fitness businesses.",
  applicationName: "Cottaway",
  keywords: [
    "Cottaway Private Limited",
    "IT company Kerala",
    "software company Kakkanad",
    "gym management software",
    "gym software India",
    "Gymatrix",
    "fitness business software",
  ],
  authors: [{ name: "Cottaway Private Limited" }],
  creator: "Cottaway Private Limited",
  publisher: "Cottaway Private Limited",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Cottaway Private Limited",
    title: "Cottaway | Technology that keeps businesses moving",
    description:
      "Thoughtful software for real businesses. Discover Gymatrix, the calm and powerful gym management platform from Cottaway.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Cottaway Private Limited — Software with intent" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cottaway | Technology that keeps businesses moving",
    description: "Practical software for ambitious businesses, including Gymatrix gym management software.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
};

export const viewport: Viewport = {
  themeColor: "#111513",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
