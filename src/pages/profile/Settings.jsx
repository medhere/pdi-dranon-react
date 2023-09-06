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

const Settings = () => {
  const Account = [
    {
      title: "Edit Profile",
      icon: <AiOutlineUser size={28} />,
      link: "/edit-profile",
    },
    {
      title: "Security",
      icon: <MdOutlinePrivacyTip size={28} />,
      link: "/edit",
    },
    {
      title: "Notificaton",
      icon: <MdOutlineNotificationsActive size={28} />,
      link: "/edit",
    },
    {
      title: "Change Password",
      icon: <RiGitRepositoryPrivateLine size={28} />,
      link: "/auth/reset-password",
    },
  ];
  const Support = [
    {
      title: "My Subscription",
      icon: <AiFillCreditCard size={28} />,
      link: "/edit",
    },
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
    {
      title: "Report a problem",
      icon: <AiOutlineFlag size={28} />,
      link: "/edit",
    },
    { title: "Add account", icon: <FiUsers size={28} />, link: "/edit" },
    { title: "Log Out", icon: <FiLogOut size={28} />, link: "/edit" },
  ];

  const navigate = useNavigate();
  return (
    <body className="min-h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col items-center">
      <section className="w-[95%] md:w-[60%] sm:w-[70%] lg:w-[40%] px-4 mt-10">
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
        <div className="mt-8">
          <MiniHeader text="Support & About" />

          <section className="mt-4">
            {Support.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 px-5 py-2 rounded-lg mt-2"
              >
                {item.icon}
                <h2 className="ml-3 font-semibold text-lg">{item.title}</h2>
              </div>
            ))}
          </section>
        </div>
        {/* Others */}
        <div className="mt-8">
          <section className="mt-4">
            {Others.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 px-5 py-2 rounded-lg mt-2"
              >
                {item.icon}
                <h2 className="ml-3 font-semibold text-lg">{item.title}</h2>
              </div>
            ))}
          </section>
        </div>
        <div className="mt-40"></div>
      </section>
    </body>
  );
};

export default Settings;
