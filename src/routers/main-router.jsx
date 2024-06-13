import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/main/page";
import ConsensusPage from "~/routes/consensus/page";
import ConsensusHome from "~/components/consensus/home/ConsensusHome";
import ConsensusDetail from "~/components/consensus/detail/ConsensusDetail";

export const URI_PATH = {
  mainPage: "/",
  consensusPage: "/consensus",
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
    ],
  },
];
const router = createBrowserRouter(routerObj);
export default router;
