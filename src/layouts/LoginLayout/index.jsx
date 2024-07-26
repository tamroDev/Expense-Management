import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="w-[100vw] h-[100vh] m-auto overflow-auto scrollBar-custom">
      <Outlet />
    </div>
  );
}

export default LoginLayout;
