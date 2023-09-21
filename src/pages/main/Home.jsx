import React from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import MainHeader from "../../components/webComponent/MainHeader";
import {
  MdEmail,
  MdNotifications,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import MainInput from "../../components/webComponent/MainInput";
import {
  AiFillPhone,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import docImage from "../../assets/images/doc4.jpg";
import docImage2 from "../../assets/images/doc5.jpg";
import {
  IconPhoneOutgoing,
  IconStethoscope,
  IconVaccineBottle,
} from "@tabler/icons-react";
import { IconBuildingHospital } from "@tabler/icons-react";
import { IconPill } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { IconMessageDots } from "@tabler/icons-react";
import { ScrollToTop } from "../../libs/utils";
import preg from "../../assets/images/New folder/preg.png";
import baby from "../../assets/images/New folder/baby.png";
import hair from "../../assets/images/New folder/hair.png";
import stethoscope from "../../assets/images/New folder/stethoscope.png";
import sex from "../../assets/images/New folder/sex.png";
import digestion from "../../assets/images/New folder/digestion.png";
import psyc from "../../assets/images/New folder/psyc.png";

const Home = () => {
  ScrollToTop();
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
  const Specialties = [
    {
      title: "Woman's Health",
      img: preg,
    },
    {
      title: "Skin & Hair",
      img: hair,
    },
    {
      title: "Child Specialist",
      img: baby,
    },
    {
      title: "General Physician",
      img: stethoscope,
    },
    {
      title: "Sexology",
      img: sex,
    },
    {
      title: "Digestion",
      img: digestion,
    },
    {
      title: "Pyshatric",
      img: psyc,
    },
  ];
  return (
    <>
      <section className="w-[100%] md:w-[100%] xl:w-[40%] lg:w-[60%] px-4 mt-7">
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
        {/* AD */}
        <div className="bg-white rounded-lg shadow-lg mt-6">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-t-lg mx-auto"
          />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-orange-800">
              Easy and Accessable
            </h2>
            <p className="text-orange-700 mb-2">
              Get The care you need at your fingertips!
            </p>
          </div>
        </div>
        {/* Medical Specialties */}

        {/* CTA */}

        <div class="bg-orange-100 ">
          <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-6 my-10 px-4 sm:px-2 lg:py-16 lg:px-8">
            <h2 class="text-2xl font-extrabold text-black  sm:text-4xl">
              <span class="block">Want to Talk to a Doctor?</span>
              <span class="block text-orange-500 text-lg">
                It&#x27;s today or never.
              </span>
            </h2>
            <div class="lg:mt-0 lg:flex-shrink-0 flex justify-end">
              <div class=" inline-flex justify-end rounded-md shadow">
                <Link to={`/doctor/chat/1`}>
                  <button
                    type="button"
                    class="py-2 px-6  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Consult a Doctor
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="flex justify-between items-center mt-10">
            <h1 className={`font-bold text-xl md:text-2xl text-blue-950`}>
              Medical Specialties
            </h1>
          </div>
          <div className="grid grid-cols-4 mt-5 gap-5">
            {Specialties.map((card) => (
              <div className="group cursor-pointer">
                <div className="bg-white mx-auto flex justify-center w-20 h-20 p-2 items-center duration-300 transition shadow-xl  rounded-2xl group-hover:scale-110">
                  <img src={card.img} alt="" className="" />
                </div>
                <p className="text-center  text-xs max-w-[3rem] md:max-w-none mx-auto font-semibold mt-2 text-gray-700 group-hover:text-orange-700">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Consultation */}
        <section>
          <div className="flex justify-between items-center mt-10">
            <h1 className={`font-bold text-xl md:text-2xl text-blue-950`}>
              Active Consultations
            </h1>
            <Link
              to="/schedule"
              className="text-orange-500 text-sm font-semibold cursor-pointer"
            >
              See More
            </Link>
          </div>

          <Link
            to={`/doctor/consultation/1`}
            class="bg-white rounded-lg border border-orange-400 shadow-lg flex my-6"
          >
            <img src={docImage2} alt="Laptop on Desk" class="w-1/3 " />
            <div class="flex flex-col flex-1 pt-2">
              <div className="flex-1  px-5 flex flex-col justify-center">
                <h2 class="font-bold text-xl md:text-3xl text-orange-700">
                  Dr. Katie
                </h2>
                <p class="text-orange-700">surgeon</p>
              </div>
              <div className="flex md:space-x-5 space-x-1 px-2 my-2">
                <div className="flex flex-1 items-center py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                  <AiOutlineCalendar />
                  <p className="text-xs ml-1 font-medium">22th Nov</p>
                </div>
                <div className="flex items-center flex-1 py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                  <AiOutlineClockCircle />
                  <p className="text-xs ml-1 font-medium">10:30am</p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to={`/doctor/consultation/2`}
            class="bg-white rounded-lg border border-orange-400 flex my-6"
          >
            <img src={docImage} alt="Laptop on Desk" class="w-1/3 " />
            <div class="flex flex-col flex-1 pt-2">
              <div className="flex-1 flex px-5  flex-col justify-center">
                <h2 class="font-bold text-xl md:text-3xl text-orange-700">
                  Dr. Komolafe
                </h2>
                <p class="text-orange-700">specialist</p>
              </div>
              <div className="flex md:space-x-5 space-x-1 px-2 my-2">
                <div className="flex flex-1 items-center py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                  <AiOutlineCalendar />
                  <p className="text-xs ml-1 font-medium">22th Nov</p>
                </div>
                <div className="flex items-center flex-1 py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                  <AiOutlineClockCircle />
                  <p className="text-xs ml-1 font-medium">10:30am</p>
                </div>
              </div>
            </div>
          </Link>
        </section>
        {/* What we do */}
        <section>
          <div className="flex justify-between items-center mt-10">
            <h1 className={`font-bold text-xl md:text-2xl text-blue-950`}>
              Our Services
            </h1>
            <p className="text-orange-500 text-sm font-semibold cursor-pointer">
              See More
            </p>
          </div>
          <div className="flex justify-between md:justify-around ">
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

        {/* Meet Doctors */}
        <section>
          <div className="flex justify-between items-center mt-10">
            <h1 className={`font-bold text-xl md:text-2xl text-blue-950`}>
              Meet Our Doctors
            </h1>
            <Link
              to="/doctors"
              className="text-orange-500 text-sm font-semibold cursor-pointer"
            >
              See More
            </Link>
          </div>

          <div class="bg-white rounded-lg border border-orange-400 flex my-6">
            <img
              src={docImage2}
              alt="Laptop on Desk"
              class="w-1/3 hidden md:block"
            />
            <div class="flex flex-col  pt-2 flex-1">
              <div className="flex-1 px-5 flex flex-col justify-center">
                <h2 class="font-bold text-xl md:text-3xl text-orange-700">
                  Dr. Katie
                </h2>
                <p class="text-orange-700">surgeon</p>
                <div className="flex items-center space-x-2 my-2">
                  <AiFillPhone className="text-orange-900" />
                  <p className="text-xs text-orange-700">+234-567-89012</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdEmail className="text-orange-900" />
                  <p className="text-xs text-orange-700">Superadmin@mail.com</p>
                </div>
              </div>
              <div className="flex mt-2  divide-x-2 divide-orange-700">
                <div className="flex flex-1 justify-center items-center py-2.5 bg-orange-200 hover:bg-orange-700 duration-300 transition-all text-orange-700 hover:text-orange-100 px-2">
                  <IconMessageDots />
                  <p className="text-xs font-medium">Message</p>
                </div>
                <div className="flex flex-1 justify-center items-center py-2.5 bg-orange-200 hover:bg-orange-700 duration-300 transition-all text-orange-700 hover:text-orange-100 px-2">
                  <IconPhoneOutgoing />
                  <p className="text-xs font-medium">Call</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg border border-orange-400 flex my-6">
            <img
              src={docImage}
              alt="Laptop on Desk"
              class="w-1/3 hidden md:block"
            />
            <div class="flex flex-col  pt-2 flex-1">
              <div className="flex-1 px-5 flex flex-col justify-center">
                <h2 class="font-bold text-xl md:text-3xl text-orange-700">
                  Dr. John
                </h2>
                <p class="text-orange-700">surgeon</p>
                <div className="flex items-center space-x-2 my-2">
                  <AiFillPhone className="text-orange-900" />
                  <p className="text-xs text-orange-700">+234-567-89012</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdEmail className="text-orange-900" />
                  <p className="text-xs text-orange-700">Superadmin@mail.com</p>
                </div>
              </div>
              <div className="flex mt-2  divide-x-2 divide-orange-700">
                <div className="flex flex-1 justify-center items-center py-2.5 bg-orange-200 hover:bg-orange-700 duration-300 transition-all text-orange-700 hover:text-orange-100 px-2">
                  <IconMessageDots />
                  <p className="text-xs font-medium">Message</p>
                </div>
                <div className="flex flex-1 justify-center items-center py-2.5 bg-orange-200 hover:bg-orange-700 duration-300 transition-all text-orange-700 hover:text-orange-100 px-2">
                  <IconPhoneOutgoing />
                  <p className="text-xs font-medium">Call</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="h-[20vh]" />
    </>
  );
};

export default Home;
