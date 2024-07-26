/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";

// Import Service
import { createAccount } from "../../service/auth.js";
import "react-toastify/dist/ReactToastify.css";

// Components
import MoneyLogo from "../../assets/monye.png";
import SignUpSocial from "../Login/components/signupSocialGroup";
import InputComponent from "../../components/InputComponent";
import ButtonLogin from "../Login/components/ButtonLogin";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email cannot be blank!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email format is incorrect!"
    ),
  password: yup
    .string()
    .trim()
    .required("Password cannot be blank!")
    .min(8, "Password must not be less than 8 characters!"),
  ConfirmPassword: yup
    .string()
    .trim()
    .required("Password cannot be blank!")
    .oneOf(
      [yup.ref("password"), null],
      "The confirmation password must match the entered password !"
    )
    .min(8, "Password must not be less than 8 characters!"),
});
function Login() {
  const navigate = new useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignUp = async (values) => {
    try {
      const { ConfirmPassword, ...newAccount } = values;
      await createAccount(newAccount);
      toast.success(
        "Account created successfully, check your email and please verify your account !"
      );
      reset();
      navigate("/login");
    } catch (error) {
      toast.error("error");
    }
  };

  return (
    <div className="w-full bg-gray-100 text-gray-900 flex justify-center ">
      <div className="max-w-screen-xl m-0 sm:m-1 bg-white shadow sm:rounded-lg flex justify-center w-full relative overflow-auto">
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
          <div className="mt-7 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-2">
              <SignUpSocial />
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>
              <form
                className="mx-auto max-w-xs overflow-auto max-h-[500px]"
                onSubmit={handleSubmit(handleSignUp)}
              >
                <div>
                  <InputComponent
                    errors={errors}
                    register={register}
                    id={"email"}
                    name={"email"}
                    des={"Email ..."}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <InputComponent
                    errors={errors}
                    register={register}
                    id={"password"}
                    name={"password"}
                    type={"password"}
                    des={"Password ..."}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div>
                  <InputComponent
                    errors={errors}
                    register={register}
                    id={"re-password"}
                    name={"ConfirmPassword"}
                    type={"password"}
                    des={"Password confirm ..."}
                  />
                  {errors.ConfirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.ConfirmPassword.message}
                    </p>
                  )}
                </div>
                <ButtonLogin signup isLoading={isSubmitting} />
              </form>
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
