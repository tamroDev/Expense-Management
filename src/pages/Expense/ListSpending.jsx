import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpense,
  getExpenses,
} from "../../redux/reduxSlices/expenseSlice";
import { useEffect, useState } from "react";
import formatCurrencyUSD from "../../helpers/fomartMoney.js";
import mergeExpensesWithSettings from "../../helpers/convertCategory.js";
import { settingSpending } from "./settingExpense";
import Modal from "../../components/Modal/index.jsx";
import UpdateForm from "./components/UpdateForm";

function ListSpending() {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [idSpending, setId] = useState();
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.auth.userDetails);
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getExpenses(_id));
  }, [dispatch, _id]);

  const { expenseList } = useSelector((state) => state.expense);

  const newArr = mergeExpensesWithSettings(expenseList, settingSpending);
  let total = formatCurrencyUSD(
    newArr.reduce((total, item) => total + parseInt(item.budget), 0)
  );

  const handleDelete = (id) => {
    dispatch(deleteExpense(id))
      .unwrap()
      .then(() => {
        dispatch(getExpenses(_id));
      })
      .catch((error) => {
        console.error("Failed to delete the expense: ", error);
      });
    setShowModal(false);
  };

  const getId = (id) => {
    setId(id);
  };
  console.log(status);

  // if (status === "loading") {
  //   return;
  // }

  return (
    <div className="w-full px-10 relative">
      {showModal && (
        <Modal set={setShowModal} handleDelete={handleDelete} id={idSpending} />
      )}
      {showUpdateForm && (
        <UpdateForm cancel={setShowUpdateForm} id={idSpending} />
      )}

      <div className="w-max border-gray-200 border-[0.1px] shadow-2xl rounded-xl p-4 font-bold mb-4">
        <div className="mb-5">
          Total Budget: <span className="text-red-600 mx-3"> {total}</span>
        </div>
        <div>
          Spending Quantity:{" "}
          <span className="text-red-600 mx-3"> {newArr.length}</span>
        </div>
      </div>

      {newArr.length === 0 ? (
        <div className="text-center text-gray-500 py-4">No data available</div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Budget
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Date Create
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Date End
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {newArr.map((item, index) => {
                const moneyFormat = formatCurrencyUSD(item.budget);
                return (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200 hover:cursor-pointer"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 text-center font-bold text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {moneyFormat}
                    </th>
                    <td className="px-6 py-4 text-center">
                      <img
                        src={item.src}
                        className="max-w-[50px] mx-auto"
                        alt=""
                      />
                      <h1 className="font-bold text-black">
                        {item.nameCategory}
                      </h1>
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">
                      {item.dateCreate}
                    </td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">
                      {item.dateEnd}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                        onClick={() => {
                          getId(item._id);
                          setShowUpdateForm(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          getId(item._id);
                        }}
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ListSpending;
