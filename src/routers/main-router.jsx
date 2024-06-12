import { createBrowserRouter } from "react-router-dom";

import MainPage from "../routes/main/page";
import ConsensusPage from "../routes/consensus/page";

export const routerObj = [
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/consensus",
    element: <ConsensusPage/>,
  },
];
const router = createBrowserRouter(routerObj);
export default router;
