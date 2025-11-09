import React, { useState } from "react";
import { FiBell } from "react-icons/fi";

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Bell Icon */}
      <FiBell
        // className="text-xl text-gray-700 cursor-pointer"
          className="text-3xl text-purple-700 hover:text-purple-900 transition-all duration-150 cursor-pointer"

        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Notification Box */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="p-4 text-sm text-gray-800 border-b">
            🔔 <strong>Notifications</strong>
          </div>
          <ul className="max-h-60 overflow-y-auto">
            <li className="p-3 border-b hover:bg-gray-100 cursor-pointer">📘 New course uploaded</li>
            <li className="p-3 border-b hover:bg-gray-100 cursor-pointer">📝 Assignment deadline tomorrow</li>
            <li className="p-3 hover:bg-gray-100 cursor-pointer">🎉 Congratulations on completing a module!</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
