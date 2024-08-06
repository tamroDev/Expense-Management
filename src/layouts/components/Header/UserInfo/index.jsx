/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchDetailUser,
  logout,
} from "../../../../redux/reduxSlices/accountSlice";
import { useEffect } from "react";

function UserInfo({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailUser());
  }, []);

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };

  const { userDetails } = useSelector((state) => state.auth);

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
        <Link
          className="font-[600] hover:underline max-w-[70px] truncate"
          to="/profile"
        >
          {userDetails.email}
        </Link>
        <button onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
