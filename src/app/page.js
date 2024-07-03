import Capabilities from "./components/Capabilities";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Navbar from "./components/UI/Navbar";
import Work from "./components/Work";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Process/>
      <Work/>
      <Capabilities/>
    </main>
  );
}
