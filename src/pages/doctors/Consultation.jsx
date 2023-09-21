import React from "react";
import MainButton from "../../components/webComponent/MainButton";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconPill,
  IconPillOff,
  IconClipboardData,
} from "@tabler/icons-react";
import { IconTestPipeOff } from "@tabler/icons-react";
import docImage from "../../assets/images/doc4.jpg";

const Consultation = () => {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <>
      <section className="w-[100%] md:w-[70%]  lg:w-[50%] xl:w-[40%] no-scrollbar">
        <div class=" bg-white  overflow-hidden ">
          <div class="bg-cover h-32 bg-orange-100"></div>
          <div class=" px-4 pb-6">
            <div class="text-center sm:text-left sm:flex mb-4">
              <img
                class="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
                src={docImage}
                alt=""
              />
              <div class="py-2">
                <h3 class="font-bold text-2xl mb-1">Dr John</h3>
                <p>Specialist</p>
              </div>
            </div>
            <div class="flex space-x-4">
              <MainButton>
                <div className="flex justify-center items-center">
                  Message
                  <MdEmail className="text-orange-900 ml-2" />
                </div>
              </MainButton>
              <MainButton>
                <div className="flex justify-center items-center space-x-5">
                  Call
                  <AiFillPhone className="text-orange-900 ml-2" />
                </div>
              </MainButton>
            </div>
          </div>
        </div>
        <section className="mt-5">
          <Tabs defaultValue="Diagnosis">
            <Tabs.List grow justify="space-between">
              <Tabs.Tab
                value="Diagnosis"
                leftSection={<IconClipboardData size={30} />}
              >
                Diagnosis
              </Tabs.Tab>
              <Tabs.Tab
                value="Prescription"
                leftSection={<IconMessageCircle style={iconStyle} />}
              >
                Prescription
              </Tabs.Tab>
              <Tabs.Tab
                value="Lab Test"
                leftSection={<IconSettings style={iconStyle} />}
              >
                Lab Test
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Diagnosis">
              <section className="m-3">
                <div className="my-5">
                  <h1 className="text-xl font-semibold">Diagnosis Info</h1>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="text-gray-900 font-semibold">Date:</span>{" "}
                    18 February 2023
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="text-gray-900 font-semibold">Time: </span>{" "}
                    12:30pm
                  </p>
                </div>
                <div className="my-5">
                  <h1 className="text-xl font-semibold">
                    Doctor's Note and Findings
                  </h1>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Porro expedita iusto sequi quos, labore, saepe rerum non
                    eaque Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Sapiente tenetur nulla molestiae error! Ea, nobis.
                  </p>
                </div>
                <div className="my-5">
                  <h1 className="text-xl font-semibold">Final Diagnosis</h1>
                  <p className="text-gray-600 ">Cough and Catarrh</p>
                </div>
              </section>
            </Tabs.Panel>

            <Tabs.Panel value="Prescription">
              <section className="flex justify-center item-center my-10">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-lg ">You have no prescription</h1>
                  <IconPillOff size={40} className="mt-5" />
                </div>
              </section>
            </Tabs.Panel>

            <Tabs.Panel value="Lab Test">
              <section className="flex justify-center item-center my-10">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-lg ">You have no lab test to take</h1>
                  <IconTestPipeOff size={40} className="mt-5" />
                </div>
              </section>
            </Tabs.Panel>
          </Tabs>
        </section>
      </section>
    </>
  );
};

export default Consultation;
