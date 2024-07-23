import { Header, SideBar } from "../components";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div className="flex">
      <Header />
      <SideBar />
      <div className="flex-[85%] heightContent mt-[70px] px-[10px] bg-[#fbf7f4]">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
