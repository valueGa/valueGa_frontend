import React from "react";
import { useState } from "react";
import Home from "./TabHome";
import AboutAs from "./TabAboutAs";
import Service from "./TabService";
import Contact from "./TabContact";

export default function MainPage() {
  const [activeButton, setActiveButton] = useState("Home");
  const handleClickedButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-black text-gray-700 body-font border-b border-gray-200">
        <div className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl text-indigo-500 mr-4">ValueGa</span>
          </div>
          <nav className="flex flex-wrap items-center text-base justify-center">
            <button
              className={`mr-5 hover:text-gray-900 ${
                activeButton === "Home" ? "underline" : ""
              }`}
              onClick={() => handleClickedButton("Home")}
            >
              Home
            </button>
            <button
              className={`mr-5 hover:text-gray-900 ${
                activeButton === "About As" ? "underline" : ""
              }`}
              onClick={() => handleClickedButton("About As")}
            >
              About As
            </button>
            <button
              className={`mr-5 hover:text-gray-900 ${
                activeButton === "Service" ? "underline" : ""
              }`}
              onClick={() => handleClickedButton("Service")}
            >
              Service
            </button>
            <button
              className={`mr-5 hover:text-gray-900 ${
                activeButton === "Cotact" ? "underline" : ""
              }`}
              onClick={() => handleClickedButton("Cotact")}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <section className="containe mb-8">
        <Home />
      </section>
      <section className="containe mb-8 mt-8">
        <AboutAs />
      </section>
      <section className="containe mb-8 mt-8">
        <Service />
      </section>
      <section className="containe mb-8 mt-8">
        <Contact />
      </section>

      <footer className="text-gray-700 body-font">
        <div className="bg-gray-200">
          <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">©</p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              pedia
            </span>
          </div>
          <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Developed by
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
