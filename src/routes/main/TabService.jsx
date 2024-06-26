export default function Service() {
  return (
    <div className="bg-tuatara-900 h-[600px]">
      <div className="flex items-center justify-center pt-10">
        <p className="mt-10 text-heading1 text-tuatara-50 font-abril">
          Service
        </p>
      </div>

      <div className="flex items-center justify-center pt-20 gap-5">
        <div className="pl-7 pr-7">
          <div className="flex items-center justify-center gap-4 mb-3">
            <img
              className="w-8 h-8"
              src="/assets/images/ic_expression.svg"
              alt=""
            />
            <p className="text-heading3 text-tuatara-50 font-serif">
              Valuation
            </p>
          </div>
          <div className=" box-border h-[180px] min-w-100 pl-20 pr-20 pt-10 pb-10 bg-gradient-to-b from-[#2D2D2D] to-tuatara-900">
            <p className="text-body2 text-tuatara-50">
              나만의 밸류에이션 템플릿 생성 및 관리
              <br /> 자동으로 필요한 재무 데이터 불러오기
            </p>
          </div>
        </div>

        <div className="pl-7 pr-7">
          <div className="flex items-center justify-center gap-4 mb-3">
            <img className="w-8 h-8" src="/assets/images/ic_chart.svg" alt="" />
            <p className="text-heading3 text-tuatara-50 font-serif">
              Consensus
            </p>
          </div>
          <div className="box-border h-[180px] min-w-100 pl-20 pr-20 pt-10 pb-10 bg-gradient-to-b from-[#2D2D2D] to-tuatara-900">
            <p className="text-body2 text-tuatara-50">
              다른 애널리스트들의 컨센서스 확인
              <br /> 목표 주가 및 상승 여력 보기
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
