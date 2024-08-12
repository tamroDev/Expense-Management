/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ItemRenevu({ up, down, formatCurrencyUSD }) {
  const { totalExpenses, totalRevenu } = useSelector(
    (state) => state.statistic
  );

  if (up) {
    return (
      <div className="bg-white w-[50%] h-max mb-[20px] rounded-lg shadow-lg p-4 customBg2 ">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-[700] opacity-70 mb-5">Revenu</h1>
            <span className="text-[22px] text-[#1b7759] font-[800] opacity-90">
              {formatCurrencyUSD(totalRevenu)} $
            </span>
          </div>
          <div className="bg-[#98b4fa4f] text-blue-500 px-4 py-3 rounded-lg">
            <i className="fa-solid fa-dollar-sign"></i>
          </div>
        </div>
        <Link className="text-blue-600 font-[700] flex items-center">
          View data
          <i className="fa-solid fa-arrow-right text-[10px] ml-2"></i>
        </Link>
      </div>
    );
  }

  if (down) {
    return (
      <div className="bg-white w-[50%] h-max mb-[20px] rounded-lg shadow-lg p-4 customBg1 ">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-[700] opacity-70 mb-5">Total Expenditure</h1>
            <span className="text-[22px] text-[#d33c3c] font-[800] opacity-90">
              {formatCurrencyUSD(totalExpenses)} $
            </span>
          </div>
          <div className="bg-[#98b4fa4f] text-blue-500 px-4 py-3 rounded-lg">
            <i className="fa-solid fa-dollar-sign"></i>
          </div>
        </div>
        <Link className="text-blue-600 font-[700] flex items-center">
          View data
          <i className="fa-solid fa-arrow-right text-[10px] ml-2"></i>
        </Link>
      </div>
    );
  }
}

export default ItemRenevu;
