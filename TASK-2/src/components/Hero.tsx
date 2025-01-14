import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PrimaryButton } from './buttons/PrimaryButton';
import { SecondaryButton } from './buttons/SecondaryButton';
import { scrollToSection } from '../utils/scroll';
import { ReservationModal } from './modals/ReservationModal';

export function Hero() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const handleReserveClick = () => {
    setIsReservationModalOpen(true);
  };

  const handleMenuClick = () => {
    scrollToSection('menu');
  };

  return (
    <>
      <div className="relative h-screen-90 overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://player.vimeo.com/external/492834625.sd.mp4?s=0d2ae58f3687d4a39bd2d70d3c887f794e9b3bc0&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Experience Modern
              <span className="text-accent block mt-2">Gastronomy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl">
              Where culinary artistry meets contemporary dining. A journey through flavors that tell a story.
            </p>
            <div className="flex gap-6">
              <PrimaryButton
                onClick={handleReserveClick}
                className="group flex items-center gap-2"
              >
                Reserve a Table
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </PrimaryButton>
              <SecondaryButton onClick={handleMenuClick}>
                View Menu
              </SecondaryButton>
            </div>
          </motion.div>
        </div>
      </div>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
}