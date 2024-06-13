import { createBrowserRouter } from "react-router-dom";

import MainPage from "../routes/main/page";
import ConsensusPage from "../routes/consensus/page";
import MyPage from "../routes/mypage/page";

export const routerObj = [
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/consensus",
    element: <ConsensusPage/>,
  },
  {
    path: "/mypage",
    element: <MyPage/>
  }
];
const router = createBrowserRouter(routerObj);
export default router;
