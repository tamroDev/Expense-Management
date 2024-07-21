/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import clsx from "clsx";

function ItemSidebar({ currently, icon, path, id, title, setCurrent, icon2 }) {
  return (
    <Link
      className={clsx(
        "py-[10px] px-4 mb-4 flex justify-start items-center text-[18px] font-[600] rounded-2xl transition-all duration-200 hover-bg-slide gap-3 ",
        {
          "bg-[#cacaca50] !opacity-100": currently,
          "opacity-60 hover:opacity-100": !currently,
        }
      )}
      to={path}
      onClick={() => setCurrent(id)}
    >
      <h1 className="text-[14px] relative z-10 flex justify-center items-center">
        <i className={[icon, "text-[28px] mr-5 block w-[30px]"].join(" ")}></i>
        {title}
        {icon2 && (
          <i
            className={[icon2, "text-[18px] ml-5 block w-[30px]"].join(" ")}
          ></i>
        )}
      </h1>
    </Link>
  );
}

export default ItemSidebar;
