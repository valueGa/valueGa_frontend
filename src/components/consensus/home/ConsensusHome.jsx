import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { URI_PATH } from "~/routers/main-router";
import Graph from "./Graph";
import Search from "./Search";
import GraphDemo from "./GraphDemo";
import ConsensusList from "./ConsensusList";
import { getConsensus, getConsensusMore } from "/src/apis/consensus";

export default function ConsensusHome() {
  const navigate = useNavigate();
  const [top5List, setTop5List] = useState([]);
  const [down5List, setDown5List] = useState([]);
  const [allBuyList, setAllBuyList] = useState([]);
  const [allSellList, setAllSellList] = useState([]);

  const [allBuyCount, setAllBuyCount] = useState(0);
  const [allSellCount, setAllSellCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getConsensus();

        const initialBuy5List = [
          {
            company_name:
              result.data.undervaluedList.top1.company_name +
              ` ${(
                (result.data.undervaluedList.top1.target_price /
                  result.data.undervaluedList.top1.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.undervaluedList.top1.stock_code,
            value_potential: result.data.undervaluedList.top1.value_potential,
            target_price: result.data.undervaluedList.top1.target_price,
            currentPrice: result.data.undervaluedList.top1.currentPrice,
          },
          {
            company_name:
              result.data.undervaluedList.top2.company_name +
              ` ${(
                (result.data.undervaluedList.top2.target_price /
                  result.data.undervaluedList.top2.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.undervaluedList.top2.stock_code,
            value_potential: result.data.undervaluedList.top2.value_potential,
            target_price: result.data.undervaluedList.top2.target_price,
            currentPrice: result.data.undervaluedList.top2.currentPrice,
          },
          {
            company_name:
              result.data.undervaluedList.top3.company_name +
              ` ${(
                (result.data.undervaluedList.top3.target_price /
                  result.data.undervaluedList.top3.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.undervaluedList.top3.stock_code,
            value_potential: result.data.undervaluedList.top3.value_potential,
            target_price: result.data.undervaluedList.top3.target_price,
            currentPrice: result.data.undervaluedList.top3.currentPrice,
          },
          {
            company_name:
              result.data.undervaluedList.top4.company_name +
              ` ${(
                (result.data.undervaluedList.top4.target_price /
                  result.data.undervaluedList.top4.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.undervaluedList.top4.stock_code,
            value_potential: result.data.undervaluedList.top4.value_potential,
            target_price: result.data.undervaluedList.top4.target_price,
            currentPrice: result.data.undervaluedList.top4.currentPrice,
          },
          {
            company_name:
              result.data.undervaluedList.top5.company_name +
              ` ${(
                (result.data.undervaluedList.top5.target_price /
                  result.data.undervaluedList.top5.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.undervaluedList.top5.stock_code,
            value_potential: result.data.undervaluedList.top5.value_potential,
            target_price: result.data.undervaluedList.top5.target_price,
            currentPrice: result.data.undervaluedList.top5.currentPrice,
          },
        ];

        const initialSell5List = [
          {
            company_name:
              result.data.overvaluedList.top1.company_name +
              ` ${(
                (result.data.overvaluedList.top1.target_price /
                  result.data.overvaluedList.top1.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.overvaluedList.top1.stock_code,
            value_potential: result.data.overvaluedList.top1.value_potential,
            target_price: result.data.overvaluedList.top1.target_price,
            currentPrice: result.data.overvaluedList.top1.currentPrice,
          },
          {
            company_name:
              result.data.overvaluedList.top2.company_name +
              ` ${(
                (result.data.overvaluedList.top2.target_price /
                  result.data.overvaluedList.top2.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.overvaluedList.top2.stock_code,
            value_potential: result.data.overvaluedList.top2.value_potential,
            target_price: result.data.overvaluedList.top2.target_price,
            currentPrice: result.data.overvaluedList.top2.currentPrice,
          },
          {
            company_name:
              result.data.overvaluedList.top3.company_name +
              ` ${(
                (result.data.overvaluedList.top3.target_price /
                  result.data.overvaluedList.top3.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.overvaluedList.top3.stock_code,
            value_potential: result.data.overvaluedList.top3.value_potential,
            target_price: result.data.overvaluedList.top3.target_price,
            currentPrice: result.data.overvaluedList.top3.currentPrice,
          },
          {
            company_name:
              result.data.overvaluedList.top4.company_name +
              ` ${(
                (result.data.overvaluedList.top4.target_price /
                  result.data.overvaluedList.top4.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.overvaluedList.top4.stock_code,
            value_potential: result.data.overvaluedList.top4.value_potential,
            target_price: result.data.overvaluedList.top4.target_price,
            currentPrice: result.data.overvaluedList.top4.currentPrice,
          },
          {
            company_name:
              result.data.overvaluedList.top5.company_name +
              ` ${(
                (result.data.overvaluedList.top5.target_price /
                  result.data.overvaluedList.top5.currentPrice -
                  1) *
                100
              ).toFixed(2)}%`,
            stock_code: result.data.overvaluedList.top5.stock_code,
            value_potential: result.data.overvaluedList.top5.value_potential,
            target_price: result.data.overvaluedList.top5.target_price,
            currentPrice: result.data.overvaluedList.top5.currentPrice,
          },
        ];
        setTop5List(initialBuy5List);
        setDown5List(initialSell5List);

        setAllSellList(initialSell5List);
        setAllBuyList(initialBuy5List);
        setAllBuyCount(result.data.totalList.buyCount);
        setAllSellCount(result.data.totalList.sellCount);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    window.scrollTo({ top: 0 });
  }, []); // 빈 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
  const fetchMoreData = async (params) => {
    const { activeIndex, index } = params;

    const result = await getConsensusMore(index);

    if (activeIndex === 0) {
      if (index >= allBuyCount) {
      } else {
        const moreBuyList = [];
        if (result.data.undervaluedList.top1 != null) {
          moreBuyList.push({
            company_name: result.data.undervaluedList.top1.company_name,
            stock_code: result.data.undervaluedList.top1.stock_code,
            value_potential: result.data.undervaluedList.top1.value_potential,
            target_price: result.data.undervaluedList.top1.target_price,
            currentPrice: result.data.undervaluedList.top1.currentPrice,
          });
        }
        if (result.data.undervaluedList.top2 != null) {
          moreBuyList.push({
            company_name: result.data.undervaluedList.top2.company_name,
            stock_code: result.data.undervaluedList.top2.stock_code,
            value_potential: result.data.undervaluedList.top2.value_potential,
            target_price: result.data.undervaluedList.top2.target_price,
            currentPrice: result.data.undervaluedList.top2.currentPrice,
          });
        }
        if (result.data.undervaluedList.top3 != null) {
          moreBuyList.push({
            company_name: result.data.undervaluedList.top3.company_name,
            stock_code: result.data.undervaluedList.top3.stock_code,
            value_potential: result.data.undervaluedList.top3.value_potential,
            target_price: result.data.undervaluedList.top3.target_price,
            currentPrice: result.data.undervaluedList.top3.currentPrice,
          });
        }
        if (result.data.undervaluedList.top4 != null) {
          moreBuyList.push({
            company_name: result.data.undervaluedList.top4.company_name,
            stock_code: result.data.undervaluedList.top4.stock_code,
            value_potential: result.data.undervaluedList.top4.value_potential,
            target_price: result.data.undervaluedList.top4.target_price,
            currentPrice: result.data.undervaluedList.top4.currentPrice,
          });
        }
        if (result.data.undervaluedList.top5 != null) {
          moreBuyList.push({
            company_name: result.data.undervaluedList.top5.company_name,
            stock_code: result.data.undervaluedList.top5.stock_code,
            value_potential: result.data.undervaluedList.top5.value_potential,
            target_price: result.data.undervaluedList.top5.target_price,
            currentPrice: result.data.undervaluedList.top5.currentPrice,
          });
        }

        setAllBuyList((prevList) => [...prevList, ...moreBuyList]);
      }
    } else {
      if (index >= allSellCount) {
      } else {
        const moreSellList = [];
        if (result.data.overvaluedList.top1 != null) {
          moreSellList.push({
            company_name: result.data.overvaluedList.top1.company_name,
            stock_code: result.data.overvaluedList.top1.stock_code,
            value_potential: result.data.overvaluedList.top1.value_potential,
            target_price: result.data.overvaluedList.top1.target_price,
            currentPrice: result.data.overvaluedList.top1.currentPrice,
          });
        }
        if (result.data.overvaluedList.top2 != null) {
          moreSellList.push({
            company_name: result.data.overvaluedList.top2.company_name,
            stock_code: result.data.overvaluedList.top2.stock_code,
            value_potential: result.data.overvaluedList.top2.value_potential,
            target_price: result.data.overvaluedList.top2.target_price,
            currentPrice: result.data.overvaluedList.top2.currentPrice,
          });
        }
        if (result.data.overvaluedList.top3 != null) {
          moreSellList.push({
            company_name: result.data.overvaluedList.top3.company_name,
            stock_code: result.data.overvaluedList.top3.stock_code,
            value_potential: result.data.overvaluedList.top3.value_potential,
            target_price: result.data.overvaluedList.top3.target_price,
            currentPrice: result.data.overvaluedList.top3.currentPrice,
          });
        }
        if (result.data.overvaluedList.top4 != null) {
          moreSellList.push({
            company_name: result.data.overvaluedList.top4.company_name,
            stock_code: result.data.overvaluedList.top4.stock_code,
            value_potential: result.data.overvaluedList.top4.value_potential,
            target_price: result.data.overvaluedList.top4.target_price,
            currentPrice: result.data.overvaluedList.top4.currentPrice,
          });
        }
        if (result.data.overvaluedList.top5 != null) {
          moreSellList.push({
            company_name: result.data.overvaluedList.top5.company_name,
            stock_code: result.data.overvaluedList.top5.stock_code,
            value_potential: result.data.overvaluedList.top5.value_potential,
            target_price: result.data.overvaluedList.top5.target_price,
            currentPrice: result.data.overvaluedList.top5.currentPrice,
          });
        }

        setAllSellList((prevList) => [...prevList, ...moreSellList]);
      }
    }
  };

  return (
    <div>
      {/* <Graph /> */}
      <div className="text-center text-heading3 font-bold">
        상하향 목표 주가 컨센서스 TOP 5
      </div>
      <GraphDemo top5List={top5List} down5List={down5List} />
      <Search />
      <ConsensusList
        allBuyCount={allBuyCount}
        allSellCount={allSellCount}
        allTopList={allBuyList}
        allDownList={allSellList}
        setAllTopList={setAllBuyList}
        setAllDownList={setAllSellList}
        fetchMoreData={fetchMoreData}
      />
    </div>
  );
}
