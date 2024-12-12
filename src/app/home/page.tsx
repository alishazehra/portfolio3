import React from "react";

export default function Home() {
    return (
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold transition transform hover:scale-105">
        <header className="hi"><strong>Alisha Zehra</strong></header>
          Welcome to My Portfolio
        </h1> 
        <img src="alisha.jpg" alt="hi" />
        <p className="mt-4 text-lg text-gray-200">
          A showcase of my projects, skills, and expertise.
        </p>
        
        <div className="flex space-x-4 mt-6">
          <a
            href="/about"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-800 transition rounded-lg"
          >
            About Me
          </a>
          <a
            href="/services"
            className="px-6 py-2 bg-red-600 hover:bg-red-800 transition rounded-lg"
          >
            My Services
          </a>
          <a
            href="/contact"
            className="px-6 py-2 bg-pink-600 hover:bg-pink-800 transition rounded-lg"
          >
            Contact Me
            
            </a>
          
            
        </div>
      </div>
    );
  }
  