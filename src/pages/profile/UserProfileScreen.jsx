import { Avatar, Button } from "@mantine/core";
import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import { BiChevronLeftCircle, BiLocationPlus } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../components/webComponent/MainButton";
import { Menu } from "@mantine/core";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
} from "@tabler/icons-react";
import { ScrollToTop } from "../../libs/utils";

const UserProfileScreen = () => {
  ScrollToTop();
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[200px] flex justify-between px-10 items-center bg-[#f18952]">
        <div className="w-[100%] md:w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[40%] flex justify-between mx-auto">
          <BiChevronLeftCircle
            className="cursor-pointer"
            size={25}
            onClick={() => navigate(-1)}
          />
          <MainHeader text="Profile" />

          <Menu
            openDelay={100}
            closeDelay={400}
            width={150}
            transitionProps={{ transition: "rotate-right", duration: 350 }}
          >
            <Menu.Target>
              <Button compact>
                <HiOutlineMenuAlt1
                  className="cursor-pointer"
                  size={22}
                  color="black"
                />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} />}>
                <Link to="/settings">Settings</Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
      <div className="w-[100%] md:w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[40%]">
        <div className="">
          <div className="flex flex-col items-center -mt-20">
            <Avatar
              color="cyan"
              radius="100%"
              size={150}
              className="mx-auto my-5"
            >
              HM
            </Avatar>
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-semibold">Harry Marguire</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>

            <p className="text-sm text-gray-900 font-semibold flex items-center">
              <BiLocationPlus size={22} color="black" />
              Wuse, Abuja
            </p>
          </div>

          <div className="flex items-center space-x-4 mx-4 mt-7">
            <MainButton style="text-sm">
              <Link to="/edit-profile">Edit Profile</Link>
            </MainButton>
            <MainButton style="text-sm">Consult A Doctor</MainButton>
          </div>

          <div className="my-4 flex flex-col  space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col">
              <div className="flex-1 rounded-lg px-4">
                <h4 className="text-xl text-gray-900 font-bold">
                  Personal Info
                </h4>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="text-gray-700">Harry Marguire</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Birthday:</span>
                    <span className="text-gray-700">24 Jul, 1991</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Joined:</span>
                    <span className="text-gray-700">
                      10 Jan 2022 (25 days ago)
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Mobile:</span>
                    <span className="text-gray-700">(123) 123-1234</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="text-gray-700">
                      amandaross@example.com
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Location:</span>
                    <span className="text-gray-700">New York, US</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Languages:</span>
                    <span className="text-gray-700">English, Spanish</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 px-4">
                <h4 className="text-xl text-gray-900 font-bold pt-5">Info</h4>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 my-8">
                  <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-indigo-600">
                        Subscription
                      </span>
                      <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                        7 days left
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
                            ₦3,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-blue-600">
                        Active Consultation
                      </span>
                      <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                        In 17hrs time
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div>
                        <svg
                          className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-end">
                          <span className="text-2xl 2xl:text-3xl font-bold">
                            Dr. Mike
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40"></div>
    </>
  );
};

export default UserProfileScreen;
