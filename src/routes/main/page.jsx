import React from 'react';
import { useState, useRef } from 'react';
import Home from './TabHome';
import AboutUs from './TabAboutUs';
import Service from './TabService';
import Contact from './TabContact';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { URI_PATH } from '../../routers/main-router';

export default function MainPage() {
  const navigate = useNavigate();
  const contentHomeRef = useRef();
  const contentAboutUsRef = useRef();
  const contentServiceRef = useRef();
  const contentContactRef = useRef();

  const onContentHomeClick = () => {
    contentHomeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onContentAboutUsClick = () => {
    contentAboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onContentServiceClick = () => {
    contentServiceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onContentContactClick = () => {
    contentContactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // <div>
    //   <Example />
    // </div>
    <div className="bg-[#262626]">
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-[#151515] text-gray-700 body-font border-b border-gray-200 pl-5 pr-5"></header>
      <MainHeader
        className="fixed inset-x-0 top-0 z-50 left-0 bg-[#151515] text-gray-700 body-font border-b border-gray-200 pl-5 pr-5"
        onContentHomeClick={onContentHomeClick}
        onContentAboutUsClick={onContentAboutUsClick}
        onContentServiceClick={onContentServiceClick}
        onContentContactClick={onContentContactClick}
      />

      <section ref={contentHomeRef}>
        <Home />
      </section>
      <section ref={contentAboutUsRef}>
        <AboutUs />
      </section>
      <section ref={contentServiceRef}>
        <Service />
      </section>
      <section ref={contentContactRef}>
        <Contact />
      </section>

      <footer className="text-gray-700 body-font">
        <MainFooter />
      </footer>
    </div>
  );
}
