import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { Link } from "react-router-dom";
import { XHR } from "../../libs/request";
import { useForm } from "react-hook-form";
const LoginScreen = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await XHR("post", "api/auth/login", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-16">
          <img src={icon} />
          <MainHeader text="Welcome User" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSolidUserPlus size={28} className="text-gray-500" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className={`bg-[#f5f5f5] text-gray-900 font-medium text-lg rounded-lg block w-full pl-14 p-2.5`}
              id="email"
              {...register("email", {
                required: "Email Address is required!",
              })}
            />
          </div>

          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSolidLockOpen size={28} className="text-gray-500" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className={`bg-[#f5f5f5] text-gray-900 font-medium text-lg rounded-lg block w-full pl-14 p-2.5`}
              id="password"
              {...register("password", {
                required: "Password is required!",
              })}
            />
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
