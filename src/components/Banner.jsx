import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] py-[100px] ">
      <div className="max-w-[1240px] mx-auto my-[130px] text-center font-bold">
        <div className=" md:text-2xl mt-[-60px]">Welcome to </div>
        <div className="text-white text-[30px] md:text-6xl mt-4">
          Own Services...
        </div>
        <div className="text-white text-[15px] md:text-[20px] mt-6">
          Buy
          <ReactTyped
            className="p-2"
            strings={["AnyThing...", "AnyTime...", "Only Here...!"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
          {/* <span>Only Here...</span> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
