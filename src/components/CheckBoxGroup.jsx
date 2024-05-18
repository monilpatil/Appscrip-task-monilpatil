import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CheckBoxGroup = ({ title, options }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    options.reduce((acc, option) => {
      acc[option.value] = false;
      return acc;
    }, {})
  );

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const allSelected = Object.values(checkedItems).every(Boolean);

  const handleAllChange = () => {
    const newCheckedItems = Object.keys(checkedItems).reduce((items, item) => {
      items[item] = !allSelected;
      return items;
    }, {});
    setCheckedItems(newCheckedItems);
  };

  const handleItemChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <div className="relative mt-2  ">
      <div
        className="flex items-center justify-between cursor-pointer font-medium text-sm mt-1"
        onClick={toggleDropdown}
      >
        <span className="text-black text-lg">{title}</span>
        <span>
          {dropdownOpen ? (
            <FaChevronUp className="text-black " />
          ) : (
            <FaChevronDown className="text-black" />
          )}
        </span>
      </div>
      {dropdownOpen && (
        <div className="mt-2">
          <div>
            <label className="block text-gray-700">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleAllChange}
                className="mr-2"
              />
              {allSelected ? "Unselect All" : "All"}
            </label>
          </div>
          <div className="ml-4 mt-2">
            {options.map((option) => (
              <label key={option.value} className="block text-gray-700">
                <input
                  type="checkbox"
                  name={option.value}
                  checked={checkedItems[option.value]}
                  onChange={handleItemChange}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckBoxGroup;
