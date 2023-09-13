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
          className="block fixed inset-x-0 bottom-0 z-10 bg-[#f18952] shadow-md w-full md:w-[60%] sm:w-[70%] lg:w-[40%] mx-auto"
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
            <a
              href="#"
              className={`w-full  justify-center inline-block text-center pt-2 pb-1 ${
                pathname.includes("/schedule") && "text-[#f18952] bg-white"
              }`}
            >
              <IconCalendarSearch size={26} className="mx-auto mb-1" />
              <span className="tab tab-kategori block text-xs font-semibold">
                Schedule
              </span>
            </a>
            <a
              href="#"
              className={`w-full  justify-center inline-block text-center pt-2 pb-1 ${
                pathname.includes("/explore") && "text-[#f18952] bg-white"
              }`}
            >
              <MdOutlineExplore size={26} className="mx-auto mb-1" />
              <span className="tab tab-explore block text-xs font-semibold">
                Explore
              </span>
            </a>
            <Link
              to="/profile"
              className={`w-full  justify-center inline-block text-center pt-2 pb-1 ${
                pathname.includes("/profile") && "text-[#f18952] bg-white"
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
