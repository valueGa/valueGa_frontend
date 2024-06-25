import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { URI_PATH } from "~/routers/main-router";
import Graph from "./Graph";
import Search from "./Search";
import GraphDemo from "./GraphDemo";
import ConsensusList from "./ConsensusList";
import { getConsensus } from "/src/apis/consensus";

export default function ConsensusHome() {
  const navigate = useNavigate();
  const [top5List, setTop5List] = useState([]);
  const [down5List, setDown5List] = useState([]);
  const [allTopList, setAllTopList] = useState([]);
  const [allDownList, setAllDownList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getConsensus();
        const initialTop5List = [
          {
            company_name: result.data.overvaluedList.top1.company_name,
            stock_code: result.data.overvaluedList.top1.stock_code,
            value_potential: result.data.overvaluedList.top1.value_potential,
            target_price: result.data.overvaluedList.top1.target_price,
          },
          {
            company_name: result.data.overvaluedList.top2.company_name,
            stock_code: result.data.overvaluedList.top2.stock_code,
            value_potential: result.data.overvaluedList.top2.value_potential,
            target_price: result.data.overvaluedList.top2.target_price,
          },
          {
            company_name: result.data.overvaluedList.top3.company_name,
            stock_code: result.data.overvaluedList.top3.stock_code,
            value_potential: result.data.overvaluedList.top3.value_potential,
            target_price: result.data.overvaluedList.top3.target_price,
          },
          {
            company_name: result.data.overvaluedList.top4.company_name,
            stock_code: result.data.overvaluedList.top4.stock_code,
            value_potential: result.data.overvaluedList.top4.value_potential,
            target_price: result.data.overvaluedList.top4.target_price,
          },
          {
            company_name: result.data.overvaluedList.top5.company_name,
            stock_code: result.data.overvaluedList.top5.stock_code,
            value_potential: result.data.overvaluedList.top5.value_potential,
            target_price: result.data.overvaluedList.top5.target_price,
          },
        ];

        const initialDown5List = [
          {
            company_name: result.data.undervaluedList.top5.company_name,
            stock_code: result.data.undervaluedList.top5.stock_code,
            value_potential: result.data.undervaluedList.top5.value_potential,
            target_price: result.data.undervaluedList.top5.target_price,
          },
          {
            company_name: result.data.undervaluedList.top4.company_name,
            stock_code: result.data.undervaluedList.top4.stock_code,
            value_potential: result.data.undervaluedList.top4.value_potential,
            target_price: result.data.undervaluedList.top4.target_price,
          },
          {
            company_name: result.data.undervaluedList.top3.company_name,
            stock_code: result.data.undervaluedList.top3.stock_code,
            value_potential: result.data.undervaluedList.top3.value_potential,
            target_price: result.data.undervaluedList.top3.target_price,
          },
          {
            company_name: result.data.undervaluedList.top2.company_name,
            stock_code: result.data.undervaluedList.top2.stock_code,
            value_potential: result.data.undervaluedList.top2.value_potential,
            target_price: result.data.undervaluedList.top2.target_price,
          },
          {
            company_name: result.data.undervaluedList.top1.company_name,
            stock_code: result.data.undervaluedList.top1.stock_code,
            value_potential: result.data.undervaluedList.top1.value_potential,
            target_price: result.data.undervaluedList.top1.target_price,
          },
        ];
        setTop5List(initialTop5List);
        setDown5List(initialDown5List);

        setAllDownList((prevList) => [...prevList, ...initialDown5List]);
        allDownList.map((item, index) => {
          console.log(`${item.company_name}`);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  return (
    <div>
      {/* <Graph /> */}
      <GraphDemo top5List={top5List} down5List={down5List} />
      <Search />
      <ConsensusList />
    </div>
  );
}
