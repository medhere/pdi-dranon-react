import React, { useEffect, useState } from "react";
import { MultiSelect } from "@mantine/core";

import preg from "../../assets/images/New folder/preg.png";
import baby from "../../assets/images/New folder/baby.png";
import hair from "../../assets/images/New folder/hair.png";
import stethoscope from "../../assets/images/New folder/stethoscope.png";
import sex from "../../assets/images/New folder/sex.png";
import digestion from "../../assets/images/New folder/digestion.png";
import psyc from "../../assets/images/New folder/psyc.png";
import lungs from "../../assets/images/New folder/lungs.png";
import infections from "../../assets/images/New folder/infections.png";

const Specialties = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState({});

  //   const [allValue, setAllValue] = useState([]);
  let allValue = [""];
  const [value, setValue] = useState([]);

  const addValue = (value) => {
    setValue(value);
    // setAllValue(prev=> value)
    allValue.push(value);
    console.log(allValue);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id) {
    const data = Specialties.find((special) => special.id == id);
    console.log(data);
    setModalOptions(data);
    setIsOpen(true);
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.classList.contains("modal")) {
        closeModal();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const Specialties = [
    {
      id: 1,
      title: "Woman's Health",
      img: preg,
      symptoms: ["Woman's Health", "Itching", "dizzy", "fever"],
    },
    {
      id: 2,
      title: "Drug Abuse",
      img: hair,
      symptoms: ["Drug Abuse", "Itching", "dizzy", "fever"],
    },
    {
      id: 3,
      title: "Child & Maternal",
      img: baby,
      symptoms: ["Child & Maternal", "Itching", "dizzy", "fever"],
    },
    {
      id: 4,
      title: "General Physician",
      img: stethoscope,
      symptoms: ["General Physician", "Itching", "dizzy", "fever"],
    },
    {
      id: 5,
      title: "Sexual Health",
      img: sex,
      symptoms: ["Sexual Health", "Itching", "dizzy", "fever"],
    },
    {
      id: 6,
      title: "Heart Disease",
      img: digestion,
      symptoms: ["Heart Disease", "Itching", "dizzy", "fever"],
    },
    {
      id: 7,
      title: "Mental Health",
      img: psyc,
      symptoms: [
        "Vaginal discharge/Itching",
        "Vaginal bleeding",
        "Irregular menstruation",
        "Painful intercourse",
        "Vaginal swelling",
        "Rape/forced sexual intercourse",
        "Rashes around the pelvic region",
        "Can’t do without alcohol",
        "Can’t do without smoking",
        "I use a particular drug that I can’t do without",
        "Excessive Anger",
        "Always worried",
        "Feeling like hurting self or someone else",
        "Feeling depressed",
        "I see things unusually",
        "Talkativeness",
        "I don’t like eating due to fear of gaining weight",
        "I eat excessively and yet purge to lose weight",
        "Mental retardation/Inability to assimilate",
        "Suicidal thoughts",
        "Constant feelings of apprehension or dread",
        "Restlessness and irritability",
        "Anticipation of the worst possible outcomes",
        "Racing heartbeat and shortness of breath",
        "Stomach upset and fatigue",
        "Insomnia or frequent trouble sleeping",
        "Feeling tense or jumpy",
        "Unwanted hatred of self, sibling, or friend",
        "Sex addiction",
        "Masturbation",
        "Changes in sleep or appetite",
        "Lack of concentration",
        "Loss of energy and motivation",
        "Lack of interest in activities/friendships",
        "Hopelessness",
        "Physical aches, pains, and general ailments",
        "Headache",
        "Fever chills/colds",
        "Dizziness",
        "Poor comprehension of things",
        "Heartbreak/broken or failed relationships",
        "Sudden changes in behaviour",
        "Chest pains",
        "Fast heartbeat/palpitations",
        "Abdominal pains",
        "Loose/Watery stool",
        "Bloody stool",
        "Inability to pass stool",
        "Hard stool",
        "Pain at the upper abdomen",
        "Nausea/Vomiting",
        "Cough and Catarrh",
        "Throat pains",
        "Eczema",
        "Skin rashes",
        "Multiple boils on the body",
        "Dry skin",
        "Hiccup",
        "Leg sore",
        "Bleeding nose",
      ],
    },
    {
      id: 8,
      title: "Infections",
      img: infections,
      symptoms: ["Infections", "Itching", "dizzy", "fever"],
    },
    {
      id: 9,
      title: "Respiratory Health",
      img: lungs,
      symptoms: ["Respiratory Health", "Itching", "dizzy", "fever"],
    },
  ];

  return (
    <div>
      <section>
        <div className="flex justify-between items-center mt-10">
          <h1 className={`font-bold text-xl md:text-2xl text-blue-950`}>
            Medical Specialties
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4 mt-5">
          {Specialties.map((card) => (
            <div
              onClick={() => openModal(card.id)}
              className="group cursor-pointer rounded-xl bg-white mx-auto flex items-center w-full shadow-xl"
            >
              <div className=" flex justify-center w-24 h-24 p-4 items-center duration-300 transition   rounded-2xl group-hover:scale-110">
                <img src={card.img} alt="" className="" />
              </div>
              <p className="text-center  text-xs  md:max-w-none mx-auto font-semibold mt-2 text-gray-700 group-hover:text-orange-700">
                {card.title}
              </p>
              {isOpen && modalOptions.id === card.id && (
                <>
                  <div className="fixed inset-0 flex items-center justify-center z-50 ">
                    <div className="fixed inset-0 bg-black/10 bg-opacity- backdrop-blur-sm"></div>
                    <div className="modal fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto outline-none focus:outline-none m-auto">
                      <section class="overflow-hidden rounded-lg shadow-2xl bg-white modal m-auto max-w-md">
                        <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                          <p class="text-sm mb-5 font-semibold uppercase tracking-widest">
                            Please Select possible symptoms.
                          </p>

                          <MultiSelect
                            label=""
                            placeholder="Pick symptoms"
                            onChange={(value) => addValue(value)}
                            value={value}
                            data={modalOptions.symptoms}
                          />

                          <p class="mt-8 text-xs font-medium uppercase text-gray-400">
                            Select at least three symptoms.
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Specialties;
