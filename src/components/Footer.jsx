import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#2928343D] text-white p-6 md:p-10">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 overflow-x-auto">
        {/* Company Info */}
        <aside className="flex-shrink-0 min-w-[200px] max-w-xs">
          <a href="" className="flex items-center gap-4 mb-2">
            <img src="Group.png" alt="Wern Finance Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-2xl">Wern Finance</span>
          </a>
          <p className="text-[#ADB2B1] text-sm md:text-base">
            Discover the power of our secure <br /> and rewarding credit cards
          </p>
        </aside>
        {/* Footer Links */}
        <div className="flex flex-row flex-wrap gap-8 sm:gap-10">
          <nav className="flex flex-col min-w-[120px]">
            <h6 className="footer-title mb-2 uppercase text-base font-semibold tracking-wide">Services</h6>
            <a className="link link-hover mb-1">Branding</a>
            <a className="link link-hover mb-1">Design</a>
            <a className="link link-hover mb-1">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col min-w-[120px]">
            <h6 className="footer-title mb-2 uppercase text-base font-semibold tracking-wide">Company</h6>
            <a className="link link-hover mb-1">About us</a>
            <a className="link link-hover mb-1">Contact</a>
            <a className="link link-hover mb-1">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col min-w-[120px]">
            <h6 className="footer-title mb-2 uppercase text-base font-semibold tracking-wide">Legal</h6>
            <a className="link link-hover mb-1">Terms of use</a>
            <a className="link link-hover mb-1">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="flex flex-col min-w-[120px]">
            <h6 className="footer-title mb-2 uppercase text-base font-semibold tracking-wide">Social</h6>
            <a className="link link-hover mb-1">Changelog</a>
            <a className="link link-hover mb-1">License</a>
            <a className="link link-hover mb-1">Site Maps</a>
            <a className="link link-hover">News</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;