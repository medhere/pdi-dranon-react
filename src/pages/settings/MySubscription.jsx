import React, { useEffect, useState } from "react";
import { XHR } from "../../libs/request";
import MainHeader from "../../components/webComponent/MainHeader";
import { BiChevronLeftCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IconCalendarSearch } from "@tabler/icons-react";
import { IconReceipt } from "@tabler/icons-react";
import { daysLeft, formatFigure } from "../../libs/utils";

const MySubscription = () => {
  const [subscription, setSubscription] = useState([]);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    await XHR("get", "api/subscriptions")
      .then((res) => {
        console.log(res);
        console.log(res.data.subscriptions);
        setSubscription(res.data.subscriptions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="w-[100%] md:w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[40%] px-4 mt-10">
        <div className="flex justify-between items-center">
          <BiChevronLeftCircle size={30} onClick={() => navigate(-1)} />
          <MainHeader text="My Subscriptions" />
          <div className="w-5"></div>
        </div>
        {subscription.length > 0 ? (
          <>
            {subscription.map((sub, index) => (
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 my-8">
                <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-indigo-600">
                      Active Subscription
                    </span>
                    <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                      {daysLeft(sub.end_date)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <svg
                        className="w-12 h-12 p-2.5 bg-indigo-400 bg-opacity-20 rounded-full text-indigo-600 border border-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-end">
                        <span className="text-2xl 2xl:text-3xl font-bold">
                          ₦{formatFigure(sub.fee)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <section className="flex justify-center items-center h-[80vh]">
            <div>
              <h2 className="text-center font-medium text-xl mb-2">
                You have no Subscriptions!
              </h2>
              <IconReceipt size={70} className="mx-auto" />
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default MySubscription;
