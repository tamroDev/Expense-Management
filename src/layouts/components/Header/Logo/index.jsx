import { Link } from "react-router-dom";

function Logo({ logo }) {
  return (
    <div className="flex-[15%] bg-white h-auto">
      <Link to="/" className="flex items-center justify-center gap-2 h-[70px]">
        <img src={logo} className="w-[50px] h-full object-contain" alt="" />
        <div className="h-full flex items-start justify-center flex-col font-[600]">
          <div>Expense</div> <div>Management</div>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
