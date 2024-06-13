import React from "react";
import { useState } from "react";
import Template from "./template";
import Valuation from "./valuation";
import NavBar from "~/components/NavBar";

export default function MyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabContArr = [
    {
      tabTitle: (
        <li
          className={`py-3 basis-1/2 cursor-pointer ${
            activeIndex === 0
              ? "border-b-2 border-yellow text-yellow"
              : "border-b-2 border-tuatara-50"
          }`}
          onClick={() => tabClickHandler(0)}
        >
          Templates
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={`py-3 basis-1/2 cursor-pointer ${
            activeIndex === 1
              ? "border-b-2 border-yellow text-yellow"
              : "border-b-2 border-gray-300 border-tuatara-50"
          }`}
          onClick={() => tabClickHandler(1)}
        >
          Valuations
        </li>
      ),
    },
  ];
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-tuatara-800 text-tuatara-50 h-screen">
      <NavBar />
      <div className="font-apple mx-16">
        <ul className="text-caption columns-2 text-center flex flex-row">
          {tabContArr.map((element, index) => {
            return element.tabTitle;
          })}
        </ul>
        <div>{activeIndex == 0 ? <Template /> : <Valuation />}</div>
      </div>
    </div>
  );
}
