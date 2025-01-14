import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from './cart/CartItem';
import { CartSummary } from './cart/CartSummary';
import { createGooglePayLink } from '../utils/payment';

const UPI_ID = '9182942647@ybl';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity },
    });
  };

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleCheckout = () => {
    const paymentLink = createGooglePayLink(state.total, UPI_ID);
    window.location.href = paymentLink;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {state.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
          ))}
          <CartSummary total={state.total} onCheckout={handleCheckout} />
        </>
      )}
    </div>
  );
};