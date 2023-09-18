import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
// import { IconUserBolt } from "@tabler/icons-react";
import {
  BiChevronLeftCircle,
  BiSolidLockOpen,
  BiSolidUserPlus,
} from "react-icons/bi";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { useNavigate } from "react-router-dom";

const ResetPasswordScreen = () => {
  const navigate = useNavigate();
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col items-center">
      <section className="w-[95%] md:w-[70%] sm:w-[70%] lg:w-[50%] xl:w-[40%] px-4 mt-10">
        <div className="flex justify-between items-center ">
          <BiChevronLeftCircle size={30} onClick={() => navigate(-1)} />
          <MainHeader text="Change Password" classes="text-xl" />
          <div className="w-5"></div>
        </div>
        {/* <MainHeader text="Reset Password" classes="mb-10" /> */}
        <form action="" className="mt-10">
          <label for="countries_disabled" class="block font-bold text-lg ">
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
            class="block mb-2  font-bold text-lg "
          >
            Confirm Password
          </label>
          <div class="relative mb-6 ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSolidLockOpen size={28} className="text-gray-500" />
            </div>
            <MainInput placeholder="Password" type="password" />
          </div>

          <MainButton style="mt-5">Confirm</MainButton>
        </form>
      </section>
    </body>
  );
};

export default ResetPasswordScreen;
