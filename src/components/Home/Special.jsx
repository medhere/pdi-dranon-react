import React, { useEffect, useState } from "react";
// import { MultiSelect } from "@mantine/core";
// import preg from "../../assets/images/New folder/preg.png";
// import baby from "../../assets/images/New folder/baby.png";
// import hair from "../../assets/images/New folder/hair.png";
// import stethoscope from "../../assets/images/New folder/stethoscope.png";
// import sex from "../../assets/images/New folder/sex.png";
// import digestion from "../../assets/images/New folder/digestion.png";
// import psyc from "../../assets/images/New folder/psyc.png";
// import lungs from "../../assets/images/New folder/lungs.png";
// import infections from "../../assets/images/New folder/infections.png";
// import { Link } from "react-router-dom";

const Special = () => {

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
    console.log("Checked Items:", checkedItems);    
    //dispatch to redux
    // Do something with the checked items, for example, send them to an API
  };

  return (
    <div>
      <section>
        <div className="flex justify-between items-center mt-10">
          <h1 className="font-bold text-xl text-center mx-auto md:text-2xl text-blue-950">
            What bothers you today?
            <p className="text-base">Select, then chat with a medical pro</p>
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
                  <p className="text-center text-base py-5 px-3 md:max-w-none mx-auto font-semibold mt-2 text-gray-700 peer-checked:text-white group-hover:text-orange-700">
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
