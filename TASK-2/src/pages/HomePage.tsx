import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Hero } from '../components/Hero';

const About = React.lazy(() => import('../components/About'));
const MenuSection = React.lazy(() => import('../components/MenuSection'));
const Events = React.lazy(() => import('../components/Events'));
const Contact = React.lazy(() => import('../components/Contact'));

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
        <MenuSection />
        <Events />
        <Contact />
      </Suspense>
    </motion.div>
  );
}