'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const links = [
    { href: '/presentation', label: 'Présentation' },
    { href: '/corps-enseignant', label: 'Corps enseignant' },
    { href: '/licence', label: 'Licence' },
    { href: '/master', label: 'Master' },
    { href: '/recherche', label: 'Recherche' },
    { href: '/projets', label: 'Projets' },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="text-2xl font-bold tracking-tight hover:text-blue-300 transition-colors duration-300"
        >
          Dép. <span className="text-blue-300">Informatique</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-blue-300 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop and Mobile Menu */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 absolute md:static bg-blue-800 md:bg-transparent top-16 left-0 w-full md:w-auto text-center md:text-left transition-all duration-300 rounded-b-lg overflow-hidden`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-lg font-medium hover:bg-blue-700 hover:text-blue-200 md:hover:bg-transparent transition-colors duration-300"
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
