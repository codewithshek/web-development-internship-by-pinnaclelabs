import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "bg-accent hover:bg-accent/90 text-primary px-6 py-2 rounded-full font-medium transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}