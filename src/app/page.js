import Benefits from "./components/Benefit";
import Blogs from "./components/Blogs";
import Capabilities from "./components/Capabilities";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Steps from "./components/Steps";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";
import Work from "./components/Work";
import Script from "next/script";

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

export default function Home() {
  return (
    <>
      <Script
        id="mapsily-root-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main className="bg-[#111204]">
        <Header />
        <Hero />
        <Process
          id="process"
          title="How We Work"
          subtitle="Get a dedicated design team at fraction of the cost."
          description="Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits."
        />
        <Steps />
        <Work />
        <Capabilities />
        <Process
          id="benefits"
          title="BENEFITS"
          subtitle="The design subscription that connects you to your dream team"
          description="A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels."
        />
        <Benefits />
        <Testimonial />
        <Blogs />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
