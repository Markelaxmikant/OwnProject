import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[10px] flex items-center justify-between  mx-auto">
        <div className="text-3x1 font-bold ">Own</div>
        {toggle ? (
          <IoClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-xl md:hidden block"
          />
        ) : (
          <IoMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-xl md:hidden block "
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Home </li>
          <li>Tools</li>
          <li>Food</li>
          <li>Travel</li>
          <li>Grocery</li>
        </ul>

        {/* {Responsive Menu} */}
        <ul
          className={`duration-300 md:hidden w-full text-white gap-10 fixed top-[76px]  bg-black
        ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className=" p-3">Home </li>
          <li className=" p-3">Tools</li>
          <li className=" p-3">Food</li>
          <li className=" p-3">Travel</li>
          <li className=" p-3">Grocery</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
