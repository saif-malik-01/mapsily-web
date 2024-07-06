function Card() {
  return (
    <div className="flex flex-col items-center md:items-start md:text-start text-center gap-4">
      <img src="./logo.png" width={100} />
      <h3 className="text-white text-xl font-semibold">
        1. On-demand requests
      </h3>
      <p className="text-gray-300">
        Put all your requests in the design queue in Trello, and we’ll knock
        them out 1 by 1.
      </p>
    </div>
  );
}

export default function Benefits() {
  return (
    <div className="py-20 md:px-24 px-6">
      <table className="hidden md:block w-full text-sm text-left rtl:text-right text-gray-500">
        <tbody>
          <tr className="border-b border-gray-50">
            <td className="px-8 py-14 border-r border-gray-50">
              <Card />
            </td>
            <td className="px-8 py-14 border-r border-gray-50">
              <Card />
            </td>
            <td className="px-8 py-14">
              <Card />
            </td>
          </tr>
          <tr className="border-b border-gray-50">
            <td className="px-8 py-14 border-r border-gray-50">
              <Card />
            </td>
            <td className="px-8 py-14 border-r">
              <Card />
            </td>
            <td className="px-8 py-14">
              <Card />
            </td>
          </tr>
          <tr>
            <td className="px-8 py-14 border-r border-gray-50">
              <Card />
            </td>
            <td className="px-8 py-14 border-r border-gray-50">
              <Card />
            </td>
            <td className="px-8 py-14">
              <Card />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col md:hidden gap-8 items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
