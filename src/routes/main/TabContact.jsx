import { BiSend } from 'react-icons/bi';

export default function Contact() {
  return (
    <div className="flex items-center justify-center p-20 px-32">
      <div className="h-full">
        <p className="text-heading1 text-tuatara-50 font-abril pb-3">Contact</p>
        <div className="h-full relative">
          <input
            className="h-64 w-[400px] p-6 text-tuatara-50 border-tuatara-400  bg-tuatara-900 rounded-md focus:outline-none focus:outline-1 focus:outline-tuatara-500" // 높이 조정
            type="text"
            placeholder="벨루가 팀에게 남기고 싶은 말을 작성해주세요"
          />
          <BiSend
            className="absolute bottom-3 right-3 text-tuatara-300 "
            size={28}
          />
        </div>
      </div>
      <div className="flex items-center justify-end ml-16 p-10">
        <img
          src="/assets/images/img_demo_2.svg"
          alt="로고 텍스트"
          className="full h-full mt-10"
        />
      </div>
    </div>
  );
}
