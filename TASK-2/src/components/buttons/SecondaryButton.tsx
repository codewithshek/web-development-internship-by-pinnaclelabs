import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function SecondaryButton({ children, className, ...props }: SecondaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "border border-white/20 hover:border-accent/50 text-white px-8 py-4 rounded-full transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}