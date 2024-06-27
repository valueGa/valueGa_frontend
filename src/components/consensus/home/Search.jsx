import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getSearchResult } from "~/apis/search";
import { URI_PATH } from "~/routers/main-router";

export default function Search() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSelectedStock, setIsSelectedStock] = useState(false);
  const inputRef = useRef(null);
  const ignoreChange = useRef(false);
  let timer = null; // search debounce를 위한 타이머
  const navigate = useNavigate();

  useEffect(() => {
    if (ignoreChange.current) {
      ignoreChange.current = false;
      return;
    }

    setSelectedIndex(-1);
    setIsSelectedStock(false);
    if (searchWord.length === 0) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    debouncedSearch(searchWord);
    setShowResults(true);

    return () => {
      clearTimeout(timer);
    };
  }, [searchWord]);

  // 검색 API를 통해 검색 결과 불러오기
  const handleSearch = async () => {
    try {
      const res = await getSearchResult(searchWord);

      if (res.status === 200) {
        setSearchResults(res.data.searchList);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const debouncedSearch = (word) => {
    clearTimeout(timer);
    timer = setTimeout(() => handleSearch(word), 100);
  };

  // 검색 결과에서 종목 선택시 발생 이벤트
  const handleSelect = (stock) => {
    if (!stock) {
      if (searchResults.length === 1) {
        stock = searchResults[0];
      } else {
        alert("해당 기업을 찾을 수 없습니다");
        return;
      }
    }
    const name = stock[0];
    const id = stock[1];

    setSearchWord(name);

    setSearchResults([]);
    setShowResults(false);

    setIsSelectedStock(true);
    ignoreChange.current = true;

    navigate(`${URI_PATH.consensusPage}/${id}`, {
      state: {
        companyName: name,
        type: id,
      },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSelect(searchResults[selectedIndex]);
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    }
  };

  return (
    <div className="relative w-full flex max-w-2xl mx-auto my-6 mb-10">
      <div className="w-full items-center flex flex-row p-2 mx-auto justify-between font-apple text-caption bg-tuatara-900 text-tuatara-200 rounded-lg">
        <BiSearch size={22} className="absolute ml-2" />
        <input
          ref={inputRef}
          type="text"
          placeholder="찾으시는 기업이 있으신가요?"
          value={searchWord}
          onBlur={() => {
            setSearchResults([]);
            setShowResults(false);
          }}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            if (ignoreChange.current) {
              ignoreChange.current = false;
            } else {
              setSearchWord(e.target.value);
            }
          }}
          maxLength={30}
          className="w-full text-center mx-auto py-2 text-tuatara-100 bg-tuatara-900 rounded-md focus:outline-none "
        />

        {searchResults.length > 0 && showResults && (
          <div
            className={`absolute z-10 w-full h-42 overflow-y-auto top-full left-0 border-t border-t-tuatara-500`}
          >
            {searchResults.map((stock, index) => {
              return (
                <button
                  key={index}
                  onMouseDown={(e) => {
                    // blur이벤트 보다 먼저 실행하기 위해 onMouseDown 사용
                    e.preventDefault();
                    handleSelect(stock);
                  }}
                  className={` bg-opacity-90  w-full flex gap-2 items-center p-2 px-3 text-tuatara-100 bg-tuatara-900 hover:bg-tuatara-950 ${
                    selectedIndex === index ? "bg-tuatara-950" : ""
                  }`}
                >
                  <p> {stock[0]}</p>
                  <p className="text-tuatara-300"> {stock[1]}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
