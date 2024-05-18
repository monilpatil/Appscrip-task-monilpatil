import React, { useState } from "react";
import Sidebar from "./Sidebar";


const Filter = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
  
      <div className=" ml-5 relative h-5 w-64 ">
        <div
          className=" flex items-center cursor-pointer p-5"
          onClick={toggleDropdown}
        >
          <label className="block text-gray-700 cursor-pointer w-20 ">
            <p
              className="mr-2"
            />
            {dropdownOpen ? "Hide Filter" : "Add Filter"}
          </label>
         
        </div>
        {dropdownOpen && (
          <ul className="dropdown-menu absolute left-0 mt-2 w-64 bg-white ">
            <Sidebar />
          </ul>
        )}
      </div>
    
  );
};

export default Filter;
