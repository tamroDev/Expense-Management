import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function LoginLayout() {
  return (
    <div className="w-[100vw] h-[100vh] m-auto overflow-auto scrollBar-custom">
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default LoginLayout;
