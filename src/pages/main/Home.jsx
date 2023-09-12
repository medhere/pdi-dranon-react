import React from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import MainHeader from "../../components/webComponent/MainHeader";
import { MdNotifications, MdOutlineNotificationsNone } from "react-icons/md";
import MainInput from "../../components/webComponent/MainInput";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <section className="w-[95%] md:w-[60%] sm:w-[70%] lg:w-[40%] px-4 mt-7">
        <div className="flex justify-between items-center">
          <div>
            <h1 className={`font-bold text-3xl text-blue-950`}>Hi, Sam</h1>
            <p className="font-semibold text-sm text-blue-900">
              How are you feeling today?
            </p>
          </div>
          <MdOutlineNotificationsNone size={40} className="text-blue-950" />
        </div>

        <div className="mt-6">
          <div class="relative w-full">
            <input
              type="text"
              id="voice-search"
              class="bg-[#f5f5f5] text-gray-900 font-medium text-lg rounded-lg block w-full pl-5 p-2.5 outline-none"
              placeholder="Search your records"
              required
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <AiOutlineSearch size={23} className="text-gray-500 font-bold" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
