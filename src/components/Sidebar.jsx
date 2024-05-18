
import React from "react";

import CheckboxGroup from "./CheckBoxGroup";

const Sidebar = () => {
  const groups = [
    {
      title: "IDEAL FOR",
      options: [
        { label: "Men", value: "men" },
        { label: "Women", value: "women" },
        { label: "Kids", value: "kids" },
      ],
    },
    {
      title: "OCCASION",
      options: [
        { label: "Casual", value: "casual" },
        { label: "Formal", value: "formal" },
        { label: "Sport", value: "sport" },
      ],
    },
    {
      title: "WORK",
      options: [
        { label: "Office", value: "office" },
        { label: "Remote", value: "remote" },
        { label: "Field", value: "field" },
      ],
    },
    {
      title: "FABRIC",
      options: [
        { label: "Cotton", value: "cotton" },
        { label: "Wool", value: "wool" },
        { label: "Synthetic", value: "synthetic" },
      ],
    },
    {
      title: "SEGMENT",
      options: [
        { label: "Cotton", value: "cotton" },
        { label: "Wool", value: "wool" },
        { label: "Synthetic", value: "synthetic" },
      ],
    }, {
      title: "RAW MATERIAL",
      options: [
        { label: "Cotton", value: "cotton" },
        { label: "Wool", value: "wool" },
        { label: "Synthetic", value: "synthetic" },
      ],
    }, {
      title: "PATTERN",
      options: [
        { label: "Cotton", value: "cotton" },
        { label: "Wool", value: "wool" },
        { label: "Synthetic", value: "synthetic" },
      ],
    },
  ];

  return (
    <div className="p-5 bg-white  shadow-none font-thin divide-y  ">

      {groups.map((group) => (
        <CheckboxGroup key={group.title} title={group.title} options={group.options} />
      ))}
    </div>
  );
};

export default Sidebar;
