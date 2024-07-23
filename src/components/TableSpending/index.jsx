/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
function TableHome({ table, data }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {table === 1 ? <TheadRevenue /> : <TheadSpend />}
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="text-left px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="px-5 py-4">{item.month}</td>
              <td className="px-5 py-4 font-[700]">{item.money}</td>
              <td className="px-5 py-4">
                <Link to={item.path} className="text-blue-400">
                  Details <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TheadSpend() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th
          scope="col"
          className="px-4 py-3 max-w-[200px] min-w-[180px] font-[800] text-left"
        >
          Task
        </th>
        <th
          scope="col"
          className="px-4 py-3 max-w-[200px] min-w-[180px] font-[800] text-left"
        >
          Date ( Month )
        </th>
        <th
          scope="col"
          className="px-4 py-3 max-w-[200px] min-w-[180px] font-[800] text-left"
        >
          Budget
        </th>
        <th
          scope="col"
          className="px-4 py-3 max-w-[200px] min-w-[180px] font-[800] text-left"
        >
          Action
        </th>
      </tr>
    </thead>
  );
}

function TheadRevenue() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th
          scope="col"
          className="px-4 py-3 max-w-[200px] min-w-[180px] font-[800] text-left"
        >
          JOBS
        </th>
        <th
          scope="col"
          className="px-4 py-3 max-w-[200px] min-w-[180px] font-[800] text-left"
        >
          Periodic ( $ / Month )
        </th>
        <th
          scope="col"
          className="px-4 py-3 max-w-[200px] min-w-[180px] font-[800] text-left"
        >
          Money Received
        </th>
        <th
          scope="col"
          className="px-4 py-3 max-w-[200px] min-w-[180px] font-[800] text-left"
        >
          Action
        </th>
      </tr>
    </thead>
  );
}

export default TableHome;
