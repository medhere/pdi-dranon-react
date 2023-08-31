import React from "react";

const MainHeader = ({ text, classes }) => {
  return (
    <div className={classes}>
      <h1 className="font-bold text-3xl">{text}</h1>
    </div>
  );
};

export default MainHeader;
