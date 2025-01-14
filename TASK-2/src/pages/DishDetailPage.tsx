import React, { Suspense, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Utensils, Flame, Heart } from 'lucide-react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { menuItems } from '../data/menuItems';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { OrderConfirmationModal } from '../components/modals/OrderConfirmationModal';

export default function DishDetailPage() {
  const { dishId } = useParams();
  const navigate = useNavigate();
  const dish = menuItems.find(item => item.id === dishId);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleAddToOrder = () => {
    setIsOrderModalOpen(true);
  };

  const handleCustomize = () => {
    alert('Customization options coming soon!');
  };

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Dish not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-accent hover:text-accent/80 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-24"
      >
        <button
          onClick={() => navigate('/')}
          className="text-accent hover:text-accent/80 flex items-center gap-2 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Menu
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <button 
              onClick={() => alert('Added to favorites!')}
              className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Heart className="w-6 h-6 text-white" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              {dish.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-800">{dish.name}</h1>
            <p className="text-2xl font-semibold text-accent">₹{dish.price}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{dish.description}</p>

            <div className="grid grid-cols-3 gap-4 py-6">
              <DishInfo icon={<Clock />} label="Prep Time" value={dish.prepTime} />
              <DishInfo icon={<Utensils />} label="Serving" value={dish.serving} />
              <DishInfo icon={<Flame />} label="Spice Level" value={dish.spiceLevel} />
            </div>

            <div className="flex gap-4">
              <PrimaryButton onClick={handleAddToOrder} className="flex-1">
                Add to Order
              </PrimaryButton>
              <button 
                onClick={handleCustomize}
                className="px-6 py-4 border border-accent/20 text-accent rounded-full hover:bg-accent/5 transition-colors"
              >
                Customize
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-4">Special Instructions</h2>
          <textarea
            placeholder="Any special requests for your order?"
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent"
            rows={4}
          />
        </motion.div>

        <OrderConfirmationModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          dishName={dish.name}
        />
      </motion.div>
    </Suspense>
  );
}

function DishInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center p-4 bg-accent/5 rounded-xl">
      <div className="flex justify-center mb-2 text-accent">{icon}</div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}