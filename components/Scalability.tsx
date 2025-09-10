'use client';

import { User, Users, Building, TrendingUp } from 'lucide-react';

const scaleOptions = [
  {
    icon: User,
    title: 'Individual Artists',
    description: 'Perfect for solo creators looking to monetize their art',
    features: [
      'Personal storefront',
      'Design upload tools',
      'Social media integration',
      'Basic analytics',
    ],
    price: 'Free to start',
    color: 'bg-brand-secondary',
  },
  {
    icon: Users,
    title: 'Small Teams',
    description: 'Ideal for growing creative agencies and design studios',
    features: [
      'Team collaboration',
      'Advanced design tools',
      'Multi-brand management',
      'Priority support',
    ],
    price: '$29/month',
    color: 'bg-brand-accent',
    popular: true,
  },
  {
    icon: Building,
    title: 'Enterprises',
    description: 'Comprehensive solutions for large organizations',
    features: [
      'White-label platform',
      'API integrations',
      'Custom workflows',
      'Dedicated account manager',
    ],
    price: 'Custom pricing',
    color: 'bg-brand-tertiary',
  },
];

export default function Scalability() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-spartan text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Scale at Your Pace
          </h2>
          <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're an individual artist or a Fortune 500 company, 
            our platform adapts to your needs and grows with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {scaleOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                option.popular 
                  ? 'border-brand-secondary transform scale-105' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-secondary text-white px-6 py-2 rounded-full font-montserrat font-semibold text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`${option.color} bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <option.icon className={`w-8 h-8 ${option.color.replace('bg-', 'text-')}`} />
              </div>

              <h3 className="font-spartan text-2xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>

              <p className="font-montserrat text-gray-600 mb-6">
                {option.description}
              </p>

              <div className="mb-8">
                <div className="font-spartan text-3xl font-bold text-gray-900 mb-4">
                  {option.price}
                </div>
                
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-montserrat text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-xl font-montserrat font-semibold text-lg transition-all duration-200 ${
                option.popular
                  ? 'bg-brand-secondary hover:bg-opacity-90 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gray-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="font-spartan text-3xl font-bold text-gray-900 mb-4">
              Proven Success Across All Scales
            </h3>
            <p className="font-montserrat text-lg text-gray-600">
              See how creators and businesses thrive on our platform
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-spartan text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">
                95%
              </div>
              <div className="font-montserrat text-gray-600">
                Creator Retention Rate
              </div>
            </div>
            
            <div className="text-center">
              <div className="font-spartan text-3xl lg:text-4xl font-bold text-brand-accent mb-2">
                $2.3M+
              </div>
              <div className="font-montserrat text-gray-600">
                Total Creator Earnings
              </div>
            </div>
            
            <div className="text-center">
              <div className="font-spartan text-3xl lg:text-4xl font-bold text-brand-tertiary mb-2">
                50K+
              </div>
              <div className="font-montserrat text-gray-600">
                Active Businesses
              </div>
            </div>
            
            <div className="text-center">
              <div className="font-spartan text-3xl lg:text-4xl font-bold text-brand-primary mb-2">
                180
              </div>
              <div className="font-montserrat text-gray-600">
                Countries Served
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}