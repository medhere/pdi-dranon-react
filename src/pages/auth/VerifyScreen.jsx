import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
// import { IconUserBolt } from "@tabler/icons-react";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { NativeSelect } from "@mantine/core";
import { Link } from "react-router-dom";

const VerifyScreen = () => {
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[95%] md:w-[60%] lg:w-[40%] px-4">
        <div className="flex justify-center items-center mb-5">
          <MainHeader text="Verify your number" />
        </div>
        <p className=" font-medium text-center">
          <span className="font-bold"> A one time password (OTP)</span> will be
          sent to this number.
        </p>

        <form action="">
          <div className="flex justify-center items-center space-x-3">
            {/* <NativeSelect
              data={[
                "+234",
                "+234",
                "+234",
                "+234",
                "+234",
                "+234",
                "+234",
                "+234",
              ]}
              sx={{}}
              className="basis-2/6 "
            /> */}
            <select
              id="countries_disabled"
              class="bg-[#f5f5f5]  text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 basis-2/6 py-4"
            >
              <option selected>+234</option>
              <option value="+234">+234</option>
              <option value="+234">+234</option>
              <option value="+234">+234</option>
              <option value="+234">+234</option>
            </select>
            <div class="relative">
              <MainInput />
            </div>
          </div>
          <Link to="/auth/verify-otp">
            <MainButton style="mt-16">Get Code</MainButton>
          </Link>
        </form>
      </section>
    </body>
  );
};

export default VerifyScreen;
