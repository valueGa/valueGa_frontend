import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { URI_PATH } from '~/routers/main-router';
import { BsArrowRight } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="bg-tuatara-950">
      <section id="title" className="relative w-full h-100 px-40">
        <div className="flex flex-col">
          <div className="z-10 text-[180px] font-abril text-tuatara-50">
            ValueGa?
          </div>
          <p className="z-10 text-heading3 font-abril pl-12 text-tuatara-50">
            We’re building future of research
          </p>
          <img
            src="/assets/images/bg_lines.svg"
            alt="배경 라인"
            className=" absolute animate-wipeOpacity"
            style={{
              height: '35%',
              right: 'calc(0% + 128px)',
              transform: 'translateX(7%)',
            }}
          />
        </div>

        <section id="future" className="w-full mt-56 flex justify-around">
          <img
            src="/assets/images/img_3d.svg"
            className="animate-bounce-slow w-24 h-auto"
            alt="퍼센트 로고"
            style={{ width: '316px', height: '316px' }}
          />
          <div className="pb-10 flex flex-col justify-end items-end text-right">
            <p className="text-heading1 font-abril text-tuatara-50 ">
              Future of Valuation
            </p>
            <p className=" text-body2 text-white pr-2">
              누구나 쉬운 기업가치 계산을 위해
            </p>
            <Link to={`${URI_PATH.consensusPage}`}>
              <button className="flex items-center justify-center text-tuatara-50 mt-12 mr-2 py-3 px-14 gap-2 bg-black-100 hover:bg-tuatara-900 rounded-xl">
                <BsArrowRight size={20} />
                <p className="text-body2">Let's Start</p>
              </button>
            </Link>
          </div>
        </section>
      </section>

      {/* <div className="top-30">
        <img src="public/img_3d.svg" alt="" className="w-64 h-auto" />
      </div> */}
    </div>
  );
}
