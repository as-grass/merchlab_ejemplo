'use client';

import { useState } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-brand-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="font-spartan text-2xl font-bold">
              PrintFlex
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-brand-secondary transition-colors duration-200 font-montserrat font-medium">
                Home
              </a>
              <a href="#features" className="hover:text-brand-secondary transition-colors duration-200 font-montserrat font-medium">
                Features
              </a>
              <a href="#products" className="hover:text-brand-secondary transition-colors duration-200 font-montserrat font-medium">
                Products
              </a>
              <a href="#marketplace" className="hover:text-brand-secondary transition-colors duration-200 font-montserrat font-medium">
                Marketplace
              </a>
              <a href="#pricing" className="hover:text-brand-secondary transition-colors duration-200 font-montserrat font-medium">
                Pricing
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-brand-secondary hover:bg-opacity-90 text-white px-4 py-2 rounded-lg font-montserrat font-semibold transition-all duration-200 flex items-center space-x-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Start Selling</span>
            </button>
            <button className="border border-white hover:bg-white hover:text-brand-primary text-white px-4 py-2 rounded-lg font-montserrat font-semibold transition-all duration-200 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-brand-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-opacity-20 border-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-white hover:text-brand-secondary font-montserrat font-medium">
              Home
            </a>
            <a href="#features" className="block px-3 py-2 text-white hover:text-brand-secondary font-montserrat font-medium">
              Features
            </a>
            <a href="#products" className="block px-3 py-2 text-white hover:text-brand-secondary font-montserrat font-medium">
              Products
            </a>
            <a href="#marketplace" className="block px-3 py-2 text-white hover:text-brand-secondary font-montserrat font-medium">
              Marketplace
            </a>
            <a href="#pricing" className="block px-3 py-2 text-white hover:text-brand-secondary font-montserrat font-medium">
              Pricing
            </a>
            <div className="pt-4 pb-3 border-t border-white border-opacity-20">
              <div className="flex items-center px-3 space-x-3">
                <button className="bg-brand-secondary w-full text-white px-4 py-2 rounded-lg font-montserrat font-semibold">
                  Start Selling
                </button>
              </div>
              <div className="mt-3 flex items-center px-3">
                <button className="border border-white w-full text-white px-4 py-2 rounded-lg font-montserrat font-semibold">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}