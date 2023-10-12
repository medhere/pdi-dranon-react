import React from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import MainHeader from "../../components/webComponent/MainHeader";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mantine/core";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillCalendarCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { ScrollToTop } from "../../libs/utils";
const EditProfile = () => {
  ScrollToTop();
  const navigate = useNavigate();
  return (
    <>
      <section className="w-[100%] md:w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[40%] px-4 mt-10">
        <div className="flex justify-between items-center">
          <BiChevronLeftCircle size={30} onClick={() => navigate(-1)} />
          <MainHeader text="Edit Profile" />
          <div className="w-5"></div>
        </div>
        <section>
          <Avatar
            color="cyan"
            radius="100%"
            size={150}
            className="mx-auto my-5"
          >
            HM
          </Avatar>

          <form action="">
            <div className="mb-6 mt-2">
              <label className="font-bold text-lg">Full Name</label>
              <MainInput
                className="inputStyle pl-2 font-medium"
                value="Harry Marguire"
              />
            </div>

            <div className="mb-6 mt-2">
              <label className="font-bold text-lg">Email</label>
              <MainInput
                className="inputStyle pl-2 font-medium"
                value="Harry@Marguire.com"
              />
            </div>

            <div className="mb-6 mt-2">
              <label className="font-bold text-lg">Date of Birth</label>
              <MainInput
                className="inputStyle pl-2 font-medium"
                value="21/22/1992"
              />
            </div>

            <div className="mb-6 mt-2">
              <label className="font-bold text-lg">Country/Region</label>
              <MainInput
                className="inputStyle pl-2 font-medium"
                value="Abuja"
              />
            </div>

            <div className="mb-6 mt-2">
              <label className="font-bold text-lg">Phone Number</label>
              <MainInput
                className="inputStyle pl-2 font-medium"
                value="0901234567"
              />
            </div>

            <Link to="/auth/verify">
              <MainButton className="mt-5">Update Changes</MainButton>
            </Link>
            <div className="h-40"></div>
          </form>
        </section>
      </section>
    </>
  );
};

export default EditProfile;
