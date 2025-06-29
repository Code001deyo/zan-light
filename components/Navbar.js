import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Reels', href: '/reels' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        theme === 'light' 
          ? scrolled 
            ? 'bg-white/90 backdrop-blur-xl py-2 shadow-lg border-b border-gray-200/50' 
            : 'bg-white/80 backdrop-blur-sm py-4'
          : scrolled 
            ? 'bg-black/80 backdrop-blur-xl py-2 shadow-2xl border-b border-gold-500/20' 
            : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group" onClick={handleLinkClick}>
            <div className="relative">
              <Image src="/Images/logo.png" alt="ZAN E-lite Visuals Logo" width={64} height={64} className="rounded-full" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  router.pathname === link.href
                    ? theme === 'light' ? 'text-gold-600' : 'text-gold-400'
                    : theme === 'light' 
                      ? 'text-gray-700 hover:text-gold-600' 
                      : 'text-white hover:text-gold-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  router.pathname === link.href 
                    ? `w-full ${theme === 'light' ? 'bg-gold-600' : 'bg-gold-400'}` 
                    : 'w-0'
                }`}></span>
              </Link>
            ))}
            
            <Link
              href="/booking"
              className="btn btn-primary ml-4 text-sm"
            >
              Book Now
            </Link>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300' 
                  : 'glass hover:bg-gold-400/20 text-gold-400'
              }`}
            >
              {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-700 hover:text-gold-600' : 'text-white hover:text-gold-400'
            }`}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className={`md:hidden mt-4 pb-4 rounded-xl ${
            theme === 'light' ? 'bg-white/90 border border-gray-200' : 'glass'
          }`}>
            <div className="flex flex-col space-y-3 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    router.pathname === link.href
                      ? theme === 'light' 
                        ? 'bg-gold-100 text-gold-700' 
                        : 'bg-gray-900 text-gold-400'
                      : theme === 'light' 
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-gold-600' 
                        : 'text-white hover:bg-gray-800 hover:text-gold-400'
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/booking"
                className="btn btn-primary text-center mt-2"
                onClick={handleLinkClick}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}