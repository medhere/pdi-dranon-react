import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
// import { IconUserBolt } from "@tabler/icons-react";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgetPasswordScreen = () => {
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-16">
          <MainHeader text="Enter Email Address" />
        </div>

        <form action="">
          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <MdEmail size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="example@mail.com" />
          </div>
          <Link to="/auth/verify-otp">
            <MainButton style="mt-5">Send</MainButton>
          </Link>
        </form>
        <div className="flex items-center my-5 justify-center">
          <hr className=" bg-pink-500 w-14" />
          <p className="text-sm font-medium mx-3">Or </p>
          <hr className=" bg-pink-500 w-14" />
        </div>
        <Link to="/auth/register">
          <MainButton style="bg-white border-none shadow">Sign Up</MainButton>
        </Link>
      </section>
    </body>
  );
};

export default ForgetPasswordScreen;
