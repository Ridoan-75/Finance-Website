import React from 'react';

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 lg:px-20 pt-8 bg-transparent">
      {/* Logo + Name */}
      <a href="#" className="flex items-center gap-2">
        <img src="Group.png" alt="Wern Finance Logo" className="h-6 w-auto lg:h-8" />
        <span className="text-white text-lg lg:text-xl font-semibold">Wern Finance</span>
      </a>
      {/* Contact Button */}
      <a
        href="#"
        className="border border-[#A259FF] text-[#A259FF] rounded-full px-5 lg:px-6 py-1.5 lg:py-2 text-sm lg:text-base font-medium hover:bg-[#A259FF] hover:text-white transition-all duration-150"
      >
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
