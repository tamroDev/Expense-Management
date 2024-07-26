import { ToastContainer } from "react-toastify";

// Component
import Logo from "./Logo/index";
import Search from "./Search/index";
import UserInfo from "./UserInfo/index";

// Images
import user from "../../../assets/user.jpg";
import logo from "../../../assets/monye.png";

const Header = () => {
  return (
    <header className="flex fixed top-0 left-0 right-0 h-max bg-white shadow-2xl">
      <ToastContainer />
      <Logo logo={logo} />
      <div className="flex-[85%] h-[70px] flex">
        <Search />
        <UserInfo user={user} name="B.Tâm" />
      </div>
    </header>
  );
};

export default Header;
