import { Link } from "react-router-dom";

function LimitSpending({ totalExpenses, totalRevenu }) {
  return (
    <div className="w-full h-full p-5">
      <h1 className="textTitle uppercase mb-7 text-red-500 text-[18px]">
        Curently Limit:
      </h1>
      <div className="border-b-2 border-gray-300 pb-10 flex justify-evenly items-center flex-auto flex-wrap mb-7">
        <div className="flex flex-nowrap">
          <input
            type="text"
            className="py-3 px-4 bg-gray-200 rounded-xl  w-[80%]"
            placeholder="Set limits"
          />
          <button className="w-[20%]">
            <i className="fa-solid fa-gear bg-blue-400 py-3 p-5 text-white rounded-xl mx-3"></i>
          </button>
        </div>
        <div>
          <select
            name=""
            id=""
            className="border-2 border-black p-2 rounded-xl w-[100%]"
          >
            <option value="VNĐ">VNĐ</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
      <div className="pb-10 flex justify-start items-center flex-auto flex-wrap">
        <div className="flex justify-between w-full mb-7">
          <div className="font-bold flex justify-center items-center gap-4">
            <h1>Limit: </h1>
            <span className="text-red-500 text-[20px]">3.000.000.00 $</span>
            <h1>/ 1 Month</h1>
          </div>
          <div>
            <Link
              className="text-blue-600 font-bold hover:underline"
              to="/expense"
            >
              View
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-full mb-7">
          <div className="font-bold flex justify-center items-center gap-4">
            <h1>Expense: </h1>
            <span className="text-red-500 text-[20px]">{totalExpenses} $</span>
            <h1>/ 1 Month</h1>
          </div>
          <div>
            <Link
              className="text-blue-600 font-bold hover:underline"
              to="/expense"
            >
              View
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-full mb-7">
          <div className="font-bold flex justify-center items-center gap-4">
            <h1>Revenu: </h1>
            <span className="text-red-500 text-[20px]">{totalRevenu} $</span>
            <h1>/ 1 Month</h1>
          </div>
          <div>
            <Link
              className="text-blue-600 font-bold hover:underline"
              to="/expense"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimitSpending;
