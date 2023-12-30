import { IconStethoscope } from "@tabler/icons-react";
import { IconCalendarSearch } from "@tabler/icons-react";
import React from "react";
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <body className="min-h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col items-center">
      <Outlet />
      <div className="w-full bg-[#f18952]">
        <section
          id="bottom-navigation"
          className="block fixed inset-x-0 bottom-0 z-10 bg-[#f18952] shadow-md w-full md:w-[100%]  lg:w-[60%] xl:w-[40%] mx-auto"
        >
          <div id="tabs" className="flex justify-between">
            <Link
              to="/home"
              className={`w-full  justify-center inline-block text-center pt-2 pb-1 ${
                pathname.includes("/home") && "text-[#f18952] bg-white"
              }`}
            >
              <AiOutlineHome size={26} className="mx-auto mb-1" />
              <span className="tab tab-home block text-xs font-semibold">
                Home
              </span>
            </Link>
            <Link
              to="/schedule"
              className={`w-full justify-center inline-block text-center pt-2 pb-1 ${
                pathname.includes("/schedule") && "text-[#f18952] bg-white"
              }`}
            >
              <IconCalendarSearch size={26} className="mx-auto mb-1" />
              <span className="tab tab-kategori block text-xs font-semibold">
                Consultations
              </span>
            </Link>
            {/* <Link
              to="/doctors"
              className={`w-full  justify-center inline-block text-center pt-2 pb-1 ${
                pathname.includes("/doctor") && "text-[#f18952] bg-white"
              }`}
            >
              <IconStethoscope size={26} className="mx-auto mb-1" />
              <span className="tab tab-explore block text-xs font-semibold">
                Doctors
              </span>
            </Link> */}
            <Link
              to="/profile"
              className={`w-full  justify-center inline-block text-center pt-2 pb-1 ${
                pathname.includes("profile") && "text-[#f18952] bg-white"
              }`}
            >
              <AiOutlineUser size={26} className="mx-auto mb-1" />
              <span className="tab tab-whishlist block text-xs font-semibold">
                Profile
              </span>
            </Link>
            <Link
              to="/settings"
              className={`w-full  justify-center inline-block text-center pt-2 pb-1 ${
                pathname.includes("/settings") && "text-[#f18952] bg-white"
              }`}
            >
              <AiOutlineSetting size={26} className="mx-auto mb-1" />
              <span className="tab tab-account block text-xs font-semibold">
                Settings
              </span>
            </Link>
          </div>
        </section>
      </div>
    </body>
  );
};

export default AppLayout;
