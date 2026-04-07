import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hublytix — HubSpot Portal Health Monitor",
  description: "Automated health monitoring for your HubSpot portal. 50+ diagnostic checks, 0-100 health score, prioritized fix recommendations. Keep your CRM running at peak performance.",
  keywords: ["HubSpot audit", "HubSpot portal health", "CRM health check", "HubSpot monitoring", "portal audit tool", "HubSpot data quality"],
  authors: [{ name: "Hublytix" }],
  openGraph: {
    title: "Hublytix — Your HubSpot Portal's Intelligence Engine",
    description: "Automated health monitoring for HubSpot. 50+ checks, real-time scoring, prioritized fixes.",
    url: "https://hublytix.ai",
    siteName: "Hublytix",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hublytix Dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hublytix — HubSpot Portal Health Monitor",
    description: "50+ automated checks. Real-time health score. Prioritized fixes.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Hublytix",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://hublytix.ai",
              description: "Automated HubSpot portal health monitoring platform with 50+ diagnostic checks and real-time scoring.",
              offers: [
                { "@type": "Offer", name: "Starter", price: "49", priceCurrency: "USD", priceValidUntil: "2027-12-31" },
                { "@type": "Offer", name: "Professional", price: "99", priceCurrency: "USD", priceValidUntil: "2027-12-31" },
                { "@type": "Offer", name: "Agency", price: "249", priceCurrency: "USD", priceValidUntil: "2027-12-31" },
              ],
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "12" },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
