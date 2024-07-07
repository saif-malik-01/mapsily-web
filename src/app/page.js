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

export default function Home() {
  return (
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
  );
}
