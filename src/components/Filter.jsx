import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Filter = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="ml-5 relative hidden md:block mt-2 lg:w-44  md:w-32  ">
      <div className=" items-center cursor-pointer p-5 " onClick={toggleDropdown}>
        <label className="block text-gray-700 cursor-pointer">
          {dropdownOpen ? "Hide Filter" : "Add Filter"}
        </label>
      </div>
      {dropdownOpen && (
        <div className="absolute  mt-2 lg:w-44 bg-white md:w-32">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default Filter;
