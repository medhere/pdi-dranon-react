import React, { useState } from "react";
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
import docImage from "../../assets/images/df.png";
import { IconCircleChevronLeft } from "@tabler/icons-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { XHR } from "../../libs/request";
import { useEffect } from "react";
import { ScrollToTop, formatDate, formatTime } from "../../libs/utils";
import { FileButton, Button, Group, Text } from "@mantine/core";
import LabTestComponent from "../../components/webComponent/LabTestComponent";

const Consultation = () => {
  const [files, setFiles] = useState([]);
  const params = useParams();
  const [consultation, setConsultation] = useState({});
  const [diagnosis, setDiagnosis] = useState([]);
  const [labTest, setLabTest] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const fetchSubscriptions = async () => {
    await XHR("get", `api/consultation/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setConsultation(res.data);
        setDiagnosis(res?.data?.diagnosis);
        setLabTest(res?.data?.labtests);
        setPrescriptions(res?.data?.prescriptions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);
  const iconStyle = { width: rem(12), height: rem(12) };
  const navigate = useNavigate();
  return (
    <>
      <section className="w-[100%] md:w-[100%]  lg:w-[60%] xl:w-[40%] no-scrollbar">
        <div className=" bg-transparent  overflow-hidden ">
          <div className="bg-cover h-32 bg-orange-100">
            <div className="flex items-center p-4">
              <IconCircleChevronLeft
                size={28}
                onClick={() => navigate(-1)}
                className="cursor-pointer "
              />
            </div>
          </div>
          <div className=" px-4">
            <div className="text-center sm:text-left sm:flex mb-4">
              <img
                className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
                src={docImage}
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl mb-1">
                  {consultation?.createdby?.name}
                </h3>
                <p>{consultation?.createdby?.role}</p>
              </div>
            </div>
            {/* <div className="flex space-x-4">
              <MainButton>
                <Link to={`/doctor/chat/1`}>
                  <div className="flex justify-center items-center">
                    Message
                    <MdEmail className="text-orange-900 ml-2" />
                  </div>
                </Link>
              </MainButton>
              <MainButton>
                <Link>
                  <div className="flex justify-center items-center space-x-5">
                    Call
                    <AiFillPhone className="text-orange-900 ml-2" />
                  </div>
                </Link>
              </MainButton>
            </div> */}
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
              {diagnosis?.length > 0 ? (
                <>
                  {diagnosis.map((item) => (
                    <section className="m-3">
                      <h1 className="text-xl my-5 font-semibold">
                        Diagnosis Info
                      </h1>
                      <div className="grid grid-cols-2">
                        <p className="text-sm text-gray-600 mt-2">
                          <span className="text-gray-900 font-semibold">
                            Date:
                          </span>{" "}
                          {formatDate(consultation.created_at)}
                        </p>

                        <p className="text-sm text-gray-600 mt-2">
                          <span className="text-gray-900 font-semibold">
                            Time:{" "}
                          </span>{" "}
                          {formatTime(consultation.created_at)}
                        </p>
                        {consultation?.pulse_rate && (
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="text-gray-900 font-semibold">
                              Pulse:
                            </span>{" "}
                            {consultation.pulse_rate}
                          </p>
                        )}
                        {consultation?.temperature && (
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="text-gray-900 font-semibold">
                              Temperature:
                            </span>{" "}
                            {consultation.temperature}
                          </p>
                        )}
                        {consultation?.weight && (
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="text-gray-900 font-semibold">
                              Weight:
                            </span>{" "}
                            {consultation.weight}
                          </p>
                        )}
                        {consultation?.height && (
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="text-gray-900 font-semibold">
                              Height:
                            </span>{" "}
                            {consultation.height}
                          </p>
                        )}
                        {consultation?.blood_sugar && (
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="text-gray-900 font-semibold">
                              Blood Sugar:
                            </span>{" "}
                            {consultation.blood_sugar}
                          </p>
                        )}
                        {consultation?.bmi && (
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="text-gray-900 font-semibold">
                              BMI:
                            </span>{" "}
                            {consultation.bmi}
                          </p>
                        )}
                        {/* {consultation?.blood_pressure && (
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="text-gray-900 font-semibold">
                              Blood Pressure:
                            </span>{" "}
                            {consultation.blood_pressure}
                          </p>
                        )} */}
                      </div>
                      <div className="bg-orange-50 p-6 rounded-lg shadow-lg m-1 mt-10">
                        <div className="">
                          <h1 className="text-xl font-semibold">
                            Doctor's Examination
                          </h1>
                          <p className="text-sm text-gray-600">
                            {item.examination}
                          </p>
                        </div>
                        {item.other_provisional_diagnosis && (
                          <div className="my-5">
                            <h1 className="text-xl font-semibold">
                              Other Diagnosis
                            </h1>
                            <p className="text-gray-600 ">
                              {item.other_provisional_diagnosis}
                            </p>
                          </div>
                        )}
                        <div className="my-5">
                          <h1 className="text-xl font-semibold">
                            Final Diagnosis
                          </h1>
                          <p className="text-gray-600 ">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.provisional_diagnosis,
                              }}
                            />
                            {/* {item.provisional_diagnosis} */}
                          </p>
                        </div>
                      </div>
                    </section>
                  ))}
                  <div className="h-[30vh]" />
                </>
              ) : (
                <section className="flex justify-center item-center my-10">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-lg ">You have no Diagnosis</h1>
                    <IconTestPipeOff size={40} className="mt-5" />
                  </div>
                </section>
              )}
            </Tabs.Panel>

            <Tabs.Panel value="Prescription">
              {prescriptions.length > 0 ? (
                <>
                  {prescriptions.map((item, index) => (
                    <div class="bg-orange-50 p-6 rounded-lg shadow-lg m-5">
                      <h1 className="text-xl font-semibold">Drug Name</h1>
                      <p className="text-sm text-gray-600">{item.drug_id}</p>
                      <div className="my-5">
                        <h1 className="text-xl font-semibold">
                          Doctors Comment
                        </h1>
                        <p className="text-gray-600 ">{item.comments}</p>
                      </div>
                    </div>
                  ))}
                  <div className="h-[20vh]" />
                </>
              ) : (
                <section className="flex justify-center item-center my-10">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-lg ">You have no prescription</h1>
                    <IconPillOff size={40} className="mt-5" />
                  </div>
                </section>
              )}
            </Tabs.Panel>

            <Tabs.Panel value="Lab Test">
              {labTest.length > 0 ? (
                <>
                  {labTest.map((item, index) => (
                    <section
                      key={index}
                      className=" bg-orange-50 p-6 rounded-lg shadow-lg m-5"
                    >
                      {/* <div className="my-5">
                        <h1 className="text-xl text-center font-semibold">
                          Test {index + 1}
                        </h1>
                      </div> */}
                      <div className="">
                        <h1 className="text-xl font-semibold">Test Name</h1>
                        <p className="text-sm text-gray-600">
                          {item.test_name}
                        </p>
                      </div>
                      {item.other_provisional_diagnosis && (
                        <div className="my-5">
                          <h1 className="text-xl font-semibold">
                            Other Diagnosis
                          </h1>
                          <p className="text-gray-600 ">
                            {item.other_provisional_diagnosis}
                          </p>
                        </div>
                      )}
                      <div className="my-5">
                        <h1 className="text-xl font-semibold">
                          Doctors Comment
                        </h1>
                        <p className="text-gray-600 ">{item.comments}</p>
                      </div>

                      <LabTestComponent />
                    </section>
                  ))}
                  <div className="h-[20vh]" />
                </>
              ) : (
                <section className="flex justify-center item-center my-10">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-lg ">You have no lab test to take</h1>
                    <IconTestPipeOff size={40} className="mt-5" />
                  </div>
                </section>
              )}
            </Tabs.Panel>
          </Tabs>
        </section>
      </section>
    </>
  );
};

export default Consultation;
