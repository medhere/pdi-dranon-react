import React from "react";

const MainInput = ({ placeholder = "", style, type = "text", ...props }) => {
  return (
    <input
      type={type}
      className={`bg-[#f5f5f5] text-gray-900 font-medium text-lg rounded-lg block w-full pl-14 p-2.5 ${style}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default MainInput;
