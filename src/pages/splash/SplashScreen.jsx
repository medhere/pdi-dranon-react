import React from "react";
import y from "../../assets/bg/y.png";
const SplashScreen = () => {
  return (
    <body className="h-screen MainBg w-screen bg-[#f18c53] flex justify-center items-center">
      <h1 className="flex items-center justify-center text-4xl font-semibold">
        DR. ANON
        <img src={y} alt="" />
        MOUS
      </h1>
    </body>
  );
};

export default SplashScreen;
