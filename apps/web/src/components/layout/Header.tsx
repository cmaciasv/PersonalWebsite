"use client";

import Link from '../ui/Link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-dark text-white p-4">
      <nav aria-label="Main navigation" className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Carlos Macias
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-primary-dark md:bg-transparent flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0`}
        >
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
