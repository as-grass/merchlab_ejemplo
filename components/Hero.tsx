'use client';

import { ArrowRight, Package, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-spartan text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Create.
                <span className="text-brand-secondary block">Customize.</span>
                <span className="text-brand-accent block">Sell.</span>
              </h1>
              
              <p className="font-montserrat text-xl text-gray-600 max-w-lg">
                The ultimate print-on-demand platform where your creativity meets unlimited possibilities. 
                No inventory, no risk, just pure profit from your designs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-secondary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-montserrat font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Start Creating Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-8 py-4 rounded-xl font-montserrat font-semibold text-lg transition-all duration-200">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-secondary bg-opacity-10 p-3 rounded-full">
                  <Package className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="font-spartan text-2xl font-bold text-gray-900">0</p>
                  <p className="font-montserrat text-sm text-gray-600">Inventory Needed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-brand-accent bg-opacity-10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="font-spartan text-2xl font-bold text-gray-900">500K+</p>
                  <p className="font-montserrat text-sm text-gray-600">Active Creators</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-brand-tertiary bg-opacity-10 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-brand-tertiary" />
                </div>
                <div>
                  <p className="font-spartan text-2xl font-bold text-gray-900">98%</p>
                  <p className="font-montserrat text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-brand-secondary to-brand-accent p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="font-spartan text-xl font-bold mb-2">Custom T-Shirts</h3>
                  <p className="font-montserrat text-sm opacity-90">Print on demand</p>
                </div>
                <div className="bg-gradient-to-br from-brand-accent to-brand-tertiary p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="font-spartan text-xl font-bold mb-2">Mugs & Drinkware</h3>
                  <p className="font-montserrat text-sm opacity-90">High-quality prints</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-brand-tertiary to-brand-primary p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="font-spartan text-xl font-bold mb-2">Phone Cases</h3>
                  <p className="font-montserrat text-sm opacity-90">Custom designs</p>
                </div>
                <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="font-spartan text-xl font-bold mb-2">Posters & Art</h3>
                  <p className="font-montserrat text-sm opacity-90">Gallery quality</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-brand-secondary text-white px-4 py-2 rounded-full font-montserrat font-semibold text-sm shadow-lg">
              No Risk!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-accent text-white px-4 py-2 rounded-full font-montserrat font-semibold text-sm shadow-lg">
              Unlimited Products
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}