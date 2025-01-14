import React from 'react';
import { formatPrice } from '../../utils/payment';

interface CartSummaryProps {
  total: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ total, onCheckout }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between text-xl font-bold mb-4">
        <span>Total:</span>
        <span>${formatPrice(total)}</span>
      </div>
      <button
        onClick={onCheckout}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Proceed to Checkout with Google Pay
      </button>
    </div>
  );
};