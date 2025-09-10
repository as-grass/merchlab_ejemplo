'use client';

import { TrendingUp, Award, Users, DollarSign } from 'lucide-react';

const marketplaceStats = [
  {
    icon: TrendingUp,
    value: '$2.3M+',
    label: 'Creator Earnings',
    color: 'text-brand-secondary',
  },
  {
    icon: Award,
    value: '10K+',
    label: 'Top Sellers',
    color: 'text-brand-accent',
  },
  {
    icon: Users,
    value: '500K+',
    label: 'Active Buyers',
    color: 'text-brand-tertiary',
  },
  {
    icon: DollarSign,
    value: '70%',
    label: 'Creator Royalty',
    color: 'text-brand-primary',
  },
];

const topCreators = [
  {
    name: 'Sarah Design Studio',
    category: 'Minimalist Art',
    earnings: '$45K',
    products: 234,
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
  },
  {
    name: 'Urban Graphics Co.',
    category: 'Street Art',
    earnings: '$38K',
    products: 189,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
  },
  {
    name: 'Nature Prints Ltd.',
    category: 'Photography',
    earnings: '$42K',
    products: 312,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
  },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="py-20 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-spartan text-4xl lg:text-5xl font-bold text-white mb-6">
            Thriving Creator Marketplace
          </h2>
          <p className="font-montserrat text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            Join thousands of successful creators who have turned their passion into profit. 
            Our marketplace connects your creativity with a global audience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {marketplaceStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-spartan text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="font-montserrat text-white text-opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-spartan text-3xl font-bold text-white mb-6">
                Success Stories from Our Creators
              </h3>
              <p className="font-montserrat text-lg text-white text-opacity-90 mb-8">
                Discover how creators like you have built successful businesses 
                using our platform. From side hustles to full-time careers.
              </p>
            </div>

            <div className="space-y-6">
              {topCreators.map((creator, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <img
                      src={creator.image}
                      alt={creator.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white border-opacity-30"
                    />
                    <div className="flex-1">
                      <h4 className="font-spartan text-xl font-bold text-white">
                        {creator.name}
                      </h4>
                      <p className="font-montserrat text-white text-opacity-80">
                        {creator.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-spartan text-2xl font-bold text-white">
                        {creator.earnings}
                      </div>
                      <div className="font-montserrat text-sm text-white text-opacity-80">
                        {creator.products} products
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white bg-opacity-10 p-8 rounded-3xl backdrop-blur-sm">
            <h3 className="font-spartan text-2xl font-bold text-white mb-6">
              Why Creators Choose Us
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-secondary p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-spartan text-lg font-bold text-white mb-2">
                    Highest Royalties
                  </h4>
                  <p className="font-montserrat text-white text-opacity-80">
                    Earn up to 70% royalty on every sale - the highest in the industry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-secondary p-2 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-spartan text-lg font-bold text-white mb-2">
                    Global Audience
                  </h4>
                  <p className="font-montserrat text-white text-opacity-80">
                    Reach millions of customers worldwide with our marketing tools.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-secondary p-2 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-spartan text-lg font-bold text-white mb-2">
                    Quality Guarantee
                  </h4>
                  <p className="font-montserrat text-white text-opacity-80">
                    Premium materials and printing ensure customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="bg-brand-secondary hover:bg-opacity-90 w-full text-white px-6 py-4 rounded-xl font-montserrat font-semibold text-lg transition-all duration-200">
                Join Our Marketplace
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}