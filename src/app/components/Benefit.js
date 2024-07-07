import {
  LuCalendar,
  LuCircleDollarSign,
  LuCloudLightning,
  LuDollarSign,
  LuInfinity,
  LuPaintbrush,
  LuSettings,
  LuStar,
} from "react-icons/lu";
import { MdPanToolAlt } from "react-icons/md";

function Card({ Icon = () => {}, title, subtitle }) {
  return (
    <div className="flex flex-col items-center md:items-start md:text-start text-center gap-4">
      <Icon size={40} color="#B9FD50" />
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-gray-300">{subtitle}</p>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="py-20 md:px-24 px-6">
      <table className="hidden md:block w-full text-sm text-left rtl:text-right text-gray-500">
        <tbody>
          <tr className="border-b border-gray-50">
            <td className="px-8 py-14 border-r border-gray-50">
              <Card
                Icon={LuInfinity}
                title="1. On-demand requests"
                subtitle="Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1."
              />
            </td>
            <td className="px-8 py-14 border-r border-gray-50">
              <Card
                Icon={LuCloudLightning}
                title="2. Top-notch quality"
                subtitle="High-end work from a dedicated team of senior designers that's always available when you need it."
              />
            </td>
            <td className="px-8 py-14">
              <Card
                Icon={MdPanToolAlt}
                title="3. Powered by AI"
                subtitle="We build every site with our AI Tools, making them dynamic, accessible, and easily scalable. It’s easy for you like Squarespace but better."
              />
            </td>
          </tr>
          <tr className="border-b border-gray-50">
            <td className="px-8 py-14 border-r border-gray-50">
              <Card
                Icon={LuPaintbrush}
                title="4. Fast. Responsive. Reliable."
                subtitle="Get regular updates on your projects and can expect to receive your designs within 2-3 days."
              />
            </td>
            <td className="px-8 py-14 border-r">
              <Card
                Icon={LuCalendar}
                title="5. No Lock in contracts"
                subtitle="Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime."
              />
            </td>
            <td className="px-8 py-14">
              <Card
                Icon={LuDollarSign}
                title="6. Great value for money"
                subtitle="Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr)."
              />
            </td>
          </tr>
          <tr>
            <td className="px-8 py-14 border-r border-gray-50">
              <Card
                Icon={LuSettings}
                title="7. Customized for you"
                subtitle="We design and build custom for you. We’re never starting from a template unless you want that? You don't, right?"
              />
            </td>
            <td className="px-8 py-14 border-r border-gray-50">
              <Card
                Icon={LuCircleDollarSign}
                title="8. Creative paying"
                subtitle="We're here when you need us and not on payroll when you don't."
              />
            </td>
            <td className="px-8 py-14">
              <Card
                Icon={LuStar}
                title="9. Expert turnovers"
                subtitle="You’re getting 10+ years of design experience with every request. No hand-holding required."
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col md:hidden gap-8 items-center">
        <Card
          Icon={LuInfinity}
          title="1. On-demand requests"
          subtitle="Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1."
        />
        <Card
          Icon={LuCloudLightning}
          title="2. Top-notch quality"
          subtitle="High-end work from a dedicated team of senior designers that's always available when you need it."
        />
        <Card
          Icon={MdPanToolAlt}
          title="3. Powered by AI"
          subtitle="We build every site with our AI Tools, making them dynamic, accessible, and easily scalable. It’s easy for you like Squarespace but better."
        />
        <Card
          Icon={LuPaintbrush}
          title="4. Fast. Responsive. Reliable."
          subtitle="Get regular updates on your projects and can expect to receive your designs within 2-3 days."
        />
        <Card
          Icon={LuCalendar}
          title="5. No Lock in contracts"
          subtitle="Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime."
        />
        <Card
          Icon={LuDollarSign}
          title="6. Great value for money"
          subtitle="Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr)."
        />
        <Card
          Icon={LuSettings}
          title="7. Customized for you"
          subtitle="We design and build custom for you. We’re never starting from a template unless you want that? You don't, right?"
        />
        <Card
          Icon={LuCircleDollarSign}
          title="8. Creative paying"
          subtitle="We're here when you need us and not on payroll when you don't."
        />
        <Card
          Icon={LuStar}
          title="9. Expert turnovers"
          subtitle="You’re getting 10+ years of design experience with every request. No hand-holding required."
        />
      </div>
    </section>
  );
}
