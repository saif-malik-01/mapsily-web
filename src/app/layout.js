import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mapsily",
  url: "https://mapsily.com",
  sameAs: [
    "https://www.facebook.com/mapsily",
    "https://www.instagram.com/mapsily",
  ],
  image: "https://mapsily.com/mapsily-logo.png",
  description:
    "Mapsily is the leading marketing agency offering SEO, social media, PPC, Web Design, Influencer Marketing, Video Production and digital marketing strategies to drive growth and increase your online presence.",
};

export const metadata = {
  title: "Mapsily - Marketing Agency",
  description:
    "Mapsily is the leading marketing agency offering SEO, social media, PPC, Web Design, Influencer Marketing, Video Production, etc.",
  twitter: {
    card: "summary_large-image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        id="mapsily-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
