import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { name: '00 HOME', path: '/' },
  { name: '01 DESTINATION', path: '/destination' },
  { name: '02 CREW', path: '/crew' },
  { name: '03 TECHNOLOGY', path: '/technology' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Dynamic background based on route
  const backgroundMap = {
    '/': 'bg-home',
    '/destination': 'bg-destination',
    '/crew': 'bg-crew',
    '/technology': 'bg-technology',
  };

  const currentBg = backgroundMap[location.pathname] || 'bg-default';

  return (
    <nav className={`w-full z-50 ${currentBg} text-white`}>
      <div className="flex items-center justify-between px-8 py-6 backdrop-blur-md bg-white/5">
        {/* Logo */}
        <img src="/assets/shared/logo.svg" alt="logo" className="w-10 h-10" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 tracking-widest uppercase text-sm">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `relative pb-2 transition-all ${
                  isActive
                    ? 'text-white font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white'
                    : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-start p-6 space-y-6 text-xl">
          <button
            className="self-end text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full border-b py-2 ${
                  isActive ? 'font-bold text-white' : 'text-gray-300'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;