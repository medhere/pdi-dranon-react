import React from "react";
import { MdEmail, MdOutlineNotificationsNone } from "react-icons/md";
import docImage from "../../assets/images/doc4.jpg";
import { AiFillPhone } from "react-icons/ai";
import { IconMessageDots, IconPhoneOutgoing } from "@tabler/icons-react";
import { ScrollToTop } from "../../libs/utils";
import { Link } from "react-router-dom";
const Doctors = () => {
  ScrollToTop();

  
  return (
    <>
      <section className="w-[100%] md:w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[40%] px-4 mt-7">
        <div className="flex justify-between items-center">
          <div>
            <h1 className={`font-bold text-3xl text-blue-950`}>
              Speak to a Specialist
            </h1>
          </div>
        </div>
        <section>
          {[1, 2, 3, 4].map((num, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-orange-400 flex my-6"
            >
              <img
                src={docImage}
                alt="Laptop on Desk"
                className="w-1/3 hidden sm:block"
              />
              <div className="flex flex-col  pt-2 flex-1">
                <div className="flex-1 px-5 flex flex-col justify-center">
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl md:text-3xl text-orange-700">
                      Dr. John
                    </h2>
                    <p
                      className={`font-medium ${
                        num % 3 === 0 ? "text-green-500" : "text-red-600"
                      }`}
                    >
                      {num % 3 === 0 ? "Active" : "Inactive"}
                    </p>
                  </div>
                  <p className="text-orange-700">surgeon</p>
                  <div className="flex items-center space-x-2 my-2">
                    <AiFillPhone className="text-orange-900" />
                    <p className="text-xs text-orange-700">+234-567-89012</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdEmail className="text-orange-900" />
                    <p className="text-xs text-orange-700">
                      Superadmin@mail.com
                    </p>
                  </div>
                </div>
                <div className="flex mt-2  divide-x-2 divide-orange-700">
                  <Link
                    to={`/doctor/chat/${num}`}
                    className="flex flex-1 cursor-pointer justify-center items-center py-2.5 bg-orange-200 hover:bg-orange-700 duration-300 transition-all text-orange-700 hover:text-orange-100 px-2"
                  >
                    <IconMessageDots />
                    <p className="text-xs font-medium">Message</p>
                  </Link>
                  <div className="flex flex-1 justify-center items-center py-2.5 bg-orange-200 hover:bg-orange-700 duration-300 transition-all text-orange-700 hover:text-orange-100 px-2">
                    <IconPhoneOutgoing />
                    <p className="text-xs font-medium">Call</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="h-40" />
      </section>
    </>
  );
};

export default Doctors;
