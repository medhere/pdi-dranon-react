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
import { Link } from "react-router-dom";

const Special = () => {
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

  const questions = [
    { id: 1, title: "Is my Vaginal discharge/Itching normal?" },
    { id: 2, title: "A dripping discharge from the penis. What do I do?" },
    { id: 3, title: "How do I treat Vaginal bleeding?" },
    {
      id: 4,
      title:
        "There's persisting Pain around my pelvis sores, bumps or blisters on penis, anus, or mouth Painful intercourse. Should I be worried?",
    },
    { id: 5, title: "Burning pain with urine or with bowel movements" },
    { id: 6, title: "Irregular menstruation. Can you help?" },
    { id: 7, title: "Vaginal swelling" },
    {
      id: 8,
      title:
        "I was Raped/forced into sexual intercourse. Should I keep it to myself?",
    },
    { id: 9, title: "Rashes around the pelvic region. Would it go away?" },
    { id: 10, title: "Can't do without alcohol. How do I regain control?" },
    { id: 11, title: "Is smoking really addictive, harmful?" },
    {
      id: 12,
      title:
        "Could you tell me more about Mental retardation/Inability to assimilate?",
    },
    {
      id: 13,
      title: "Why do I have a constant feeling of apprehension or dread?",
    },
    {
      id: 14,
      title: "Restlessness, anxiety, and irritability. Should I give it time?",
    },
    { id: 15, title: "Anticipate the worst possible outcomes. Normal, right?" },
    { id: 16, title: "Suicidal thoughts. Is it normal?" },
    {
      id: 17,
      title:
        "Recreational drugs. I may like to bring my use under control. Any idea?",
    },
    { id: 18, title: "Uncontrolled Anger. Any suggestion?" },
    { id: 19, title: "Why do I feel like hurting myself or someone else?" },
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (title) => {
    if (checkedItems.includes(title)) {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((itemLabel) => itemLabel !== title)
      );
    } else {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, title]);
    }
  };

  const handleSubmit = () => {
    // Do something with the checked items, for example, send them to an API
    console.log("Checked Items:", checkedItems);
  };

  return (
    <div>
      <section>
        <div className="flex justify-between items-center mt-10">
          <h1 className={`font-bold text-xl mx-auto md:text-2xl text-blue-950`}>
            What bothers you today?
          </h1>
        </div>
        <form action="">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-4 mt-5">
            {questions.map((item, index) => (
              <div key={index} className="relative">
                <input
                  id={item.id}
                  type="checkbox"
                  class="hidden peer"
                  checked={checkedItems.includes(item.title)}
                  onChange={() => handleCheckboxChange(item.title)}
                  name={item.title}
                  value={item.title}
                />
                <label
                  for={item.id}
                  className="group cursor-pointer rounded-xl bg-white peer-checked:bg-orange-200  mx-auto flex items-center w-full shadow-xl"
                >
                  {/* <div className=" flex justify-center w-24 h-24 p-4 items-center duration-300 transition   rounded-2xl group-hover:scale-110">
                  <img src={item.img} alt="" className="" />
                </div> */}
                  <p className="text-center  text-xs py-5 px-3 md:max-w-none mx-auto font-semibold mt-2 text-gray-700 peer-checked:text-white group-hover:text-orange-700">
                    {item.title}
                  </p>
                </label>
              </div>
            ))}
          </div>
          {/* <Link to={`/fetch-doctor`}> */}
          <button
            onClick={handleSubmit}
            type="button"
            className="py-2 px-6 mt-10  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Consult a Doctor
          </button>
          {/* </Link> */}
        </form>
      </section>
    </div>
  );
};

export default Special;
