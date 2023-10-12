import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { Link, useNavigate } from "react-router-dom";
import { XHR } from "../../libs/request";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { toast } from "react-hot-toast";
import { toastStyle } from "../../libs/utils";
import { useSignIn } from "react-auth-kit";

const LoginScreen = () => {
  const signIn = useSignIn();
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await XHR("post", "api/auth/login", data)
      .then((res) => {
        console.log(res);

        signIn({
          token: res?.data.token, //string	The Authentication token (JWT) to be stored from server
          expiresIn: 60 * 24 * 30, //number	The time for which the auth token will last, in minutes
          tokenType: "Bearer", //string | 'Bearer'	The type of authentication token.
          authState: res?.data.user, //object (optional)	State of the authorized user. Eg: {name: Jhon, email: jhon@auth.com}
        });
        nav("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message, toastStyle);
      });
  };
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-16">
          <img src={icon} />
          <MainHeader text="Welcome User" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mb-4 ">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <MdEmail size={28} className="text-gray-500" />
              </div>
              <input
                className={`inputStyle ${errors?.email && "border-red-500"}`}
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>
            {errors?.email && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BiSolidLockOpen size={28} className="text-gray-500" />
              </div>
              <input
                className={`inputStyle ${errors?.password && "border-red-500"}`}
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 5,
                    message: "Password should be at least 5 characters",
                  },
                })}
              />
            </div>
            {errors?.password && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <Link
              to="/auth/forget-password"
              className="text-[#1977F3] underline text-sm tracking-wide font-semibold text-end"
            >
              Forgot Password?
            </Link>
          </div>

          <MainButton style="mt-5" type="submit">
            LOGIN
          </MainButton>
        </form>
        <div className="flex items-center my-5 justify-center">
          <hr className=" bg-pink-500 w-14" />
          <p className="text-sm font-medium mx-3">Don't have an account?</p>
          <hr className=" bg-pink-500 w-14" />
        </div>
        <Link to="/auth/register">
          <MainButton style="bg-white border-none shadow">
            Get an account here
          </MainButton>
        </Link>
      </section>
    </body>
  );
};

export default LoginScreen;
