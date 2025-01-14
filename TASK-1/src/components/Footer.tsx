import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900/80 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <span>Made with</span>
          <Heart className="text-red-400 animate-pulse" size={16} />
          <span>by D Abhishek Yadav</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}