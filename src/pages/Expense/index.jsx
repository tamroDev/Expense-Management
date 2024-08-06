import { useState } from "react";
import AddExpense from "./AddSpending";
import ListSpending from "./ListSpending";

function Expense() {
  const [showExpenses, setShowExpenses] = useState(true);

  return (
    <>
      <div
        className={
          "relative w-full h-full bg-white rounded-2xl flex justify-start items-center flex-col overflow-auto pd-[40px] custom-scrollbar"
        }
      >
        <div className="w-full flex justify-center items-center mb-5">
          <button
            onClick={() => setShowExpenses(true)}
            type="button"
            className={`textTitle text-[20px] uppercase text-center h-[70px] leading-[10px] ${
              showExpenses
                ? "text-red-500"
                : "text-black opacity-35 hover:opacity-100 hover:underline transition-all duration-300"
            }`}
          >
            Create spending
          </button>
          <div className="h-[50%] mx-5 w-[1px] bg-gray-300"></div>
          <button
            onClick={() => setShowExpenses(false)}
            type="button"
            className={`textTitle text-[20px] uppercase text-center h-[70px] leading-[10px] ${
              showExpenses
                ? "text-black opacity-35 hover:opacity-100 hover:underline transition-all duration-300"
                : "text-red-500"
            }`}
          >
            List Spending
          </button>
        </div>
        {showExpenses ? <AddExpense /> : <ListSpending />}
      </div>
    </>
  );
}

export default Expense;
