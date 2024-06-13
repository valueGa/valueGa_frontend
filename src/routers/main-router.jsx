import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/main/page";
import ConsensusPage from "~/routes/consensus/page";
import ConsensusHome from "~/components/consensus/home/ConsensusHome";
import ValuationCreate from "~/components/consensus/valuation/ValuationCreate";
import ConsensusDetail from "~/components/consensus/home/detail/ConsensusDetail";
import MyPage from "~/components/consensus/myPage/MyPage";

export const URI_PATH = {
  mainPage: "/",
  consensusPage: "/consensus",
  valuationPage: "/consensus/valuation",
  myPage: "/consensus/my",
};

export const routerObj = [
  {
    path: URI_PATH.mainPage,
    element: <MainPage />,
  },
  {
    path: URI_PATH.consensusPage,
    element: <ConsensusPage />,
    children: [
      {
        path: "",
        element: <ConsensusHome />,
      },
      {
        path: ":id",
        element: <ConsensusDetail />,
      },
      {
        path: "valuation",
        element: <ValuationCreate />,
      },
      {
        path: "my",
        element: <MyPage />,
      },
    ],
  },
];
const router = createBrowserRouter(routerObj);
export default router;
