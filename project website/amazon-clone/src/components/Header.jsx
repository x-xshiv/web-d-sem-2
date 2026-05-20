import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo Area */}
      <div className="text-2xl font-bold ml-2 border border-transparent hover:border-white p-1 cursor-pointer">
        amazon<span className="text-orange-400">.in</span>
      </div>
      
      {/* Search Bar */}
      <div className="flex flex-1 mx-6 max-w-3xl rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-400">
        <input 
          type="text" 
          className="w-full p-2 text-black outline-none" 
          placeholder="Search Amazon.in"
        />
        <button className="bg-orange-400 px-5 text-gray-900 font-bold hover:bg-orange-500 transition-colors">
          🔍
        </button>
      </div>

      {/* Right Navigation */}
      <nav className="flex items-center space-x-6 mr-4">
        <div className="cursor-pointer hover:underline flex flex-col">
          <span className="text-xs">Hello, sign in</span>
          <span className="text-sm font-bold">Account & Lists</span>
        </div>
        
        <div className="cursor-pointer hover:underline flex flex-col">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>
        
        <div className="cursor-pointer flex items-center font-bold hover:text-orange-400 transition-colors">
          <span className="text-2xl mr-1">🛒</span>
          <span className="text-orange-400">0</span>
        </div>
      </nav>
    </header>
  );
}