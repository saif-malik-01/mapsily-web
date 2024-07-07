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
  title: "Mapsily - India's Leading Marketing Agency",
  description:
    "Mapsily is the leading marketing agency offering SEO, social media, PPC, Web Design, Influencer Marketing, Video Production, etc.",
  author: "Mapsily",
  headerTitle: "Bringing Your Dream Into Reality",
  language: "en-us",
  siteUrl: "https://mapsily.com",
  siteLogo: "/logo.png",
  email: "info@mapsily.com",
  facebook: "https://facebook.com/mapsily",
  youtube: "https://youtube.com/mapsily",
  linkedin: "https://www.linkedin.com/mapsily/",
  locale: "en-US",
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
