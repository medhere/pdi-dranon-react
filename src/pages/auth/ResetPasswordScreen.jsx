import React, { useState } from "react";
import MainHeader from "../../components/webComponent/MainHeader";
import icon from "../../assets/images/icon1.png";
import { TextInput } from "@mantine/core";
// import { IconUserBolt } from "@tabler/icons-react";
import {
  BiChevronLeftCircle,
  BiSolidLockOpen,
  BiSolidUserPlus,
} from "react-icons/bi";
import MainButton from "../../components/webComponent/MainButton";
import MainInput from "../../components/webComponent/MainInput";
import { useNavigate } from "react-router-dom";
import { XHR } from "../../libs/request";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { toastStyle } from "../../libs/utils";

const ResetPasswordScreen = () => {
  const navigate = useNavigate();
  const useAuth = useAuthUser();
  const useToken = useAuthHeader();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    await XHR("post", "api/auth/reset-password", {
      email: useAuth().email,
      token: useToken().split(" ")[1],
      ...data,
    })
      .then((res) => {
        console.log(res);
        toast.success(res?.data?.message, toastStyle);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };
  return (
    <body className="h-screen SubBg w-screen bg-[#f6e0ce] flex flex-col items-center">
      <section className="w-[100%] md:w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[40%] px-4 mt-10">
        <div className="flex justify-between items-center ">
          <BiChevronLeftCircle size={30} onClick={() => navigate(-1)} />
          <MainHeader text="Change Password" classes="text-xl" />
          <div className="w-5"></div>
        </div>
        {/* <MainHeader text="Reset Password" classes="mb-10" /> */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <label for="countries_disabled" className="block font-bold text-lg ">
            Enter new Password
          </label>
          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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
          <label
            for="countries_disabled"
            className="block mb-2  font-bold text-lg "
          >
            Confirm Password
          </label>
          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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

          <MainButton type="submit" style="mt-5">
            Reset Password
          </MainButton>
        </form>
      </section>
    </body>
  );
};

export default ResetPasswordScreen;
