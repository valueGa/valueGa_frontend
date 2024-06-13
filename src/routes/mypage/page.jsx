import React from "react";
import { useState } from "react";
import Template from "./template";
import Valuation from "./valuation";

export default function MyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabContArr = [
    {
      tabTitle: (
        <li
          className={`py-6 basis-1/2 cursor-pointer ${
            activeIndex === 0
              ? "border-b-2 border-blue-500"
              : "border-b-2 border-gray-300"
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
          className={`py-6 basis-1/2 cursor-pointer ${
            activeIndex === 1
              ? "border-b-2 border-blue-500"
              : "border-b-2 border-gray-300"
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
    <>
      <div>MyPage</div>
      <div>Profile</div>
      <div className="mx-16">
        <ul className="columns-2 text-center flex flex-row">
          {tabContArr.map((element, index) => {
            return element.tabTitle;
          })}
        </ul>
        <div>{activeIndex == 0 ? <Template /> : <Valuation />}</div>
      </div>
    </>
  );
}
