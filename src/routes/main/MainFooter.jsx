export default function MainFooter() {
  return (
    <div className="bg-tuatara-900 p-8 flex items-center justify-between bg-gray-200">
      <div>
        <div className="flex items-center">
          <img className="w-10 h-10" src="/public/img_3d.svg" alt="" />
          <p className="text-body2 text-tuatara-50 font-abril">ValueGa</p>
        </div>
        <p className="text-[#9198A0] mt-2">
          신한투자증권 프로디지털 아카데미 4기 5조
        </p>
      </div>
      <div className="w-2/6 ">
        <div className="flex items-center justify-between">
          <p className="text-caption text-tuatara-50 font-abril">Contact</p>
          <p className="text-caption text-tuatara-50 font-apple">
            kimriun27@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-caption text-tuatara-50 font-abril">Author</p>
          <p className="text-caption text-tuatara-50 font-apple">
            김득호 김경륜 우채윤 김민중 이선민
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="bg-gray-200">
<div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
  <div>
    <p className="text-gray-500 text-sm text-center sm:text-left">
      © ValueGa
    </p>
    <p>신한투자증권 프로디지털 아카데미 4기 5조</p>
  </div>

  <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
    pedia
  </span>
</div>
<div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
  <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
    Developed by
  </span>
</div>
</div> */
}
