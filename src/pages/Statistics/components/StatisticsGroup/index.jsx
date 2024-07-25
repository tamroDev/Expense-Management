import { Link } from "react-router-dom";

function StatisticsGroup() {
  return (
    <div className="w-full bg-gray-50 h-max py-8 shadow-lg">
      <div className="w-50% m-auto h-max text-center font-bold uppercase mt-3 text-red-500 text-[30px] textTitle tracking-widest mb-10">
        Statistical
      </div>
      <div className="w-full flex flex-auto flex-wrap p-3 justify-center gap-2">
        <div className="w-[47%] bg-white">
          <h1 className="text-center text-[20px] font-bold textTitle border-b-4 border-black pb-2">
            Last Month
          </h1>
          <div className="h-max flex">
            <div className="w-[20%] h-full flex flex-col">
              <div className="py-3 px-1 font-bold border-r-4 border-b-4 border-black bg-green-300 border-l-4">
                Revenu
              </div>
              <div className="py-3 px-1 font-bold border-r-4 border-b-4 border-black bg-red-300 border-l-4">
                Spending
              </div>
              <div className="py-3 px-1 font-bold border-r-4 border-b-4 border-black bg-green-300 border-l-4">
                Surplus
              </div>
              <div className="py-3 px-1 font-bold border-r-4 border-b-4 border-black bg-green-300 text-nowrap text-ellipsis border-l-4">
                Profit
              </div>
            </div>
            <div className="w-[70%] h-full">
              <div className="py-3 px-1 font-bold border-b-4 border-black text-green-500">
                +1.000.0 $
              </div>
              <div className="py-3 px-1 font-bold border-b-4 border-black text-red-500">
                -500.0 $
              </div>
              <div className="py-3 px-1 font-bold border-b-4 border-black text-green-500">
                +500.0 $
              </div>
              <div className="py-3 px-1 font-bold border-b-4 border-black text-green-500">
                +1.000.000.0 $
              </div>
            </div>
            <div className="w-[10%] h-full">
              <Link
                to={"/"}
                className="hover:bg-slate-400 hover:text-white border-l-4 border-b-4 border-black py-3 px-1 font-bold flexCenter border-r-4"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
              <Link
                to={"/"}
                className="hover:bg-slate-400 hover:text-white border-l-4 border-b-4 border-black py-3 px-1 font-bold flexCenter border-r-4"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
              <Link
                to={"/"}
                className="hover:bg-slate-400 hover:text-white border-l-4 border-b-4 border-black py-3 px-1 font-bold flexCenter border-r-4"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
              <Link
                to={"/"}
                className="hover:bg-slate-400 hover:text-white border-l-4 border-b-4 border-black py-3 px-1 font-bold flexCenter border-r-4"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-auto w-1 rounded-full bg-black"></div>
        <div className="w-[47%] bg-white">
          <h1 className="text-center text-[20px] font-bold textTitle border-b-4 border-black pb-2 ">
            Currently Month
          </h1>
          <div className="h-max flex">
            <div className="w-[20%] h-full">
              <div className="py-3 px-1 font-bold border-r-4 border-b-4 border-black bg-red-300 border-l-4">
                Revenu
              </div>
              <div className="py-3 px-1 font-bold border-r-4 border-b-4 border-black bg-green-300 border-l-4">
                Spending
              </div>
              <div className="py-3 px-1 font-bold border-r-4 border-b-4 border-black bg-red-300 border-l-4">
                Surplus
              </div>
              <div className="py-3 px-1 font-bold border-r-4 border-b-4 border-black bg-green-300 text-nowrap text-ellipsis border-l-4">
                Profit
              </div>
            </div>
            <div className="w-[70%] h-full">
              <div className="py-3 px-1 font-bold border-b-4 border-black text-red-500">
                +900.0 $
              </div>
              <div className="py-3 px-1 font-bold border-b-4 border-black text-green-500">
                -600.0 $
              </div>
              <div className="py-3 px-1 font-bold border-b-4 border-black text-red-500">
                +300.0 $
              </div>
              <div className="py-3 px-1 font-bold border-b-4 border-black text-green-500">
                +1.000.000.0 $
              </div>
            </div>
            <div className="w-[10%] h-full">
              <Link
                to={"/"}
                className="hover:bg-slate-400 hover:text-white border-l-4 border-b-4 border-black py-3 px-1 font-bold flexCenter border-r-4"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
              <Link
                to={"/"}
                className="hover:bg-slate-400 hover:text-white border-l-4 border-b-4 border-black py-3 px-1 font-bold flexCenter border-r-4"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
              <Link
                to={"/"}
                className="hover:bg-slate-400 hover:text-white border-l-4 border-b-4 border-black py-3 px-1 font-bold flexCenter border-r-4"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
              <Link
                to={"/"}
                className="hover:bg-slate-400 hover:text-white border-l-4 border-b-4 border-black py-3 px-1 font-bold flexCenter border-r-4"
              >
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="bg-blue-500 text-white px-1 py-4 flexCenter w-[12%] m-3 rounded-xl uppercase font-bold text-[12px]"
        to={"/report"}
      >
        View report <i className="fa-regular fa-eye ml-2"></i>
      </Link>
    </div>
  );
}

export default StatisticsGroup;
