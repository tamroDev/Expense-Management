/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import MoneyLogo from "../../assets/monye.png";
import SignUpSocial from "../Login/components/signupSocialGroup";
import InputComponent from "../../components/InputComponent";
import ButtonLogin from "../Login/components/ButtonLogin";

function Login() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex justify-center ">
      <div className="max-w-screen-xl m-0 sm:m-1 bg-white shadow sm:rounded-lg flex justify-center flex-1 relative">
        <div className="absolute top-2 left-2 flex justify-between items-center gap-5">
          <Link
            to="/login"
            className="font-[700] text-[22px] hover-line-slide pb-2"
          >
            Sign in
          </Link>
          <div className="w-[2px] h-[20px] bg-black "></div>
          <Link
            to="/register"
            className="font-[700] text-[22px] pb-2 hover-line-slide "
          >
            Sign up
          </Link>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex justify-center items-center gap-3 mt-4">
            <img src={MoneyLogo} className="w-max h-16 object-contain" />
            <h1 className="font-[700]">Expense Manage</h1>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-6">
              <SignUpSocial />
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>
              <div className="mx-auto max-w-xs">
                <InputComponent id={"email"} name={"email"} des={"Email ..."} />
                <InputComponent
                  id={"password"}
                  name={"password"}
                  type={"password"}
                  des={"Password ..."}
                />
                <InputComponent
                  id={"re-password"}
                  name={"re-password"}
                  type={"password"}
                  des={"Password confirm ..."}
                />
                <ButtonLogin signup />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
