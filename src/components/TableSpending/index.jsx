/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
function TableHome() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 font-[800]">
              Task
            </th>
            <th scope="col" className="px-6 py-3 font-[800]">
              Date ( Month )
            </th>
            <th scope="col" className="px-6 py-3 font-[800]">
              Budget
            </th>
            <th scope="col" className="px-6 py-3 font-[800]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              House fee
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <Link className="text-blue-400">
                Details <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              House fee
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <Link className="text-blue-400">
                Details <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              House fee
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <Link className="text-blue-400">
                Details <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              House fee
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <Link className="text-blue-400">
                Details <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              House fee
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <Link className="text-blue-400">
                Details <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              House fee
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <Link className="text-blue-400">
                Details <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableHome;
