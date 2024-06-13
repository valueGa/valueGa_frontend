import { Outlet } from "react-router-dom";

export default function ConsensusPage() {
  return (
    <div>
      <div className="flex gap-2">
        <button>Home</button>
        <button>Valuation</button>
        <button>My Page</button>
      </div>
      <Outlet />
    </div>
  );
}
