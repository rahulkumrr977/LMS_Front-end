// Header.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header className="fixed top-0 left-0 right-0 h-[90px]  backdrop-blur-md px-10 flex justify-between items-center z-[1000]">
    <header className="fixed top-0 left-0 right-0 h-auto py-4 px-4 sm:px-10 backdrop-blur-md flex flex-col sm:flex-row justify-between items-center z-[1000]">
      {/* <div className="flex flex-col"> */}
      <div className="flex flex-col items-center sm:items-start mt-7 ml-12 sm:mb-0">
        {/* <a href="#" className="ml-8 pt-10 text-4xl font-bold text-blue-600"> */}
        <a href="#" className="text-2xl sm:text-4xl font-bold text-blue-600">
          SHIKSH<span className="text-orange-400">AI</span>{" "}
          {/* <span className="text-2xl">✨</span> */}
          <span className="text-lg sm:text-2xl">✨</span>
        </a>

        {/* <p className="text-xs text-gray-500 font-normal leading-none mt-2"> */}
        <p className="text-[10px] sm:text-xs text-gray-500 font-normal leading-none mt-1 sm:mt-2 text-center sm:text-left">
          Provided by Tailblazer Visionaries
        </p>
      </div>

      <button
        className="sm:hidden flex flex-col justify-center items-center gap-1.5 cursor-pointer ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-0.5 bg-blue-600"></div>
        <div className="w-6 h-0.5 bg-blue-600"></div>
        <div className="w-6 h-0.5 bg-blue-600"></div>
      </button>

      {/* Right side: Navigation links */}
      {/* <nav className="flex gap-6"> */}
      <nav
        className={`"flex flex-col sm:flex-row gap-2 sm:gap-6 mr-14 items-center ${
          menuOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <a
          href="#about"
          // className="flex items-center gap-2 text-gray-700 text-2xl px-4 mt-8 rounded-full hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300 group"
          className="flex items-center gap-2 text-gray-700 text-base sm:text-2xl px-3 sm:px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300 group"
          onClick={() => setMenuOpen(false)}
        >
          <FontAwesomeIcon
            icon={faUsers}
            className="text-blue-600 group-hover:text-white transition duration-300"
          />
          ABOUT US
        </a>
        <a
          href="#contact"
          // className="flex items-center gap-2 text-gray-700 text-2xl mr-20 px-4 mt-8 rounded-full hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300 group"
          className="flex items-center gap-2 text-gray-700 text-base sm:text-2xl px-3 sm:px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300 group"
          onClick={() => setMenuOpen(false)}
        >
          <FontAwesomeIcon
            icon={faHandsHelping}
            className="text-blue-600 group-hover:text-white transition duration-300"
          />
          CONTACT US
        </a>
      </nav>
    </header>
  );
};

export default Header;
