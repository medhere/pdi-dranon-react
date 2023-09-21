import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
// import { IconUserBolt } from "@tabler/icons-react";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillCalendarCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <body className="min-h-screen SubBg w-screen py-16 bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-7">
          <MainHeader text="Create Account" />
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
              <MdEmail size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Email" />
          </div>

          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BsFillTelephoneFill size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Phone Number" type="password" />
          </div>

          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <MdLocationOn size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Location" type="password" />
          </div>

          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSolidLockOpen size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Password" type="password" />
          </div>

          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BsFillCalendarCheckFill size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Date Of Birth" type="password" />
          </div>

          <div>
            <Link
              to="/auth/forget-password"
              className="text-[#1977F3] underline text-sm tracking-wide font-semibold text-end"
            >
              Forgot Password?
            </Link>
          </div>
          <Link to="/auth/verify">
            <MainButton style="mt-5">Sign Up</MainButton>
          </Link>
        </form>
        <div className="flex items-center my-5 justify-center">
          <hr className=" bg-pink-500 w-14" />
          <p className="text-xs shrink-0 font-medium mx-3">
            Already have an account?
          </p>
          <hr className=" bg-pink-500 w-14" />
        </div>
        <Link to="/auth/login">
          <MainButton style="bg-white border-none shadow">
            Login Here
          </MainButton>
        </Link>
      </section>
    </body>
  );
};

export default RegisterScreen;
