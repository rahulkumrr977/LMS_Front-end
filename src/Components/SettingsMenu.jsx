import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Settings Icon */}
      <FiSettings
        className="text-3xl text-gray-700 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Settings Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="text-sm text-gray-700">
            <li className="p-3 border-b hover:bg-gray-100 cursor-pointer">👤 Profile</li>
            <li className="p-3 border-b hover:bg-gray-100 cursor-pointer">⚙️ Preferences</li>
            <li className="p-3 hover:bg-gray-100 cursor-pointer">🚪 Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
