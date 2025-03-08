import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="glass-effect border-b border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg transform transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Communion
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              <Link
                to="/"
                className={`relative px-3 py-2 transition-colors duration-300 ${
                  isActive('/') 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <span className="relative z-10">Home</span>
                {isActive('/') && (
                  <span className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg -z-0"></span>
                )}
              </Link>
              <Link
                to="/events"
                className={`relative px-3 py-2 transition-colors duration-300 ${
                  isActive('/events')
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <span className="relative z-10">Events</span>
                {isActive('/events') && (
                  <span className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg -z-0"></span>
                )}
              </Link>
              <Link
                to="/about"
                className={`relative px-3 py-2 transition-colors duration-300 ${
                  isActive('/about')
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <span className="relative z-10">About</span>
                {isActive('/about') && (
                  <span className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg -z-0"></span>
                )}
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <Menu className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden glass-effect border-t border-white/20 dark:border-gray-700/20 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-lg ${
                  isActive('/') 
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/events"
                className={`block px-3 py-2 rounded-lg ${
                  isActive('/events')
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-lg ${
                  isActive('/about')
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;