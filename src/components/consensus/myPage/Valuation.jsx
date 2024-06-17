import React, { useEffect, useRef, useState } from "react";
import moreIcon from "~/assets/icons/more.svg";
import Popup from "~/components/consensus/myPage/Popup";

export default function Valuation() {
  const [valList, setValList] = useState(null);
  const [showPopup, setShowPopup] = useState(null); // null로 초기화하여 팝업이 표시되지 않도록 설정
  const popupRef = useRef(null);

  const togglePopup = (index) => {
    setShowPopup(showPopup === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* axios 이전, css를 위한 dump data */
  const tmpValList = [
    {
      stockName: "삼성전자",
      targetPrice: 90000,
      valuePotential: 0.1,
      isTemp: false,
      date: "2024.06.10",
    },
    {
      stockName: "SK하이닉스",
      targetPrice: 220000,
      valuePotential: 0.2,
      isTemp: false,
      date: "2024.06.12",
    },
    {
      stockName: "신한지주",
      targetPrice: null,
      valuePotential: null,
      isTemp: true,
      date: "2024.06.10",
    },
  ];
  useEffect(() => {
    setValList(tmpValList);
  }, []);
  return (
    <div>
      <div className="flex flex-row text-body1 text-center items-center w-3/5 h-7 mt-6">
        <div className="basis-1/3 text-tuatara-300">종목</div>
        <div className="basis-1/3 text-tuatara-300">목표 주가</div>
        <div className="basis-1/3 text-tuatara-300">상승 여력</div>
      </div>
      <div>
        {valList?.map((element, index) => {
          return (
            <div className="text-tuatara-50 text-body2 flex justify-between flex-row text-center items-center rounded-lg h-16 m-2 bg-tuatara-900">
              <div className="flex flex-row basis-3/5">
                <div className="basis-1/3">{element.stockName}</div>
                <div className="basis-1/3">{element.targetPrice}원</div>
                <div className="basis-1/3">{element.valuePotential * 100}%</div>
              </div>
              <div className="flex justify-end flex-row basis-2/5 mr-8">
                {element.isTemp ? (
                  <div className="basis-1/5 mr-2 text-yellow">임시 저장</div>
                ) : (
                  <div className="basis-1/5 mr-2">저장 완료</div>
                )}
                <div className="basis-1/5 mr-2">{element.date}</div>
                <div className=" relative basis-1/7 mr-2" ref={popupRef}>
                  {showPopup === index && <Popup />}
                  <img
                    src={moreIcon}
                    alt="moreIcon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => togglePopup(index)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
