import Button from "./UI/Button";

export default function Capabilities() {
  return (
    <section
      id="services"
      className="pt-16 md:px-28 px-6 flex flex-col items-center"
    >
      <h2 className="capitalize md:text-sm text-xs text-[#B9FD50]">
        OUR CAPABILITIES
      </h2>
      <p className="md:text-4xl text-2xl mt-2 font-bold">
        We can help you with...
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2 mb-6">
        <Button>Web design & UI</Button>
        <Button>Social media visuals</Button>
        <Button>Infographics</Button>
        <Button>Design system</Button>
        <Button>Email design</Button>
        <Button>Stationery</Button>
        <Button>Icons</Button>
        <Button>Packaging & merch</Button>
        <Button>Signage</Button>
        <Button>Brochures</Button>
        <Button>Logos & branding</Button>
        <Button>Digital ads</Button>
        <Button>Wireframes</Button>
      </div>
    </section>
  );
}
