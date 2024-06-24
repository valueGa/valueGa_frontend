import { createBrowserRouter } from 'react-router-dom';
import MainPage from '~/routes/main/page';
import ConsensusPage from '~/routes/consensus/page';
import ConsensusHome from '~/components/consensus/home/ConsensusHome';
import ValuationCreate from '~/components/consensus/valuation/ValuationCreate';
import ConsensusDetail from '~/components/consensus/home/detail/ConsensusDetail';
import MyPage from '~/components/consensus/myPage/MyPage';
import ValuationCreateExcel from '~/routes/valuationCreateExcel/page';
import TemplateEditExcel from '~/routes/templateEditExcel/page';

export const URI_PATH = {
  mainPage: '/',
  consensusPage: '/consensus',
  valuationPage: '/consensus/valuation',
  valuationCreatePage: '/consensus/valuation/create',
  myPage: '/consensus/my',
  templateEditPage: '/consensus/template/edit',
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
        path: '',
        element: <ConsensusHome />,
      },
      {
        path: ':id',
        element: <ConsensusDetail />,
      },
      {
        path: 'valuation',
        element: <ValuationCreate />,
      },
      {
        path: 'valuation/create',
        element: <ValuationCreateExcel />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
      {
        path: 'template/edit',
        element: <TemplateEditExcel />,
      },
    ],
  },
];
const router = createBrowserRouter(routerObj);
export default router;
