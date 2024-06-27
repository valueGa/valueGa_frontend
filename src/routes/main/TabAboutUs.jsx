export default function AboutAs() {
  return (
    <div className="bg-gradient-to-b from-[#262626] to-[#454545] min-h-screen py-20">
      <div>
        <div className="flex items-center justify-center">
          <p className="text-heading1 text-tuatara-50 font-abril mt-12">
            About Us
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <p className="font-apple text-[30px] pr-1 text-tuatara-50 font-bold">
            Value Ga
          </p>
          <p className="text-subheading text-tuatara-50">
            는 애널리스트를 위해 쉬운 밸류에이션 툴을 제공합니다
          </p>
        </div>

        <div className="flex items-center justify-center h-screen">
          <div className="flex w-4/5 h-4/5 gap-4">
            <div className="w-1/2 h-full justify-center">
              <p className="text-body1 text-tuatara-50 font-apple">
                기업의 가치는 그 기업의 현재와 미래의 성공 가능성을
                <br /> 평가하는 중요한 지표입니다. 하지만 많은 사람들이
                <br /> 템플릿 작성과 재무 데이터를 가져오는 과정에 불편함을
                <br />
                느낍니다.
                <br />
                <br />
                ValueGa는 자동화된 템플릿과 재무 데이터로 이러한
                <br /> 과정을 단축시켜 사용자가 로직에만 집중할 수 있도록
                <br />
                지원합니다.
              </p>
              <img src="/assets/images/img_chart.svg" alt="" />
            </div>

            <div className="w-1/2 h-full flex items-center justify-center">

              <img
                src="/assets/gif/gif_valuega_demo.gif"
                alt=""
                className="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
