// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Hi, I'm YIXI
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Software Engineer & Security Researcher
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Building secure, scalable applications with React, Node.js, and cloud technologies.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            View Projects
          </button>
          <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;