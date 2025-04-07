
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="text-xl md:text-2xl font-bold text-skylink-700">
                Sky<span className="text-teal-500">Link</span>
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="font-medium text-gray-700 hover:text-skylink-600 transition-colors">
                Services
              </a>
              <a href="#integration" className="font-medium text-gray-700 hover:text-skylink-600 transition-colors">
                Integration
              </a>
              <a href="#about" className="font-medium text-gray-700 hover:text-skylink-600 transition-colors">
                About Us
              </a>
              <a href="#contact">
                <Button variant="default" className="btn-primary">
                  Get Started
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-skylink-600 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skylink-600 hover:bg-gray-50"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
          <a
            href="#integration"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skylink-600 hover:bg-gray-50"
            onClick={toggleMobileMenu}
          >
            Integration
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skylink-600 hover:bg-gray-50"
            onClick={toggleMobileMenu}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skylink-600 hover:bg-gray-50"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
