import React from "react";

const Header = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] border flex items-center justify-between border-black mx-auto">
        <div className="text-3x1 font-bold">Own</div>
        <ul className="flex text-white gap-10">
          <li>Home </li>
          <li>Tools</li>
          <li>Food</li>
          <li>Travel</li>
          <li>Grocery</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
