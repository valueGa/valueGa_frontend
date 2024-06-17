import React from "react";
import searchIcon from "~/assets/icons/search.svg";

export default function Search() {
  return (
    <div className="flex max-w-2xl mx-auto mt-6">
      <div className="flex flex-row w-4/5 p-2 mx-auto justify-between font-apple text-caption bg-tuatara-900 text-tuatara-200 rounded-lg">
        <input
          type="text"
          className="px-4 py-2 w-full bg-transparent focus:outline-none text-center"
          placeholder="찾으시는 기업이 있으신가요?"
        />
        <img
          src={searchIcon}
          className="items-center cursor-pointer"
          alt="Search"
        />
      </div>
    </div>
  );
}
