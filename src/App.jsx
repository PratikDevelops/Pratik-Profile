import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-indigo-500 p-6">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md border border-gray-300 transition-all duration-300 transform hover:scale-105">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-indigo-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg mb-6 transition-all duration-300 transform hover:rotate-12">
            PK
          </div>

          <h1 className="text-3xl font-extrabold text-gray-800 transition-all duration-300 hover:text-indigo-600">Pratik Kedar</h1>
          <p className="text-gray-600 text-lg mt-4 px-6 transition-all duration-300 hover:text-gray-800">
            I'm a passionate frontend developer who enjoys creating intuitive user interfaces and solving complex design challenges.
          </p>

          <div className="mt-6 text-left w-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Hobbies</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li className="transition-all duration-300 hover:text-indigo-600 hover:font-semibold">Playing cricket with friends</li>
              <li className="transition-all duration-300 hover:text-indigo-600 hover:font-semibold">Solving brain puzzles</li>
              <li className="transition-all duration-300 hover:text-indigo-600 hover:font-semibold">Exploring new technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
