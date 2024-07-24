import { useRef, useEffect, createRef, useState } from "react";
import clsx from "clsx";
import styles from "./Expense.module.scss";
// import { useNavigate } from "react-router-dom";
import SpendingItem from "../../components/SpendingItem";
import InputComponent from "../../components/InputComponent";
import { settingSpending } from "./settingExpense";

function Expense() {
  const [budget, setBudget] = useState();
  const [month, setMonth] = useState(1);
  const [dateEnd, setDateEnd] = useState();
  const [description, setDesciption] = useState();
  const [category, setCategory] = useState();
  const itemRef = useRef([]);

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
        setCategory(id);
      });
    });
  }, [itemRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      budget,
      month,
      dateEnd,
      description,
      category,
    };
    console.log(formData);
  };

  const handleRetype = (e) => {
    e.preventDefault();

    setBudget("");
    setMonth(1);
    setDateEnd("");
    setDesciption("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        '"w-full h-full bg-white rounded-2xl flex justify-start items-center flex-col',
        styles.container
      )}
    >
      <div className="textTitle text-[25px] text-red-500 text-center h-[70px] leading-[70px]">
        Create spending
      </div>
      <div className="flex gap-5 mb-10 border-b pb-4">
        <div className="w-full flex gap-3">
          <InputComponent
            value={budget}
            change={setBudget}
            label={"Budget:"}
            des={"Budget ..."}
          />
          <InputComponent
            value={month}
            change={setMonth}
            replication
            type={"number"}
            label={"Month:"}
          />
          <InputComponent
            value={dateEnd}
            change={setDateEnd}
            replication
            type={"date"}
            label={"Date End: "}
          />
          <InputComponent
            value={description}
            change={setDesciption}
            label={"Description:"}
            des={"Description ..."}
          />
        </div>
      </div>
      <div className="text-[20px] font-[700] text-left  w-[60%] mb-5">
        List Service:
      </div>
      <div className="flex flex-auto max-w-[60%] flex-wrap gap-4 border-b pb-5">
        {settingSpending.map((item, index) => (
          <SpendingItem
            ref={(el) => (itemRef.current[index] = el)}
            key={item.id}
            id={item.id}
            name={item.name}
            src={item.src}
            value={category}
          />
        ))}
      </div>
      <div className="mt-[20px] flex gap-3 w-[55%]">
        <button
          type="submit"
          className="p-4 bg-blue-500 text-white font-[600] text-[12px] uppercase rounded-2xl "
        >
          Create
        </button>
        <button
          onClick={handleRetype}
          className="p-4 bg-red-600 text-white font-[600] text-[12px] uppercase rounded-2xl"
        >
          Retype
        </button>
      </div>
    </form>
  );
}

export default Expense;
