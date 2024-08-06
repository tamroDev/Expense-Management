import { useRef, useEffect, createRef } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createEX } from "../../redux/reduxSlices/expenseSlice";
// COMPONENTS
import SpendingItem from "../../components/SpendingItem";
import InputComponent from "../../components/InputComponent";
import { settingSpending } from "./settingExpense";
import ButtonGroup from "./components/ButtonGroup";

// SCHEMA
const schema = yup.object().shape({
  budget: yup.string().trim().required("Not be empty"),
  month: yup.string().trim().required("Not be empty"),
  dateEnd: yup.string().trim().required("Not be empty"),
  category: yup.string().required("Not be empty"),
  description: yup.string().trim(),
});

function AddExpense() {
  const itemRef = useRef([]);
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.auth.userDetails);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleExpense = async (values) => {
    const newSpending = {
      idUser: _id,
      ...values,
    };

    try {
      await dispatch(createEX(newSpending)).unwrap();
      reset();
      toast.success("Spending successful!");
    } catch (error) {
      toast.error(`Spending failed: ${error.message}`);
    }
  };

  if (itemRef.current.length !== settingSpending.length) {
    itemRef.current = Array(settingSpending.length)
      .fill()
      .map((_, i) => itemRef.current[i] || createRef());
  }

  useEffect(() => {
    itemRef.current.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        itemRef.current.forEach((item) => {
          let input = item.querySelector(".input input");
          input.checked = false;
        });
        let input = item.querySelector(".input input");
        input.checked = true;
        const id = input.getAttribute("data-id");
        setValue("category", id, { shouldValidate: true });
      });
    });
  }, [itemRef, setValue]);

  return (
    <form
      onSubmit={handleSubmit(handleExpense)}
      className="flex justify-center flex-col items-center"
    >
      <div className="flex gap-5 mb-10 border-b pb-4 w-[70%]">
        <div className="w-full flex gap-3 flex-wrap flex-auto justify-center">
          <div className="max-w-[48%] min-w-[200px] sm:w-[100%] sm:max-w-[100%] 2xl:w-[47%]">
            <InputComponent
              id={"budget"}
              name={"budget"}
              label={"Budget:"}
              des={"Budget ..."}
              register={register}
            />
            {errors.budget && (
              <p className="text-red-500 text-sm">{errors.budget.message}</p>
            )}
          </div>
          <div className="max-w-[48%] min-w-[200px] sm:w-[100%] sm:max-w-[100%] 2xl:w-[47%]">
            <InputComponent
              id={"month"}
              name={"month"}
              replication
              type={"number"}
              label={"Month:"}
              register={register}
            />
            {errors.month && (
              <p className="text-red-500 text-sm">{errors.month.message}</p>
            )}
          </div>
          <div className="max-w-[48%] min-w-[200px] sm:w-[100%] sm:max-w-[100%] 2xl:w-[47%]">
            <InputComponent
              id={"dateEnd"}
              name={"dateEnd"}
              replication
              type={"date"}
              label={"Date End: "}
              register={register}
            />
            {errors.dateEnd && (
              <p className="text-red-500 text-sm">{errors.dateEnd.message}</p>
            )}
          </div>
          <div className="max-w-[48%] min-w-[200px] sm:w-[100%] sm:max-w-[100%] 2xl:w-[47%]">
            <InputComponent
              id={"description"}
              name={"description"}
              label={"Description:"}
              des={"Description ..."}
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="text-[20px] font-[700] text-left  w-[70%] mb-5">
        List Service:
      </div>
      <div className="flex max-w-[70%] w-[70%] flex-wrap justify-between gap-4 border-b pb-5 h-max">
        {settingSpending.map((item, index) => {
          return (
            <SpendingItem
              ref={(el) => (itemRef.current[index] = el)}
              key={item.id}
              id={item.id}
              name={item.name}
              src={item.src}
              warning={errors.category ? "border-red-300" : ""}
            />
          );
        })}
      </div>
      <ButtonGroup isLoading={isSubmitting} />
    </form>
  );
}

export default AddExpense;
