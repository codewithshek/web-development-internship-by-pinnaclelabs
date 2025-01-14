import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { Home } from './components/Home';
import { Cart } from './components/Cart';

type Page = 'home' | 'products' | 'cart';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products />;
      case 'cart':
        return <Cart />;
      default:
        return <Home />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {renderPage()}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;