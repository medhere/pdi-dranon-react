import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
// import { IconUserBolt } from "@tabler/icons-react";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";

const ResetPasswordScreen = () => {
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col mt-[15%] items-center">
      <section className="w-[95%] md:w-[60%] lg:w-[40%] px-4">
        {/* <MainHeader text="Reset Password" classes="mb-10" /> */}
        <form action="">
          <label
            for="countries_disabled"
            class="block mb-2  font-medium text-gray-500 "
          >
            Enter new Password
          </label>
          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSolidLockOpen size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Password" type="password" />
          </div>
          <label
            for="countries_disabled"
            class="block mb-2  font-medium text-gray-500 "
          >
            Confirm Password
          </label>
          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSolidLockOpen size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Password" type="password" />
          </div>

          <MainButton style="mt-5">Send</MainButton>
        </form>
      </section>
    </body>
  );
};

export default ResetPasswordScreen;
