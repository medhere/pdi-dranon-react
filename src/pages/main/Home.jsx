import React, { useEffect, useState, Fragment } from "react";
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
import docImage2 from "../../assets/images/df.png";
import {
  IconPhoneOutgoing,
  IconStethoscope,
  IconVaccineBottle,
} from "@tabler/icons-react";
import { IconBuildingHospital } from "@tabler/icons-react";
import { IconPill } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { IconMessageDots } from "@tabler/icons-react";
import { ScrollToTop, formatDate, formatTime } from "../../libs/utils";

import { useAuthUser } from "react-auth-kit";
import { XHR } from "../../libs/request";

import BasicModal from "../../components/webComponent/Modal";
import MyModal from "../../components/webComponent/MyModal";
import TawkTo from "../../components/webComponent/TawkTo";
import { Dialog, Transition } from "@headlessui/react";
import Specialties from "../../components/Home/Specialties";
import Special from "../../components/Home/Special";

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

  const [consultation, setConsultation] = useState([]);

  const authUser = useAuthUser();

  const fetchConsultation = async () => {
    await XHR("get", "api/consultations")
      .then((res) => {
        console.log(res.data);
        setConsultation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchConsultation();
  }, []);

  return (
    <>
      <section className="w-[100%] md:w-[100%] xl:w-[40%] lg:w-[60%] px-4 mt-7">
        <div className="flex justify-between items-center">
          <div>
            <h1 className={`font-bold text-3xl text-blue-950`}>
              Hi, {authUser().name}
            </h1>
            <p className="font-semibold text-sm text-blue-900">
              How are you feeling today?
            </p>
          </div>
          <MdOutlineNotificationsNone size={40} className="text-blue-950" />
        </div>

        <div className="mt-6">
          <div className="relative w-full">
            <input
              type="text"
              id="voice-search"
              className="bg-[#f5f5f5] text-gray-900 font-medium text-lg rounded-lg block w-full pl-5 p-2.5 outline-none"
              placeholder="Search your records"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
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
              Get the care you need at your fingertips!
            </p>
            {/* <BasicModal /> */}
            <MyModal />
          </div>
        </div>
        {/* Medical Specialties */}

        {/* CTA */}

        <div className="bg-orange-100 ">
          <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-6 my-10 px-4 sm:px-2 lg:py-16 lg:px-8">
            <h2 className="text-2xl font-extrabold text-black  sm:text-4xl">
              <span className="block">Want to Talk to a Doctor?</span>
              <span className="block text-orange-500 text-lg">
                It&#x27;s today or never.
              </span>
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0 flex justify-end">
              <div className=" inline-flex justify-end rounded-md shadow">
                <Link to={`/fetch-doctor`}>
                  <button
                    type="button"
                    className="py-2 px-6  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Consult a Doctor
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <Specialties /> */}
        <Special />

        {/* Consultation */}
        {consultation.length > 0 && (
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
            {consultation.map((consult, index) => (
              <Link
                to={`/doctor/consultation/${consult.consultation_id}`}
                className="bg-white rounded-lg border border-orange-400 shadow-lg flex my-6"
              >
                <img
                  src={docImage2}
                  alt="Laptop on Desk"
                  className="w-1/3 rounded-l-lg"
                />
                <div className="flex flex-col flex-1 pt-2">
                  <div className="flex-1  px-5 flex flex-col justify-center">
                    <h2 className="font-bold text-xl md:text-3xl text-orange-700">
                      {consult.createdby.name}
                    </h2>
                    <p className="text-orange-700">{consult.createdby.role}</p>
                  </div>
                  <div className="flex md:space-x-5 space-x-1 px-2 my-2">
                    <div className="flex flex-1 items-center py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                      <AiOutlineCalendar />
                      <p className="text-xs ml-1 font-medium">
                        {formatDate(consult?.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center flex-1 py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                      <AiOutlineClockCircle />
                      <p className="text-xs ml-1 font-medium">
                        {formatTime(consult.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        )}
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

        <TawkTo
          email={authUser().email}
          name={authUser().name}
          user_id={authUser().id}
        />

        {/* Meet Doctors */}
        {/* <section>
          <div className="flex justify-between items-center mt-10">
            <h1 className={`font-bold text-xl md:text-2xl text-blue-950`}>
              Meet Our Specialist
            </h1>
            <Link
              to="/doctors"
              className="text-orange-500 text-sm font-semibold cursor-pointer"
            >
              See More
            </Link>
          </div>

          <div className="bg-white rounded-lg border border-orange-400 flex my-6">
            <img
              src={docImage2}
              alt="Laptop on Desk"
              className="w-1/3 hidden md:block"
            />
            <div className="flex flex-col  pt-2 flex-1">
              <div className="flex-1 px-5 flex flex-col justify-center">
                <h2 className="font-bold text-xl md:text-3xl text-orange-700">
                  Dr. Katie
                </h2>
                <p className="text-orange-700">surgeon</p>
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

          <div className="bg-white rounded-lg border border-orange-400 flex my-6">
            <img
              src={docImage}
              alt="Laptop on Desk"
              className="w-1/3 hidden md:block"
            />
            <div className="flex flex-col  pt-2 flex-1">
              <div className="flex-1 px-5 flex flex-col justify-center">
                <h2 className="font-bold text-xl md:text-3xl text-orange-700">
                  Dr. John
                </h2>
                <p className="text-orange-700">Dermatologist</p>
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
        </section> */}
      </section>
      <div className="h-[20vh]" />
    </>
  );
};

export default Home;
