/* eslint-disable react/prop-types */
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function AccordionItem({ icon, title, setCurrent }) {
  const [showA, setShowA] = useState(false);

  const handleShow = () => {
    setShowA(!showA);
  };

  return (
    <div className="mt-[40px] border-t-2">
      <div
        onClick={handleShow}
        className={clsx(
          "cursor-pointer py-[10px] px-4 mb-1 flex justify-between items-center text-[18px] font-[600] transition-all duration-200 gap-3 hover-line-slide"
        )}
      >
        <h1 className="text-[14px] flex justify-center items-center">
          <i className={clsx(icon, "text-[28px] mr-5 block w-[30px]")}></i>
          {title}
        </h1>
        <i
          className={clsx(
            {
              "fa-solid fa-chevron-down": !showA,
              "fa-solid fa-chevron-up ": showA,
            },

            "animate-bounce text-[18px] ml-7 block w-[10px]"
          )}
        ></i>
      </div>
      <div
        className={clsx("accordion-content bg-[#adacac50] h-auto rounded-2xl", {
          "accordion-content-open": showA,
          " p-2": showA,
        })}
      >
        <Link
          onClick={setCurrent}
          className={clsx(
            "opacity-50 hover:!opacity-100 ml-[30px] py-[10px] px-4 flex justify-start items-center text-[18px] font-[600] transition-all duration-200 hover-line-slide gap-3"
          )}
        >
          <i
            className={["fa-solid fa-book", "text-[18px] mr-5 block"].join(" ")}
          ></i>
          <h1 className="text-[14px] flex justify-center items-center relative z-10">
            Guide
          </h1>
        </Link>
        <Link
          className={clsx(
            "opacity-50 hover:!opacity-100 ml-[30px] py-[10px] px-4 flex justify-start items-center text-[18px] font-[600] transition-all duration-200 hover-line-slide gap-3"
          )}
          onClick={setCurrent}
        >
          <i
            className={[
              "fa-solid fa-screwdriver-wrench",
              "text-[18px] mr-5 block",
            ].join(" ")}
          ></i>
          <h1 className="text-[14px] flex justify-center items-center relative z-10">
            Setting
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default AccordionItem;
