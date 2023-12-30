import { PinInput, Group } from "@mantine/core";
import MainHeader from "../../components/webComponent/MainHeader";
import MainButton from "../../components/webComponent/MainButton";
import { XHR } from "../../libs/request";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { toastStyle } from "../../libs/utils";

const OTPScreen = () => {
  const [pinValues, setPinValues] = useState();
  const auth = useSelector((state) => state.user);
  const email = useSelector((state) => state.user?.userdata?.user?.email);
  const token = useSelector((state) => state.user?.userdata?.token);
  const navigate = useNavigate();
  console.log(auth);
  const signIn = useSignIn();

  const onSubmit = async () => {
    await XHR("post", "auth/verify/otp", {
      otp: pinValues,
      email: email,
      token: token,
    })
      .then((res) => {
        console.log(res);
        signIn({
          token: res?.data.token, //string	The Authentication token (JWT) to be stored from server
          expiresIn: 60 * 24 * 30, //number	The time for which the auth token will last, in minutes
          tokenType: "Bearer", //string | 'Bearer'	The type of authentication token.
          authState: res?.data.user, //object (optional)	State of the authorized user. Eg: {name: Jhon, email: jhon@auth.com}
        });
      })
      .then(() => {
        toast.success(`Welcome to Dr. Anonymous!`, toastStyle);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };

  console.log(pinValues);

  const resendOtp = async () => {
    console.log("OTP Sent");
  };
  return (
    <section className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-5">
          <MainHeader text="OTP Verification" />
        </div>
        <p className="text-sm text-gray-500 tracking-wide leading-6 text-center">
          Kindly enter code sent to <br />
          <span className="font-bold text-gray-700 tracking-wider">
            {email}
          </span>
        </p>

        <form>
          <Group position="center" className="my-10">
            <PinInput
              length={4}
              placeholder=""
              required
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

          <button
            className="mt-16 py-3 w-full border border-black font-bold text-lg rounded-lg bg-[#f18c53]"
            type="button"
            onClick={onSubmit}
            disabled={pinValues == undefined}
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default OTPScreen;
