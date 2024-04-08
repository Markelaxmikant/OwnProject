import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#2699fb] py-4 ">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className="m-3">
          <div className="text-white font-bold text-[20px] sm:text-[50px]">
            Don't Need To Go AnyWhere !!
          </div>
          <span className="text-white font-bold text-[12px] sm:text-[20px]">
            Just Go Through The Website Or Contact Us
          </span>
        </div>
        <div className="m-3">
          <div>
            <input
              type="text"
              className="py-2 mr-2 sm:w-full rounded text-slate-800"
              placeholder="Enter Email "
            />
            <button className="bg-black sm:mt-2 md:mt-2 text-white p-2 rounded">
              Get Started
            </button>
          </div>
          <div className="text-[15px] mt-5">
            <p className="text-white">
              If you have any query, please don't forget to contact us
            </p>
            <a href="#"> Privacy Policy </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
