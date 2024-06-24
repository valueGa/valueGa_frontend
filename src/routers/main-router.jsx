import { createBrowserRouter } from 'react-router-dom';
import MainPage from '~/routes/main/page';
import ConsensusPage from '~/routes/consensus/page';
import ConsensusHome from '~/components/consensus/home/ConsensusHome';
import ValuationCreate from '~/components/consensus/valuation/ValuationCreate';
import ConsensusDetail from '~/components/consensus/home/detail/ConsensusDetail';
import MyPage from '~/components/consensus/myPage/MyPage';
import ValuationCreateExcel from '~/routes/valuationCreateExcel/page';
<<<<<<< feature/42
import ValuationEditExcel from '~/routes/valuationEditExcel/page';
=======
import TemplateEditExcel from '~/routes/templateEditExcel/page';
>>>>>>> develop

export const URI_PATH = {
  mainPage: '/',
  consensusPage: '/consensus',
  valuationPage: '/consensus/valuation',
  valuationCreatePage: '/consensus/valuation/create',
<<<<<<< feature/42
  valuationEditPage: '/consensus/valuation/edit',
  myPage: '/consensus/my',
=======
  myPage: '/consensus/my',
  templateEditPage: '/consensus/template/edit',
>>>>>>> develop
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
<<<<<<< feature/42
        path: 'valuation/edit',
        element: <ValuationEditExcel />,
      },
      {
=======
>>>>>>> develop
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
