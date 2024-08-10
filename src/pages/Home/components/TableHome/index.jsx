import clsx from "clsx";
import { useState } from "react";
import ChartPie from "../../../../components/Chart/Chart";
import BarChart from "../../../../components/Chart/CharColumn";

function TableHome({ totalExpenses, totalRevenu }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-lg mb-6">
      <div className="flex gap-2 p-3 justify-center w-max m-auto mt-2 rounded-xl">
        <button
          onClick={() => setIsActive(true)}
          className={clsx(
            "transition-all p-3 min-w-[100px] rounded-xl shadow-custom-2 font-[700]",
            {
              "bg-black text-white hover:bg-white hover:text-black": isActive,
              "bg-white text-black hover:bg-black hover:text-white": !isActive,
              "shadow-custom-1": !isActive,
              "shadow-custom-2": isActive,
            }
          )}
        >
          <i className="fa-solid fa-chart-pie"></i> Pie
        </button>
        <button
          onClick={() => setIsActive(false)}
          className={clsx(
            "transition-all p-3 min-w-[100px] rounded-xl shadow-custom-2 font-[700]",
            {
              "bg-white text-black hover:bg-black hover:text-white": isActive,
              "bg-black text-white hover:bg-white hover:text-black": !isActive,
              "shadow-custom-2": !isActive,
              "shadow-custom-1": isActive,
            }
          )}
        >
          <i className="fa-solid fa-chart-simple"></i> Column
        </button>
      </div>
      {isActive ? (
        <ChartPie totalExpenses={totalExpenses} totalRevenu={totalRevenu} />
      ) : (
        <BarChart />
      )}
    </div>
  );
}

export default TableHome;
