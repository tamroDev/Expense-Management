/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

function SpendingItem({ src, name, id, hidden, warning }, ref) {
  return (
    <div
      ref={ref}
      className={`rounded-2xl flex-[25%] w-[33%] max-w-[30%] max-h-[150px] flex justify-center items-center flex-col border shadow-xl p-1 py-2 gap-3 cursor-pointer relative ${warning}`}
    >
      {!hidden && (
        <div className="input absolute top-2 right-2 pointer-events-none">
          <input data-id={id} type="radio" />
        </div>
      )}

      <img
        className="w-[80px] rounded-2xl pointer-events-none"
        src={src}
        alt=""
      />
      <h1 className="font-[600] text-black pointer-events-none">{name}</h1>
    </div>
  );
}

export default forwardRef(SpendingItem);
