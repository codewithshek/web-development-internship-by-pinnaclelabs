import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { scrollToSection } from '../utils/scroll';
import { PrimaryButton } from './buttons/PrimaryButton';
import { ReservationModal } from './modals/ReservationModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReserveClick = () => {
    setIsReservationModalOpen(true);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={clsx(
          'fixed w-full top-0 z-40 transition-all duration-300',
          isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold text-white">
              CULINA<span className="text-accent">.</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="home" text="Home" />
              <NavLink href="menu" text="Menu" />
              <NavLink href="events" text="Events" />
              <NavLink href="contact" text="Contact" />
              <PrimaryButton onClick={handleReserveClick}>
                Reserve
              </PrimaryButton>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-secondary/95 backdrop-blur-md py-6 rounded-2xl mt-2"
            >
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="home" text="Home" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="menu" text="Menu" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="events" text="Events" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="contact" text="Contact" onClick={() => setIsOpen(false)} />
                <div className="px-4">
                  <PrimaryButton
                    onClick={() => {
                      handleReserveClick();
                      setIsOpen(false);
                    }}
                    className="w-full"
                  >
                    Reserve
                  </PrimaryButton>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <a
      href={`#${href}`}
      onClick={handleClick}
      className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
    >
      {text}
    </a>
  );
}

function MobileNavLink({ href, text, onClick }: { href: string; text: string; onClick: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(href);
    onClick();
  };

  return (
    <a
      href={`#${href}`}
      onClick={handleClick}
      className="block text-gray-300 hover:text-accent transition-colors px-4 py-2 text-center"
    >
      {text}
    </a>
  );
}