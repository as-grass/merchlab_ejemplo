'use client';

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-spartan text-3xl font-bold">
              PrintFlex
            </div>
            <p className="font-montserrat text-gray-300 max-w-sm">
              The ultimate print-on-demand platform empowering creators worldwide 
              to turn their designs into profitable businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-opacity-20 transition-all duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-opacity-20 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-opacity-20 transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-opacity-20 transition-all duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-spartan text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-4 font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">T-Shirts & Apparel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Mugs & Drinkware</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Phone Cases</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Wall Art & Posters</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Bags & Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Stickers & Labels</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-spartan text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-4 font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Design Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Pricing Calculator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Marketing Tools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors duration-200">API Documentation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-spartan text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-secondary" />
                <span className="font-montserrat text-gray-300">hello@printflex.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-secondary" />
                <span className="font-montserrat text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-secondary" />
                <span className="font-montserrat text-gray-300">San Francisco, CA</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-spartan text-lg font-bold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white bg-opacity-10 text-white placeholder-gray-400 px-4 py-2 rounded-l-lg flex-1 font-montserrat focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                />
                <button className="bg-brand-secondary hover:bg-opacity-90 px-6 py-2 rounded-r-lg font-montserrat font-semibold transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-montserrat text-gray-300">
              © 2024 PrintFlex. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="font-montserrat text-gray-300 hover:text-brand-secondary transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="font-montserrat text-gray-300 hover:text-brand-secondary transition-colors duration-200">Terms of Service</a>
              <a href="#" className="font-montserrat text-gray-300 hover:text-brand-secondary transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}