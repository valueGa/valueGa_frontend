import { Link, useNavigate } from "react-router-dom";
import { URI_PATH } from "../../routers/main-router";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="text-body2 bg-tuatara-200 p-1 px-4 rounded-lg"
        onClick={() => navigate(URI_PATH.consensusPage)}
      >
        Let's Start
      </button>
      <div className=" bg-tuatara-950">
        <div className="text-hero text-tuatara-50">Hero</div>
        <div className="text-heading1 text-tuatara-50">제목</div>
        <div className="text-heading2 text-tuatara-50">제목</div>
        <div className="text-heading3 text-tuatara-50">제목</div>
        <div className="text-subheading text-tuatara-50">부제목</div>
        <div className="text-body1 text-tuatara-50">내용</div>
        <div className="text-body2 text-tuatara-50">내용</div>
        <div className="text-caption text-tuatara-50">캡션</div>
        <div className="text-mini text-tuatara-50">미니</div>
      </div>
      <div className=" text-heading3 bg-blue-400 font-abril">Font</div>
      <div className=" text-body1 bg-blue-400 font-apple font-bold">폰트</div>
      <div className=" text-body1 bg-blue-400 font-apple">폰트</div>
    </div>
  );
}
