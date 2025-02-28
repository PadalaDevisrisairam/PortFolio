import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-semibold text-2xl tracking-tight">
              MyPortfolio
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out px-3 py-2 rounded-lg text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out px-3 py-2 rounded-lg text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out px-3 py-2 rounded-lg text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              to="/contacts"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out px-3 py-2 rounded-lg text-sm font-medium"
            >
              Contact
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            >
              Projects
            </Link>
            <Link
              to="/contacts"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;