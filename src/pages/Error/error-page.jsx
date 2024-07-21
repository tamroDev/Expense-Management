import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page" className="relative flex justify-center items-center ">
      <Link
        to={"/"}
        className="absolute top-4 left-4 font-[600] text-[20px] p-4 animate-bounce hover:opacity-70"
      >
        <i className="fa-solid fa-house mr-5"></i> Trang Chủ
      </Link>
      <img
        src="https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg"
        alt=""
        className="w-[1000px] object-cover"
      />
    </div>
  );
}
