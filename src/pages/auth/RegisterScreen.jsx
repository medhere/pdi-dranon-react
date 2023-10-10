import React from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
// import { IconUserBolt } from "@tabler/icons-react";
import { BiSolidLockOpen, BiSolidUserPlus } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillCalendarCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IconGenderBigender } from "@tabler/icons-react";
import { XHR } from "../../libs/request";

const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      location: "",
      password: "",
      phone: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    await XHR("post", "api/auth/register", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <body className="min-h-screen SubBg w-screen py-16 bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-7">
          <MainHeader text="Create Account" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 ">
            <div class="relative ">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BiSolidUserPlus size={28} className="text-gray-500" />
              </div>
              <input
                id="fullName"
                className={`inputStyle ${
                  errors?.fullName && "border border-red-500"
                }`}
                placeholder="Full Name"
                {...register("fullName", {
                  required: "Full name is required",
                })}
              />
            </div>
            {errors?.fullName && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className=" mb-4 ">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <MdEmail size={28} className="text-gray-500" />
              </div>
              <input
                className={`inputStyle ${errors?.email && "border-red-500"}`}
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>
            {errors?.email && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BsFillTelephoneFill size={28} className="text-gray-500" />
              </div>
              <input
                className={`inputStyle ${errors?.phone && "border-red-500"}`}
                placeholder="Phone Number"
                type="text"
                {...register("phone", {
                  required: "Phone Number is required",
                })}
              />
            </div>
            {errors?.phone && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div class="relative ">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <MdLocationOn size={28} className="text-gray-500" />
              </div>
              <select
                className={`inputStyle ${errors?.location && "border-red-500"}`}
                placeholder="Location"
                type="text"
                {...register("location", {
                  required: "location is required",
                })}
              >
                <option
                  value=""
                  disabled
                  selected
                  className="text-gray-600"
                  las
                >
                  Select Location
                </option>
                <option value="abuja">Abuja</option>
                <option value="lagos">Lagos</option>
              </select>
            </div>
            {errors?.location && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.location.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BsFillCalendarCheckFill size={28} className="text-gray-500" />
              </div>
              <input
                className={`inputStyle ${
                  errors?.dateOfBirth && "border-red-500"
                }`}
                placeholder="Date Of Birth"
                type="date"
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                })}
              />
            </div>
            {errors?.dateOfBirth && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <IconGenderBigender size={28} className="text-gray-500" />
              </div>
              <select
                className={`inputStyle ${errors?.gender && "border-red-500"}`}
                placeholder="Gender"
                type="Text"
                {...register("gender", {
                  required: "Gender is required",
                })}
              >
                <option
                  value=""
                  disabled
                  selected
                  className="text-gray-600"
                  las
                >
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {errors?.gender && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.gender.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BiSolidLockOpen size={28} className="text-gray-500" />
              </div>
              <input
                className={`inputStyle ${errors?.password && "border-red-500"}`}
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 5,
                    message: "Password should be at least 5 characters",
                  },
                })}
              />
            </div>
            {errors?.password && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BiSolidLockOpen size={28} className="text-gray-500" />
              </div>
              <input
                className={`inputStyle ${
                  errors?.password_confirmation && "border-red-500"
                }`}
                placeholder="Confirm Password"
                type="password"
                {...register("password_confirmation", {
                  validate: (value) => value === getValues("password"),
                })}
              />
            </div>
            {errors?.password_confirmation && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.password_confirmation &&
                  errors.password_confirmation.type === "validate" && (
                    <span>Passwords do not match</span>
                  )}
              </p>
            )}
          </div>
          <div>
            <Link
              to="/auth/forget-password"
              className="text-[#1977F3] underline text-sm tracking-wide font-semibold text-end"
            >
              Forgot Password?
            </Link>
          </div>
          <MainButton type="submit" style="mt-5">
            Sign Up
          </MainButton>
        </form>
        <div className="flex items-center my-5 justify-center">
          <hr className=" bg-pink-500 w-14" />
          <p className="text-xs shrink-0 font-medium mx-3">
            Already have an account?
          </p>
          <hr className=" bg-pink-500 w-14" />
        </div>
        <Link to="/auth/login">
          <MainButton style="bg-white border-none shadow">
            Login Here
          </MainButton>
        </Link>
      </section>
    </body>
  );
};

export default RegisterScreen;
