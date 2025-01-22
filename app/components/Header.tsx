'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide hover:text-blue-300 transition duration-300"
            onClick={handleLinkClick}
          >
            Dép. Informatique
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`block md:hidden text-2xl font-semibold focus:outline-none transition duration-300 ${
            isMenuOpen ? 'text-blue-300' : 'hover:text-blue-300'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 bg-blue-700 md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto text-center md:text-left transition-all duration-300`}
        >
          {[{ href: '/presentation', label: 'Présentation' },
            { href: '/corps-enseignant', label: 'Corps enseignant' },
            { href: '/licence', label: 'Licence' },
            { href: '/master', label: 'Master' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-lg font-medium hover:text-blue-300 transition duration-300 px-4 py-2 md:p-0"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
