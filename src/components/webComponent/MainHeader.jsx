import React from "react";

const MainHeader = ({ text, classes }) => {
  return <h1 className={`font-bold text-3xl ${classes}`}>{text}</h1>;
};

export default MainHeader;
