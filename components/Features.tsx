'use client';

import { Package, Palette, Store, Truck, BarChart, Globe } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Zero Inventory',
    description: 'Products are manufactured only when sold. No upfront costs, no storage headaches, no financial risk.',
    color: 'bg-brand-secondary',
  },
  {
    icon: Palette,
    title: 'Easy Personalization',
    description: 'Designers, businesses, and customers can easily customize products with our intuitive design tools.',
    color: 'bg-brand-accent',
  },
  {
    icon: Store,
    title: 'Integrated Marketplace',
    description: 'Showcase and sell your customized products in our built-in marketplace. Reach millions of customers.',
    color: 'bg-brand-tertiary',
  },
  {
    icon: Truck,
    title: 'No Logistics Needed',
    description: 'We handle printing, shipping, and customer service. Focus on creating, we handle the rest.',
    color: 'bg-brand-primary',
  },
  {
    icon: BarChart,
    title: 'Scalable Solutions',
    description: 'Perfect for individual artists or large companies. Our platform grows with your business needs.',
    color: 'bg-brand-secondary',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Sell worldwide with our international shipping network. Your designs, delivered everywhere.',
    color: 'bg-brand-accent',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-spartan text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose PrintFlex?
          </h2>
          <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary features that make print-on-demand accessible, 
            profitable, and scalable for creators of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`${feature.color} bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              
              <h3 className="font-spartan text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="font-montserrat text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}