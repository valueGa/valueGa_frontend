import { Link } from 'react-router-dom';
import { URI_PATH } from '~/routers/main-router';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#151515] to-[#2D2D2D]">
      {/* <div className="w-full flex relative w-64 h-64">
        <img src="public/logo_text.svg" alt="" className="absolute inset-0" />
        <img src="public/bg_lines.svg" alt="" className="w-64 h-auto" />
      </div> */}
      <div className="relative w-full h-64 flex items-center justify-center">
        <div
          className="h-auto absolute"
          style={{ left: '40%', transform: 'translateX(-50%)' }}
        >
          <img
            src="/assets/images/logo_text.svg"
            alt="로고 텍스트"
            style={{ width: '50%' }}
          />
          <p className="text-tuatara-50 font-apple">
            We’re building future of research
          </p>
        </div>

        <img
          src="/assets/images/bg_lines.svg"
          alt="배경 라인"
          className="h-auto absolute"
          style={{
            right: 'calc(0% + 128px)',
            transform: 'translateX(-50%)',
            width: '50%',
            height: '50%',
          }}
        />
      </div>

      <div
        className="w-full flex items-center justify-center"
        style={{ gap: '288px' }}
      >
        <img
          src="/assets/images/img_3d.svg"
          className="animate-bounce-slow w-24 h-auto"
          alt="로고 텍스트"
          style={{ width: '316px', height: '316px' }}
        />
        <Link to={`${URI_PATH.consensusPage}`}>
          <div>
            <p className="text-subheading text-tuatara-50">
              Future of Valuation
            </p>
            <p className="text-white">누구나 쉬운 기업가치 계산을 위해</p>

            <div
              className="flex items-center justify-center text-tuatara-50 bg-black pt-2 pb-2 gap-2 rounded-xl"
              style={{ marginTop: '42px' }}
            >
              <img
                src="/assets/images/img_arrow_right.svg"
                alt="로고 텍스트"
                style={{ width: '21px', height: '21px' }}
              />

              <p>Let's Start</p>
            </div>
          </div>
        </Link>
      </div>

      {/* <div className="top-30">
        <img src="public/img_3d.svg" alt="" className="w-64 h-auto" />
      </div> */}
    </div>
  );
}
