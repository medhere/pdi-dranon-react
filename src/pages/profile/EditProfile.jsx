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
import { IconGenderBigender } from "@tabler/icons-react";
import { ScrollToTop } from "../../libs/utils";
import { useForm } from "react-hook-form";
import { XHR } from "../../libs/request";
import toast from "react-hot-toast";
import { toastStyle } from "../../libs/utils";
import { useAuthHeader, useAuthUser, useSignIn } from "react-auth-kit";

const EditProfile = () => {
  ScrollToTop();

  const signIn = useSignIn();
  const authUser = useAuthUser();
  const authHeader = useAuthHeader();
  const navigate = useNavigate();

  // console.log(authUser());

  const token = authHeader().split(" ")[1];
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      name: authUser().name,
      email: authUser().email,
      dob: authUser().dob,
      gender: authUser().gender,
      state: authUser().state,
      phone: authUser().phone,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    await XHR("post", "api/update-user", data)
      .then((res) => {
        console.log(res);

        signIn({
          token: token,
          expiresIn: 60 * 24 * 30,
          tokenType: "Bearer",
          authState: { ...authUser(), ...res.data },
        });
        toast.success("Updated Successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      });
  };

  console.log(authUser());
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
            className="mx-auto my-5 uppercase"
          >
            {authUser().name.slice(0, 2)}
          </Avatar>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-x-2 w-full">
              <div className="mb-4 flex-1">
                <div className="relative ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <BiSolidUserPlus size={28} className="text-gray-500" />
                  </div>
                  <input
                    id="name"
                    className={`inputStyle ${
                      errors?.name && "border border-red-500"
                    }`}
                    placeholder="First Name"
                    {...register("name", {
                      required: "First Name is required",
                    })}
                  />
                </div>
                {errors?.name && (
                  <p className="text-[10px] mt-1 font-semibold text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>

            <div className=" mb-4 ">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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
                  <option value="FCT">FCT</option>
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
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <BsFillCalendarCheckFill
                    size={28}
                    className="text-gray-500"
                  />
                </div>
                <input
                  className={`inputStyle ${errors?.dob && "border-red-500"}`}
                  placeholder="Date Of Birth"
                  type="date"
                  disabled
                  {...register("dob", {
                    required: "Date of birth is required",
                  })}
                />
              </div>
              {errors?.dob && (
                <p className="text-[10px] mt-1 font-semibold text-red-500">
                  {errors.dob.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <IconGenderBigender size={28} className="text-gray-500" />
                </div>
                <select
                  className={`inputStyle ${errors?.gender && "border-red-500"}`}
                  placeholder="Gender"
                  disabled
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
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {errors?.gender && (
                <p className="text-[10px] mt-1 font-semibold text-red-500">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <MainButton type="submit" style="mt-5">
              Update
            </MainButton>
          </form>
        </section>
      </section>
      <div className="h-[10vh]" />
    </>
  );
};

export default EditProfile;
