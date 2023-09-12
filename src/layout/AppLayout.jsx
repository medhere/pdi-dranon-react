import { IconCalendarSearch } from "@tabler/icons-react";
import React from "react";
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <body className="min-h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col items-center">
      <Outlet />
      <div class="w-full bg-[#f18952]">
        <section
          id="bottom-navigation"
          class="block fixed inset-x-0 bottom-0 z-10 bg-[#f18952] shadow-md w-full md:w-[60%] sm:w-[70%] lg:w-[40%] mx-auto"
        >
          <div id="tabs" class="flex justify-between">
            <Link
              to="/home"
              class="w-full text-[#f18952] bg-white justify-center inline-block text-center pt-2 pb-1"
            >
              <AiOutlineHome size={26} className="mx-auto mb-1" />
              <span class="tab tab-home block text-xs font-semibold">Home</span>
            </Link>
            <a
              href="#"
              class="w-full text-gray-800 justify-center inline-block text-center pt-2 pb-1"
            >
              <IconCalendarSearch size={26} className="mx-auto mb-1" />
              <span class="tab tab-kategori block text-xs font-semibold">
                Schedule
              </span>
            </a>
            <a
              href="#"
              class="w-full text-gray-800 justify-center inline-block text-center pt-2 pb-1"
            >
              <MdOutlineExplore size={26} className="mx-auto mb-1" />
              <span class="tab tab-explore block text-xs font-semibold">
                Explore
              </span>
            </a>
            <Link
              to="/profile"
              class="w-full text-gray-800 justify-center inline-block text-center pt-2 pb-1"
            >
              <AiOutlineUser size={26} className="mx-auto mb-1" />
              <span class="tab tab-whishlist block text-xs font-semibold">
                Profile
              </span>
            </Link>
            <Link
              to="/settings"
              class="w-full text-gray-800 justify-center inline-block text-center pt-2 pb-1"
            >
              <AiOutlineSetting size={26} className="mx-auto mb-1" />
              <span class="tab tab-account block text-xs font-semibold">
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
