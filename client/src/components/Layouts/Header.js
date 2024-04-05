import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and Website Name */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold">ShopMe</span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-4">
          <Link to="#" className="hover:text-gray-300">Home</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-700">Mobile</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-700">Electronics</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-700">Home Decoration</Link>  
        </nav>

        {/* Wishlist, Cart, Logout */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" ><path fill="#d90808" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path></svg>
          </a>
          <Link to="#" className="hover:text-gray-300">Cart</Link>
          <Link to="#" className="hover:text-gray-300">Logout</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
