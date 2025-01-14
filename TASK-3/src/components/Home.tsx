import React from 'react';
import { ShoppingBag, Zap, Shield, Truck } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Shopify</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing products at great prices. Shop with confidence.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: ShoppingBag, title: 'Quality Products', desc: 'Curated selection of premium items' },
          { icon: Zap, title: 'Fast Delivery', desc: 'Quick and reliable shipping' },
          { icon: Shield, title: 'Secure Payment', desc: 'Safe and easy transactions' },
          { icon: Truck, title: 'Free Returns', desc: '30-day return policy' }
        ].map((feature, idx) => (
          <div key={idx} className="text-center p-6 bg-white rounded-lg shadow-md">
            <feature.icon className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};