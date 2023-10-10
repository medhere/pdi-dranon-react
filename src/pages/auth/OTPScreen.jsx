import { PinInput, Group } from "@mantine/core";
import MainHeader from "../../components/webComponent/MainHeader";
import MainButton from "../../components/webComponent/MainButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { XHR } from "../../libs/request";
import { useState } from "react";

const OTPScreen = () => {
  const [pinValues, setPinValues] = useState("");

  const onSubmit = async () => {
    await XHR("post", "api/auth/verify/otp", pinValues)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handlePinChange = (newValues) => {
    setPinValues(newValues);
  };

  console.log(pinValues);
  const resendOtp = async () => {
    console.log("OTP Sent");
  };
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-5">
          <MainHeader text="OTP Verification" />
        </div>
        <p className="text-sm text-gray-500 tracking-wide leading-6 text-center">
          Kindly enter code sent to <br />
          <span className="font-bold text-gray-700 tracking-wider">
            email@email.com
          </span>
        </p>

        <form onSubmit={onSubmit}>
          <Group position="center" className="my-10">
            <PinInput
              length={4}
              placeholder=""
              onComplete={(value) => setPinValues(value)}
              type="number"
            />
          </Group>
          <div>
            <p className="text-sm text-gray-500 tracking-wide text-center">
              I didn't recieve any code.
              <span
                className="text-[#1977F3] font-semibold cursor-pointer"
                onClick={() => resendOtp()}
              >
                RESEND
              </span>
            </p>
          </div>

          <MainButton type="submit" style="mt-16">
            Submit
          </MainButton>
        </form>
      </section>
    </body>
  );
};

export default OTPScreen;
