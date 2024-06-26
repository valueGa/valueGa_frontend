import React, { useEffect, useState } from 'react';
import { getSearchResult } from '../../../apis/search';

export default function InputStock({ value, setValue }) {
  const [searchWord, setSearchWord] = useState('');
  const [stockId, setStockId] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  let timer = null; // search debounce를 위한 타이머

  const handleSearch = async () => {
    try {
      const res = await getSearchResult(searchWord);

      if (res.status === 200) {
        setSearchResults(res.data.searchList);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const debouncedSearch = (word) => {
    clearTimeout(timer);
    timer = setTimeout(() => handleSearch(word), 130);
  };

  useEffect(() => {
    if (searchWord.length === 0) {
      setSearchResults([]);
      return;
    }
    debouncedSearch(searchWord);

    return () => {
      clearTimeout(timer);
    };
  }, [searchWord]);

  useEffect(() => {
    if (searchResults.length > 0) setShowResults(true);
    else setShowResults(false);
  }, [searchResults]);

  // const handleSelect = (e) => {
  //   const selectedStock = stockList.find(
  //     (stock) => stock.name === e.target.value
  //   );
  //   if (selectedStock) {
  //     setValue(selectedStock);
  //   }
  // };

  return (
    <div className="relative w-full flex flex-col items-start gap-1">
      <input
        type="text"
        placeholder="종목명을 입력하세요"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        className="w-72 p-2 px-3 text-tuatara-100 bg-tuatara-900 rounded-md focus:outline-none focus:outline-1 focus:outline-tuatara-500"
      />
      {showResults && (
        <ul
          className={`absolute z-10 w-full h-42 overflow-y-auto top-full left-0 border-t border-t-tuatara-500`}
        >
          {searchResults.map((stock) => {
            return (
              <li
                key={stock[1]}
                className="flex gap-2 items-center p-2 px-3 text-tuatara-100 bg-tuatara-900 hover:bg-tuatara-950"
              >
                <p> {stock[0]}</p>
                <p className="text-tuatara-300"> {stock[1]}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
