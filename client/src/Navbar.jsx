// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">YIXI</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;