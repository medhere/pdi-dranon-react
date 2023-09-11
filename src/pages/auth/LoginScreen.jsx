import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[95%] md:w-[60%] lg:w-[40%] px-4">
        <div className="flex justify-center items-center mb-16">
          <img src={icon} />
          <MainHeader text="Welcome User" />
        </div>

        <form action="">
          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSolidUserPlus size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Full Name" />
          </div>
          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSolidLockOpen size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Password" type="password" />
          </div>
          <div>
            <Link
              to="/auth/forget-password"
              className="text-[#1977F3] underline text-sm tracking-wide font-semibold text-end"
            >
              Forgot Password?
            </Link>
          </div>
          <Link to="/profile">
            <MainButton style="mt-5">LOGIN</MainButton>
          </Link>
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
