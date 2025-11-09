import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import NotificationBell from "./NotificationBell";
import SettingsMenu from "./SettingsMenu";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
const { t, i18n } = useTranslation();

  return (
    // <nav className="flex items-center justify-between px-6 py-8 bg-blue-100 shadow-sm">
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 py-4 md:py-8 bg-blue-100 shadow-sm">
      <button
        className="text-3xl "
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>
      {/* Left - Logo + Tagline */}
      {/* <div className="flex items-center ml-20 space-x-4"> */}
      <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 ml-0 lg:ml-20 space-x-0 lg:space-x-4 text-center lg:text-left">
        <div className="text-4xl font-bold">
          <Link to="/" className="text-black">
    SHIKSH
  </Link>
          <span className="text-orange-500">AI</span>
        </div>
        {/* <p className="text-xl ml-24 text-Black-600"> */}
        {/* <p className="text-base md:text-lg text-black-600 lg:ml-24">
          Small steps every day ={" "}
          <span className="font-semibold text-blue-800">Big results</span>
        </p> */}
        <p className="text-base md:text-lg text-gray-600 lg:ml-24">
          Small steps every day = <span className="font-semibold text-blue-800">Big results</span>
        </p>
      </div>

      {/* Middle - Search */}
      {/* <div className="flex items-center w-1/6"> */}
      <div className="flex items-center w-full md:w-1/2 lg:w-1/6 mt-4 lg:mt-0">
        <div className="flex items-center w-full bg-white rounded-2xl border px-5 py-3 shadow-sm">
          <FiSearch className="text-gray-500 mr-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent text-sm text-right"
          />
        </div>
      </div>

      {/* Right - User Info, Icons, Language */}
      {/* <div className="flex items-center space-x-8 mr-10"> */}
      <div className="flex flex-col lg:flex-row items-center mr-4 md:mr-6 lg:mr-10 space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0 w-full lg:w-auto">
        {/* <div className="text-xl text-gray-700"> */}
        <div className="text-center lg:text-left text-lg md:text-xl text-gray-700">
          {/* Welcome back,{" "} */}
          {t("welcome", { name: "Rahul" })}
          {/* <span className="font-bold text-purple-800">Rahul !</span> */}
          <p className="text-xl text-gray-500">{t("learningMessage")}</p>
          {/* Let's keep learning</p> */}
        </div>

        <img
          src="src/assets/Profile.png"
          alt="Profile"
          //   className="w-16 h-16 rounded-full border-2 border-purple-600"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-purple-600"
        />

        {/* <FiBell className="text-xl text-gray-700" /> */}
        <NotificationBell />
        <SettingsMenu />

        <select
  onChange={(e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }}
  value={i18n.language}
  className="bg-white border rounded px-2 py-1 text-sm w-24"
  aria-label="Select Language"
>
  <option value="en">EN</option>
  <option value="hi">HI</option>
</select>
      </div>
    </nav>
  );
};

export default Navbar;
