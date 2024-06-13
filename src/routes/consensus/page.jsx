import { Outlet, useNavigate } from "react-router-dom";
import { URI_PATH } from "~/routers/main-router";

export default function ConsensusPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-tuatara-800 text-tuatara-50">
      <div className="flex gap-2">
        <button onClick={() => navigate(`${URI_PATH.consensusPage}`)}>
          Home
        </button>
        <button onClick={() => navigate(`${URI_PATH.valuationPage}`)}>
          Valuation
        </button>
        <button onClick={() => navigate(`${URI_PATH.myPage}`)}>My Page</button>
      </div>
      <Outlet />
    </div>
  );
}
