// src/components/LoginCard.jsx
import React from "react";

export default function LoginCard({ type, title, subtitle, img, onClick }) {
  // Card hover ka bg color
  const hoverColor =
    type === "teacher" || type === "principal"
      ? "group-hover:bg-blue-500"
      : "group-hover:bg-orange-500";

  return (
    <div
      className="relative bg-gradient-to-br from-[#2a2a3e] to-[#1e1e32] rounded-2xl p-8 text-center border border-white/10 shadow-3xl transition-all duration-500 ease-out overflow-hidden group animate-fade-in-up"
    >
      {/* Hover overlay color */}
      <div
        // className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${hoverColor} transition-opacity duration-300`}
        className={`absolute inset-0 opacity-1 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 ${hoverColor} transition-all duration-500 ease-in-out z-0`}
      ></div>

      {/* Icon / Illustration */}
      <div className="relative z-10">
        <img
          src={img}
          alt={title}
          className="  mx-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,10)] animate-float group-hover:scale-90 group-hover:-translate-y-1 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h2 className="text-white text-sm font-bold uppercase tracking-wide relative z-10">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 relative z-10">
  {subtitle}
</p>

      {/* <p className="text-white text-sm leading-relaxed mb-8 relative z-10">
        {subtitle}
      </p> */}

      {/* Button */}
      <button
        onClick={() => onClick(type)}
        className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-yellow-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 active:translate-y-0 active:shadow-lg active:shadow-orange-500/30 transition-all duration-300 overflow-hidden"
      >
        <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full" />
        <span className="relative z-10">Login</span>
      </button>
    </div>
  );
}
