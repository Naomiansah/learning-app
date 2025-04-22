import React from "react";
import K from "../constants";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 gap-y-6 bg-[#FFDF41] h-screen px-2 py-4 fixed left-0 top-0">
      <span className="font-bold text-2xl">SkillSprout</span>
      <div className="flex flex-col gap-y-6">
        {K.NAVLINKS.map((link) => (
          <NavLink
            key={link.name} //  unique key added
            to={link.path} // use lowercase 'path'
            className="text-black hover:bg-white hover:text-black px-3 py-2 w-full rounded-md flex gap-x-2"
          >
            <link.icon />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
      <button className="mt-auto">Logout</button>
    </div>
  );
};

export default Sidebar;
