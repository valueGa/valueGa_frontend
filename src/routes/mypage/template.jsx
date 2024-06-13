import React, { useEffect } from "react";
import { useState } from "react";
import moreIcon from "~/assets/icons/more.svg";

export default function Template() {
  const [tempList, setTempList] = useState(null);
  /* axios 이전, css를 위한 dump data */
  const tmpTempList = [
    {
      tempName: "DCF 밸류에이션",
      date: "2024.06.10",
    },
    {
      tempName: "PER 밸류에이션",
      date: "2024.06.10",
    },
    {
      tempName: "EV/EBITDA 밸류에이션",
      date: "2024.06.10",
    },
  ];
  useEffect(() => {
    setTempList(tmpTempList);
  }, []);

  return (
    <div>
      <div className="mt-8">
        {tempList?.map((element, index) => {
          return (
            <div className="flex justify-between flex-row text-center items-center rounded-lg h-20 m-5 bg-tuatara-900">
              <div className="flex flex-row basis-3/5">
                <div className="basis-1/3">{element.tempName}</div>
              </div>
              <div className="flex justify-end flex-row basis-2/5 mr-8">
                <div className="basis-1/5 mr-2">{element.date}</div>
                <div className="basis-1/7 mr-2">
                  <img src={moreIcon} alt="moreIcon" className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
