import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchandFilter({setQuery , Mode}) {
  return (
    <section className="flex items-center justify-between w-full h-20 mt-6">

      <div className="bg-slate-700 p-2 rounded-xl md:w-96 md:ml-9 flex items-center gap-2" style={Mode ? {} : {background:'white'}}>
        <IoSearch />
        <input
          type="search"
          name=""
          id=""
          placeholder="Search for a country..."
          className="bg-inherit md:w-[90%] md:p-2 rounded-xl shadow-2xl"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>

      <div className="md:mr-8 flex md:flex-row flex-col items-center md:gap-2 gap-0 shadow-2xl bg-slate-700 md:p-3" style={Mode ? {} : {background:'white'}}>

        <label htmlFor="byRegion" className="text-[10px] md:text-[15px]">
          Filter by Region :{" "}
        </label>

        <select
          name="byRegion"
          id=""
          className="bg-slate-700 border-none text-[10px] md:text-[15px]"
          style={Mode ? {} : {background:'white'}}
        >
          <option value="">All</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="antarctic">Antarctic</option>
        </select>

      </div>

    </section>
  );
}
