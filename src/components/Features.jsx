import React from "react";
import Multi from "./assets/img/Multi.jpg";

const Features = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-10 md:grid grid-cols-2">
      <div className="m-10 col-span-1 text-center">
        <img className="inline object-contain  md:w-[80%] " src={Multi} />
      </div>
      <div className="m-10 col-span-1 flex flex-col justify-center ">
        <h1 className="font-bold text-[#00df9a] mt-3"> Buy EveryThing Here </h1>
        <p className="mt-3 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          perferendis dolore repellendus veniam consequuntur natus odio cum,
          modi quis ut at fugiat iusto minima temporibus atque mollitia
          praesentium sapiente harum facere doloremque, quod animi explicabo.
          Minus nulla perspiciatis excepturi suscipit voluptate dignissimos
          fugiat accusantium voluptatem beatae! Lorem ipsum dolor
        </p>
        <button className="w-[30%] inline align-center bg-black text-white p-3 mt-3 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Features;
