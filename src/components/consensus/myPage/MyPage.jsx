import React from "react";
import { useState } from "react";
import Template from "~/components/consensus/myPage/Template";
import Valuation from "~/components/consensus/myPage/Valuation";
import Profile from "~/components/consensus/myPage/Profile";

export default function MyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [user, setUser] = useState({
    name: "우채윤",
    email: "heeni1004@gmail.com",
  });
  const tabContArr = [
    {
      tabTitle: (
        <li
          className={`py-3 basis-1/2 cursor-pointer ${
            activeIndex === 0
              ? "border-b-2 border-yellow text-yellow"
              : "border-b-2 border-tuatara-300 text-tuatara-300"
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
              : "border-b-2 border-gray-300 border-tuatara-300 text-tuatara-300"
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
    <div className="text-tuatara-50">
      <Profile name={user.name} email={user.email} />
      <div className="font-apple mx-16">
        <ul className="text-body2 columns-2 text-center flex flex-row">
          {tabContArr.map((element, index) => {
            return element.tabTitle;
          })}
        </ul>
        <div>{activeIndex == 0 ? <Template /> : <Valuation />}</div>
      </div>
    </div>
  );
}
