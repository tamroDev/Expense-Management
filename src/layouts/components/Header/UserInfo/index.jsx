/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../../redux/reduxSlices/accountSlice";
import { useEffect, useState } from "react";
import { getDataStatistic } from "../../../../redux/reduxSlices/statisticsSlice";

function UserInfo({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isNotiBoxVisible, setIsNotiBoxVisible] = useState(false);
  const [isLimitExceeded, setIsLimitExceeded] = useState(false);
  const [date, setDate] = useState(() => {
    let date = new Date();
    return date.toLocaleDateString();
  });

  const {
    _id,
    limit: currentLimit,
    email,
  } = useSelector((state) => state.auth.userDetails);

  useEffect(() => {
    if (_id) {
      dispatch(getDataStatistic(_id));
    }
  }, [dispatch, _id]);

  const { totalExpenses } = useSelector((state) => state.statistic);

  useEffect(() => {
    const limitExceeded = currentLimit < totalExpenses;
    setIsLimitExceeded(limitExceeded);
  }, [currentLimit, totalExpenses]);

  const handleNotiBoxToggle = () => {
    setIsNotiBoxVisible(!isNotiBoxVisible);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-[25%] flex items-center justify-center gap-5">
      <div className="flex gap-1">
        <i className="fa-solid fa-money-check block p-2 rounded-full cursor-pointer hover:bg-slate-400"></i>
        <div
          onMouseOut={() => setIsHovered(false)}
          onMouseOver={() => setIsHovered(true)}
          className="relative"
        >
          {isLimitExceeded && (
            <div className="absolute bg-red-500 text-[12px] text-white w-[15px] h-[15px] rounded-full flex justify-center items-center top-[-5px] right-0">
              1
            </div>
          )}
          <i
            onClick={handleNotiBoxToggle}
            className="fa-regular fa-bell block p-2 rounded-full cursor-pointer hover:bg-slate-400"
          ></i>
          {isHovered && !isNotiBoxVisible && (
            <div className="z-40 shadow-xl w-auto h-auto absolute py-2 px-4 bg-black rounded-2xl top-9 translate-x-[-35%] text-white uppercase font-bold text-[12px]">
              Notification
            </div>
          )}
          {isNotiBoxVisible && (
            <div className="z-40 shadow-xl w-[300px] h-auto border bg-white absolute rounded-md top-[50%] left-[50%] translate-y-[20%] translate-x-[-50%] font-bold text-[12px]">
              <h1 className="uppercase mb-4 px-4 py-2 w-max border-b">
                Notification
              </h1>
              {isLimitExceeded ? (
                <Link
                  onClick={() => {
                    handleNotiBoxToggle();
                    setIsHovered(false);
                  }}
                  className=" py-3 px-4 w-full block hover:bg-slate-100"
                  to="/Statistics"
                >
                  <h3 className="uppercase mb-4">Spending announcement :</h3>
                  <p className="font-light mb-3">
                    August spending exceeded the prescribed limit. Please check
                    your spending to match the limit.
                  </p>
                  <h3 className="mb-2 text-blue-500">Detail</h3>
                  <span className="text-red-500 text-[10px]">{date}</span>
                </Link>
              ) : (
                <h1 className="text-center py-3 opacity-50">
                  No notifications
                </h1>
              )}
            </div>
          )}
        </div>
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
          {email}
        </Link>
        <button onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
