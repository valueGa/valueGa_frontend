import React, { useEffect, useRef, useState } from 'react';
import moreIcon from '~/assets/icons/more.svg';
import Popup from '~/components/consensus/myPage/Popup';
import { useNavigate } from 'react-router-dom';
import { URI_PATH } from '../../../routers/main-router';
import { getValuations, deleteValuation } from '../../../apis/valuation'; // 새로운 API 서비스 임포트

export default function Valuation() {
  const [valList, setValList] = useState(null);
  const [showPopup, setShowPopup] = useState(null); // null로 초기화하여 팝업이 표시되지 않도록 설정
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const togglePopup = (index) => {
    setShowPopup(showPopup === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(null);
    }
  };

  const handleDelete = async (valuation_id) => {
    try {
      console.log('벨류에이션 아이디', valuation_id);
      await deleteValuation(valuation_id);
      setValList(valList.filter((item) => item.valuationId !== valuation_id));
    } catch (error) {
      console.error('삭제 중 에러:', error);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getValuations();

        const transformedData = data.data.data.map((item) => ({
          valuationId: item.valuation_id,
          stockName: item.stock_name,
          targetPrice: item.target_price,
          valuePotential: item.value_potential,
          isTemp: item.is_temporary,
          date: new Date(item.date).toLocaleDateString().slice(0, 11),
        }));
        setValList(transformedData);
      } catch (error) {
        console.error('데이터 가져오기 중 에러:', error);
      }
    };

    fetchData();
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
            <div
              key={index}
              className="text-tuatara-50 text-body2 flex justify-between flex-row text-center items-center rounded-lg h-16 m-2 bg-tuatara-900"
            >
              <div className="flex flex-row basis-3/5">
                <div className="basis-1/3">{element.stockName}</div>
                <div className="basis-1/3">{element.targetPrice}원</div>
                <div className="basis-1/3">{element.valuePotential}%</div>
              </div>
              <div className="flex justify-end flex-row basis-2/5 mr-8">
                {element.isTemp ? (
                  <div className="basis-1/5 mr-2 text-yellow">임시 저장</div>
                ) : (
                  <div className="basis-1/5 mr-2">저장 완료</div>
                )}
                <div className="basis-1/5 mr-2">{element.date}</div>

                <div className=" relative basis-1/7 mr-2">
                  {showPopup === index && (
                    <div ref={popupRef}>
                      <Popup
                        onDelete={() => handleDelete(element.valuationId)}
                        onEdit={() =>
                          navigate(
                            `${URI_PATH.valuationEditPage}/?id=${element.valuationId}`
                          )
                        }
                      />
                    </div>
                  )}
                  <img
                    src={moreIcon}
                    alt="moreIcon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => {
                      togglePopup(index);
                    }}
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
