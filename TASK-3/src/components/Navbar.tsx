import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (page: 'home' | 'products' | 'cart') => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const { state } = useCart();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
  ] as const;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Store className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Shopify</span>
          </div>
          <div className="flex items-center">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`text-gray-600 hover:text-gray-900 px-3 py-2 ${
                  currentPage === id ? 'text-indigo-600 font-semibold' : ''
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('cart')}
              className="relative ml-4 p-2"
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};