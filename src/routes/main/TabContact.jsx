export default function Contact() {
  return (
    <div className="flex items-center justify-center gap-x-10 mt-16 mb-16 mr-16 ml-16">
      <div className="h-full">
        <p className="text-subheading text-tuatara-50 font-abril">Contact</p>
        <div className="h-full relative">
          <input
            className="h-64 p-6 border border-gray-300 rounded-lg bg-tuatara-900" // 높이 조정
            type="text"
            placeholder="벨루가 팀에게 남기고 싶은 말을 작성해주세요"
            style={{ width: "400px" }}
          />
          <div className="absolute bottom-3 right-3">
            <img
              src="/assets/images/ic_send.png"
              alt="icon"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <img
          src="/assets/images/img_demo_2.svg"
          alt="로고 텍스트"
          className="w-3/5 h-1/5 mt-10"
        />
      </div>
    </div>
  );
}
