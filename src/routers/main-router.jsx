import { createBrowserRouter } from "react-router-dom";

import MainPage from "../routes/main/page";
import ConsensusPage from "../routes/consensus/page";

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
  },
];
const router = createBrowserRouter(routerObj);
export default router;
