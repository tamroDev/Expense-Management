import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectIfLoggedIn = ({ element }) => {
  const isLoggedIn = useSelector((state) => !!state.auth.accessToken);

  if (isLoggedIn) {
    // Nếu người dùng đã đăng nhập, chuyển hướng đến trang chủ
    return <Navigate to="/" />;
  }

  return element;
};

export default RedirectIfLoggedIn;
