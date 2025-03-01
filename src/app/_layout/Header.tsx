import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
     
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="w-14 h-14" />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
          Mo.No.+91 96508 68226
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          Chat with Us
        </button>
      </div>
    </header>
  );
};

export default Header;
