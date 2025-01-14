import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  index: number;
}

export function MenuCard({ id, name, description, price, image, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/menu/${id}`}>
        <div className="group relative bg-secondary rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-accent mb-1 text-sm font-medium">Featured Dish</p>
                <h3 className="text-xl text-white font-semibold mb-2">{name}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-accent font-semibold">₹{price}</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}