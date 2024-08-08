import React from 'react';

const Navbar = () => {
  return (
    <>
    <nav className="bg-blue-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <a href="/">
            <img
                src="/calculator-white.svg"
                alt="Calculator Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
