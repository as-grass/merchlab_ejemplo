'use client';

import { Rocket, Shield, Zap, Globe2 } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Launch in Minutes',
    description: 'Set up your store and start selling within minutes. No technical knowledge required.',
  },
  {
    icon: Shield,
    title: 'Risk-Free Business',
    description: 'No upfront investment, no inventory costs. Only pay when you make a sale.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Fulfillment',
    description: 'Orders processed and shipped within 24-48 hours. Keep customers happy.',
  },
  {
    icon: Globe2,
    title: 'Worldwide Shipping',
    description: 'We handle global logistics, customs, and shipping to 190+ countries.',
  },
];

export default function Entrepreneurs() {
  return (
    <section className="py-20 bg-brand-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-spartan text-4xl lg:text-5xl font-bold text-white mb-6">
                Built for Entrepreneurs
              </h2>
              <p className="font-montserrat text-xl text-white text-opacity-90 mb-8">
                Focus on what you do best - creating amazing designs and building your brand. 
                Leave the logistics, printing, and shipping to us.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-spartan text-2xl font-bold text-white mb-6">
                "PrintFlex transformed my art hobby into a $50K/year business"
              </h3>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                  alt="Success story"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white border-opacity-30"
                />
                <div>
                  <div className="font-spartan text-lg font-bold text-white">
                    Jessica Martinez
                  </div>
                  <div className="font-montserrat text-white text-opacity-80">
                    Independent Artist & Entrepreneur
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-brand-secondary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-montserrat font-semibold text-lg transition-all duration-200">
              Start Your Business Today
            </button>
          </div>

          {/* Right Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-spartan text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="font-montserrat text-white text-opacity-90">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}