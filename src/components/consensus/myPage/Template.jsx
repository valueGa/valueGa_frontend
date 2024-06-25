import React, { useEffect, useRef, useState } from 'react';
import moreIcon from '~/assets/icons/more.svg';
import Popup from '~/components/consensus/myPage/Popup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URI_PATH } from '../../../routers/main-router';

export default function Template() {
  const [tempList, setTempList] = useState(null);
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

  const handleDelete = async (template_id) => {
    try {
      const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE3MTg5MzI5OTAsImV4cCI6MTcxOTc5Njk5MH0.BAl-EkK7ExHe2GiDpWb1sYWqu4rM-OzBJLZt23xecFA';
      await axios.delete(`/api/template/${template_id}`, {
        headers: {
          auth: token,
        },
        data: { template_id },
      });

      setTempList(tempList.filter((item) => item.template_id !== template_id));
    } catch (error) {
      console.error('삭제 중 에러:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE3MTg5MzI5OTAsImV4cCI6MTcxOTc5Njk5MH0.BAl-EkK7ExHe2GiDpWb1sYWqu4rM-OzBJLZt23xecFA';
        const response = await axios.get('/api/template', {
          headers: {
            auth: token,
          },
        });

        const transformedData = response.data.map((item) => ({
          template_id: item.template_id,
          template_name: item.template_name,
          createdAt: new Date(item.createdAt).toLocaleDateString().slice(0, 11),
        }));

        setTempList(transformedData);
      } catch (error) {
        console.error('사용자의 템플릿을 가져오는데 실패하였습니다.', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                <div className="basis-1/3">{element.template_name}</div>
              </div>
              <div className="flex justify-end flex-row basis-2/5 mr-8">
                <div className="basis-1/5 mr-2">{element.createdAt}</div>
                <div className="relative basis-1/7 mr-2 ">
                  {showPopup === index && (
                    <div ref={popupRef}>
                      <Popup
                        onDelete={() => handleDelete(element.template_id)}
                        onEdit={() =>
                          navigate(
                            `${URI_PATH.templateEditPage}/?id=${element.template_id}`
                          )
                        }
                      />
                    </div>
                  )}
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
