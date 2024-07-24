import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="w-[100vw] h-[100vh] m-auto overflow-hidden">
      <Outlet />
    </div>
  );
}

export default LoginLayout;
