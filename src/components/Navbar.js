import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationData } from '../data/navigation';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">Mehta Telecom</Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navigationData.categories.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button 
                    className="px-3 py-2 text-sm font-medium hover:text-gray-300"
                    onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                  >
                    {category.name}
                  </button>

                  {/* Dropdown Menu */}
                  {activeCategory === category.name && (
                    <div 
                      className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[1001]"
                      onMouseEnter={() => setActiveCategory(category.name)}
                      onMouseLeave={() => setActiveCategory(null)}
                    >
                      <div className="py-1" role="menu">
                        {category.subcategories.map((subcategory) => (
                          <Link
                            key={subcategory.name}
                            to={subcategory.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => setActiveCategory(null)}
                          >
                            {subcategory.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Login Button */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="ml-8 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="mr-4 px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Login
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-black z-[1001]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationData.categories.map((category) => (
              <div key={category.name}>
                <button 
                  className="w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                  onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                >
                  {category.name}
                </button>
                {activeCategory === category.name && (
                  <div className="pl-4">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.name}
                        to={subcategory.link}
                        className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700"
                        onClick={() => {
                          setActiveCategory(null);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar; 