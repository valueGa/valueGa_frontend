import React, { useEffect, useRef, useState } from 'react';
import moreIcon from '~/assets/icons/more.svg';
import Popup from '~/components/consensus/myPage/Popup';

export default function Template() {
  const [tempList, setTempList] = useState(null);
  const [showPopup, setShowPopup] = useState(null); // null로 초기화하여 팝업이 표시되지 않도록 설정
  const popupRef = useRef(null);

  // moreIcon을 누르면, Popup이 뜨도록
  // 만일  그 바깥 부분을 클릭하면, Popup이 닫히도록
  const togglePopup = (index) => {
    setShowPopup(showPopup === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(null);
    }
  };

  useEffect(() => {
    setTempList(tmpTempList);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  /* axios 이전, css를 위한 dump data */
  const tmpTempList = [
    {
      tempId: 1,
      tempName: 'DCF 밸류에이션',
      date: '2024.06.10',
    },
    {
      tempId: 2,
      tempName: 'PER 밸류에이션',
      date: '2024.06.10',
    },
    {
      tempId: 3,
      tempName: 'EV/EBITDA 밸류에이션',
      date: '2024.06.10',
    },
  ];

  return (
    <div>
      <div className="mt-8">
        {tempList?.map((element, index) => {
          return (
            <div
              key={element.tempId}
              className="flex justify-between text-body2 flex-row text-center items-center rounded-lg h-16 m-2 bg-tuatara-900"
            >
              <div className="flex flex-row basis-3/5">
                <div className="basis-1/3">{element.tempName}</div>
              </div>
              <div className="flex justify-end flex-row basis-2/5 mr-8">
                <div className="basis-1/5 mr-2">{element.date}</div>
                <div className="relative basis-1/7 mr-2 " ref={popupRef}>
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
