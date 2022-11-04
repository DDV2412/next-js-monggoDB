import Link from "next/link";
import React from "react";
import {
  RiMenuLine,
  RiDashboard3Line,
  RiInputMethodLine,
  RiProjectorLine,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <nav className="fixed left-0 top-0 h-screen bg-slate-50 dark:bg-slate-900 p-4 min-w-[75%] sm:min-w-[250px] rounded-br-xl">
        <div className="flex flex-col justify-start items-start min-h-full">
          <div className="font-bold text-xl">UK Project</div>
          <ul className="mt-8 flex flex-col gap-y-2 items-start min-w-full">
            <Link
              href="/dashboard"
              className="text-slate-500 dark:text-slate-400 flex justify-start items-center gap-x-6 font-medium hover:bg-slate-300/30 dark:hover:bg-slate-600/30 py-1.5 px-3 min-w-full rounded-lg"
            >
              <RiDashboard3Line />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/post"
              className="text-slate-500 dark:text-slate-400 flex justify-start items-center gap-x-6 font-medium hover:bg-slate-300/30 dark:hover:bg-slate-600/30 py-1.5 px-3 min-w-full rounded-lg"
            >
              <RiInputMethodLine />
              <span>Blog Post</span>
            </Link>
            <Link
              href="/dashboard/project"
              className="text-slate-500 dark:text-slate-400 flex justify-start items-center gap-x-6 font-medium hover:bg-slate-300/30 dark:hover:bg-slate-600/30 py-1.5 px-3 min-w-full rounded-lg"
            >
              <RiProjectorLine />
              <span>Project</span>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="fixed z-50 left-[75%] sm:left-[250px] right-0 top-0 h-16 bg-slate-50 dark:bg-slate-900 rounded-br-xl">
        <div className="flex justify-between items-center min-h-full px-4">
          <div className="flex justify-start items-center gap-x-4">
            <button className="p-3.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <RiMenuLine />
            </button>
            <div>
              <input
                type="search"
                className="px-4 min-w-full py-3 focus:ring-2 rounded-xl outline-none bg-slate-100 dark:bg-slate-800"
                placeholder="Search blog title"
              />
            </div>
          </div>
          <div>Dian Dwi Vaputra</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
