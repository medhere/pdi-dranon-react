import React from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import MainHeader from "../../components/webComponent/MainHeader";
import { MdNotifications, MdOutlineNotificationsNone } from "react-icons/md";
import MainInput from "../../components/webComponent/MainInput";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import docImage from "../../assets/images/doc.png";
import docImage2 from "../../assets/images/doc2.png";
import { IconStethoscope, IconVaccineBottle } from "@tabler/icons-react";
import { IconBuildingHospital } from "@tabler/icons-react";
import { IconPill } from "@tabler/icons-react";

const Home = () => {
  const Icons = [
    {
      title: "Doctors",
      icon: (
        <IconStethoscope
          size={35}
          className="text-gray-500 group-hover:text-orange-800 group-hover:scale-105 transition duration-200 ease-in"
        />
      ),
    },
    {
      title: "Drugs",
      icon: (
        <IconPill
          size={35}
          className="text-gray-500 group-hover:text-orange-800 group-hover:scale-105 transition duration-200 ease-in"
        />
      ),
    },
    {
      title: "Clinic",
      icon: (
        <IconBuildingHospital
          size={35}
          className="text-gray-500 group-hover:text-orange-800 group-hover:scale-105 transition duration-200 ease-in"
        />
      ),
    },
    {
      title: "Vaccine",
      icon: (
        <IconVaccineBottle
          size={35}
          className="text-gray-500 group-hover:text-orange-800 group-hover:scale-105 transition duration-200 ease-in"
        />
      ),
    },
  ];
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

        <div className="bg-white rounded-lg shadow-lg mt-6">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-t-lg"
          />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-orange-800">
              Easy and Accessable
            </h2>
            <p className="text-orange-700 mb-2">
              Get The care you need at your fingertips!
            </p>
            {/* <a
              href="#"
              className="text-purple-600 hover:text-purple-500 underline text-sm"
            >
              Read More 👉
            </a> */}
          </div>
        </div>

        <h1 className={`font-bold text-3xl text-blue-950 mt-6`}>
          Your Consultations
        </h1>
        <div class="bg-white rounded-lg shadow-2xl flex my-6">
          <img src={docImage} alt="Laptop on Desk" class="w-1/3 rounded-full" />
          <div class="flex-1 px-3 pt-2">
            <h2 class="font-bold text-xl md:text-3xl text-orange-700">
              Dr. Komolafe
            </h2>
            <p class="text-orange-700">specialist</p>
            <div className="flex justify-around mt-2">
              <div className="flex items-center py-1 bg-orange-200 text-orange-700 rounded-full px-2">
                <AiOutlineCalendar />
                <p className="text-xs font-medium">18th September</p>
              </div>
              <div className="flex items-center py-1 bg-orange-200 text-orange-700 rounded-full px-2">
                <AiOutlineClockCircle />
                <p className="text-xs font-medium">4:30pm</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-2xl flex my-6">
          <img
            src={docImage2}
            alt="Laptop on Desk"
            class="w-1/3 rounded-full"
          />
          <div class="flex-1 px-3 pt-2">
            <h2 class="font-bold text-xl md:text-3xl text-orange-700">
              Dr. John
            </h2>
            <p class="text-orange-700">surgeon</p>
            <div className="flex justify-around mt-2">
              <div className="flex items-center py-1 bg-orange-200 text-orange-700 rounded-full px-2">
                <AiOutlineCalendar />
                <p className="text-xs font-medium">22th November</p>
              </div>
              <div className="flex items-center py-1 bg-orange-200 text-orange-700 rounded-full px-2">
                <AiOutlineClockCircle />
                <p className="text-xs font-medium">10:30am</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="flex justify-between items-center mt-10">
            <h1 className={`font-bold text-3xl text-blue-950`}>Our Services</h1>
            <p className="text-orange-600 font-semibold cursor-pointer">
              See More
            </p>
          </div>
          <div className="flex justify-between ">
            {Icons.map((icon) => (
              <div className="group cursor-pointer">
                <div className="p-5 group-hover:bg-orange-200 bg-white shadow-xl mt-5 rounded-2xl group-hover:scale-110">
                  {icon.icon}
                </div>
                <p className="text-center text-sm font-semibold mt-2 text-gray-700 group-hover:text-orange-700">
                  {icon.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
      <div className="h-[20vh]" />
    </>
  );
};

export default Home;
