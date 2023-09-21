import { PinInput, Group } from "@mantine/core";
import MainHeader from "../../components/webComponent/MainHeader";
import MainButton from "../../components/webComponent/MainButton";
import { Link } from "react-router-dom";

const OTPScreen = () => {
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-5">
          <MainHeader text="OTP Verification" />
        </div>
        <p className="text-sm text-gray-500 tracking-wide leading-6 text-center">
          Kindly enter code sent to <br />
          <span className="font-bold text-gray-700 tracking-wider">
            +234123456789
          </span>
        </p>

        <form action="">
          <Group position="center" className="my-10">
            <PinInput length={4} />
          </Group>
          <div>
            <p className="text-sm text-gray-500 tracking-wide text-center">
              I didn't recieve any code.
              <span className="text-[#1977F3] font-semibold">RESEND</span>
            </p>
          </div>
          <Link to="/auth/login">
            <MainButton style="mt-16">Submit</MainButton>
          </Link>
        </form>
      </section>
    </body>
  );
};

export default OTPScreen;
