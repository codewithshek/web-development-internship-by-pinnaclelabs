import React from 'react';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-primary/90 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative"
      >
        <Utensils className="w-12 h-12 text-accent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 border-4 border-accent rounded-full"
        />
      </motion.div>
      <p className="text-accent mt-4 font-medium">Preparing your experience...</p>
    </div>
  );
}