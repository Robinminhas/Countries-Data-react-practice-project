import React from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

function Header() {
  return (
    <header className="w-full h-20 bg-slate-700 shadow-2xl">

      <nav className="w-full h-[100%] font-sans font-bold md:text-[27px] text-sm flex items-center justify-between">
        <h1 className="md:ml-9">Where In The World?</h1>

        <section
          id="Mode"
          className="flex items-center gap-2 md:text-[15px] text-[10px] font-normal border-solid border-[5px] rounded-2xl border-slate-600 md:mr-8 hover:border-slate-500 transition-shadow cursor-pointer"
        >
          <MdOutlineLightMode />
          <p className="p-1">Light Mode</p>
        </section>

      </nav>
    </header>
  )
}

export default Header;
