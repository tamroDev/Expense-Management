function TableSavingsFunds() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
              <thead className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    SavingsFund Name
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Progress
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Budget
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200 dark:border-white/10">
                  <td className="whitespace-nowrap text-left px-6 py-4 font-medium">
                    House purchase money
                  </td>
                  <td className="whitespace-nowrap text-center py-4 m-auto w-[250px]">
                    <h1>60%</h1>
                    <div className="relative h-[10px] w-full rounded-full bg-blue-300">
                      <div className="absolute left-0 w-[60%] bg-blue-500 h-full rounded-full"></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-[700]">
                    50.000.0 $
                  </td>
                  <td className="px-6 py-4">
                    <div className="whitespace-nowrap text-[10px] font-[700] uppercase text-yellow-600 bg-yellow-200 rounded-full p-1">
                      In Progress
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-neutral-200 dark:border-white/10">
                  <td className="whitespace-nowrap text-left px-6 py-4 font-medium">
                    Buy a plane
                  </td>
                  <td className="whitespace-nowrap text-center py-4 m-auto w-[250px]">
                    <h1>0%</h1>
                    <div className="relative h-[10px] w-full rounded-full bg-blue-300">
                      <div className="absolute left-0 w-[0%] bg-blue-500 h-full rounded-full"></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-[700]">
                    90.000.0 $
                  </td>
                  <td className="px-6 py-4">
                    <div className="whitespace-nowrap text-[10px] font-[700] uppercase text-red-600 bg-red-200 rounded-full p-1">
                      Pending
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-neutral-200 dark:border-white/10">
                  <td className="whitespace-nowrap text-left px-6 py-4 font-medium">
                    House purchase money
                  </td>
                  <td className="whitespace-nowrap text-center py-4 m-auto w-[250px]">
                    <h1>100%</h1>
                    <div className="relative h-[10px] w-full rounded-full bg-blue-300">
                      <div className="absolute left-0 w-[100%] bg-blue-500 h-full rounded-full"></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-[700]">
                    50.000.0 $
                  </td>
                  <td className="px-6 py-4">
                    <div className="whitespace-nowrap text-[10px] font-[700] uppercase text-green-600 bg-green-200 rounded-full p-1">
                      Completed
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableSavingsFunds;
