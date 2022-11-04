import React from "react";
import { RiMenuLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <nav className="fixed left-0 top-0 min-h-screen bg-slate-50 dark:bg-slate-900 p-4 min-w-[75%] sm:min-w-[250px] rounded-br-xl">
        Sidebar
      </nav>
      <div className="fixed z-50 left-[75%] sm:left-[250px] right-0 top-0 h-16 bg-slate-50 dark:bg-slate-900 rounded-br-xl">
        <div className="flex justify-between items-center min-h-full px-4">
          <button className="p-3.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <RiMenuLine />
          </button>
          <button className="p-3.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <RiMenuLine />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
