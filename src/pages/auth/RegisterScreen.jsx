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
import axios from "axios";
import toast from "react-hot-toast";
import { toastStyle } from "../../libs/utils";

const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      state: "",
      password: "",
      phone: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    await XHR("post", "api/auth/register", data)
      .then((res) => {
        console.log(res);
        toast.success(res?.response?.data?.message, toastStyle);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message, toastStyle);
      });
  };
  return (
    <body className="min-h-screen SubBg w-screen py-16 bg-[#f6e0ce] flex flex-col justify-center items-center">
      <section className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[40%] px-4">
        <div className="flex justify-center items-center mb-7">
          <MainHeader text="Create Account" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-2 w-full">
            <div className="mb-4 flex-1">
              <div class="relative ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <BiSolidUserPlus size={28} className="text-gray-500" />
                </div>
                <input
                  id="firstName"
                  className={`inputStyle ${
                    errors?.firstName && "border border-red-500"
                  }`}
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
              </div>
              {errors?.firstName && (
                <p className="text-[10px] mt-1 font-semibold text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="mb-4 flex-1">
              <div class="relative ">
                <input
                  id="lastName"
                  className={`bg-[#f5f5f5] text-gray-900 font-medium text-lg rounded-lg block w-full pl-3 p-2.5 outline-none border ${
                    errors?.lastName && "border border-red-500"
                  }`}
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
              </div>
              {errors?.lastName && (
                <p className="text-[10px] mt-1 font-semibold text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
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
                className={`inputStyle ${errors?.state && "border-red-500"}`}
                placeholder="Location"
                type="text"
                {...register("state", {
                  required: "state is required",
                })}
              >
                <option value="" disabled selected className="text-gray-600">
                  Select State
                </option>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
              </select>
            </div>
            {errors?.state && (
              <p className="text-[10px] mt-1 font-semibold text-red-500">
                {errors.state.message}
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
