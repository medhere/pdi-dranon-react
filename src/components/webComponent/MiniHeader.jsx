import React from "react";

const MiniHeader = ({ text, classes }) => {
  return <h1 className={`font-bold text-lg ${classes}`}>{text}</h1>;
};

export default MiniHeader;
