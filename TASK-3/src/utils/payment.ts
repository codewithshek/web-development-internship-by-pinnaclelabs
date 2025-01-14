export const formatPrice = (price: number): string => {
  return price.toFixed(2);
};

export const createGooglePayLink = (amount: number): string => {
  // Format amount to ensure it has exactly 2 decimal places
  const formattedAmount = formatPrice(amount);
  
  // Create deep link for Google Pay
  const googlePayLink = `https://razorpay.me/@deshaboinaabhishekyadav?am=${formattedAmount}`;
  
  // Fallback to regular UPI link if Google Pay is not installed
  const upiLink = `https://razorpay.me/@deshaboinaabhishekyadav?am=${formattedAmount}`;
  
  // Try to open Google Pay first, fall back to regular UPI
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? googlePayLink
    : upiLink;
};