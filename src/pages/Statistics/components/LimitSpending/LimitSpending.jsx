import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateLimitUser } from "../../../../redux/reduxSlices/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import formatCurrencyUSD from "../../../../helpers/fomartMoney";
import { useState, useEffect } from "react";
import NoticationBox from "../noticationBox/NoticationBox";

const schema = yup.object().shape({
  limit: yup.string().trim().required("Limit cannot be blank!"),
});

function LimitSpending({ totalExpenses, totalRevenu }) {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const { _id, limit: currentLimit } = useSelector(
    (state) => state.auth.userDetails
  );

  const [notication, setNotication] = useState(false);

  useEffect(() => {
    const notiShow = currentLimit < totalExpenses;
    setNotication(notiShow);
  }, [currentLimit, totalExpenses]);

  const handleSignUp = async (value) => {
    const { limit } = value;

    try {
      await dispatch(updateLimitUser({ id: _id, limit })).unwrap();
      setValue("limit", limit);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full p-5">
      {notication && <NoticationBox close={setNotication} />}
      <h1 className="textTitle uppercase mb-7 text-red-500 text-[18px]">
        Curently Limit:
      </h1>
      <div className="border-b-2 border-gray-300 pb-10 flex justify-evenly items-center flex-auto flex-wrap mb-7">
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="flex flex-nowrap"
        >
          <input
            {...register("limit")}
            defaultValue={currentLimit}
            id="limit"
            name="limit"
            type="text"
            className="py-3 px-4 bg-gray-200 rounded-xl  w-[80%]"
            placeholder="Set limits"
          />
          {errors.limit && (
            <p className="text-red-500 text-sm">{errors.limit.message}</p>
          )}
          <button disabled={isSubmitting} className="w-[20%]">
            {isSubmitting ? (
              <i className="fa-solid fa-spinner fa-spin bg-blue-400 py-3 p-5 text-white rounded-xl mx-3"></i>
            ) : (
              <i className="fa-solid fa-gear bg-blue-400 py-3 p-5 text-white rounded-xl mx-3"></i>
            )}
          </button>
        </form>
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
            <span className="text-red-500 text-[20px]">
              {formatCurrencyUSD(currentLimit)}
            </span>{" "}
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
            <span className="text-red-500 text-[20px]">
              {formatCurrencyUSD(totalExpenses)} $
            </span>
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
            <span className="text-red-500 text-[20px]">
              {formatCurrencyUSD(totalRevenu)} $
            </span>
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
