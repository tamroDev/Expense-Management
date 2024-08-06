import { useDispatch, useSelector } from "react-redux";
import { settingSpending } from "../../settingExpense";
import { useState } from "react";
import { updateExpense } from "../../../../redux/reduxSlices/expenseSlice";

function UpdateForm({ cancel, id }) {
  const dispatch = useDispatch();
  const { expenseList } = useSelector((state) => state.expense);
  const expenseItem = expenseList.filter((item) => item._id === id);

  const [expense, setExpense] = useState({
    budget: expenseItem[0].budget,
    category: expenseItem[0].category,
    dateEnd: expenseItem[0].dateEnd,
    description: expenseItem[0].description,
  });

  const logId = () => {
    dispatch(updateExpense({ id, expense }));
    cancel(false);
  };
  return (
    <div className="w-[100vw] h-[100vh] fixed z-10 bg-[#00000066] inset-0 flex justify-center items-center">
      <form className="bg-white p-5  border-[0.5px] border-gray-200 rounded-xl shadow-lg  w-[35%] flex flex-col m-auto">
        <div className="flex flex-col gap-3 items-start w-[95%] mx-auto mb-5">
          <label
            className="font-semibold uppercase text-[10px]"
            htmlFor="budget"
          >
            Budget:
          </label>
          <input
            className="text-[10px] w-full bg-slate-200 py-2 px-2 rounded-lg hover:bg-white hover:border-black hover:border-2 border-2 border-white transition-all duration-200"
            type="string"
            name="budget"
            id="budget"
            placeholder="Budget ..."
            value={expense.budget}
            onChange={(e) => {
              setExpense({
                ...expense,
                budget: e.target.value,
              });
            }}
          />
        </div>

        <div className="flex flex-col gap-3 items-start w-[95%] mx-auto mb-3">
          <div className="relative min-w-[200px] w-[100%]">
            <select
              onChange={(e) => {
                console.log(e.target.value);

                setExpense({
                  ...expense,
                  category: e.target.value,
                });
              }}
              value={expense.category}
              className="uppercase font-medium peer h-full w-full rounded-[7px] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm  text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 border-white border-2 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              {settingSpending.map((item) => {
                return (
                  <option
                    className="uppercase font-medium"
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a City
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start w-[95%] mx-auto mb-3">
          <label className="font-semibold uppercase text-[10px]" htmlFor="Date">
            Date:
          </label>
          <input
            className="text-[10px] w-full bg-slate-200 py-2 px-2 rounded-lg hover:bg-white hover:border-black hover:border-2 border-2 border-white transition-all duration-200"
            type="date"
            name="Date"
            id="Date"
            placeholder="Date ..."
            value={expense.dateEnd}
            onChange={(e) => {
              setExpense({
                ...expense,
                dateEnd: e.target.value,
              });
            }}
          />
        </div>

        <div className="flex flex-col gap-3 items-start w-[95%] mx-auto mb-3">
          <label
            className="font-semibold uppercase text-[10px]"
            htmlFor="Description"
          >
            Description:
          </label>
          <textarea
            className="text-[10px] w-full bg-slate-200 py-2 px-2 rounded-lg hover:bg-white hover:border-black hover:border-2 border-2 border-white transition-all duration-200"
            type="Description"
            name="Description"
            id="Description"
            placeholder="Description ..."
            value={expense.description}
            onChange={(e) => {
              setExpense({
                ...expense,
                description: e.target.value,
              });
            }}
          />
        </div>

        <div className="flex justify-start items-center w-max gap-3 px-2">
          <button
            className="bg-green-500 text-[10px] uppercase  mx-auto px-2 py-3 text-white font-medium rounded-xl"
            type="button"
            onClick={logId}
          >
            Update Expense
          </button>
          <button
            onClick={() => {
              cancel(false);
            }}
            className="bg-red-500 text-[10px] uppercase  mx-auto px-2 py-3 text-white font-medium rounded-xl"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
