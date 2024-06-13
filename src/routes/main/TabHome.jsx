export default function Home() {
  return (
    <div>
      {/* <div className="w-full flex relative w-64 h-64">
        <img src="public/logo_text.svg" alt="" className="absolute inset-0" />
        <img src="public/bg_lines.svg" alt="" className="w-64 h-auto" />
      </div> */}
      <div className="relative w-full h-64 flex items-center justify-center">
        <div
          className="h-auto absolute"
          style={{ left: "40%", transform: "translateX(-50%)" }}
        >
          <img
            src="public/logo_text.svg"
            alt="로고 텍스트"
            style={{ width: "50%" }}
          />
          <p>We’re building future of research</p>
        </div>

        <img
          src="public/bg_lines.svg"
          alt="배경 라인"
          className="h-auto absolute"
          style={{
            right: "calc(0% + 128px)",
            transform: "translateX(-50%)",
            width: "50%",
            height: "50%",
          }}
        />
      </div>

      <div
        className="w-full flex items-center justify-center"
        style={{ gap: "288px" }}
      >
        <img
          src="public/img_3d.svg"
          alt="로고 텍스트"
          style={{ width: "316px", height: "316px" }}
        />

        <div>
          <p className="text-white">Future of Valuation</p>
          <p className="text-white">누구나 쉬운 기업가치 계산을 위해</p>
          <button className="text-white " style={{ marginTop: "42px" }}>
            Let's Start
          </button>
        </div>
      </div>

      {/* <div className="top-30">
        <img src="public/img_3d.svg" alt="" className="w-64 h-auto" />
      </div> */}
    </div>
  );
}
