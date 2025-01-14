import React from 'react';
import { Modal } from './Modal';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { Check } from 'lucide-react';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  dishName: string;
}

export function OrderConfirmationModal({ isOpen, onClose, dishName }: OrderConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order Confirmed">
      <div className="text-center py-6">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank you for your order!</h3>
        <p className="text-gray-600 mb-6">
          Your order for {dishName} has been confirmed. We'll start preparing it right away.
        </p>
        <PrimaryButton onClick={onClose} className="w-full py-3">
          Continue Browsing
        </PrimaryButton>
      </div>
    </Modal>
  );
}