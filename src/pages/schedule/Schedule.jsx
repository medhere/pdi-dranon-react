import { IconCalendarSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import docImage from "../../assets/images/doc4.jpg";
import docImage2 from "../../assets/images/df.png";
import { XHR } from "../../libs/request";
import { formatDate, formatTime } from "../../libs/utils";
const Schedule = () => {
  const [consultation, setConsultation] = useState([]);
  const fetchConsultation = async () => {
    await XHR("get", "api/consultations")
      .then((res) => {
        console.log(res.data);
        setConsultation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchConsultation();
  }, []);

  return (
    <section className="w-[100%] md:w-[100%] xl:w-[40%] lg:w-[60%] px-4 mt-7">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`font-bold text-3xl text-blue-950`}>
            Your Consultations
          </h1>
        </div>
      </div>
      {/* Consultation */}
      {consultation.length > 0 ? (
        <section>
          <div className="flex justify-between items-center mt-10">
            <h1 className={`font-bold text-xl md:text-2xl text-blue-950`}>
              All Consultations
            </h1>
          </div>

          {consultation.map((consult, index) => (
            <Link
              to={`/doctor/consultation/${consult.consultation_id}`}
              className="bg-white rounded-lg border border-orange-400 shadow-lg flex my-6"
            >
              <img
                src={docImage2}
                alt="Laptop on Desk"
                className="w-1/3 rounded-l-lg"
              />
              <div className="flex flex-col flex-1 pt-2">
                <div className="flex-1  px-5 flex flex-col justify-center">
                  <h2 className="font-bold text-xl md:text-3xl text-orange-700">
                    {consult.createdby.name}
                  </h2>
                  <p className="text-orange-700">{consult.createdby.role}</p>
                </div>
                <div className="flex md:space-x-5 space-x-1 px-2 my-2">
                  <div className="flex flex-1 items-center py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                    <AiOutlineCalendar />
                    <p className="text-xs ml-1 font-medium">
                      {formatDate(consult?.created_at)}
                    </p>
                  </div>
                  <div className="flex items-center flex-1 py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                    <AiOutlineClockCircle />
                    <p className="text-xs ml-1 font-medium">
                      {formatTime(consult.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* <div className="flex justify-between items-center mt-10">
            <h1 className={`font-bold text-xl md:text-2xl text-blue-950`}>
              Past Consultations
            </h1>
          </div>
          <Link
            to={`/doctor/consultation/2`}
            className="bg-white rounded-lg border border-orange-400 flex my-6"
          >
            <img src={docImage} alt="Laptop on Desk" className="w-1/3 " />
            <div className="flex flex-col flex-1 pt-2">
              <div className="flex-1 flex px-5  flex-col justify-center">
                <h2 className="font-bold text-xl md:text-3xl text-orange-700">
                  Dr. Komolafe
                </h2>
                <p className="text-orange-700">specialist</p>
              </div>
              <div className="flex md:space-x-5 space-x-1 px-2 my-2">
                <div className="flex flex-1 items-center py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                  <AiOutlineCalendar />
                  <p className="text-xs ml-1 font-medium">22th Jan</p>
                </div>
                <div className="flex items-center flex-1 py-2 justify-center bg-orange-200 text-orange-700 rounded px-2">
                  <AiOutlineClockCircle />
                  <p className="text-xs ml-1 font-medium">10:30am</p>
                </div>
              </div>
            </div>
          </Link> */}
        </section>
      ) : (
        <section className="flex justify-center items-center h-[80vh]">
          <div>
            <h2 className="text-center font-medium text-xl mb-2">
              You have no consultations!
            </h2>
            <IconCalendarSearch size={70} className="mx-auto" />
          </div>
        </section>
      )}
    </section>
  );
};

export default Schedule;
