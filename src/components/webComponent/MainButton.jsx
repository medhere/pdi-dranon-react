import React from "react";

const MainButton = ({ children, style = "", ...props }) => {
  return (
    <button
      className={`py-3 w-full border border-black font-bold text-lg rounded-lg bg-[#f18c53]  ${style}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MainButton;
