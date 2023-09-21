import { IconCalendarSearch } from "@tabler/icons-react";
import React from "react";

const Schedule = () => {
  return (
    <section className="w-[95%] md:w-[70%] xl:w-[40%] lg:w-[50%] px-4 mt-7">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`font-bold text-3xl text-blue-950`}>Your Schedules</h1>
        </div>
      </div>
      <section className="flex justify-center items-center h-[80vh]">
        <div>
          <h2 className="text-center font-medium text-xl mb-2">
            You have no schedules!
          </h2>
          <IconCalendarSearch size={70} className="mx-auto" />
        </div>
      </section>
    </section>
  );
};

export default Schedule;
