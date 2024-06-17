import React from "react";
import { useState } from "react";
import Home from "./TabHome";
import AboutUs from "./TabAboutUs";
import Service from "./TabService";
import Contact from "./TabContact";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import "bootstrap/dist/css/bootstrap.min.css";
export default function MainPage() {
  return (
    // <div>
    //   <Example />
    // </div>
    <div className="bg-[#262626]">
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-[#151515] text-gray-700 body-font border-b border-gray-200 pl-5 pr-5"></header>
      <MainHeader />
      <section>
        <Home />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Contact />
      </section>

      <footer className="text-gray-700 body-font">
        <MainFooter />
      </footer>
    </div>
  );
}

// export default function MainPage() {
//   return (
//     // <>
//     //   <div className=" bg-tuatara-950">
//     //     <div className="text-hero text-tuatara-50">Hero</div>
//     //     <div className="text-heading1 text-tuatara-50">제목</div>
//     //     <div className="text-heading2 text-tuatara-50">제목</div>
//     //     <div className="text-heading3 text-tuatara-50">제목</div>
//     //     <div className="text-subheading text-tuatara-50">부제목</div>
//     //     <div className="text-body1 text-tuatara-50">내용</div>
//     //     <div className="text-body2 text-tuatara-50">내용</div>
//     //     <div className="text-caption text-tuatara-50">캡션</div>
//     //     <div className="text-mini text-tuatara-50">미니</div>
//     //   </div>
//     //   <div className=" text-heading3 bg-blue-400 font-abril">Font</div>
//     //   <div className=" text-body1 bg-blue-400 font-apple font-bold">폰트</div>
//     //   <div className=" text-body1 bg-blue-400 font-apple">폰트</div>
//     // </>
//   );
// }
