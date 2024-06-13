import { useParams } from "react-router-dom";

export default function ConsensusDetail() {
  const params = useParams();
  return <div>상세 기업 {params.id}번</div>;
}
