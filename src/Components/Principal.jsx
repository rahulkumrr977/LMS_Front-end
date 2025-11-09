// import required icons and components

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrincipalLogin({
  backgroundImage = "src/assets/background.jpeg",
  characterImage = "src/assets/8-removebg-preview.png",
  title = "Principal Login",
  icon = faUserTie,
  expectedUsername = "student",
  expectedPassword = "1234",
  redirectPath = "/principal_dashboard",
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Username & password check karo
    if (username === expectedUsername && password === expectedPassword) {
      navigate(redirectPath); // sahi hai to redirect kar do
    } else {
      setError("Either the Username or password is incorrect ."); // galat hai to error dikhayo
    }
  }

  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute bottom-0 left-0 w-full h-full -z-10 "
      />

      <section
        className="relative z-10 flex flex-col md:flex-row 
      items-center justify-center gap-12 max-w-7xl mx-auto px-6 py-16 min-h-screen"
      >
        {/* Character Image */}
        <div className="relative md:absolute md:left-[-100px] md:top-[225px] flex justify-center md:flex-1">
          {/* <div className="w-full md:w-1/2 flex justify-center"> */}
          <img
            src={characterImage}
            alt="Principal"
            // className="absolute h-[600px] left-[-100px] top-[225px]"
            className="w-64 md:w-[600px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,10)] scale-110 hover:scale-100 transition-transform duration-500 object-cover hidden sm:block"
          />
        </div>

        {/* Login Form */}
        <div
          className="w-full max-w-md p-8 sm:p-12 bg-white bg-opacity-95 backdrop-blur-md rounded-3xl shadow-2xl 
  relative md:absolute md:left-[800px] md:top-[300px]"
        >
          {/* <div className="absolute left-[800px] top-[300px] flex-1 bg-white bg-opacity-95 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-md"> */}
          {/* <div className="relative flex-1 bg-white bg-opacity-95 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-md md:absolute md:left-[1050px] md:top-[500px] left-1 top-1 transform -translate-x-1/2 -translate-y-1/2 "> */}

          <h2
            className="text-3xl font-extrabold text-blue-700 mb-10 
          flex items-center gap-3"
          >
            <FontAwesomeIcon icon={icon} className="text-blue-600" /> {title}
          </h2>

          <form
            className="space-y-8"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                id="username"
                required
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="peer w-full border-2 border-gray-300 rounded-lg 
                px-4 pt-6 pb-2 bg-white text-gray-800 text-base 
                focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              />
              <label
                htmlFor="username"
                className="absolute left-4 top-2 text-gray-500 text-sm 
                transition-all peer-placeholder-shown:top-4 
                peer-placeholder-shown:text-base
                 peer-placeholder-shown:text-gray-400 peer-focus:top-2 
                 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Username
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                required
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full border-2 border-gray-300 
                rounded-lg px-4 pt-6 pb-2 bg-white text-gray-800 text-base 
                focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-2 text-gray-500 
                text-sm transition-all peer-placeholder-shown:top-4
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Password
              </label>
            </div>

            {/* Error message show karne ke liye */}
            {error && <div className="text-red-600 mb-4">{error}</div>}

            <div className="flex flex-wrap justify-between items-center gap-3 text-gray-600 text-sm mb-6">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-5 h-5 accent-blue-600 rounded"
                />
                Remember me
              </label>

              <a
                href="#forgot"
                className="text-blue-600 font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-left">
              <button
                type="submit"
                className="self-start w-1/2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white font-semibold py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
