import { useParams } from "react-router-dom";
import ChartRatio from "./ChartConsensus";
import ChartStock from "./ChartStock";
import StockPredictionList from "./StockPredictionList";

export default function ConsensusDetail() {
  const params = useParams();
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
  const financialInfo = [
    {
      sales: "77,400",
      currentIncome: "77,400",
      EPS: "77,400",
      PER: "77,400",
      debtRatio: "77,400",
    },
    {
      ROE: "77,400",
      BPS: "77,400",
      PER: "77,400",
      EV_EBITDA: "77,400",
      retentionRatio: "77,400",
    },
  ];

  return (
    <div className="px-[180px] mb-20">
      <div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-subheading text-body1">삼성전자</p>

          <button className="bg-pink-100 px-3 rounded-md">Buy</button>
        </div>
        <p className="text-center text-tuatara-200">005930</p>
      </div>

      <div className="flex justity-center items-center mt-[50px] gap-[50px]">
        <div className="w-full flex-col">
          <div className="flex justify-between items-end">
            <p className="text-tuatara-200 text-body2">현재 주가</p>
            <div>
              <div className="flex justify-end items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="/assets/images/ic_down.svg"
                  alt=""
                />
                <p className="text-spray-300 text-body2 text-right">200</p>
              </div>

              <p className="text-spray-350 text-heading3 font-bold">82,300</p>
            </div>
          </div>
          <div className="flex justify-between items-end mt-4">
            <p className="text-tuatara-200 text-body2">목표 주가</p>
            <div>
              <div className="flex justify-end items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="/assets/images/ic_up.svg"
                  alt=""
                />
                <p className="text-pink-50 text-body2 text-right">200</p>
              </div>

              <p className="text-pink-100 text-heading3 font-bold">
                761,300,000
              </p>
            </div>
          </div>
          <ChartRatio />
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
        </div>
      </div>
      <ChartStock />
      <StockPredictionList data={dumys} />
    </div>
  );
}
