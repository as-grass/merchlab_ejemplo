'use client';

import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Premium Cotton T-Shirt',
    category: 'Apparel',
    price: '$24.99',
    rating: 4.9,
    reviews: 234,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4'],
    bestseller: true,
  },
  {
    id: 2,
    name: 'Ceramic Coffee Mug',
    category: 'Drinkware',
    price: '$16.99',
    rating: 4.8,
    reviews: 189,
    image: 'https://images.pexels.com/photos/6347886/pexels-photo-6347886.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
    colors: ['#FFFFFF', '#000000', '#8B4513', '#FF69B4'],
    new: true,
  },
  {
    id: 3,
    name: 'Canvas Wall Art',
    category: 'Home Decor',
    price: '$39.99',
    rating: 4.9,
    reviews: 312,
    image: 'https://images.pexels.com/photos/1009928/pexels-photo-1009928.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
    colors: ['#F5F5DC', '#8B4513', '#000000'],
  },
  {
    id: 4,
    name: 'Phone Case Collection',
    category: 'Tech Accessories',
    price: '$22.99',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.pexels.com/photos/163825/pexels-photo-163825.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
    colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#FFD93D'],
  },
  {
    id: 5,
    name: 'Tote Bag Essential',
    category: 'Bags',
    price: '$18.99',
    rating: 4.8,
    reviews: 278,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
    colors: ['#F5F5DC', '#000000', '#8B4513'],
    eco: true,
  },
  {
    id: 6,
    name: 'Sticker Pack',
    category: 'Stationery',
    price: '$9.99',
    rating: 4.6,
    reviews: 445,
    image: 'https://images.pexels.com/photos/4464820/pexels-photo-4464820.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
    colors: ['#FF6B6B', '#4ECDC4', '#FFD93D', '#9B59B6'],
  },
];

export default function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-spartan text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Endless Product Possibilities
          </h2>
          <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From apparel to home decor, tech accessories to stationery - customize and sell 
            hundreds of high-quality products with your unique designs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Apparel', 'Drinkware', 'Home Decor', 'Tech', 'Bags', 'Stationery'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-montserrat font-semibold transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-brand-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.bestseller && (
                    <span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                      Bestseller
                    </span>
                  )}
                  {product.new && (
                    <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                      New
                    </span>
                  )}
                  {product.eco && (
                    <span className="bg-brand-tertiary text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                      Eco-Friendly
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                }`}>
                  <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-brand-accent font-montserrat text-sm font-semibold">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-montserrat text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="font-spartan text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>

                {/* Color Options */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-montserrat text-sm text-gray-600">Colors:</span>
                  <div className="flex space-x-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-spartan text-2xl font-bold text-brand-primary">
                    {product.price}
                  </span>
                  <button className="bg-brand-secondary hover:bg-opacity-90 text-white px-4 py-2 rounded-lg font-montserrat font-semibold transition-all duration-200 flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Customize</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-montserrat font-semibold text-lg transition-all duration-200">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}