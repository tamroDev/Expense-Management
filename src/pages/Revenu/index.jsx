import { useState } from "react";
import AddRevenu from "./AddRevenu";
import ListRevenu from "./ListRevenu";

function Expense() {
  const [showRenvenu, setShowRenvenu] = useState(false);

  return (
    <>
      <div
        className={
          "w-full h-full bg-white rounded-2xl flex justify-start items-center flex-col overflow-auto pd-[40px] custom-scrollbar"
        }
      >
        <div className="w-full flex justify-center items-center mb-5">
          <button
            onClick={() => setShowRenvenu(true)}
            type="button"
            className={`textTitle text-[20px] uppercase text-center h-[70px] leading-[10px] ${
              showRenvenu
                ? "text-red-500"
                : "text-black opacity-35 hover:opacity-100 hover:underline transition-all duration-300"
            }`}
          >
            Create Revenu
          </button>
          <div className="h-[50%] mx-5 w-[1px] bg-gray-300"></div>
          <button
            onClick={() => setShowRenvenu(false)}
            type="button"
            className={`textTitle text-[20px] uppercase text-center h-[70px] leading-[10px] ${
              showRenvenu
                ? "text-black opacity-35 hover:opacity-100 hover:underline transition-all duration-300"
                : "text-red-500"
            }`}
          >
            List Revenu
          </button>
        </div>
        {showRenvenu ? <AddRevenu /> : <ListRevenu />}
      </div>
    </>
  );
}

export default Expense;
