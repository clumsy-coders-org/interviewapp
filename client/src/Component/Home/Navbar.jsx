import React, { useState } from "react";
import { IoMdPerson } from "react-icons/io";

const Navbar = ({ username }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false);

  return (
    <nav className="navbar text-white px-4 py-3 flex justify-between items-center">
      <div className="text-lg font-bold">Title</div>

      <div className="flex items-center space-x-6">
       
        <div className="hover:text-gray-300 cursor-pointer">Home</div>

        <div className="relative">
          <div
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => setShowFeatureDropdown(!showFeatureDropdown)}
          >
            Features
          </div>
          {showFeatureDropdown && (
            <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Roadmap</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Practice QA</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Mock Interview</a>
            </div>
          )}
        </div>
       
        {username && <div className="mr-4">{username}</div>}

        <div className="relative cursor-pointer" onClick={() => setShowUserDropdown(!showUserDropdown)}>
        <IoMdPerson />
          {showUserDropdown && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 whitespace-nowrap">Sign In</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 whitespace-nowrap">Sign Out</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

