// src/components/LoginSelection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "./LoginCard";

export default function LoginSelection() {

  const navigate = useNavigate();

  const loginTypes = [
    {
      type: "student",
      title: "Student Login",
      subtitle: "Begin your learning journey with focus and ease.",
      img: "src/assets/Student.png",
    },
    {
      type: "teacher",
      title: "Teacher Login",
      subtitle: "Empower, inspire, and manage with confidence.",
      img: "src/assets/Teacher.png",
    },
    {
      type: "parent",
      title: "Parent Login",
      subtitle: "Stay involved in your child's learning journey.",
      img: "src/assets/Parents.png",
    },
    {
      type: "principal",
      title: "Principal Login",
      subtitle: "Manage operations and stay organized.",
      img: "src/assets/Principal.png",
    },
  ];

  const handleLogin = (type) => {

    navigate(`/${type}-login`);
    // alert(`Redirecting to ${type} login page`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center p-5 overflow-x-hidden">
      <div className="">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-down">
          <h1 className="text-white text-6xl font-bold mb-3">
            Welcome to SHIKSH<span className="text-orange-400">AI</span>{" "}
            <span className="text-2xl ml-2">✨</span>
          </h1>
          <p className="text-yellow-400 text-lg mt-3 font-medium tracking-wide">
            Powered with passion by{" "}
            <span className="text-blue-400 font-bold">
              Trailblazer Visionaries
            </span>
          </p>
          <p className="text-gray-300 text-lg mt-2">
            Choose your login type to access your personalized dashboard
          </p>
        </div>

        {/* Cards grid */}
        {/* <div className="mx-[200px] grid grid-cols-4 gap-6  "> */}
          <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {loginTypes.map((login, index) => (
            <LoginCard
              key={login.type}
              {...login}
              onClick={handleLogin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
