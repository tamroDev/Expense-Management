import { Link } from "react-router-dom";

function ItemRenevu() {
  return (
    <div className="bg-white w-[33%] h-max mb-[20px] rounded-lg shadow-lg p-4 ">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-[700] opacity-70 mb-5">Salary</h1>
          <span className="text-[22px] font-[800] opacity-90">8.000.0 $</span>
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

export default ItemRenevu;
