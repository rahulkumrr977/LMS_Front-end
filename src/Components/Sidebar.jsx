import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar({ sidebarOpen, menuItems }) {
  const location = useLocation();
  const { t } = useTranslation();
  const [active, setActive] = useState("");

  useEffect(() => {
    const current = menuItems.find((item) => item.path === location.pathname);
    if (current) setActive(current.name);
  }, [location.pathname, menuItems]);

  if (!sidebarOpen) return null;

  return (
    <div className="bg-[#1A4B8A] text-white w-64 fixed top-20 left-0 h-[calc(100vh-5rem)] pt-25 flex flex-col justify-between z-40">
      <div>
        {menuItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <div
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-5 px-8 py-4 cursor-pointer transition-all 
                ${
                  active === item.name
                    ? "bg-orange-500 text-white rounded-r-full"
                    : "hover:bg-[#2e5d9a] rounded-r-full"
                }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-lg">{t(item.name)}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-xs text-center text-white pb-4">
        © 2025 SikhsAI by Trailblazer Visionaries
      </div>
    </div>
  );
}
