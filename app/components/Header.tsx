"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-wide hover:text-blue-300 transition duration-300">
            Dép. Informatique
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-xl focus:outline-none hover:text-blue-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-6 bg-blue-700 md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto text-center md:text-left`}
        >
          <li>
            <Link
              href="/presentation"
              className="block text-lg font-medium hover:text-blue-300 transition duration-300 px-4 py-2 md:p-0"
            >
              Présentation
            </Link>
          </li>
          <li>
            <Link
              href="/corps-enseignant"
              className="block text-lg font-medium hover:text-blue-300 transition duration-300 px-4 py-2 md:p-0"
            >
              Corps enseignant
            </Link>
          </li>
          <li>
            <Link
              href="/licence"
              className="block text-lg font-medium hover:text-blue-300 transition duration-300 px-4 py-2 md:p-0"
            >
              Licence
            </Link>
          </li>
          <li>
            <Link
              href="/master"
              className="block text-lg font-medium hover:text-blue-300 transition duration-300 px-4 py-2 md:p-0"
            >
              Master
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
