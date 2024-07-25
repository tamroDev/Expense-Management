import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const arrExpense = [
  {
    id: 1,
    month: 3,
    name: "House Fee",
    amount: "1000.0 $",
    ratio: "40,55%",
    up: true,
  },
  {
    id: 2,
    month: 1,
    name: "Electricity bill",
    amount: "100.0 $",
    ratio: "27,55%",
    up: false,
  },
  {
    id: 3,
    month: 1,
    name: "Water fee",
    amount: "90.2 $",
    ratio: "7,55%",
    up: true,
  },
  {
    id: 4,
    month: 6,
    name: "School fees",
    amount: "4450.0 $",
    ratio: "10,55%",
    up: false,
  },
  {
    id: 5,
    month: 1,
    name: "Foods fee",
    amount: "3170.0 $",
    ratio: "10,55%",
    up: true,
  },
];

const arrIncome = [
  {
    id: 1,
    name: "Salary",
    month: 1,
    amount: "20000.0 $",
    ratio: "10%",
    up: true,
  },
  {
    id: 2,
    name: "Stock",
    month: 6,
    amount: "100000.0 $",
    ratio: "0%",
    up: true,
  },
  {
    id: 3,
    name: "Overtime",
    month: 1,
    amount: "4000.0 $",
    ratio: "3%",
    up: false,
  },
  {
    id: 4,
    name: "Business",
    month: 3,
    amount: "4240.0 $",
    ratio: "10%",
    up: false,
  },
];

function FinancialReport() {
  const totalExpense = arrExpense.reduce((total, current) => {
    const cleanedString = current.amount.replace(/[^0-9.]/g, "");

    const number = parseFloat(cleanedString);
    return number + total;
  }, 0);

  const totaIncome = arrIncome.reduce((total, current) => {
    const cleanedString = current.amount.replace(/[^0-9.]/g, "");

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
                    Ratio (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {arrExpense.map((item) => (
                  <tr key={item.id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {item.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {item.month}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {item.amount}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                      {item.up ? (
                        <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      ) : (
                        <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                      )}

                      {item.ratio}
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
                    Ratio (%)
                  </th>
                </tr>
              </thead>

              <tbody>
                {arrIncome.map((item) => (
                  <tr key={item.id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {item.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {item.month}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {item.amount}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                      {item.up ? (
                        <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      ) : (
                        <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                      )}

                      {item.ratio}
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
          report date: <p className="text-red-500">{formattedDate}</p>{" "}
        </div>
      </div>
    </div>
  );
}

export default FinancialReport;
