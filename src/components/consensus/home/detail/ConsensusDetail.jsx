import { useNavigate, useParams } from "react-router-dom";
import { URI_PATH } from "~/routers/main-router";

export default function ConsensusDetail() {
  const params = useParams();
  return <div>상세 기업 {params.id}번</div>;
}
