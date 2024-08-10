import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import mergeExpensesWithSettings from "../../helpers/convertCategory";
import { settingRevenu } from "../Revenu/settingRevenu";
import { settingSpending } from "../Expense/settingExpense";
import { useSelector } from "react-redux";

function FinancialReport({ hidden }) {
  const { expenses, revenu } = useSelector((state) => state.statistic);
  const newArrEx = mergeExpensesWithSettings(expenses, settingSpending);
  const newArrRv = mergeExpensesWithSettings(revenu, settingRevenu);

  const totalExpense = newArrEx.reduce((total, current) => {
    const cleanedString = current.budget.replace(/[^0-9.]/g, "");

    const number = parseFloat(cleanedString);
    return number + total;
  }, 0);

  const totaIncome = newArrRv.reduce((total, current) => {
    const cleanedString = current.budget.replace(/[^0-9.]/g, "");

    const number = parseFloat(cleanedString);
    return number + total;
  }, 0);

  const netBalance = totaIncome - totalExpense;

  const formattedTotalExpense = totalExpense.toLocaleString("vi-VN");
  const formattedTotalIncome = totaIncome.toLocaleString("vi-VN");
  const formattedNetBalance = netBalance.toLocaleString("vi-VN");

  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0"); // Đảm bảo có 2 chữ số
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Đảm bảo có 2 chữ số
  const year = now.getFullYear();
  const time = now.toLocaleTimeString();

  const formattedDate = `${time}-${day}/${month}/${year}`;

  const reportRef = useRef();
  const generatePdf = async () => {
    const element = reportRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("financial-report.pdf");
  };

  return (
    <div className="financial-report p-7 custom-scrollbar overflow-auto w-full h-full">
      {hidden && (
        <div className="w-[595px]  m-auto mb-4">
          <button
            onClick={generatePdf}
            className="mt-4 px-4 py-3 bg-blue-500 text-white rounded flex gap-2"
          >
            <h1 className="ml-4">Download</h1>
            <p>
              PDF <i className="fa-solid fa-file-pdf"></i>
            </p>
          </button>
        </div>
      )}
      <div
        className="flex flex-col justify-between bg-white p-5 border w-[595px] h-[842px] m-auto"
        ref={reportRef}
      >
        <div>
          <h1 className="text-[13px] uppercase font-bold mb-4">
            Expense Report:
          </h1>
          <div className="block w-full overflow-x-auto mb-3">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Expenditures
                  </th>
                  <th className="text-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    Date (n / Month)
                  </th>
                  <th className="text-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    Amount
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Date create
                  </th>
                </tr>
              </thead>
              <tbody>
                {newArrEx.map((item) => (
                  <tr key={item._id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {item.nameCategory}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {item.month}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {item.budget}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                      {item.dateEnd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h1 className="text-[13px] uppercase font-bold mb-4">
            Income Report:
          </h1>
          <div className="block w-full overflow-x-auto mb-3">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Expenditures
                  </th>
                  <th className="text-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    Date (n / Month)
                  </th>
                  <th className="text-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    Amount
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Date create
                  </th>
                </tr>
              </thead>
              <tbody>
                {newArrRv.map((item) => (
                  <tr key={item._id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {item.nameCategory}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {item.month}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {item.budget}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                      {item.dateEnd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[12px] mb-2">
            <strong>Total Income:</strong>{" "}
            <span className="text-green-500 font-bold">
              {formattedTotalIncome} $
            </span>
          </p>
          <p className="text-[12px] mb-2">
            <strong>Total Expenses:</strong>{" "}
            <span className="text-red-500 font-bold">
              {formattedTotalExpense} $
            </span>
          </p>
          <p className="text-[12px] mb-2">
            <strong>Net Balance:</strong>{" "}
            <span className="text-blue-500 font-bold">
              {formattedNetBalance} $
            </span>
          </p>
        </div>
        <div className="uppercase text-[10px] font-bold flex gap-5">
          report date: <p className="text-red-500">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default FinancialReport;
