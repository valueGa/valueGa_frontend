import { useNavigate } from "react-router-dom";
import { URI_PATH } from "~/routers/main-router";

export default function ConsensusHome() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          className="text-body2 bg-tuatara-200 p-1 px-4 rounded-lg"
          onClick={() => navigate(`${URI_PATH.consensusPage}/${2}`)}
        >
          찾으시는 기업이 있으신가요?
        </button>
      </div>
      <div>
        <button
          className="text-body2 bg-tuatara-200 p-1 px-4 rounded-lg"
          onClick={() => navigate(`${URI_PATH.consensusPage}/${1}`)}
        >
          1번 기업 클릭
        </button>
      </div>
    </div>
  );
}
