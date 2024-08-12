/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function ItemSidebar({ icon, path, title, icon2 }) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "py-[10px] px-4 mb-4 flex justify-start items-center text-[18px] font-[600] rounded-2xl transition-all duration-200 hover-bg-slide gap-3 ",
          {
            "bg-[#cacaca50] !opacity-100": isActive,
            "opacity-60 hover:opacity-100": !isActive,
          }
        )
      }
      to={path}
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
    </NavLink>
  );
}

export default ItemSidebar;
