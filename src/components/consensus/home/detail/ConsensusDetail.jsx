import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ChartRatio from "./ChartConsensus";
import ChartStock from "./ChartStock";
import StockPredictionList from "./StockPredictionList";
import { getConsensusDetail } from "/src/apis/consensus";

export default function ConsensusDetail() {
  const [financialInfo, setFinancialInfo] = useState([
    {
      매출액: "N/A",
      영업이익: "N/A",
      총유통주식: "N/A",
      유보비율: "N/A",
    },
    {
      부채비율: "N/A",
      ebitda: "N/A",
      자기자본이익률: "N/A",
      주당순이익: "N/A",
    },
    {
      년도: "",
    },
  ]);

  // 매출액 변경
  const updateSr = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[0] = { ...updatedInfo[0], 매출액: value };
      return updatedInfo;
    });
  };

  // 영업이익 변경
  const updateOi = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[0] = { ...updatedInfo[0], 영업이익: value };
      return updatedInfo;
    });
  };

  // 년도 변경
  const updateYear = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[2] = { ...updatedInfo[2], 년도: value };
      return updatedInfo;
    });
  };

  // 유보비율 변경
  const updateRr = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[0] = { ...updatedInfo[0], 유보비율: value };
      return updatedInfo;
    });
  };

  // 부채비율 변경
  const updateDr = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[1] = { ...updatedInfo[1], 부채비율: value };
      return updatedInfo;
    });
  };

  //evebitda 변경
  const updateEvebitda = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[1] = { ...updatedInfo[1], ebitda: value };
      return updatedInfo;
    });
  };

  // 자기자본이익률 변경
  const updateRoe = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[1] = { ...updatedInfo[1], 자기자본이익률: value };
      return updatedInfo;
    });
  };

  // 주당순이익 변경
  const updateBps = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[1] = { ...updatedInfo[1], 주당순이익: value };
      return updatedInfo;
    });
  };

  // 총유통주식
  const updateTs = (value) => {
    setFinancialInfo((prevInfo) => {
      // 첫 번째 객체의 매출액 값을 변경
      const updatedInfo = [...prevInfo];
      updatedInfo[0] = { ...updatedInfo[0], 총유통주식: value };
      return updatedInfo;
    });
  };

  const params = useParams();
  const location = useLocation();
  const [valuationList, setValuationList] = useState([]);
  const [currentPrice, setCurrentPrice] = useState("");
  const [targetPrice, setTargetPrice] = useState("");

  const [closePriceList, setClosePriceList] = useState([]);
  const [ratioList, setRatioList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getConsensusDetail(`${params.id}`);

      setTargetPrice(result.data.consensusInfo.target_price);
      setClosePriceList(
        result.data.chartInfo.map((element, index) =>
          parseInt(element.closePrice, 10)
        )
      );
      setRatioList(result.data.ratio);
      setValuationList(result.data.valuationList);
      // 매출액을 업데이트하는 함수
      updateSr(result.data.financeInfos.sr);
      updateOi(result.data.financeInfos.oi);
      updateYear(
        result.data.financeInfos.year.toString().slice(0, 4) +
          "-" +
          result.data.financeInfos.year.toString().slice(4, 6)
      );
      updateRr(result.data.financeInfos.rr);
      updateDr(result.data.financeInfos.dr);
      updateEvebitda(result.data.financeInfos.evebitda);
      updateRoe(result.data.financeInfos.roe);
      updateBps(result.data.financeInfos.bps);
      updateTs(result.data.financeInfos.ts);
      setCurrentPrice(result.data.currentPrice);
    };

    fetchData();
  }, []);

  const dumys = [
    {
      stockName: "LG전자",
      pastValuePotential: 0.5,
      currentValuePotential: 0.4,
      writeDate: "2024-05-24",
      targetPrice: 120000,
    },
    {
      stockName: "삼성전자",
      pastValuePotential: 0.4,
      currentValuePotential: 0.35,
      writeDate: "2024-05-21",
      targetPrice: 85000,
    },
    {
      stockName: "알테오젠",
      pastValuePotential: 0.3,
      currentValuePotential: 0.22,
      writeDate: "2024-05-03",
      targetPrice: 278500,
    },
    {
      stockName: "다우존스",
      pastValuePotential: 0.2,
      currentValuePotential: 0.21,
      writeDate: "2024-03-24",
      targetPrice: 11000,
    },
    {
      stockName: "HLB",
      pastValuePotential: 0.1,
      currentValuePotential: 0.2,
      writeDate: "2024-04-20",
      targetPrice: 65000,
    },
  ];

  return (
    <div className="px-[180px] mb-20">
      <div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-subheading text-body1">
            {location.state.companyName.split(" ")[0]}
          </p>

          <button
            className={`px-3 rounded-md ${
              location.state.type === "buy"
                ? "bg-pink-100 px-3 rounded-md"
                : location.state.type === "sell"
                ? "bg-spray-350"
                : "bg-pink-100"
            }`}
          >
            {location.state.type === "buy"
              ? "Buy"
              : location.state.type === "sell"
              ? "Sell"
              : "기본"}
          </button>
        </div>
        <p className="text-center text-tuatara-200">{params.id}</p>
      </div>

      <div className="flex justity-center items-center mt-[50px] gap-[50px]">
        <div className="w-full flex-col">
          <div className="flex justify-between items-end">
            <p className="text-tuatara-200 text-body2">현재 주가</p>
            <div>
              <div className="flex justify-end items-center gap-1">
                {/* <img
                  className="w-3 h-3"
                  src="/assets/images/ic_down.svg"
                  alt=""
                />
                <p className="text-spray-300 text-body2 text-right">N/A</p> */}
              </div>

              <p className="text-spray-350 text-heading3 font-bold">
                {currentPrice}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-end mt-4">
            <p className="text-tuatara-200 text-body2">목표 주가</p>
            <div>
              <div className="flex justify-end items-center gap-1">
                {/* <img
                  className="w-3 h-3"
                  src="/assets/images/ic_up.svg"
                  alt=""
                />
                <p className="text-pink-50 text-body2 text-right">N/A</p> */}
              </div>

              <p className="text-pink-100 text-heading3 font-bold">
                {targetPrice}
              </p>
            </div>
          </div>
          <ChartRatio data={ratioList} />
        </div>

        <div className="w-full bg-black-50 rounded-xl p-4">
          <div className="h-full w-full flex justify-between items-center">
            <div className="w-full">
              {financialInfo[0] &&
                Object.keys(financialInfo[0]).map((key) => (
                  <div key={key} className="flex justify-between mb-2">
                    <p className="text-tuatara-300 font-bold">{key}</p>
                    <p className="text-tuatara-300 font-regular">
                      {financialInfo[0][key]}
                    </p>
                  </div>
                ))}
            </div>

            <div className="h-full w-[2px] bg-black mx-4"></div>
            <div className="w-full">
              {financialInfo[1] &&
                Object.keys(financialInfo[1]).map((key) => (
                  <div key={key} className="flex justify-between mb-2">
                    <p className="text-tuatara-300 font-bold">{key}</p>
                    <p className="text-tuatara-300 font-regular">
                      {financialInfo[1][key]}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <p className="mt-4 text-mini text-center">
            [{financialInfo[2].년도} 기준]
          </p>
        </div>
      </div>
      <ChartStock data={closePriceList} />
      <StockPredictionList data={valuationList} currentPrice={currentPrice} />
    </div>
  );
}
