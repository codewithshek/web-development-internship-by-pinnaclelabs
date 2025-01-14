import React from 'react';
import { MenuCard } from './MenuCard';
import { menuItems } from '../data/menuItems';

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Signature Dishes</h2>
          <p className="text-gray-400">Discover our chef's carefully curated selection of dishes that blend traditional flavors with modern techniques.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}