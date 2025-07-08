// import React from 'react'
// import styles from '../../styles/common/navbar.module.css'
// import { Link } from 'react-router-dom'

// function NavBar() {
//   return (
//     <div className={styles.navbar}>
//       <div className={styles.link}>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/people">People</Link>
//         <Link to="/hostels">Hostels</Link>
//         <Link to="/gallery">Gallery</Link>
//         <Link to="/admin">Admin</Link>
//         </div>
//     </div>
//   )
// }

// export default NavBar
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LOGO_URL = "/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-[#192F59] shadow-md sticky top-0 z-50 border-b border-gray-200 rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28 justify-between">
          
          <div className="flex items-center">
            <img
              src={LOGO_URL}
              alt="NITK Emblem"
              className="h-28 w-28 object-contain  hover:scale-110 hover:shadow-lg transition-transform duration-300 cursor-pointer"
              title="NITK Home"
              onClick={() => window.location.href = '/'}
            />
            <div className="flex flex-col justify-center ml-6">
              <span className="font-extrabold text-4xl text-white tracking-wide drop-shadow">NITK</span>
              <span className="text-2xl text-teal-300 font-semibold tracking-wide drop-shadow">Hostel</span>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 items-center justify-end space-x-8 ml-12">
            <NavLinks location={location} />
          </div>
          
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white rounded-b-xl shadow-md">
          <NavLinks mobile location={location} onClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/people", label: "People" },
  { to: "/hostels", label: "Hostels" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admin", label: "Admin" },
];

const NavLinks = ({ mobile, onClick, location }) => (
  <>
    {navItems.map(({ to, label }) => {
      const isActive = location.pathname === to;
      return (
        <Link
          key={to}
          to={to}
          className={navLinkClass(mobile, isActive)}
          onClick={onClick}
        >
          <span className="relative group">
            {label}
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-teal-400 rounded transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${isActive ? 'scale-x-100' : ''}`}
              style={{ transformOrigin: 'left' }}
            />
          </span>
        </Link>
      );
    })}
  </>
);

function navLinkClass(mobile, isActive) {
  return [
    mobile
      ? `block px-3 py-2 rounded-md text-base font-medium text-[#192F59] hover:bg-teal-600 hover:text-white transition-colors relative ${isActive ? 'bg-teal-800 text-white' : ''}`
      : `text-white no-underline text-lg font-semibold px-3 py-2 rounded-md hover:text-teal-300 transition-colors focus:outline-none relative`,
    "group"
  ].join(" ");
}

export default Navbar; 
