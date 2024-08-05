/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from "react-redux";

// Action Redux
import { login } from "../../redux/reduxSlices/accountSlice";
// components
import MoneyLogo from "../../assets/monye.png";
import InputGroup from "./components/InputGroup";
import SignUpSocial from "./components/signupSocialGroup";
import ButtonLogin from "./components/ButtonLogin";
import More from "./components/More";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email không được để trống !")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email không đúng định dạng !"
    ),
  password: yup
    .string()
    .trim()
    .required("Mật khẩu không được để trống !")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự trở lên !"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (values) => {
    try {
      await dispatch(login(values)).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Failed to login:", error);
    } finally {
      reset();
    }
  };

  return (
    <div className="min-h-[75vh] w-full bg-gray-100 text-gray-900 flex justify-center ">
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
          <div className="flex justify-center items-center gap-3 mt-6">
            <img src={MoneyLogo} className="w-max h-16 object-contain" />
            <h1 className="font-[700]">Expense Manage</h1>
          </div>
          <div className="mt-7 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
            <div className="w-full flex-1 mt-2">
              <SignUpSocial />
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>
              <form
                className="mx-auto max-w-xs"
                onSubmit={handleSubmit(handleSignIn)}
              >
                <InputGroup register={register} errors={errors} />
                <ButtonLogin isLoading={isSubmitting} />
              </form>
              <More />
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
