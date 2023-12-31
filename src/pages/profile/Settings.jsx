import React from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import { AiFillCreditCard, AiOutlineFlag, AiOutlineUser } from "react-icons/ai";
import {
  MdOutlineNotificationsActive,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import {
  RiGitRepositoryPrivateLine,
  RiIndeterminateCircleLine,
} from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { FiLogOut, FiUsers } from "react-icons/fi";
import MainHeader from "../../components/webComponent/MainHeader";
import MiniHeader from "../../components/webComponent/MiniHeader";
import { Link, useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../libs/utils";
import { IconReceipt } from "@tabler/icons-react";

const Settings = () => {
  ScrollToTop();
  const Account = [
    {
      title: "Edit Profile",
      icon: <AiOutlineUser size={28} />,
      link: "/edit-profile",
    },
    // {
    //   title: "Security",
    //   icon: <MdOutlinePrivacyTip size={28} />,
    //   link: "/edit",
    // },
    // {
    //   title: "Notificaton",
    //   icon: <MdOutlineNotificationsActive size={28} />,
    //   link: "/edit",
    // },
    {
      title: "Change Password",
      icon: <RiGitRepositoryPrivateLine size={28} />,
      link: "/reset-password",
    },
    {
      title: "My Subscriptions",
      icon: <IconReceipt size={28} />,
      link: "/settings/my-subscriptions",
    },
    {
      title: "Subscription Packages",
      icon: <AiFillCreditCard size={28} />,
      link: "/settings/subscription",
    },
  ];
  const Support = [
    {
      title: "Help & Support",
      icon: <BsQuestionCircle size={28} />,
      link: "/edit",
    },
    {
      title: "Terms and Policies",
      icon: <RiIndeterminateCircleLine size={28} />,
      link: "/edit",
    },
  ];
  const Others = [
    // { title: "Add account", icon: <FiUsers size={28} />, link: "/edit" },
    { title: "Log Out", icon: <FiLogOut size={28} />, link: "/logout" },
  ];

  const navigate = useNavigate();
  return (
    <>
      <section className="w-[100%] md:w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[40%] px-4 mt-10">
        <div className="flex justify-between items-center">
          <BiChevronLeftCircle size={30} onClick={() => navigate(-1)} />
          <MainHeader text="Settings" />
          <div className="w-5"></div>
        </div>
        {/* Account */}
        <div className="mt-8">
          <MiniHeader text="Account" />

          <section className="mt-4">
            {Account.map((item, index) => (
              <Link key={index} to={item.link}>
                <div className="flex items-center bg-gray-200 px-5 py-2 rounded-lg mt-2">
                  {item.icon}
                  <h2 className="ml-3 font-semibold text-lg">{item.title}</h2>
                </div>
              </Link>
            ))}
          </section>
        </div>
        {/* Support */}
        {/* <div className="mt-8">
          <MiniHeader text="Support & About" />

          <section className="mt-4">
            {Support.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="flex items-center bg-gray-200 px-5 py-2 rounded-lg mt-2"
              >
                {item.icon}
                <h2 className="ml-3 font-semibold text-lg">{item.title}</h2>
              </Link>
            ))}
          </section>
        </div> */}
        {/* Others */}
        <div className="mt-8">
          <section className="mt-4">
            {Others.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="flex items-center cursor-pointer bg-gray-200 px-5 py-2 rounded-lg mt-2"
              >
                {item.icon}
                <h2 className="ml-3 font-semibold text-lg">{item.title}</h2>
              </Link>
            ))}
          </section>
        </div>
        <div className="mt-40"></div>
      </section>
    </>
  );
};

export default Settings;
