import React, { useEffect, useState } from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/webComponent/MainHeader";
import {
  formatFigure,
  generateBrightHexColor,
  toastStyle,
} from "../../libs/utils";
import { IconCheck } from "@tabler/icons-react";
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
import { XHR } from "../../libs/request";
import { PaystackButton } from "react-paystack";
import toast from "react-hot-toast";
import { useAuthUser } from "react-auth-kit";

const Subscription = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const auth = useAuthUser();

  const fetchPackages = async () => {
    await XHR("get", "api/packages")
      .then((res) => {
        console.log(res?.data);
        setPackages(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <>
      <section className="w-[100%] md:w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[40%] px-4 mt-10">
        <div className="flex justify-between items-center">
          <BiChevronLeftCircle size={30} onClick={() => navigate(-1)} />
          <MainHeader text="Subscription" />
          <div className="w-5"></div>
        </div>

        <div className="flex flex-col justify-between items-center mt-10 lg:flex-row lg:items-start">
          {packages.map((item, index) => (
            <div
              key={index}
              className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-orange-200 text-gray-900 sm:w-96 lg:w-full lg:order-2 lg:mt-0"
            >
              <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                <img
                  src={`https://res.cloudinary.com/williamsondesign/abstract-${
                    index + 2
                  }.jpg`}
                  alt=""
                  className="rounded-3xl w-20 h-20"
                />
                <div className="ml-5">
                  <span className="block text-3xl font-semibold ">
                    {item?.name}
                  </span>
                  <span>
                    <span className="font-medium text-xl align-top">
                      ₦&thinsp;
                    </span>
                    <span className="text-3xl font-bold ">
                      {formatFigure(item?.price)}
                    </span>
                  </span>
                  <span className="font-medium">
                    /
                    {item?.duration == 1 ? "month" : `${item?.duration} months`}
                  </span>
                </div>
              </div>
              <ul className="mb-10 font-medium text-xl">
                <li className="flex mb-6">
                  <IconCheck />
                  <span className="ml-3">{item.desc}</span>
                </li>
              </ul>

              <PaystackButton
                publicKey={
                  import.meta.env.MODE === "development"
                    ? import.meta.env.VITE_PAYSTACK_TEST_KEY
                    : import.meta.env.VITE_PAYSTACK_LIVE_KEY
                }
                amount={item.price * 100}
                email={auth().email}
                firstname={auth().name}
                label="Dr Anonymous Subscription"
                currency="NGN"
                onSuccess={(ref) => {
                  console.log(ref);
                  toast.success(ref.status);
                  // XHR('get', '', ref)
                  // .then((res)=>{
                  //   toast('Payment Successful'+ res.data)
                  //   setTimeout(()=>{
                  //     navigate('')
                  //   }, 4000)
                  // })
                  // .catch(err=> toast('Payment Unprocessed! Contact Admin.'))
                }}
                onClose={() => toast("Payment Cancelled!")}
                phone={auth().phone}
                metadata={{ user_id: auth().id }}
                text="Choose Plan"
                className="flex justify-center w-full text-white items-center bg-orange-600 rounded-xl py-6 px-4 text-center  text-2xl"
              />
            </div>
          ))}
        </div>

        <div className="h-32" />
      </section>
    </>
  );
};

export default Subscription;
