/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function UserInfo({ user, name }) {
  return (
    <div className="w-[25%] flex items-center justify-center gap-5">
      <div className="flex gap-1">
        <i className="fa-solid fa-money-check block p-2 rounded-full cursor-pointer hover:bg-slate-400"></i>
        <i className="fa-regular fa-bell block p-2 rounded-full cursor-pointer hover:bg-slate-400"></i>
        <i className="fa-solid fa-download block p-2 rounded-full cursor-pointer hover:bg-slate-400"></i>
      </div>
      <div className="h-[50px] w-[1px] bg-[#9ca3af]"></div>
      <div className="imgUser flex items-center gap-[10px]">
        <Link to="/profile">
          <img
            className="max-h-[50px] max-w-[50px] w-[50px] rounded-full object-cover"
            src={user}
            alt=""
          />
        </Link>
        <Link className="font-[600] hover:underline" to="/profile">
          {name}
        </Link>
        <Link to="/login">
          <i className="fa-solid fa-right-from-bracket"></i>
        </Link>
      </div>
    </div>
  );
}

export default UserInfo;
